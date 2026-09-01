import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Public package detail URLs keep the SEO-friendly /packages/<slug> shape,
      // but internally render through /package?slug=<slug>. This avoids square-
      // bracket folders so the project can be uploaded using GitHub's web UI.
      { source: "/packages/:slug", destination: "/package?slug=:slug" },

      // High-value Wix URLs preserved during migration.
      { source: "/packagetour-bhutan-new", destination: "/packages" },
      { source: "/bhutan-journey-to-bhutan-3stars", destination: "/package?slug=journey-to-bhutan" },
      { source: "/th5d4n", destination: "/package?slug=wonders-of-bhutan" },
      { source: "/bhutan-the-ultimate-bhutan-3stars", destination: "/package?slug=the-ultimate-bhutan" },
      { source: "/hotelbhutan", destination: "/hotels" },
      { source: "/how-to-visabhutan", destination: "/visa" },
      { source: "/bhutan-attractions", destination: "/destinations" },
      { source: "/bhutan", destination: "/about-bhutan" },
      { source: "/justletyouknow-bhutan", destination: "/travel-info" },
      { source: "/blog-bhutancenter", destination: "/journal" },
      { source: "/packagetours-bhutan-booking", destination: "/booking" },
      { source: "/contact-us-bhutancenter", destination: "/contact" },
    ];
  },
};

export default nextConfig;
