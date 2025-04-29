'use client';

import { useEffect, useState } from 'react';
import { IProduct } from '@/types/product';
import { fakeFetchProducts } from '@/utils/fakeFetch';
import ProductCard from '@/components/ProductCard';
import { useLocale } from 'next-intl';

export default function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale() || 'ru';

  useEffect(() => {
    fakeFetchProducts(locale).then(data => {
      setProducts(data.products);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-heading-1 text-accent">Продукты</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-2xl border border-gray-light p-4"
              >
                <div className="mb-4 h-48 rounded-lg bg-gray-light"></div>
                <div className="mb-2 h-6 rounded bg-gray-light"></div>
                <div className="mb-2 h-4 w-1/2 rounded bg-gray-light"></div>
                <div className="h-4 w-3/4 rounded bg-gray-light"></div>
              </div>
            ))
          : products.map(product => (
              <ProductCard key={product.code} product={product} />
            ))}
      </div>
    </div>
  );
}
