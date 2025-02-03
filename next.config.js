/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'Omarelzer0.github.io'; // استبدل Omarelzer0.github.io باسم المستودع الخاص بك

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProduction ? `/${repoName}` : '', // إضافة assetPrefix
  basePath: isProduction ? `/${repoName}` : '', // إضافة basePath
  trailingSlash: true, // إضافة trailingSlash
  output: 'export', // إضافة output: export
};

module.exports = nextConfig;