import { IProduct } from '@/types/product';
import { fakeFetchProductBySlug } from '@/utils/fakeFetch';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function ProductDetails({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) {
  const t = useTranslations('ProductPage'); // добавляем переводчик

  const product: IProduct | null = await fakeFetchProductBySlug(slug, locale);

  if (!product) {
    notFound();
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.media.photo.url,
    brand: {
      '@type': 'Brand',
      name: product.manufacturer.name,
    },
    offers: {
      '@type': 'Offer',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/product/${product.slug}`,
      priceCurrency: 'USD', // или другая валюта
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </Head>
      <div className="container py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1">
            <Image
              src={product.media.photo.url}
              alt={product.name}
              width={500}
              height={500}
              className="max-h-[500px] w-full rounded-2xl object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <h1 className="text-heading-1 text-accent">{product.name}</h1>
            <p className="text-base text-text-muted">
              {product.manufacturer.name}
            </p>
            <p className="mt-4">{product.description}</p>

            <div className="mt-6">
              <h2 className="mb-2 text-heading-2 text-accent">
                {t('characteristics')}
              </h2>
              <ul className="list-inside list-disc space-y-1 text-text-muted">
                <li>
                  <strong>{t('thickness')}:</strong> {product.board.thickness}{' '}
                  мм
                </li>
                <li>
                  <strong>{t('size')}:</strong> {product.board.size}
                </li>
                <li>
                  <strong>{t('material')}:</strong> {product.material.name}
                </li>
              </ul>
            </div>

            {product.features.length > 0 && (
              <div className="mt-6">
                <h2 className="mb-2 text-heading-2 text-accent">
                  {t('features')}
                </h2>
                <ul className="list-inside list-disc space-y-1 text-text-muted">
                  {product.features.map(feature => (
                    <li key={feature.slug}>{feature.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
