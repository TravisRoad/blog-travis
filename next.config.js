const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    // loader: 'custom',
    // loaderFile: './my-loader.ts',
  },
};

module.exports = withContentlayer({
  images: {
    domains: ["lain.bgm.tv", "img.travismtg.com"],
  },
  ...nextConfig,
});
