import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// CSP built for a Next.js App Router + Shopify Storefront app:
//
// - script-src: 'unsafe-inline' required for Next.js RSC inline data payloads.
//   In dev, 'unsafe-eval' is also needed for React error-stack reconstruction.
// - style-src: 'unsafe-inline' required for <style dangerouslySetInnerHTML> in
//   BestsellersRow and ProductDetail, and for Tailwind's runtime class injection.
// - img-src: Shopify CDN + Unsplash for product/seed images.
// - font-src: 'self' only — next/font/google self-hosts fonts at build time.
// - connect-src: *.myshopify.com for Storefront API (server-side + any future
//   client-side calls).
// - frame-ancestors 'none': equivalent to X-Frame-Options DENY, set in both
//   places for broad browser compatibility.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: cdn.shopify.com images.unsplash.com;
  font-src 'self';
  connect-src 'self' *.myshopify.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\n/g, " ")
  .replace(/\s{2,}/g, " ")
  .trim();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          {
            // Belt-and-suspenders with CSP frame-ancestors; needed for older browsers
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Disable features the app does not use
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
