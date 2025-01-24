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

type Params = Promise<{
  track: string[];
}>;

export async function GET(req: NextRequest, { params }: { params: Params }) {
  console.log('process route');
  const { track } = (await params) as { track: [string, string] };
  if (track.length !== 2) {
    // wrong params found
    return NextResponse.json({
      error: "Sorry, you won't find anything here.",
      code: 1,
      message: 'Bad params.',
    });
  }
  const [companyKey, redirectKey] = track;
  const redirectLink = redirectUrl[redirectKey.toLowerCase()];
  if (!redirectLink) {
    // no redirect found
    return NextResponse.json({
      error: "Hmmm, that won't go anywhere.",
      code: 2,
      message: 'No redirect.',
    });
  }

  if (companyKey.length < 3 || companyKey.length > 5) {
    // bad company key
    return NextResponse.json({
      error: 'Hey, quit messing around.',
      code: 3,
      message: 'No Company.',
    });
  }

  (async () => {
    const company = await getCompanyInfoFromKey(companyKey);
    if (!company)
      return NextResponse.json({
        error: "Nope, you won't find them here.",
        code: 4,
      });

    const [companyId, name, position] = company as [string, string, string];
    const browserInfo = getBrowserInfo(req);

    const subject = `🤘🏻 ${name} clicked on your ${redirectKey} link`;
    const text = `
  Great News…

  ${name}, clicked on your ${redirectKey} link.

  That ${position} position is as good as yours!

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

  <p>That <strong>${position}</strong> position is as good as yours!</p>

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

    await saveActionToDB({
      companyId,
      redirectKey,
      redirectLink,
      ...browserInfo,
    });
    revalidatePath(`/admin/company/${companyKey}`);
    revalidatePath(`/admin`);
    await mySendMail(subject, text, html);
  })();

  return NextResponse.redirect(
    redirectLink + (redirectKey.toLowerCase() === 'mail' ? name : '')
  );
}
