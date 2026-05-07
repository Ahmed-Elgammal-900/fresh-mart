import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'xaqml6fs7akwaezc.public.blob.vercel-storage.com',
            },
        ],
    },
};

export default nextConfig;
