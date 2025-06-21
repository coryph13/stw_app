// src/app/[locale]/products/page.tsx
import { createGraphQLClient } from "@/lib/graphql-client";
import { GET_PRODUCTS } from "@/graphql/queries/product";
import { IProduct } from "@/types/product";
import { notFound } from "next/navigation";
import ProductsFilters from "@/components/features/products/ProductsFilters";
import ProductsGrid from "@/components/features/products/ProductsGrid";
import ProductsHero from "@/components/features/products/ProductsHero";

interface PageProps {
    params: Promise<{
        locale: string;
    }>;
    searchParams: Promise<{
        category?: string;
        manufacturer?: string;
    }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { category, manufacturer } = await searchParams;
  const graphqlClient = createGraphQLClient(locale);
  
  const { products } = await graphqlClient.request<{ products: { data: IProduct[] } }>(
    GET_PRODUCTS,
    {
      categorySlug: category || undefined,
      manufacturerSlug: manufacturer || undefined,
    }
  );

  if (!products) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <ProductsHero />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Фильтры */}
          <aside className="lg:col-span-1">
            <ProductsFilters />
          </aside>
          
          {/* Список продуктов */}
          <main className="lg:col-span-3">
            <ProductsGrid products={products.data} />
          </main>
        </div>
      </div>
    </div>
  );
}