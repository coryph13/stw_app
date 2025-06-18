// src/components/products/ProductCard.tsx
'use client';

import { IProduct } from "@/types/product";
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations('products');

  return (
    <Link 
      href={`/products/${product.slug}`}
      className="group block bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
    >
      {/* Изображение */}
      <div className="relative aspect-square overflow-hidden bg-gray-light">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl text-gray">📦</span>
          </div>
        )}
        
        {/* Статус наличия */}
        <div className="absolute top-2 right-2">
          {product.in_stock ? (
            <div className="bg-green-500 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
              <IoCheckmarkCircle size={14} />
              {t('inStock')}
            </div>
          ) : (
            <div className="bg-red-500 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
              <IoCloseCircle size={14} />
              {t('outOfStock')}
            </div>
          )}
        </div>
      </div>

      {/* Информация о продукте */}
      <div className="p-4">
        {/* Код продукта */}
        {product.code && (
          <p className="text-xs text-text-muted mb-1">
            {t('code')}: {product.code}
          </p>
        )}

        {/* Название */}
        <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        {/* Производитель */}
        {product.manufacturer && (
          <p className="text-sm text-text-muted mb-2">
            {product.manufacturer.name}
          </p>
        )}

        {/* Категории */}
        {product.categories && product.categories.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product.categories.map((category) => (
              <span 
                key={category.slug}
                className="text-xs bg-muted px-2 py-1 rounded"
              >
                {category.name}
              </span>
            ))}
          </div>
        )}

        {/* Описание */}
        {product.description && (
          <p className="text-sm text-text-muted line-clamp-2">
            {product.description}
          </p>
        )}
      </div>
    </Link>
  );
}