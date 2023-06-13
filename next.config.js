/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'book-library-management.onrender.com',
            port: '',
            pathname: '/api/v1/books/*************************/images/*',
          },
        ],
      },
}

module.exports = nextConfig
