/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },   // ignora ESLint en build
  typescript: { ignoreBuildErrors: true },// ignora errores TS en build
};
module.exports = nextConfig;
