import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/404",
          "/500",
        ],
      },
      // Allow major AI crawlers — good for brand visibility
      { userAgent: "GPTBot",          allow: "/" },
      { userAgent: "Google-Extended",  allow: "/" },
      { userAgent: "anthropic-ai",     allow: "/" },
      { userAgent: "PerplexityBot",    allow: "/" },
      { userAgent: "Applebot",         allow: "/" },
      { userAgent: "Bingbot",          allow: "/" },
      // Block scrapers that add no SEO value
      { userAgent: "AhrefsBot",        disallow: "/" },
      { userAgent: "SemrushBot",       disallow: "/" },
      { userAgent: "DotBot",           disallow: "/" },
      { userAgent: "MJ12bot",          disallow: "/" },
    ],
    sitemap: [
      "https://qurvewealth.in/sitemap.xml",
    ],
    host: "https://qurvewealth.in",
  };
}
