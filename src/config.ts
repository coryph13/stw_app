// import '../envConfig.ts';

// export const locales = ['en', 'ru', 'uz'] as const;
// export const currentLocale = 'en' as const;
// export const baseUrl = process.env.BASE_URL!;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL!;
const defaultLocale = 'en';
const locales = ['uz', 'ru', 'en'];
const matcher = ['/', '/(uz|ru|en)/:path*'];

export {
    baseUrl,
    baseApiUrl,
    defaultLocale,
    locales,
    matcher,
}

// export default config;

