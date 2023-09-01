// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'avatars.githubusercontent.com',
    ],
  },
};

module.exports = withContentlayer(nextConfig);
