// import { SignupForm } from "@/ui/signup-form";

import { getProducts } from "@/lib/products";
import { IProduct } from "@/types/product";
import Card from "@/ui/components/Card";

export default async function Page() {

    const products = await getProducts();

    // console.log(products);
    // console.log(products[0].media);

    // for (const p in products) {
    //     let product = products[p];
    //     console.log(product);
    //     console.log(product.media);
    // }

    return (
        <>
            {/* <h1>Главная</h1>
            <section>
                <h2>Продукты</h2>
                {products.map((entity: IProduct) => (
                    <Card key={entity.slug} entity={entity} type="product"/>
                ))}
            </section> */}
        </>
        // <SignupForm />
    );
}
