export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { redirectUrl } from './redirect-url';
import { revalidatePath } from 'next/cache';
import {
  getCompanyInfoFromKey,
  getBrowserInfo,
  mySendMail,
  saveActionToDB,
} from './utils';

interface Params {
  track: string[];
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  console.log('process route');
  const { track } = params as { track: [string, string] };
  if (track.length !== 2) {
    // wrong params found
    return NextResponse.json({
      error: "Sorry, you won't find anything here.",
      code: 1,
      message: 'Bad params.',
    }).headers.set(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    );
  }
  const [companyKey, redirectKey] = track;
  const redirectLink = redirectUrl[redirectKey.toLowerCase()];
  if (!redirectLink) {
    // no redirect found
    return NextResponse.json({
      error: "Hmmm, that won't go anywhere.",
      code: 2,
      message: 'No redirect.',
    }).headers.set(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    );
  }

  if (companyKey.length < 3 || companyKey.length > 5) {
    // bad company key
    return NextResponse.json({
      error: 'Hey, quit messing around.',
      code: 3,
      message: 'No Company.',
    }).headers.set(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    );
  }

  const company = await getCompanyInfoFromKey(companyKey);
  if (!company)
    return NextResponse.json({
      error: "Nope, you won't find them here.",
      code: 4,
    }).headers.set(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    );

  const [companyId, name, title] = company as [string, string, string];
  const browserInfo = getBrowserInfo(req);
  await saveActionToDB({
    companyId,
    redirectKey,
    redirectLink,
    ...browserInfo,
  });
  revalidatePath(`/admin/company/${companyKey}`);
  revalidatePath(`/admin`);

  const subject = `🤘🏻 ${name} clicked on your ${redirectKey} link`;
  const text = `
  Great News…

  ${name}, clicked on your ${redirectKey} link.

  That ${title} position is as good as yours!

  Here is some super sweet infos about the user.

  System: ${browserInfo.userAgent}
  Country: ${browserInfo.country}
  Region: ${browserInfo.region}
  City: ${browserInfo.city}

  Go get em tiger.

  Friends forever,
  Tracker Bot
  `;
  const html = `
  <p>Great News…</p>

  <p><strong>${name}</strong>, clicked on your <strong>${redirectKey}</strong> link.</p>

  <p>That <strong>${title}</strong> position is as good as yours!</p>

  <p>Here is some super sweet infos about the user.</p>

  <ul>
  <li><strong>System:</strong> ${browserInfo.userAgent}</li>
  <li><strong>Country:</strong> ${browserInfo.country}</li>
  <li><strong>Region:</strong> ${browserInfo.region}</li>
  <li><strong>City:</strong> ${browserInfo.city}</li>
  </ul>

  <p><em>Go get em tiger.</em></p>

  <p>Friends forever,<br />
  🤖 Tracker Bot</p>
  `;

  await mySendMail(subject, text, html);

  return NextResponse.redirect(
    redirectLink + (redirectKey.toLowerCase() === 'mail' ? name : '')
  ).headers.set(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
}
