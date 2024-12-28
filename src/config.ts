// import '../envConfig.ts';

// export const locales = ['en', 'ru', 'uz'] as const;
// export const currentLocale = 'en' as const;
// export const baseUrl = process.env.BASE_URL!;



const config = {
    // baseUrl: process.env.NEXT_SERVER_BASE_URL!,
    // baseApiUrl: process.env.NEXT_SERVER_BASE_API_URL!,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,
    baseApiUrl: process.env.NEXT_PUBLIC_BASE_API_URL!,
    locale: 'en',
}

console.log(config);

export default config;

