import createMiddleware from "next-intl/middleware"
import { routing } from "@/i18n/routing"

export default createMiddleware(routing);

export const config = {
    matcher: [
        '/',
        '/(uz|ru|en)/:path*',
        // "/((?!api|_next/static|_next/image|favicon.ico).*)"
    ]
}
