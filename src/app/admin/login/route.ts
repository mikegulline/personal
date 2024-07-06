import { NextResponse, type NextRequest } from 'next/server';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const hashed = await hashPassword(password);
    console.log(hashed);
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const user = await getUserByEmail(email);
    await verifyPassword(password, user.password);

    const response = NextResponse.json({ message: 'Logged in successfully' });
    response.cookies.set('mg-logged-in', user.name, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
      sameSite: 'lax',
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<void> {
  const match = await bcrypt.compare(password, hashedPassword);
  if (!match) {
    throw new Error('Invalid password');
  }
}

async function getUserByEmail(email: string): Promise<User> {
  const { rows } = await sql`SELECT * FROM users WHERE email = ${email};`;
  if (rows.length === 0) {
    throw new Error('No user found');
  }
  return rows[0] as User;
}

async function hashPassword(password: string) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw new Error('Failed to hash password');
  }
}
