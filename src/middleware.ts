import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // const accessToken = request.cookies.get('access-token')

    const response = NextResponse.next()

    return response
}

export const config = {
    matcher: '/product/:slug',
}
