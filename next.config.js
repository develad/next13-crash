/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.tenor.com",
        port: "",
        pathname: "/OyUVgQi-l-QAAAAC/404.gif",
      },
    ],
  },
};

module.exports = nextConfig;
