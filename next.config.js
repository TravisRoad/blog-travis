import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withContentlayer({
  images: {
    domains: ["lain.bgm.tv", "img.travismtg.com"],
  },
  ...nextConfig,
});
