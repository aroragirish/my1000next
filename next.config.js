module.exports = {
  reactStrictMode: false,
  ignoreBuildErrors: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost', 'my1000bucket.s3.amazonaws.com'],
  },
}
