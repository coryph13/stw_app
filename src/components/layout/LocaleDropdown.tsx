'use client';

import { useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import ReactCountryFlag from 'react-country-flag';

export default function LocaleDropdown() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  //   const t = useTranslations('Locale'); // предполагаем, что переводы находятся в namespace "Locale"
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const countries = {
    uz: { code: 'UZ', name: /* t('uz') */ 'Oʻzbekcha', locale: 'uz' },
    ru: { code: 'RU', name: /* t('ru') */ 'Русский', locale: 'ru' },
    en: { code: 'US', name: /* t('en') */ 'English', locale: 'en' },
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 rounded-full border border-border p-1 transition hover:opacity-80"
      >
        <ReactCountryFlag
          countryCode={countries[currentLocale].code}
          svg
          className="rounded-full object-cover"
          style={{ width: '2rem', height: '2rem' }}
          title={countries[currentLocale].name}
        />
      </button>

      {isOpen && (
        <ul className="absolute right-0 z-50 mt-2 w-48 rounded-md border border-border bg-background shadow-lg">
          {Object.entries(countries).map(([key, { code, name, locale }]) => (
            <li key={key}>
              <Link
                href={pathname}
                locale={locale}
                className="group flex items-center gap-3 px-4 py-2 transition-colors hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                <ReactCountryFlag
                  countryCode={code}
                  svg
                  className="rounded-full object-cover"
                  style={{ width: '1.75rem', height: '1.75rem' }}
                  title={name}
                />
                <span className="text-sm text-foreground group-hover:text-accent">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
