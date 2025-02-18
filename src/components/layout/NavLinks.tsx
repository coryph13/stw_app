'use client';

import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function NavLinks() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const t = useTranslations('Nav');

  const NavLinks = [
    { id: 1, name: t('home'), path: '/' },
    { id: 2, name: t('about'), path: '/about' },
    { id: 3, name: t('blog'), path: '/blog' },
    { id: 4, name: t('products'), path: '/products' },
    { id: 5, name: t('contacts'), path: '/contacts' },
  ];
  return (
    <ul className="flex flex-1 space-x-10 text-white list-none">
      {NavLinks.map(link => {
        return (
          <li key={link.id} className={`list-none`}>
            <Link
              href={link.path}
              className={
                isActive(link.path)
                  ? 'underline decoration-blue-500 decoration-4'
                  : ''
              }
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
