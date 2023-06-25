const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // ENDPOINT: "http://192.168.1.32:8000/api",
    ENDPOINT: "https://fe2.relaxingmusic.top/api",
    GOOGLE_MAP_API_KEY: "AIzaSyBdqhsWzvFTwmd1ZEMjtxcKOQCDFQL_f9w",
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
