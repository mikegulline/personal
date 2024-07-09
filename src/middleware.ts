import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define middleware for /api path
function apiMiddleware(request: NextRequest) {
  // Custom logic for /api paths
  console.log('API middleware');
  return NextResponse.next();
}

// Define middleware for /admin path
function adminMiddleware(request: NextRequest) {
  // Custom logic for /admin paths
  console.log('Admin middleware');
  return NextResponse.next();
}

// my tracking cookies
function trackingMiddlewareT(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, , company, link] = pathname.split('/');
  if (company) {
    const response = NextResponse.redirect(new URL('/works', request.url));
    if (link) {
      response.cookies.set('click-link', link);
    }
    response.cookies.set('track', company);
    return response;
  }
}

// Default middleware
function defaultMiddleware(request: NextRequest) {
  // Custom logic for other paths
  //console.log('Default middleware', request.nextUrl.pathname);
  return NextResponse.next();
}

function trackingMiddlewareV1(request: NextRequest) {
  const res = NextResponse.next();
  // Apply Cache-Control headers
  res.headers.set(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  return res;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Filter out requests for static assets
  const staticFileExtensions = [
    'css',
    'js',
    'svg',
    'png',
    'jpg',
    'jpeg',
    'gif',
    'ico',
    'woff',
    'woff2',
    'ttf',
    'eot',
    'ico',
  ];
  if (
    pathname.startsWith('/_next/static') ||
    pathname.startsWith('/_next/image') ||
    pathname === '/favicon.ico' ||
    staticFileExtensions.some((ext) => pathname.endsWith(`.${ext}`))
  ) {
    return NextResponse.next();
  }

  // if (pathname.startsWith('/api')) {
  //   return apiMiddleware(request);
  // }

  // check for logged in
  // if (pathname.startsWith('/admin')) {
  //   return adminMiddleware(request);
  // }

  if (pathname.startsWith('/t/')) {
    return trackingMiddlewareT(request);
  }
  if (pathname.startsWith('/v1/')) {
    return trackingMiddlewareV1(request);
  }

  // return defaultMiddleware(request);
}

// Specify the paths you want to match
export const config = {
  matcher: ['/api/:path*', '/admin/:path*', '/t/:path*', '/:path*'],
};
