// src/app/[locale]/products/[slug]/page.tsx
import { createGraphQLClient } from "@/lib/graphql-client";
import { GET_PRODUCT, GET_PRODUCTS } from "@/graphql/queries/product";
import { IProduct } from "@/types/product";
import { notFound } from "next/navigation";
import ProductHero from "@/components/features/product/ProductHero";
import ProductSpecifications from "@/components/features/product/ProductSpecifications";
import ProductFormats from "@/components/features/product/ProductFormats";
import ProductDecors from "@/components/features/product/ProductDecors";
import RelatedProducts from "@/components/features/product/RelatedProducts";

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const graphqlClient = createGraphQLClient(locale);
  
  const { product } = await graphqlClient.request<{ product: IProduct }>(
    GET_PRODUCT,
    { slug }
  );

  if (!product) {
    notFound();
  }

  // Получаем похожие продукты из той же категории
  const { products: relatedProducts } = await graphqlClient.request<{ products: { data: IProduct[] } }>(
    GET_PRODUCTS,
    {
      categorySlug: product.categories?.[0]?.slug,
    }
  );

  // Фильтруем текущий продукт из списка похожих
  const filteredRelated = relatedProducts?.data?.filter(p => p.slug !== product.slug) || [];

  return (
    <div className="min-h-screen bg-background">
      <ProductHero product={product} />
      
      {/* Декоры, если есть */}
      {product.specs?.decor && (
        <ProductDecors decors={[product.specs.decor]} />
      )}
      
      {/* Форматы */}
      {product.specs?.formats && product.specs.formats.length > 0 && (
        <ProductFormats formats={product.specs.formats} />
      )}
      
      {/* Технические характеристики */}
      <ProductSpecifications specs={product.specs} />
      
      {/* Похожие продукты */}
      {filteredRelated.length > 0 && (
        <RelatedProducts products={filteredRelated.slice(0, 4)} />
      )}
    </div>
  );
}

// Генерация статических путей для продуктов
export async function generateStaticParams() {
  // Это опционально - можно генерировать пути для всех продуктов
  // или использовать динамическую генерацию
  return [];
}