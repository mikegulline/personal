import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [_, name, value] = pathname.split('/');

  const response = NextResponse.redirect(new URL('/works', request.url));

  response.cookies.set({
    name,
    value,
    path: '/',
  });

  return response;
}

export const config = {
  matcher: '/portfolio/:path*',
};
