// src/components/home/CategoriesSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';

const categories = [
  {
    id: 'ldsp',
    slug: 'ldsp',
    icon: '🪵',
    image: '/images/categories/ldsp.jpg',
  },
  {
    id: 'lmdf',
    slug: 'lmdf',
    icon: '📦',
    image: '/images/categories/lmdf.jpg',
  },
  {
    id: 'flooring',
    slug: 'flooring',
    icon: '🏠',
    image: '/images/categories/flooring.jpg',
  },
  {
    id: 'tabletop',
    slug: 'tabletop',
    icon: '🪑',
    image: '/images/categories/tabletop.jpg',
  },
  {
    id: 'mdf',
    slug: 'mdf',
    icon: '🪜',
    image: '/images/categories/mdf.jpg',
  },
  {
    id: 'glue',
    slug: 'glue',
    icon: '🧪',
    image: '/images/categories/glue.jpg',
  },
];

export default function CategoriesSection() {
  const t = useTranslations('home.categories');

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group relative overflow-hidden rounded-lg bg-muted aspect-[4/3] flex items-end p-6 transition-all hover:shadow-xl"
            >
              {/* Фоновое изображение или градиент */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                {/* Здесь можно добавить Image когда будут реальные изображения */}
                {/* <Image
                  src={category.image}
                  alt={t(`${category.id}.name`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                /> */}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Иконка */}
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">
                {category.icon}
              </div>
              
              {/* Контент */}
              <div className="relative z-10 w-full">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {t(`${category.id}.name`)}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {t(`${category.id}.description`)}
                </p>
                <div className="flex items-center gap-2 text-accent font-medium">
                  <span>{t('viewProducts')}</span>
                  <IoArrowForward className="group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all"
          >
            {t('viewAllCategories')}
            <IoArrowForward size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}