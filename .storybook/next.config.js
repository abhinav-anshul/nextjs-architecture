/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: [] },
  reactStrictMode: true,
  serverActions: true,
  distDir: 'build'
  // basePath: '/',
  // env: {
  //     HOST_API_KEY: 'http://localhost:8080',
  //   },
};

module.exports = nextConfig;
