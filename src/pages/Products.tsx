import { getProducts } from "@/lib/products";
import { IProduct } from "@/types/product";
import ProductCard from "@/ui/product-card";

export default async function Products() {
    const products = await getProducts();

    return (
        <ul>
            {products.map((entity: IProduct) => (
                <ProductCard key="product.slug" entity={entity}/>
            ))}
            {/* <Product entity={product}/> */}
        </ul>
    )
}
