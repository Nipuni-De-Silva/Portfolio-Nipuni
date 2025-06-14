/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'], display: 'swap', timeout: 10000 } },
    ],
  },
  webpack: (config) => {
    // Disable webpack cache to prevent memory issues
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
