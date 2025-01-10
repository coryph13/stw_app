import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from '@/config';
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator';

export function middleware(request: NextRequest) {
    // const accessToken = request.cookies.get('access-token')
    // const response = NextResponse.next()
    // return response;

    if (requestAlreadyHasLocale(request)) {
        return;
    }

    return redirectRequestWithLocale(request);

}

function requestAlreadyHasLocale(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale: string) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    return pathnameHasLocale;
}

function redirectRequestWithLocale(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const locale = getLocale(request);

    request.nextUrl.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(request.nextUrl);
}

function getLocale({ headers }: NextRequest) {
    const languages = new Negotiator({
        headers: { 'accept-language': headers.get('accept-language') },
    }).languages();

    const isAcceptAny = languages.length === 1 && languages[0] === '*';
    if (isAcceptAny) {
        return defaultLocale;
    }

    return match(languages, locales, defaultLocale);

    // headers.get('accept-language');
}

export const config = {
    matcher: [
        // '/',
        // '/(uz|ru|en)/:path*',
        "/((?!api|_next/static|_next/image|favicon.ico).*)"
    ]
}
