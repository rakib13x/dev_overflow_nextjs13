/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
