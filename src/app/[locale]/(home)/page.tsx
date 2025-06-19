// src/app/[locale]/(home)/page.tsx
import HeroSection from '@/components/features/home/HeroSection';
import FeaturedProducts from '@/components/features/home/FeaturedProducts';
import AboutSection from '@/components/features/home/AboutSection';
import CategoriesSection from '@/components/features/home/CategoriesSection';
import PartnersSection from '@/components/features/home/PartnersSection';
import AdvantagesSection from '@/components/features/home/AdvantagesSection';
import NewsSection from '@/components/features/home/NewsSection';
import CTASection from '@/components/features/home/CTASection';
import { createGraphQLClient } from "@/lib/graphql-client";
import { GET_PRODUCTS } from "@/graphql/queries/product";

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  
  // Получаем избранные продукты для главной страницы
  const graphqlClient = createGraphQLClient(locale);
  const { products } = await graphqlClient.request<{ products: { data: any[] } }>(
    GET_PRODUCTS,
    { 
      // Можно добавить фильтры для получения только избранных продуктов
      // featured: true или limit: 8
    }
  );

  return (
    <main className="min-h-screen">
      {/* Hero секция */}
      <HeroSection />
      
      {/* О компании */}
      <AboutSection />
      
      {/* Категории продуктов */}
      <CategoriesSection />
      
      {/* Избранные продукты */}
      <FeaturedProducts products={products?.data?.slice(0, 8) || []} />
      
      {/* Преимущества */}
      <AdvantagesSection />
      
      {/* Партнеры */}
      <PartnersSection />
      
      {/* Новости */}
      <NewsSection />
      
      {/* CTA секция */}
      <CTASection />
    </main>
  );
}