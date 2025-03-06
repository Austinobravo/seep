/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",  
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "seesupportcenter.org",
            },
    ],
    }
};

export default nextConfig;
