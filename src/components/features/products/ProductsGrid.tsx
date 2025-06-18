// src/components/products/ProductsGrid.tsx
'use client';

import { IProduct } from "@/types/product";
import ProductCard from "@/components/features/products/ProductCard";
import { useTranslations } from 'next-intl';

interface ProductsGridProps {
  products: IProduct[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  const t = useTranslations('products');

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-muted text-lg">
          {t('noProducts')}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <p className="text-text-muted">
          {t('showing')} {products.length} {t('products')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}