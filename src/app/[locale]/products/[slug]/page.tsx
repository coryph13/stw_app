import { createGraphQLClient } from "@/lib/graphql-client";
import { GET_PRODUCT } from "@/graphql/queries/product";
import { IProduct } from "@/types/product";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        locale: string;
        slug: string;
    };
}

export default async function Page({ params }: { params: PageProps }) {
    const { slug, locale } = await params;
    const graphqlClient = createGraphQLClient(locale);
    const { product } = await graphqlClient.request<{product: IProduct}>(
        GET_PRODUCT,
        { slug: slug}
    );

    if (!product) {
        notFound()
        // return <div>Product not found.</div>
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    );
}
