/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        mySecret: "secret" // Example ServerSide Configs
    },
    publicRuntimeConfig: {
        // staticFolder: "/static" //
        locales: ['en', 'ru', 'uz']
    }
};

export default nextConfig;
