import { Pathnames, createSharedPathnamesNavigation } from "next-intl/navigation";
import LocaleLayout from "./app/[locale]/layout";

export const defaultLocale = 'ru' as const;
export const locales = ['ru', 'en', 'uz'] as const;
export type Locale = (typeof locales)[number];
export const localeNames: Record<Locale, string> = {
    'ru': 'Русский',
    'en': 'English',
    'uz': 'Uzbek'
}

export const port = process.env.PORT || 3000;
export const host = process.env.HOST || `http://localhost:${port}`;

export const pathnames = {
    '/': '/'
} satisfies Pathnames<typeof locales>

// Use the default 'always'
export const localePrefix = 'as-needed';
// export const localePrefix = 'always';

// export const { Link, usePathname, useRouter } = 
//     createSharedPathnamesNavigation({ locales });