import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://js.stripe.com/v3 https://*.js.stripe.com https://payment-wrapper.liteapi.travel https://vercel.live https://us-assets.i.posthog.com",
              "frame-src 'self' https://js.stripe.com https://js.stripe.com/v3 https://*.js.stripe.com https://hooks.stripe.com https://payment-wrapper.liteapi.travel https://vercel.live",
              "connect-src 'self' https://api.stripe.com https://merchant-ui-api.stripe.com https://api.liteapi.travel https://book.liteapi.travel https://payment-wrapper.liteapi.travel https://us.i.posthog.com https://us-assets.i.posthog.com",
              "img-src 'self' data: https:",
              "style-src 'self' 'unsafe-inline'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
