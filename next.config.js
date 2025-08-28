/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is now stable in Next.js 14, no experimental flag needed
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'default',
    path: ''
  },
  assetPrefix: '',
  basePath: '',
  experimental: {
    appDir: true
  },
  // Add cache busting for images
  generateBuildId: async () => {
    return 'build-' + Date.now();
  }
};

module.exports = nextConfig;
