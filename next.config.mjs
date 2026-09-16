/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    optimizePackageImports: ['react-icons']
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
