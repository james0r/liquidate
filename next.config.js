/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/**/*',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/password',
        destination: '/',
        permanent: true
      },
      {
        source: '/search/all',
        destination: '/search',
        permanent: true
      }
    ];
  },
  reactStrictMode: true
};

module.exports = nextConfig;