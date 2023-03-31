const { i18n, localePath } = require("./next-i18next.config.js")

// @type {import('next/dist/next-server/server/config').NextConfig}
module.exports = {
  i18n,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
  },
  transpilePackages: [
    "@ant-design/pro-components",
    "@ant-design/pro-layout",
    "@ant-design/pro-provider",
    "@ant-design/pro-utils",
    "@refinedev/antd",
    "@refinedev/core",
    "@refinedev/inferencer",
    "antd",
    "rc-dialog",
    "rc-pagination",
    "rc-picker",
    "wagmi",
  ],
}
