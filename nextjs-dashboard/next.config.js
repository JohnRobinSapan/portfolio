/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ["home-server:3000"],
        }
    }
};

module.exports = nextConfig;
