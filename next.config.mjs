/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/' : '',
  basePath: isProd ? '/' : '',
  trailingSlash: true
};

export default nextConfig;
