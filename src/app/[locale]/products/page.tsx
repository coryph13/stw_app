'use server'

import { IProduct } from "@/types/product";
import { unstable_setRequestLocale } from "next-intl/server";
import { loadProducts } from '@/lib/load'
import React from "react";

type Props = {
    children: React.ReactNode
    params: {locale: string}
    products: IProduct[]
}


export default function Products({children, params: {locale}, products}: Props) {
    unstable_setRequestLocale(locale);

    // const t = useTranslations('IndexPage');

    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.slug}>{product.name}</li>
                ))}
            </ul>
        </>
    );
}

 
// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const posts = await loadProducts()
 
  // Props returned will be passed to the page component
  return { props: { posts } }
}