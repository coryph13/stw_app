import ProductsPage from "@/i18n/pages/ProductsPage";
import { getProducts } from "@/lib/products";

export default async function Page({
    params
}: {
    params: Promise<{
        locale: string;
        slug: string;
    }>
}) {
    const { locale } = await params;
    const entities = await getProducts(locale);

    return (
        <ProductsPage entities={entities}/>
    )
}

// export const dynamic = 'force-dynamic';
