// import { getProducts } from '@/lib/products';
import { getProduct } from '@/lib/products';
import { IProduct } from '@/types/product';
import { Product } from '@/ui/Product';

export default async function Page() {
    const product = await getProduct("pbmdf-baikal");

    console.log(product);

    return (
        <ul>
            {/* {products.map((product: IProduct) => (
                <Product key="product.slug" product={product}/>
            ))} */}
            {/* <li> */}
                <Product  />
            {/* </li> */}
        </ul>
    )
}
