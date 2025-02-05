'use client';

import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LocaleDropdown from './LocaleDropdown';

export const Navbar = () => {
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
    <nav className="fixed flex h-16 w-full items-center justify-between bg-gray-900 px-4">
      <div className="logo">
        <Link href="/">
          <p className="text-2xl font-bold text-white">STW</p>
        </Link>
      </div>
      <ul className="flex space-x-10 text-white">
        {NavLinks.map(link => {
          return (
            <li key={link.id}>
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

      <LocaleDropdown />
    </nav>
  );
};
