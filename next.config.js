// Import necessary plugins
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const createNextIntlPlugin = require('next-intl/plugin');

// Initialize plugins
const withNextIntl = createNextIntlPlugin();

// Define your Next.js configuration
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode
  pwa: {
    dest: 'public', // PWA output directory
    runtimeCaching, // PWA caching strategy
  },
    compiler: {
      styledComponents: true,
    },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
};

// Combine plugins with your Next.js configuration
module.exports = withPWA(withNextIntl(nextConfig));
