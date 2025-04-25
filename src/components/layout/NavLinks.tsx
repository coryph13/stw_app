'use client';

import { Link, usePathname } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';

export default function NavLinks() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  const t = useTranslations('Nav');
  const locale = useLocale();

  const NavLinks = [
    { id: 1, name: t('home'), path: '/' },
    { id: 2, name: t('about'), path: '/about' },
    { id: 3, name: t('blog'), path: '/blog' },
    { id: 4, name: t('products'), path: '/products' },
    { id: 5, name: t('contacts'), path: '/contacts' },
  ];

  return (
    <>
      {NavLinks.map(link => {
        return (
          <Link
            href={link.path}
            key={link.id}
            locale={`${locale}`}
            className={` ${isActive(link.path) ? 'text-accent' : 'text-foreground'}
                hover:text-accent
                active:text-accent
                transition-colors duration-200
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}

// <div className="hidden space-x-6 md:flex">
//   <Link href="/" locale={`ru`} className={`${textColor}`}>
//     Home
//   </Link>{' '}
//   <Link href="/about" locale={`ru`} className={`${textColor}`}>
//     About
//   </Link>
// </div>;
