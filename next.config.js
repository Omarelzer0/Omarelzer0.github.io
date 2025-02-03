/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // إزالة الإعدادات الخاصة بـ GitHub Pages
  // assetPrefix: isProduction ? `/${repoName}` : '',
  // basePath: isProduction ? `/${repoName}` : '',
  // trailingSlash: true,
  // output: 'export', // إزالة هذا السطر إذا كنت تريد استخدام وظائف ديناميكية
};

module.exports = nextConfig;