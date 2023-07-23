const { i18n } = require("./next-i18next.config");
const path = require("path");
require("dotenv").config;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    FB_API_KEY: process.env.FB_API_KEY,
    FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
    FB_PROJECT_ID: process.env.FB_PROJECT_ID,
    FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
    FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
    FB_APP_ID: process.env.FB_APP_ID,
    FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID,
    PHONE_NUMBER: "0905 056 883",
    ADDRESS: "Đà Nẵng",
    EMAIL: "tranvanchuong@gmail.com",
    WEBSITE: process.env.WEBSITE,
  },
  images: {
    domains: ["icdn.dantri.com.vn", "firebasestorage.googleapis.com"],
    minimumCacheTTL: 1500000,
  },
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
