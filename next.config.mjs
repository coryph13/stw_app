import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // serverRuntimeConfig: {
    //     mySecret: "secret" // Example ServerSide Configs
    // },
    // publicRuntimeConfig: {
    //     // staticFolder: "/static" //
    //     locales: ['en', 'ru', 'uz']
    // }
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.API_HOST,
                port: '',
                // pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                // pathname: '/100/100'
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                // pathname: '/100/100'
            }
        ]
    }
};

export default withNextIntl(nextConfig);