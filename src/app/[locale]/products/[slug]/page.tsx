import ProductDetails from '@/components/ProductDetails';
import { client } from '@/lib/apollo/client';
import { GET_PRODUCT } from '@/lib/graphql/productQueries';
import { notFound } from 'next/navigation';
interface ProductPageProps {
  params: { slug: string; locale: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  //   const locale = useLocale();

  const { data } = await client.query({
    query: GET_PRODUCT,
    variables: { slug: params.slug },
  });

  if (!data?.product) {
    notFound();
  }

  return (
    <>
      {/* <ProductDetails slug={params.slug} locale={params.locale} /> */}
      <div>
        <h1>{data.product.name}</h1>
        <p>{data.product.description}</p>
        <p>Price: {data.product.price}</p>
      </div>
    </>
  );
}
