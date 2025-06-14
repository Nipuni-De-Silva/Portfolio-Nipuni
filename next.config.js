/** @type {import('next').NextConfig} */
const nextConfig = {  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: false, // Enable Next.js image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Define optimal device sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Define image sizes
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
