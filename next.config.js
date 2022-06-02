/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextTranslate(nextConfig
)