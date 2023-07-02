/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.f-cdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn3.f-cdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn6.f-cdn.com",
      },
    ],
  },
  env: {
    GOOGLE_UD:
      "228320663146-1nom3hqfid4jl7t6qf6chs2p346vklok.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
  },
};

module.exports = nextConfig;
