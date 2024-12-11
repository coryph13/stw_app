// export async function getProducts() {
//     const data = await fetch(
//         'http://api.stw.test/v1/product/all',
//         {
//             method: "POST"
//         }
//     );

import { IProduct } from "@/types/product";

export async function getProduct(productSlug: string): Promise<IProduct> {
    const response = await fetch(
        `http://api.stw.test/v1/product/${productSlug}`, // TODO: Replace with config uri.
        {
            method: "POST"
        }
    );

    const data: IProduct = await response.json();

    return data;
}

// export async function getProducts(): Promise<Products>
