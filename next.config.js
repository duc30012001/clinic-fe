const { i18n } = require("./next-i18next.config");
require("dotenv").config;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "https://fe2.relaxingmusic.top",
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    PHONE_NUMBER: "0905 056 883",
    ADDRESS: "Đà Nẵng",
    EMAIL: "tranvanchuong@gmail.com",
    WEBSITE: "http://www.tranvanchuong.com",
  },
  images: {
    domains: ["icdn.dantri.com.vn"],
    minimumCacheTTL: 1500000,
  },
  i18n,
};

module.exports = nextConfig;
