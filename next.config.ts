// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/de',  destination: '/', permanent: true },
      { source: '/de/', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/app-config.json',
        headers: [{ key: 'Cache-Control', value: 'no-store, max-age=0' }],
      },
    ];
  },
  // Optional – nur falls du i18n nutzt:
  // i18n: {
  //   locales: ['de'],
  //   defaultLocale: 'de',
  //   localeDetection: false,
  // },
};

export default nextConfig;
