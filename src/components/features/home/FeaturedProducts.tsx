// src/components/home/FeaturedProducts.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ProductCard from '@/components/features/products/ProductCard';
import { IoArrowForward } from 'react-icons/io5';
import { useState } from 'react';

interface FeaturedProductsProps {
  products: any[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const t = useTranslations('home.featured');
  const [activeTab, setActiveTab] = useState('new');

  const tabs = [
    { id: 'new', label: t('tabs.new') },
    { id: 'popular', label: t('tabs.popular') },
    { id: 'sale', label: t('tabs.sale') },
  ];

  // В реальном приложении здесь была бы фильтрация продуктов по табам
  const displayedProducts = products.slice(0, 4);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-text-muted">
              {t('subtitle')}
            </p>
          </div>
          
          {/* Табы */}
          <div className="flex gap-2 mt-6 md:mt-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-accent text-white'
                    : 'bg-background hover:bg-gray-light'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {products.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all"
              >
                {t('viewAll')}
                <IoArrowForward size={20} />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-muted text-lg mb-6">
              {t('noProducts')}
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all"
            >
              {t('contactUs')}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}