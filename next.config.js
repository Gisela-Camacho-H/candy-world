/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "m.media-amazon.com",
          "upload.wikimedia.org",
          "lh3.googleusercontent.com"
        ],
      },
      typescript: {
        ignoreBuildErrors: true,
      },
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = nextConfig;

  