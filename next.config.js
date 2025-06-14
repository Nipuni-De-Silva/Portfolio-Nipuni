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
  },
  // Disable Google Fonts since you're having connectivity issues
  optimizeFonts: false,
  webpack: (config) => {
    // Disable webpack cache to prevent memory issues
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
