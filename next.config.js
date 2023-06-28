/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.f-cdn.com',
          },
        ],
      },
}

module.exports = nextConfig
