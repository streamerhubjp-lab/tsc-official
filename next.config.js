/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  // 🌟 ここを追加！「このサイトは tsc-official という部屋の中にありますよ」と教える
  basePath: '/tsc-official', 
  images: {
    unoptimized: true, 
  },
};
module.exports = nextConfig;
