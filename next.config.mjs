/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    // Venue and avatar images are user-supplied URLs from any host
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
