/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lhhxmuwwxyysyasorujk.supabase.co",
      },
    ],
  },
};

export default nextConfig;
