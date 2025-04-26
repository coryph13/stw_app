'use client';

import { Link, usePathname } from '@/i18n/routing';
import ReactCountryFlag from 'react-country-flag';

export default function LocaleInline() {
  const pathname = usePathname();

  // TODO: Get from other source. For i.e. from i18n

  const countries = {
    uz: { code: 'UZ', name: /* t('uz') */ 'Oʻzbekcha', locale: 'uz' },
    ru: { code: 'RU', name: /* t('ru') */ 'Русский', locale: 'ru' },
    en: { code: 'US', name: /* t('en') */ 'English', locale: 'en' },
  };

  return (
    <div className="flex items-center justify-center gap-4">
      {Object.entries(countries).map(([key, { code, name, locale }]) => (
        <Link
          key={key}
          href={pathname}
          locale={locale}
          className='group flex items-center gap-4 text-foreground hover:text-accent transition'
        //   className="flex items-center gap-3 px-4 py-2 transition-colors hover:bg-muted"
        >
          <ReactCountryFlag
            countryCode={code}
            svg
            className="rounded-full object-cover border border-foreground p-1 group-hover:border-accent"
            style={{ width: '2.25rem', height: '2.25rem' }}
            title={name}
          />
          <span className="hidden:xs text-sm text-foreground group-hover:text-accent">{name}</span>
        </Link>

        //   <li key={key}>
        //     <Link
        //       href={pathname}
        //       locale={locale}
        //       className="flex items-center gap-3 px-4 py-2 transition-colors hover:bg-muted"
        //     >
        //       <ReactCountryFlag
        //         countryCode={code}
        //         svg
        //         className="rounded-full object-cover"
        //         style={{ width: '1.75rem', height: '1.75rem' }}
        //         title={name}
        //       />
        //       <span className="text-sm text-foreground">{name}</span>
        //     </Link>
        //   </li>
      ))}
    </div>
  );
}
