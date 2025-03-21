export const dynamic = 'force-dynamic';
import { after, NextRequest, NextResponse, userAgent } from 'next/server';
import { redirectUrl } from './redirect-url';
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

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { track } = (await params) as { track: [string, string] };
  const [companyKey, redirectKey] = track;
  const redirectLink = redirectUrl[redirectKey.toLowerCase()];
  const browserInfo = getBrowserInfo(req);

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
    const company = await getCompanyInfoFromKey(companyKey);

    if (!company) return;

    const { id, name, position } = company;
    try {
      await Promise.all([
        sendNotification(name, position, redirectKey, browserInfo, id),
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
