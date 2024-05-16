import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieName = 'track';
  const redirectURL = '/resume';
  const [, , value] = pathname.split('/');

  if (value) {
    // try {
    //   const res = await fetch('http://localhost:3000/api/tracking', {
    //     method: 'POST',
    //     body: JSON.stringify({ value }),
    //   });
    //   const data = await res.json();
    //   console.log({ fromMiddleware: 'true', data });
    // } catch (error) {
    //   console.log({ error });
    // }
    const response = NextResponse.redirect(new URL(redirectURL, request.url));
    response.cookies.set(cookieName, value);
    return response;
  }
}

export const config = {
  matcher: '/t/:path*',
};
