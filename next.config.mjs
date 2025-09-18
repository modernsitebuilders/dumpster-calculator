/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  async redirects() {
    return [
      {
        source: '/blog/landscaping-cleanup-dumpster-size',
        destination: '/blog/landscaping-debris-dumpster-size',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;