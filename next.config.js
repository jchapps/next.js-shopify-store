/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["tailwindui.com", "static.vecteezy.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;
