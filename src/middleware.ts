import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieName = 'track';
  let redirectURL = '/works';
  const [, , company, link] = pathname.split('/');

  if (company) {
    // try {
    //   const res = await fetch('http://localhost:3000/api/tracking', {
    //     method: 'POST',
    //     body: JSON.stringify({ company }),
    //   });
    //   const data = await res.json();
    //   console.log({ fromMiddleware: 'true', data });
    // } catch (error) {
    //   console.log({ error });
    // }
    // if (link) redirectURL += `?utm_custom[clicklink]=${link}`;
    const response = NextResponse.redirect(new URL(redirectURL, request.url));
    if (link) {
      response.cookies.set('click-link', link);
    }
    response.cookies.set(cookieName, company);
    return response;
  }
}

export const config = {
  matcher: '/t/:path*',
};
