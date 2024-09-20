/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "44.197.120.176",
      },
      {
        protocol: "https",
        hostname: "qviple.com",
      },
      {
        protocol: "https",
        hostname: "d3dqpu54js2vfl.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
