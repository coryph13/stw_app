// import ProductsPage from "@/i18n/pages/ProductsPage";
// import { getProducts } from "@/lib/fetch/products";

// export default async function Page({
//     params
// }: {
//     params: Promise<{
//         locale: string;
//         slug: string;
//     }>
// }) {
//     const entities = await getProducts();

//     return (
//         <ProductsPage entities={entities}/>
//     )
// }

// // export const dynamic = 'force-dynamic';


import { createGraphQLClient } from "@/lib/graphql-client";
import { GET_PRODUCTS } from "@/graphql/queries/product";
import { IProduct } from "@/types/product";
import { notFound } from "next/navigation";
import ProductsPage from "@/i18n/pages/ProductsPage";

interface PageProps {
    params: {
        locale: string;
        slug: string;
    };
}

export default async function Page({ params }: { params: PageProps }) {
    const { locale } = await params;
    const graphqlClient = createGraphQLClient(locale);
    const { products } = await graphqlClient.request<{products: IProduct[]}>(
        GET_PRODUCTS
    );

    if (!products) {
        notFound()
        // return <div>Product not found.</div>
    }

    console.log(products);
    return (
        <ProductsPage entities={products.data} />
    );
}
