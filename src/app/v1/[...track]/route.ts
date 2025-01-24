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
  track: [string, string];
}>;

export async function GET(req: NextRequest, { params }: { params: Params }) {
  console.log('process route');
  const { track } = (await params) as { track: [string, string] };
  const [companyKey, redirectKey] = track;
  const redirectLink = redirectUrl[redirectKey.toLowerCase()];
  const browserInfo = getBrowserInfo(req);
  let company;

  try {
    verifyParamsLength(track);
    verifyKeyLength(companyKey);
    verifyRedirectLink(redirectLink);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred',
      },
      { status: 400 }
    );
  }

  company = await getCompanyInfoFromKey(companyKey);
  if (!company)
    return NextResponse.json(
      {
        error: "Nope, you won't find them here.",
      },
      { status: 400 }
    );

  const { id, name, position } = company;

  // send mail but don't wait
  (async () => {
    await sendNotification(name, position, redirectKey, browserInfo);
  })();

  //udate db and revalidate but don't wait
  (async () => {
    await saveActionToDB({
      companyId: id,
      redirectKey,
      redirectLink,
      ...browserInfo,
    });
    revalidatePath(`/admin/company/${companyKey}`);
    revalidatePath(`/admin`);
  })();

  //prepare link
  const redirect =
    redirectLink +
    (['we-submit', 'mail'].includes(redirectKey.toLowerCase()) ? name : '');

  return NextResponse.redirect(redirect);
}

/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////

async function sendNotification(
  name: string,
  position: string,
  redirectKey: string,
  browserInfo: any
) {
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

  await mySendMail(subject, text, html);
}

function verifyParamsLength(param: [string, string]) {
  // bad params
  if (param.length !== 2) {
    throw new Error(`Sorry, you won't find anything here.`);
  }
}

function verifyRedirectLink(link: string | undefined | null) {
  // no redirect link
  if (!link) {
    throw new Error(`Hmmm, that won't go anywhere.`);
  }
}

function verifyKeyLength(key: string) {
  // bad key, dont even try
  if (key.length < 3 || key.length > 5) {
    throw new Error(`Hey, quit messing around.`);
  }
}
