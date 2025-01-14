import ProductPage from "@/i18n/pages/ProductPage";
import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function Page({
    params
}: {
    params: Promise<{
            locale: string;
            slug: string;
    }>
}) {
    const {slug, locale} = await params;

    try {
        const entity = await getProduct(slug);

        return (
            <ProductPage entity={entity} />
        );
    } catch (e) {
        notFound();
    }
}
