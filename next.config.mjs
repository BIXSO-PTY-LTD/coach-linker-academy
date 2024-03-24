/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/management',
                destination: '/management/coach/statistic',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
