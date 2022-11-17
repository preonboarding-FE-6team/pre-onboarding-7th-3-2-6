import { NextRequest, NextResponse } from 'next/server';
import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/signin')) {
    if (request.cookies.get(COOKIE_TOKEN_KEY)) {
      return NextResponse.redirect('https://pre-onboarding-7th-3-2-6-eight.vercel.app/');
    }
  }

  if (
    request.nextUrl.pathname === '/' ||
    request.nextUrl.pathname.startsWith('/accounts') ||
    request.nextUrl.pathname.startsWith('/users')
  ) {
    if (!request.cookies.get(COOKIE_TOKEN_KEY)) {
      return NextResponse.redirect('https://pre-onboarding-7th-3-2-6-eight.vercel.app/signin');
    }
  }
}
