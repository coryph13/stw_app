// import { getProduct } from "@/lib/products";
import { IProduct } from "@/types/product";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProductPage({
    entity
}: {
    entity: IProduct
}) {
    if (!entity) return notFound();

    return (
        <main>
            Product data {entity.name}
            {/* <Image
                src={entity.media.photo.large}
                alt={entity.name} /> */}
        </main>
    );
}
