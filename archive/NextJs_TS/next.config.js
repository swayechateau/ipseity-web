/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'file.swayechateau.com',
      'api.swayechateau.com',
      'swayechateau.com',
      'localhost',
      'picsum.photos'
    ],
  },
}

module.exports = nextConfig
