import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieName = 'track';
  const redirectURL = '/resume';
  let response = NextResponse.next();

  const isTracking = request.cookies.get(cookieName);

  if (isTracking) {
    response.cookies.delete(cookieName);
  } else {
    const [, , value] = pathname.split('/');
    if (value) {
      response = NextResponse.redirect(new URL(redirectURL, request.url));
      response.cookies.set(cookieName, value);
    }
  }
  return response;
}

export const config = {
  matcher: '/t/:path*',
};
