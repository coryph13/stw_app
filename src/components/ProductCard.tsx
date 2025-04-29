'use client';

import { Link } from '@/i18n/routing';
import { IProduct } from '@/types/product';
import Image from 'next/image';

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="block rounded-2xl border border-border p-4 transition-shadow hover:shadow-lg"
    >
      <Image
        src={product.media.photo.url}
        alt={product.media.photo.alt}
        className="mb-4 h-48 w-full rounded-lg object-cover"
        width={500}
        height={500}
      />
      <h2 className="text-heading-2 text-accent">{product.name}</h2>
      <p className="text-small text-text-muted">{product.manufacturer.name}</p>
      <p className="mt-2 text-base">{product.description}</p>
    </Link>
  );
}
