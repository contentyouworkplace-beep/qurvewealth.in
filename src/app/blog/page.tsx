import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppForm from "@/components/WhatsAppForm";

export const metadata: Metadata = {
  title: "Mutual Fund Blog India | SIP Investment Tips & Expert Insights | Qurve Wealth",
  description: "Mutual fund blog India — expert SIP investment tips, quant investing guides, direct vs regular mutual fund, all weather portfolio, and more. Free mutual fund blog by Qurve Wealth (AMFI ARN-356292).",
  keywords: ["mutual fund blog India", "SIP investment tips India", "mutual fund investing articles", "quant investing India blog", "mutual fund advice India"],
  alternates: { canonical: "https://qurvewealth.in/blog" },
  openGraph: {
    title: "Mutual Fund Investing Blog | Qurve Wealth",
    description: "Expert insights on mutual funds, SIP strategies, and quant investing for Indian investors.",
    url: "https://qurvewealth.in/blog",
  },
};

const categories = ["All", "Investment Strategy", "Mutual Fund Basics", "Portfolio Strategy", "Getting Started"];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="gradient-hero pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-gold/8 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} light />
          <div className="mt-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Qurve Perspective</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-serif">
              Investing <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed mb-8">
              Data-driven articles on mutual fund investing, SIP strategies, quant methods, and wealth creation — written by AMFI-registered advisors for Indian investors.
            </p>
            <div className="max-w-sm">
              <WhatsAppForm light />
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Grid ─────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-off-white">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(cat => (
              <span
                key={cat}
                className={`text-sm font-medium px-4 py-2 rounded-full border cursor-pointer transition-all ${
                  cat === "All"
                    ? "bg-navy text-white border-navy"
                    : "bg-white border-border text-slate-600 hover:border-navy hover:text-navy"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="bg-white rounded-2xl border border-border hover:border-gold/40 hover:shadow-gold hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col">
                    {/* Colored top bar */}
                    <div className="h-1.5 bg-gradient-to-r from-navy to-navy-light" />

                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider bg-gold-pale text-gold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-slate-400">{post.readTime}</span>
                      </div>

                      <h2 className="text-lg font-bold text-navy mb-3 leading-snug group-hover:text-navy-mid transition-colors flex-1">
                        {post.title}
                      </h2>

                      <p className="text-slate-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <time className="text-xs text-slate-400">
                          {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </time>
                        <span className="text-navy font-semibold text-sm group-hover:text-gold transition-colors">
                          Read →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-3 font-serif">Get Investing Insights in Your Inbox</h2>
          <p className="text-slate-500 mb-8">
            Join investors who receive Qurve's data-driven market perspective and fund strategy updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-gold text-slate-700 text-sm"
            />
            <Link
              href="/invest-now"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap"
            >
              Subscribe →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
