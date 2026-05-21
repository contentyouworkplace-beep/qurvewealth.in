import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog-posts";
import { KEYWORD_PAGES } from "@/lib/keyword-pages";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppForm from "@/components/WhatsAppForm";

const BLOG_KEYWORD_MAP: Record<string, string[]> = {
  "what-is-quant-investing-india":          ["index-fund", "large-cap-mutual-fund", "best-mutual-fund"],
  "direct-vs-regular-mutual-fund":          ["direct-vs-regular-mutual-fund", "expense-ratio-difference-direct-regular", "mutual-fund-kyc"],
  "sip-vs-lump-sum":                        ["sip-investment", "step-up-sip", "sip-with-500-rupees"],
  "all-weather-portfolio-india":            ["hybrid-mutual-fund", "balanced-advantage-fund", "equity-vs-debt-mutual-fund"],
  "debt-fund-vs-fd":                        ["debt-mutual-fund", "liquid-fund", "mutual-fund-vs-fd"],
  "how-to-start-investing-mutual-funds":    ["how-to-buy-mutual-fund", "mutual-fund-kyc", "sip-investment"],
};

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `https://qurvewealth.in/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://qurvewealth.in/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Qurve Wealth"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedKeywordSlugs = BLOG_KEYWORD_MAP[slug] ?? [];
  const relatedKeywordPages = relatedKeywordSlugs
    .map(s => KEYWORD_PAGES.find(p => p.slug === s))
    .filter(Boolean) as typeof KEYWORD_PAGES;

  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);
  const otherPosts = relatedPosts.length < 3
    ? [...relatedPosts, ...BLOG_POSTS.filter(p => p.slug !== slug && !relatedPosts.includes(p))].slice(0, 3)
    : relatedPosts;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: { "@type": "Organization", name: "Qurve Wealth", url: "https://qurvewealth.in" },
    publisher: {
      "@type": "Organization",
      name: "Qurve Wealth",
      logo: { "@type": "ImageObject", url: "https://qurvewealth.in/logo.png" },
    },
    datePublished: post.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://qurvewealth.in/blog/${slug}` },
    keywords: post.keywords.join(", "),
  };

  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="gradient-hero pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gold/6 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.category, href: "/blog" },
              { label: post.title.slice(0, 40) + "…" },
            ]}
            light
          />
          <div className="mt-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-wider bg-gold/20 text-gold-light px-3 py-1.5 rounded-full">
                {post.category}
              </span>
              <span className="text-slate-300 text-sm">{post.readTime}</span>
              <span className="text-slate-400 text-sm">·</span>
              <time className="text-slate-300 text-sm">
                {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </time>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight font-serif mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mb-8">{post.excerpt}</p>
            <div className="max-w-sm">
              <WhatsAppForm light />
            </div>
          </div>
        </div>
      </section>

      {/* ── Article + Sidebar ─────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Article Body */}
            <article
              className="prose prose-slate prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-navy prose-headings:font-serif
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5
                prose-ul:text-slate-600 prose-li:mb-2
                prose-ol:text-slate-600
                prose-strong:text-navy"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* CTA Card */}
              <div className="gradient-navy rounded-2xl p-7 sticky top-24">
                <div className="text-xs font-bold uppercase tracking-widest text-gold mb-4">Invest with Qurve</div>
                <h3 className="text-white font-bold text-lg mb-3 font-serif">
                  Ready to Invest Smarter?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  AMFI Registered · ARN-356292 · Zero minimum · Quant-driven baskets.
                </p>
                <Link
                  href="/invest-now"
                  className="block w-full text-center bg-gold hover:bg-gold-light text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-gold text-sm"
                >
                  Start Investing →
                </Link>
                <Link
                  href="/baskets"
                  className="block w-full text-center glass hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm mt-3"
                >
                  View Baskets
                </Link>
                <p className="text-xs text-slate-500 mt-5 leading-relaxed">
                  Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully.
                </p>
              </div>

              {/* Keywords / Tags */}
              <div className="bg-off-white rounded-xl border border-border p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Related Topics</div>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map(kw => (
                    <span key={kw} className="text-xs bg-white border border-border text-slate-600 px-3 py-1.5 rounded-full">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Linked keyword pages */}
              {relatedKeywordPages.length > 0 && (
                <div className="bg-white rounded-xl border border-border p-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Deep-Dive Guides</div>
                  <div className="space-y-2">
                    {relatedKeywordPages.map(p => (
                      <Link
                        key={p.slug}
                        href={`/${p.slug}`}
                        className="block text-sm text-navy hover:text-gold transition-colors font-medium"
                      >
                        → {p.keyword.replace(/\b\w/g, c => c.toUpperCase())}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related Posts ─────────────────────────────────────── */}
      {otherPosts.length > 0 && (
        <section className="py-16 px-6 bg-off-white border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-8 font-serif">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherPosts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <article className="bg-white rounded-xl border border-border hover:border-gold/40 hover:-translate-y-0.5 transition-all duration-200 p-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-gold mb-3">{p.category}</div>
                    <h3 className="font-bold text-navy text-base leading-snug mb-2 group-hover:text-navy-mid">{p.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{p.excerpt}</p>
                    <span className="text-xs font-semibold text-navy mt-4 block group-hover:text-gold transition-colors">Read Article →</span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section className="gradient-navy py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">
            Put This Knowledge to Work
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Start investing with Qurve's quant-driven mutual fund baskets. Zero minimum. AMFI Registered. Full transparency.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/invest-now" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-10 py-4 rounded-xl transition-all shadow-gold hover:-translate-y-0.5">
              Start Investing →
            </Link>
            <Link href="/sip-calculator" className="inline-flex items-center gap-2 glass hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-xl transition-all">
              SIP Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
