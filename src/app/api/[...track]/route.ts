import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';

export const dynamic = 'force-dynamic';

type RedirectUrl = {
  [key: string]: string;
};

const redirectUrl: RedirectUrl = {
  portfolio: 'https://www.gulline.com/works',
  immunocorp: 'https://www.immunocorp.com/',
  kumato: 'https://www.cho-wa.com/',
  hemplandusa: 'https://www.hemplandusa.com/',
  arcticrubyoil: 'https://arcticrubyoil.com/',
  loyaltofew: 'https://www.loyaltofew.com/',
  formlink: 'https://www.gulline.com/works',
  mail: `mailto:${process.env.EMAIL_ADDRESS}?subject=You're%20Hired!%20%F0%9F%A4%98%F0%9F%8F%BB&body=Hello Michael,%0D%0A%0D%0AYour resume looks amazing!%0D%0A%0D%0AJudging by your skills and background, I think you would make an excellent addition to our team.%0D%0A%0D%0ADo you have a free moment to speak about your future?%0D%0A%0D%0AFriends forever,%0D%0A`,
  linkedin: 'https://www.linkedin.com/in/mikegulline/',
  github: 'https://github.com/mikegulline',
};

interface Params {
  track: string[];
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { track } = params;

  if (track.length !== 2) {
    return NextResponse.json({
      error: "Sorry, you won't find anything here.",
    });
  }

  const [companyId, redirectId] = track;
  const redirectIdNormalized = redirectId.toLowerCase();

  // get company data from data source
  const data = await getData();

  // check for known company
  if (!data[companyId]) {
    return NextResponse.json({
      error: "Nope, you won't find them here.",
    });
  }

  // check for known redirect
  if (!redirectUrl[redirectIdNormalized]) {
    return NextResponse.json({
      error: 'Hmmm, not sure what you are looking for.',
    });
  }

  const redirect = redirectUrl[redirectIdNormalized];
  const company = await processCompany(data[companyId], redirectId, req);

  return NextResponse.json({
    track,
    company,
    redirect,
  });
}

async function processCompany(
  company: any,
  redirectId: string,
  req: NextRequest
) {
  const updatedCompany = { ...company };
  if (!updatedCompany['actions']) {
    updatedCompany['actions'] = [
      {
        date: new Date(),
        link: redirectId,
        req,
        cookies: req?.cookies?.getAll(),
        url: req?.nextUrl?.pathname,
        ip: req?.ip,
        geo: req?.geo,
      },
    ];
  }
  return updatedCompany;
}

async function getData() {
  const data = JSON.parse(readFileSync('public/track/index.json', 'utf8'));
  return data;
}
