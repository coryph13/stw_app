// type Product = {
//     name: string,
// };

import { IProduct } from "@/types/product";

export function Product(product: IProduct) {
    console.log(product)
    return (
        <li>
            <span>{product.name}</span>
            <img src={product.media.photo.thumb} alt="" />
        </li>
    );
}

export default Product;
