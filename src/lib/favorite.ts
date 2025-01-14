'use server';

import { baseApiUrl } from "@/config";
import { getLocale } from "next-intl/server";

interface IFavoriteToggle {
    isActive: boolean;
}

export async function toggleFavorite(
    slug: string,
    type: string
): Promise<IFavoriteToggle> {

    const url = new URL(`favorites/toggle`, baseApiUrl);
    const locale = await getLocale();

    // test purposes, take it from storage
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLnN0dy50ZXN0L2F1dGgvbG9naW4iLCJpYXQiOjE3MzY4Mzc4MjUsImV4cCI6MTczNjg0MTQyNSwibmJmIjoxNzM2ODM3ODI1LCJqdGkiOiJNQVo5dU9aVDlzNmNkZ3cwIiwic3ViIjoiMiIsInBydiI6ImI5MTI3OTk3OGYxMWFhN2JjNTY3MDQ4N2ZmZjAxZTIyODI1M2ZlNDgifQ.Ivx5elFNiBl_7C_oL-dHbW82dbV6eOdq6a2ZrgsdBxE';
    const body = JSON.stringify({ slug, type });

    const response = await fetch(
        url.href,
        {
            method: "POST",
            body: body,
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Content-Language": locale
            },
            // next: {
            //     revalidate: 3600,
            //     tags: ['product'],
            // }
        }
    );

    // console.log(await response.text());

    if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
    }

    const data: IFavoriteToggle = await response.json();

    return data;
}
