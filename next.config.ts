import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', 
  basePath: '/WebPortfolio2.0',
  images: {
    unoptimized: true,
    remotePatterns: [{
      protocol: 'https', 
      hostname: 'angelpenlza.github.io',
      pathname: '/WebPortfolio2.0'
    }]
  }
};

export default nextConfig;
