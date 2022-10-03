const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["localhost"],
    },
};

module.exports = nextConfig;
