/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yogapit.sk'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|m4v)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
}

module.exports = nextConfig
