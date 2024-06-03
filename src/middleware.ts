import createMiddleware from "next-intl/middleware";
import {locales, pathnames, localePrefix, defaultLocale } from "@/config";

export default createMiddleware({
    locales,
    defaultLocale,
    // pathnames,
    localePrefix
});

export const config = {
    matcher: [
        // '/',
        // '/(ru|en|uz)/:path*'
        "/((?!api|_next|_vercel|.*\\..*).*)",
    ]
}