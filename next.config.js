const { i18n } = require("./next-i18next.config");
const path = require("path");
require("dotenv").config;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    PHONE_NUMBER: "0905 056 883",
    ADDRESS: "Đà Nẵng",
    EMAIL: "tranvanchuong@gmail.com",
    WEBSITE: "http://www.tranvanchuong.com",
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
