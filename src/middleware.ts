import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, , value] = pathname.split('/');

  const response = NextResponse.redirect(new URL('/resume', request.url));
  response.cookies.set('track', value);
  return response;
}

export const config = {
  matcher: '/t/:path*',
};
