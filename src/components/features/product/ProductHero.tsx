// src/components/product/ProductHero.tsx
'use client';

import { IProduct } from "@/types/product";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';
import { Link } from '@/i18n/routing';

interface ProductHeroProps {
  product: IProduct;
}

export default function ProductHero({ product }: ProductHeroProps) {
  const t = useTranslations('product');

  return (
    <section className="bg-muted py-8">
      <div className="container mx-auto px-4">
        {/* Хлебные крошки */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link href="/products" className="hover:text-accent transition-colors">
            {t('breadcrumb.catalog')}
          </Link>
          <span>/</span>
          {product.categories?.[0] && (
            <>
              <Link 
                href={`/products?category=${product.categories[0].slug}`}
                className="hover:text-accent transition-colors"
              >
                {product.categories[0].name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Изображение */}
          <div className="relative aspect-square bg-background rounded-lg overflow-hidden">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-8xl text-gray">📦</span>
              </div>
            )}
          </div>

          {/* Информация */}
          <div className="flex flex-col">
            {/* Код продукта */}
            {product.code && (
              <p className="text-sm text-text-muted mb-2">
                {t('code')}: {product.code}
              </p>
            )}

            {/* Название */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {product.name}
            </h1>

            {/* Производитель */}
            {product.manufacturer && (
              <div className="mb-4">
                <p className="text-sm text-text-muted">{t('manufacturer')}:</p>
                <p className="text-lg font-medium">{product.manufacturer.name}</p>
              </div>
            )}

            {/* Статус наличия */}
            <div className="mb-6">
              {product.in_stock ? (
                <div className="inline-flex items-center gap-2 text-green-500">
                  <IoCheckmarkCircle size={24} />
                  <span className="font-medium">{t('inStock')}</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 text-red-500">
                  <IoCloseCircle size={24} />
                  <span className="font-medium">{t('outOfStock')}</span>
                </div>
              )}
            </div>

            {/* Описание */}
            {product.description && (
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">{t('description')}</h2>
                <p className="text-text-muted">{product.description}</p>
              </div>
            )}

            {/* Категории и применение */}
            <div className="space-y-4">
              {product.categories && product.categories.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">{t('categories')}:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/products?category=${category.slug}`}
                        className="px-3 py-1 bg-background rounded-lg text-sm hover:bg-accent hover:text-white transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {product.applications && product.applications.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">{t('applications')}:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app.slug}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-lg text-sm"
                      >
                        {app.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}