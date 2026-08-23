import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      basePath: '/guitartool-website',
      assetPrefix: '/guitartool-website',
      images: { unoptimized: true },
      trailingSlash: true,
    }
  : {};

export default nextConfig;
