import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    return NextResponse;
}

export const config = {
    matcher: '/product/:slug',
}
