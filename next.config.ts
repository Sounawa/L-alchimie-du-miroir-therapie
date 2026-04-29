import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/L-alchimie-du-miroir-therapie",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
