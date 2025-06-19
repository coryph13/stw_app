// src/components/home/NewsSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { IoCalendar, IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';

const news = [
  {
    id: 1,
    slug: 'new-collection-2024',
    image: '/images/news/news-1.jpg',
    date: '2024-01-15',
    category: 'Новинки',
  },
  {
    id: 2,
    slug: 'exhibition-tashkent',
    image: '/images/news/news-2.jpg',
    date: '2024-01-10',
    category: 'События',
  },
  {
    id: 3,
    slug: 'eco-materials',
    image: '/images/news/news-3.jpg',
    date: '2024-01-05',
    category: 'Технологии',
  },
];

export default function NewsSection() {
  const t = useTranslations('home.news');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-text-muted">
              {t('subtitle')}
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            {t('viewAll')}
            <IoArrowForward size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="group bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <Link href={`/blog/${item.slug}`}>
                {/* Изображение */}
                <div className="relative h-48 bg-gray-light overflow-hidden">
                  {/* Заглушка вместо изображения */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">
                    <span className="text-4xl">📰</span>
                  </div>
                  {/* Когда будут реальные изображения:
                  <Image
                    src={item.image}
                    alt={t(`${item.id}.title`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  */}
                  
                  {/* Категория */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Контент */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                    <IoCalendar size={16} />
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {t(`items.${item.id}.title`)}
                  </h3>
                  
                  <p className="text-text-muted line-clamp-2 mb-4">
                    {t(`items.${item.id}.excerpt`)}
                  </p>
                  
                  <span className="inline-flex items-center gap-1 text-accent font-medium">
                    {t('readMore')}
                    <IoArrowForward className="group-hover:translate-x-1 transition-transform" size={16} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Мобильная кнопка "Все новости" */}
        <div className="text-center mt-8 md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all"
          >
            {t('viewAll')}
            <IoArrowForward size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}