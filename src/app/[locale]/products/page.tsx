import ProductsPage from "@/i18n/pages/ProductsPage";
import { getProducts } from "@/lib/fetch/products";

export default async function Page({
    params
}: {
    params: Promise<{
        locale: string;
        slug: string;
    }>
}) {
    const entities = await getProducts();

    return (
        <ProductsPage entities={entities}/>
    )
}

// export const dynamic = 'force-dynamic';
