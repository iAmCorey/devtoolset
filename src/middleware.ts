import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';
import createMiddleware from 'next-intl/middleware';
import { appConfig } from "./lib/appConfig";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: appConfig.i18n.locales,
 
  // Used when no locale matches
  defaultLocale: appConfig.i18n.defaultLocale,
  localePrefix: "as-needed",
});

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Only check authentication for /admin routes
  if (path.startsWith('/admin')) {
    const token = request.cookies.get('auth_token')?.value;
    const isLoggedIn = token && verifyToken(token);
    console.log('isLoggedIn', isLoggedIn);
    if (!isLoggedIn) {
      console.log('Not authenticated');
      // Redirect to login page if not authenticated
      // return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // return NextResponse.next();
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
    // '/', 
    // '/:locale?/:path*',
    '/admin/:path*',  // Match all paths starting with /admin
    
  ],
};