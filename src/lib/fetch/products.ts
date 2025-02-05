import { baseApiUrl } from "@/config";
import { IProduct } from "@/types/product";
import { IProductList } from "@/types/product";
import { getLocale } from "next-intl/server";
// import { revalidateTag } from "next/cache";

export async function getProducts(): Promise<IProductList> {
  const locale = await getLocale();
  const url = new URL('/products', baseApiUrl);

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
        tags: ['user', 'product'],
      },
    }
  )

  // console.log(await response.text());

  // TODO: Revalidate products, decors, collections due to Favorites and Views Count.
  // revalidateTag('user');

  const data: IProductList = await response.json();

  return data;
}

export async function getProduct(
  slug: string
): Promise<IProduct> {
  const url = new URL(`products/${slug}`, baseApiUrl);
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
