// next.config.ts (oder next.config.js)
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /de und /de/ immer auf die Startseite
      { source: '/de',  destination: '/', permanent: true },
      { source: '/de/', destination: '/', permanent: true },
    ];
  },
  // Falls du i18n nutzt, vermeide Auto-Redirects für Bots
  // i18n: {
  //   locales: ['de'],
  //   defaultLocale: 'de',
  //   localeDetection: false,
  // },
};

export default nextConfig;
