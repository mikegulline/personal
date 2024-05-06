import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieName = 'track';
  const redirectURL = '/resume';
  const [, , value] = pathname.split('/');

  if (value) {
    const response = NextResponse.redirect(new URL(redirectURL, request.url));
    response.cookies.set(cookieName, value);
    return response;
  }
}

export const config = {
  matcher: '/t/:path*',
};
