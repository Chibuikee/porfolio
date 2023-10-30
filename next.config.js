/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bslthemes.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "preview.colorlib.com",
        pathname: "/**",
      },
    ],
    domains: [
      "bslthemes.com",
      "source.unsplash.com",
      "i.ibb.co",
      "preview.colorlib.com",
    ],
  },
};
module.exports = nextConfig;
