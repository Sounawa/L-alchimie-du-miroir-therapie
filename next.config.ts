import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "https://preview-chat-6590a343-e60d-4d05-a9bb-f184b16c634e.space-z.ai",
    "https://space-z.ai",
  ],
};

export default nextConfig;
