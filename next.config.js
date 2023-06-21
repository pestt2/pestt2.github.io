const { withFaust, getWpHostname } = require('@faustwp/core');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  output: 'standalone',
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      // only include the pages that you want to export
      '/': { page: '/' },
      '/category/anakoinoseis': { page: '/archive' },
      '/category/deltia-tupou': { page: '/archive' },
      '/category/ekdiloseis': { page: '/archive' },
      '/category/arthra': { page: '/archive' },
      '/enosi': { page: '/page' },
      '/enimerosi': { page: '/page' },
      '/polymesa': { page: '/page' },
      '/aitiseis': { page: '/page' },
      '/chrisima': { page: '/page' },
      '/epikoinonia': { page: '/page' },
      '/anakoinoseis/2023/06/12/sas-kalosorizoyme-stin-nea-mas-istoselida-site': { page: '/single' },
    }
  },
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
