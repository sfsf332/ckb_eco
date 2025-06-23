// @ts-check

// You can remove the following 2 lines when integrating our example.
const { loadCustomBuildParams } = require('./next-utils.config')
const { esmExternals = false, tsconfigPath } =
  loadCustomBuildParams()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals, // https://nextjs.org/blog/next-11-1#es-modules-support
  },
  // 移除国际化配置，直接显示中文内容
  // i18n: {
  //   ...i18n,
  //   defaultLocale: 'zh',
  //   localeDetection: false,
  // },
  reactStrictMode: true,
  typescript: {
    tsconfigPath,
  },
}

module.exports = nextConfig
