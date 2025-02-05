'use client'

import { defaultLocale, baseApiUrl } from '@/config'
import { storeToken } from "@/lib/fetch/auth";
import { IToken } from "@/types/token";
import { NextResponse } from 'next/server';
// import { IUser } from "@/types/user";
// import { revalidateTag } from "next/cache";


export async function sign_up(formData: FormData, locale: string) {
    const url = new URL('/auth/sign_up', baseApiUrl);
    const response = await fetch(
        url.href,
        {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
                "Content-Language": defaultLocale
            },
            cache: 'force-cache',
            next: {
                revalidate: 3600,
                tags: ['user'],
            },
        }
    );

    // TODO: Revalidate products, decors, collections due to Favorites and Views Count.
    // revalidateTag('user');

    if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
    }

    const token: IToken = await response.json();

    storeToken(token);

    return response;
}

export async function login(formData: FormData, locale: string) {
    const url = new URL('/auth/login', baseApiUrl);
    const response = await fetch(
        url.href,
        {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
                "Content-Language": locale
            },
            cache: 'force-cache',
            next: {
                revalidate: 3600,
                tags: ['user'],
            },
        }
    );

    if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
    }

    const token: IToken = await response.json();

    storeToken(token);

    response.cookies.set({
        name: 'tokens',
        path: '/',
        value: JSON.stringify(token),
    });

    return response;
}
