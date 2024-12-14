import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
        'api.stw.test'
    ],
    remotePatterns: [
        {
            protocol: 'http',
            hostname: 'api.stw.test',
            port: '80',
            pathname: '/**',
            search: '',
        }
    ]
  }
};

export default nextConfig;
