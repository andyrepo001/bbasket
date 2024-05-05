/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "boffice.5opr.com",
      },
    ],
  },
};

module.exports = nextConfig;
