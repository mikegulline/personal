import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [none, name, value] = pathname.split('/');

  const cookie = request.cookies.get('portfolio');

  if (cookie) return;

  const response = NextResponse.next();
  response.cookies.set({
    name,
    value,
    path: '/',
  });

  return response;
  // return NextResponse.redirect(new URL('/works', request.url));
}

export const config = {
  matcher: '/portfolio/:path*',
};
