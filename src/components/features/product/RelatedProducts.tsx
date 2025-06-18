// src/components/product/RelatedProducts.tsx
'use client';

import { IProduct } from "@/types/product";
import ProductCard from "../products/ProductCard";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { IoArrowForward } from 'react-icons/io5';

interface RelatedProductsProps {
  products: IProduct[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  const t = useTranslations('product');

  if (!products || products.length === 0) return null;

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {t('related.title')}
          </h2>
          <Link 
            href="/products"
            className="flex items-center gap-2 text-accent hover:underline"
          >
            {t('related.viewAll')}
            <IoArrowForward size={16} />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}