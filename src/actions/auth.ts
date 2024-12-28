'use client'

import config from '@/config'
import { storeToken } from "@/lib/auth";
import { IToken } from "@/types/token";
import { IUser } from "@/types/user";
import { revalidateTag } from "next/cache";


export async function sign_up(formData: FormData) {
    // export async function getProducts(): Promise<IProductList> {
    // const locale = currentLocale; // await and set to localStorage

    const _uri = new URL('/v1/auth/sign_up', config.baseApiUrl);
    const response = await fetch(
        _uri.href,
        {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
                "Content-Language": config.locale
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

export async function login(formData: FormData) {
    const _uri = new URL('/v1/auth/login', config.baseApiUrl);
    console.log(_uri);
    const response = await fetch(
        // `http://api.stw.test/v1/auth/login`,
        _uri.href,
        {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
                "Content-Language": config.locale
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

    return response;
}
