import { baseApiUrl, defaultLocale } from "@/config";
import { IProduct } from "@/types/product";
import { IProductList } from "@/types/product";
import { getLocale } from "next-intl/server";
// import { revalidateTag } from "next/cache";

export async function getProducts(): Promise<IProductList> {
    const locale = await getLocale();
    const url = new URL('/product/list', baseApiUrl);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLnN0dy50ZXN0L2F1dGgvbG9naW4iLCJpYXQiOjE3MzY1ODM1NzIsImV4cCI6MTczNjU4NzE3MiwibmJmIjoxNzM2NTgzNTcyLCJqdGkiOiJmNXZlUTc5R1I2SU81Qjk3Iiwic3ViIjoiMiIsInBydiI6ImI5MTI3OTk3OGYxMWFhN2JjNTY3MDQ4N2ZmZjAxZTIyODI1M2ZlNDgifQ.QqCnr81ciI30smzxFooEzH8aAJHYqDavbJ5QZCNvfcU';

    const response = await fetch(
        url.href,
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Content-Language": locale
            },
            cache: 'force-cache',
            next: {
                revalidate: 3600,
                tags: ['user'],
            },
        }
    )

    // TODO: Revalidate products, decors, collections due to Favorites and Views Count.
    // revalidateTag('user');

    const data: IProductList = await response.json();

    return data;
}

export async function getProduct(
    slug: string
): Promise<IProduct> {
    const url = new URL(`product/${slug}`, baseApiUrl);
    const locale = await getLocale();
    const response = await fetch(
        url.href,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Language": locale
            },
            next: {
                revalidate: 3600,
                tags: ['product'],
            }
        }
    );

    if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
    }

    const data: IProduct = await response.json();

    return data;
}
