import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

// GitHub Pages serves static files from /<repo-name>, so it needs a static export.
const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      basePath: "/LemonadeStandNext",
      trailingSlash: true,
    }
  : {};

export default nextConfig;
