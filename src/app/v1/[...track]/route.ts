export const dynamic = 'force-dynamic';
import { after, NextRequest, NextResponse, userAgent } from 'next/server';
// import { redirectUrl } from './redirect-url';
import { revalidatePath } from 'next/cache';
import {
  getCompanyInfoFromKey,
  getBrowserInfo,
  checkAndThrow,
  saveActionToDB,
  sendNotification,
} from './utils';

type Params = Promise<{
  track: [string, string];
}>;
type RedirectUrl = {
  [key: string]: string;
};

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { track } = (await params) as { track: [string, string] };
  const [companyKey, redirectKey] = track;
  const browserInfo = getBrowserInfo(req);

  const company = await getCompanyInfoFromKey(companyKey);

  if (!company) return;

  const { id, name, position } = company;

  const redirectUrl: RedirectUrl = {
    portfolio: 'https://www.gulline.com/works',
    qr: 'https://www.gulline.com/works',
    resume: 'https://www.gulline.com/resume',
    link: 'https://www.gulline.com/works',
    button: 'https://www.gulline.com/works',
    githublink: 'https://www.gulline.com/works',
    immunocorp: 'https://www.immunocorp.com/',
    kumato: 'https://www.cho-wa.com/',
    hemplandusa: 'https://www.hemplandusa.com/',
    arcticrubyoil: 'https://arcticrubyoil.com/',
    loyaltofew: 'https://www.loyaltofew.com/',
    formlink: 'https://www.gulline.com/works',
    mail: `mailto:${process.env.EMAIL_ADDRESS}?subject=You're%20Hired!%20%F0%9F%A4%98%F0%9F%8F%BB&body=Hello Michael,%0D%0A%0D%0AYour resume looks amazing!%0D%0A%0D%0AJudging by your skills and background, you would make an excellent addition to our team here at ${name}.%0D%0A%0D%0ADo you have a free moment to speak about your future role as ${position}?%0D%0A%0D%0AFriends forever!%0D%0A`,
    'we-submit': `mailto:${process.env.EMAIL_ADDRESS}?subject=OMG…%20You're%20Hired!%20%F0%9F%A4%98%F0%9F%8F%BB&body=Hello Michael,%0D%0A%0D%0AYour resume looks amazing and your coverletter was a hoot!%0D%0A%0D%0AJudging by your skills and background, I… no, no… We think you would make an excellent addition to our team as Solutions Software Engineer L5.%0D%0A%0D%0ADo you have a free moment to speak about your future?%0D%0A%0D%0AFriends forever!%0D%0A`,
    linkedin: 'https://www.linkedin.com/in/mikegulline/',
    github: 'https://github.com/mikegulline',
    none: 'https://github.com/mikegulline',
  };

  const redirectLink = redirectUrl[redirectKey.toLowerCase()];

  try {
    const isBot = userAgent(req).isBot;
    const badKey = companyKey.length < 3 || companyKey.length > 5;
    const badParams = track.length !== 2;
    const badRedirect = !redirectLink;
    checkAndThrow(isBot, `Get out of here, you stupid bot! (you're a bot)`);
    checkAndThrow(badKey, `Hey, quit messing around. (bad key)`);
    checkAndThrow(badParams, `You won't find anything here. (bad params)`);
    checkAndThrow(badRedirect, `Hmmm, that won't go anywhere. (bad redirect)`);
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

  after(async () => {
    try {
      await Promise.all([
        sendNotification(name, position, redirectKey, browserInfo, companyKey),
        saveActionToDB({
          companyId: id,
          redirectKey,
          redirectLink,
          ...browserInfo,
        }),
      ]);

      revalidatePath(`/admin/company/${companyKey}`);
      revalidatePath(`/admin`);
    } catch (error) {
      console.error('Failed to process async operations:', error);
    }
  });

  return NextResponse.redirect(redirectLink);
}
