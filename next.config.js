/* eslint-disable no-undef */
// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
// !process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require("next-contentlayer");

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    appDir: true,
  },
  swcMinify: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "api.mapbox.com",
        pathname: "/styles/v1/**",
      },
    ],
  },
};

module.exports = withContentlayer(config);