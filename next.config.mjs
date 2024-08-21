/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
eslint: {
    // Disable the ESLint checks during production build
    ignoreDuringBuilds: true,
  }
}


export default nextConfig
