/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'framer-motion']
  }
}

module.exports = nextConfig
