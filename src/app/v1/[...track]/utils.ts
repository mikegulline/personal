import { NextRequest } from 'next/server';
import { sql } from '@vercel/postgres';
const nodemailer = require('nodemailer');

export function getBrowserInfo(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for') ||
    req.headers.get('x-real-ip') ||
    req.ip;
  const userAgent = req.headers.get('user-agent') || 'Unknown';
  const geo = {
    country: req.headers.get('x-vercel-ip-country') || 'Unknown',
    region: req.headers.get('x-vercel-ip-country-region') || 'Unknown',
    city: req.headers.get('x-vercel-ip-city') || 'Unknown',
  };
  return {
    ip,
    userAgent,
    ...geo,
  };
}

export async function getCompanyInfoFromKey(companyKey: string) {
  const { rows } = await sql`SELECT * FROM company WHERE key = ${companyKey};`;
  if (!rows.length) return null;
  const { id, name, title } = rows[0];
  return [id, name, title];
}

interface SaveAction {
  companyId: string;
  redirectKey: string;
  redirectLink: string;
  ip: string | undefined;
  userAgent: string;
  country: string;
  region: string;
  city: string;
}

export async function saveActionToDB(data: SaveAction) {
  const {
    companyId,
    redirectKey,
    redirectLink,
    ip,
    userAgent,
    country,
    region,
    city,
  } = data;
  await sql`INSERT INTO actions (companyId, redirectKey, redirectLink, ip, userAgent, country, region, city) 
VALUES (${companyId}, ${redirectKey}, ${redirectLink}, ${ip}, ${userAgent}, ${country}, ${region}, ${city});`;
}

export async function sendMail(subject: string, text: string, html: string) {
  // Define mail options
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.PERSONAL_EMAIL,
    subject,
    text,
    html,
  };

  try {
    await nodemailer
      .createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASSWORD,
        },
      })
      .sendMail(mailOptions);
    console.log('Mail sent!');
  } catch (error: any) {
    console.log(error);
  }
}
