import type { MetadataRoute } from "next";
import { cities as CITIES } from "@/data/cities";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { GUIDES } from "@/lib/guides";
import { KEYWORD_PAGES } from "@/lib/keyword-pages";

const BASE = "https://qurvewealth.in";
const NOW  = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {

  /* ── Tier 1: Homepage & core conversion pages ── */
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE,                          lastModified: NOW, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/invest-now`,          lastModified: NOW, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE}/baskets`,             lastModified: NOW, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/sip-calculator`,      lastModified: NOW, changeFrequency: "monthly", priority: 0.85 },
  ];

  /* ── Tier 2: Content hubs ── */
  const hubPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/mutual-funds`,        lastModified: NOW, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${BASE}/mutual-fund-advisor`, lastModified: NOW, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${BASE}/keywords`,            lastModified: NOW, changeFrequency: "weekly",  priority: 0.8  },
    { url: `${BASE}/blog`,                lastModified: NOW, changeFrequency: "daily",   priority: 0.85 },
    { url: `${BASE}/perspective`,         lastModified: NOW, changeFrequency: "weekly",  priority: 0.75 },
    { url: `${BASE}/qurve-way`,           lastModified: NOW, changeFrequency: "monthly", priority: 0.7  },
  ];

  /* ── Tier 3: Guide pages — high-value SEO content ── */
  const guidePages: MetadataRoute.Sitemap = GUIDES.map(guide => ({
    url:             `${BASE}/mutual-funds/${guide.slug}`,
    lastModified:    NOW,
    changeFrequency: "monthly" as const,
    priority:        0.8,
  }));

  /* ── Tier 4: City advisor pages ── */
  const cityPages: MetadataRoute.Sitemap = CITIES.map(city => ({
    url:             `${BASE}/mutual-fund-advisor/${city.slug}`,
    lastModified:    NOW,
    changeFrequency: "monthly" as const,
    priority:        city.tier === 1 ? 0.85 : city.tier === 2 ? 0.75 : city.tier === 3 ? 0.65 : 0.55,
  }));

  /* ── Tier 5: Blog posts — use real publish dates ── */
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
    url:             `${BASE}/blog/${post.slug}`,
    lastModified:    post.publishedAt,
    changeFrequency: "monthly" as const,
    priority:        0.75,
  }));

  /* ── Tier 6: Keyword pages ── */
  const keywordPages: MetadataRoute.Sitemap = KEYWORD_PAGES.map(p => ({
    url:             `${BASE}/${p.slug}`,
    lastModified:    NOW,
    changeFrequency: "monthly" as const,
    // plain > city-specific (city pages are more long-tail)
    priority:        !p.city ? 0.7 : 0.6,
  }));

  return [
    ...corePages,
    ...hubPages,
    ...guidePages,
    ...cityPages,
    ...blogPages,
    ...keywordPages,
  ];
}
