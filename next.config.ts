import { defaultLocale } from "@/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        // domains: [
        //     'api.stw.test'
        // ],
        // remotePatterns: [
        //     {
        //         protocol: 'http',
        //         hostname: 'api.stw.test',
        //         // hostname: '**',
        //         port: '',
        //         // pathname: '/**',
        //         // search: '',
        //     }
        // ],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '**',
                port: '',
                pathname: '**',
            }
        ]
    },
    // i18n: {
    //     locales: ['uz', 'ru', 'en'],
    //     defaultLocale: 'en',
    // }
};

export default nextConfig;
