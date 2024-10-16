/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/0daycyber.com/' : '',
  basePath: isProd ? '/0daycyber.com' : '',
  trailingSlash: true
};

export default nextConfig;
