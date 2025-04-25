import { Raleway, Inter } from 'next/font/google'

// Настройки для шрифта Raleway (для заголовков)
export const raleway = Raleway({
  weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-raleway', // Это позволит использовать шрифт как переменную в CSS
});

// Настройки для шрифта Inter (для основного текста)
export const inter = Inter({
  weight: ['100', '300', '400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter', // Это позволит использовать шрифт как переменную в CSS
});
