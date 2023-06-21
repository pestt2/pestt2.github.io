const { withFaust, getWpHostname } = require('@faustwp/core');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  output: 'export',
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['node_modules'],
  },
  images: {
    domains: [getWpHostname()],
  },
  experimental: {
      images: {
          unoptimized: true
      }
  }
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
});
