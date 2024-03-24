/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
            {
                source: '/management',
                destination: '/management/coach/statistic',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
