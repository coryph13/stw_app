// export async function getProducts() {
//     const data = await fetch(
//         'http://api.stw.test/v1/product/all',
//         {
//             method: "POST"
//         }
//     );

import { IProduct } from "@/types/product";
import { IProductList } from "@/types/product";
// import { revalidateTag } from "next/cache";

export async function getProducts(): Promise<IProductList> {
    const locale = 'en'; // await and set to localStorage

    const response = await fetch(
        `http://api.stw.test/v1/product/list`,
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

export async function getProduct(productSlug: string): Promise<IProduct> {
    const response = await fetch(
        `http://api.stw.test/v1/product/${productSlug}`, // TODO: Replace with config uri.
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Language": "en"
            }
        }
    );

    const data: IProduct = await response.json();

    return data;
}
