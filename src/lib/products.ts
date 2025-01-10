

import { baseApiUrl, defaultLocale } from "@/config";
import { IProduct } from "@/types/product";
import { IProductList } from "@/types/product";
// import { revalidateTag } from "next/cache";

export async function getProducts(
    locale: string
): Promise<IProductList> {
    const url = new URL('/product/list', baseApiUrl);
    const response = await fetch(
        url.href,
        {
            method: "POST",
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
    )

    // TODO: Revalidate products, decors, collections due to Favorites and Views Count.
    // revalidateTag('user');

    const data: IProductList = await response.json();

    return data;
}

export async function getProduct(
    slug: string,
    locale: string
): Promise<IProduct> {
    const url = new URL(`product/${slug}`, baseApiUrl);
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
