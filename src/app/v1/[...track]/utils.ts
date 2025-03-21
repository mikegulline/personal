import { NextRequest } from 'next/server';
import { sql } from '@vercel/postgres';
const nodemailer = require('nodemailer');

export function getBrowserInfo(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || null;
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
  const { id, name, position } = rows[0];
  return { id, name, position };
}

interface SaveAction {
  companyId: string;
  redirectKey: string;
  redirectLink: string;
  ip: string | null;
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

export async function mySendMail(subject: string, text: string, html: string) {
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

export async function sendNotification(
  name: string,
  position: string,
  redirectKey: string,
  browserInfo: any,
  companyKey: string
) {
  const subject = `🤘🏻 ${name} clicked on your ${redirectKey} link (${companyKey})`;
  const text = `
  Great News…

  ${name}, clicked on your ${redirectKey} link.

  That ${position} position is as good as yours!

  Here is some super sweet infos about the user.

  System: ${browserInfo.userAgent}
  Country: ${browserInfo.country}
  Region: ${browserInfo.region}
  City: ${browserInfo.city}
  Key: ${companyKey}

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
  <li><strong>Key:</strong> ${companyKey}</li>
  </ul>

  <p><em>Go get em tiger.</em></p>

  <p>Friends forever,<br />
  🤖 Tracker Bot</p>
  `;

  await mySendMail(subject, text, html);
}

export function checkAndThrow(check: boolean, message: string) {
  if (check) throw new Error(message);
}
