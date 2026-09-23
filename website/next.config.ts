import path from 'path'
import type { NextConfig } from 'next'

const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        basePath: '/tailsass',
        assetPrefix: '/tailsass/',
      }
    : {}),
  turbopack: {
    root: path.join(__dirname),
  },
}

export default nextConfig
