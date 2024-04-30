/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['tse3.mm.bing.net','www.majju.pk','tse1.mm.bing.net', 'www.twinschip.com','www.svgrepo.com','cdn-learn.adafruit.com','youtu.be'] // Add more domains as needed
    },
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:8080/api/:path*',
          },
        ]
      },
    reactStrictMode: true,
    swcMinify: true,
    
    eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}

export default nextConfig
