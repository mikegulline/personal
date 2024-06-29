export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { redirectUrl } from './redirect-url';
import {
  getCompanyInfoFromKey,
  getBrowserInfo,
  sendMail,
  saveActionToDB,
} from './utils';

interface Params {
  track: string[];
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { track } = params as { track: [string, string] };
  const [companyKey, redirectKey] = track;
  const redirectLink = redirectUrl[redirectKey.toLowerCase()];

  const errors = checkForErrors(track, redirectLink, companyKey);
  if (errors) return NextResponse.json(errors);

  const company = await getCompanyInfoFromKey(companyKey);
  if (!company)
    return NextResponse.json({
      error: "Nope, you won't find them here.",
      code: 4,
    });

  const [companyId, name, title] = company as [string, string, string];
  const browserInfo = getBrowserInfo(req);
  await saveActionToDB({
    companyId,
    redirectKey,
    redirectLink,
    ...browserInfo,
  });

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

  await sendMail(subject, text, html);

  if (redirectKey.toLowerCase() === 'mail') {
    return NextResponse.redirect(redirectLink + name);
  }
  return NextResponse.redirect(redirectLink);
}

function checkForErrors(
  track: [string, string],
  redirectLink: string | undefined,
  companyKey: string
) {
  // checks for correctness
  if (track.length !== 2) {
    // wrong params found
    return {
      error: "Sorry, you won't find anything here.",
      code: 1,
    };
  }
  if (!redirectLink) {
    // no redirect found
    return {
      error: "Hmmm, that won't go anywhere.",
      code: 2,
    };
  }
  if (companyKey.length < 3 || companyKey.length > 5) {
    // bad company key
    return {
      error: 'Hey, quit messing around.',
      code: 3,
    };
  }
  return null;
}
