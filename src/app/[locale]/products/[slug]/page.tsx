import ProductDetails from '@/components/ProductDetails';

interface ProductPageProps {
  params: { slug: string; locale: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  //   const locale = useLocale();

  return (
    <>
      <ProductDetails slug={params.slug} locale={params.locale} />
    </>
  );
}
