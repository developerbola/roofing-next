/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: false,
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      ignored: /node_modules/,
    };
    return config;
  },
};

module.exports = nextConfig;
