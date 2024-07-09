import { NextResponse, type NextRequest } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: NextRequest) {
  try {
    const key = await generateRandomKey(0);
    return NextResponse.json({ key });
  } catch (error: any) {
    console.error('Error processing request:', error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
async function generateRandomKey(count: number): Promise<string> {
  const key = randomKey();

  const pass = await checkKey(key);

  if (pass) return key;

  if (count >= 5) return '';
  return await generateRandomKey(count + 1);
}

function randomKey() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }
  return key;
}

async function checkKey(key: string): Promise<boolean> {
  const { rows } = await sql`SELECT key FROM company WHERE key = ${key};`;
  return rows.length < 1;
}
