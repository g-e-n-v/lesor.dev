/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    dirs: ["app", "services", "types"],
  },
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com" }, { hostname: "*.amazonaws.com" }],
  },
};

export default nextConfig;
