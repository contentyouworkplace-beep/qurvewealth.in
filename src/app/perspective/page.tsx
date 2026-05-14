"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const categories = [
  { id: "all", label: "All Topics" },
  { id: "markets", label: "Markets 📈" },
  { id: "economy", label: "Economy 🌐" },
  { id: "personal-finance", label: "Personal Finance 💰" },
  { id: "behaviour", label: "Consumer Behaviour 🧠" },
];

const featured = {
  cat: "markets",
  catLabel: "Markets",
  emoji: "📊",
  title: "Why Your Mutual Fund Returns Are Lower Than the Fund's Returns",
  excerpt:
    "There's a well-documented gap between how a fund performs and how its investors perform. The reason is almost never the fund — it's investor behaviour. We break down the data and show you how to close that gap permanently.",
  date: "April 28, 2026",
  readTime: "9 min read",
  author: "Qurve Research Team",
};

interface Article {
  cat: string;
  catLabel: string;
  emoji: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const articles: Article[] = [
  {
    cat: "markets",
    catLabel: "Markets",
    emoji: "📉",
    title: "Decoding Nifty's 15% Correction: Signal or Noise?",
    excerpt: "Every correction feels catastrophic in the moment. We look at the data to separate genuine risk signals from market noise — and what it means for your portfolio.",
    date: "April 22, 2026",
    readTime: "7 min read",
  },
  {
    cat: "economy",
    catLabel: "Economy",
    emoji: "🌐",
    title: "India's Rate Cycle: What RBI's Pivot Means for Debt Funds",
    excerpt: "The RBI has begun its easing cycle. We explain how falling interest rates affect different debt fund categories and where we see the best opportunities.",
    date: "April 18, 2026",
    readTime: "6 min read",
  },
  {
    cat: "personal-finance",
    catLabel: "Personal Finance",
    emoji: "💸",
    title: "SIP vs Lump Sum: The Honest Answer",
    excerpt: "The internet is full of strong opinions. We use 20 years of Nifty data to give you an honest, nuanced answer — and it depends on one key variable.",
    date: "April 14, 2026",
    readTime: "8 min read",
  },
  {
    cat: "behaviour",
    catLabel: "Consumer Behaviour",
    emoji: "🧠",
    title: "Why We Sell Winners and Hold Losers (And How to Stop)",
    excerpt: "The disposition effect is one of the most expensive behavioural biases in investing. Understanding the psychology behind it is the first step to overcoming it.",
    date: "April 10, 2026",
    readTime: "6 min read",
  },
  {
    cat: "markets",
    catLabel: "Markets",
    emoji: "🔄",
    title: "Momentum Investing: What the Academic Research Actually Says",
    excerpt: "Momentum is one of the most robust factors in financial markets. But most retail investors misuse it. Here's what the evidence says about doing it right.",
    date: "April 6, 2026",
    readTime: "10 min read",
  },
  {
    cat: "economy",
    catLabel: "Economy",
    emoji: "🏭",
    title: "Manufacturing Renaissance: Which Sectors Are Positioned to Win",
    excerpt: "India's PLI scheme and China+1 trend are reshaping global supply chains. We identify which sectoral mutual funds are best placed to benefit.",
    date: "April 2, 2026",
    readTime: "7 min read",
  },
  {
    cat: "personal-finance",
    catLabel: "Personal Finance",
    emoji: "🎯",
    title: "Goal-Based Investing: Build Portfolios Around Life, Not Markets",
    excerpt: "The best portfolio is not the one with the highest return — it's the one most likely to help you achieve your specific financial goals. Here's how to think about it.",
    date: "March 28, 2026",
    readTime: "8 min read",
  },
  {
    cat: "behaviour",
    catLabel: "Consumer Behaviour",
    emoji: "📱",
    title: "How Fintech Apps Are Engineered to Make You Trade More",
    excerpt: "Gamification, streaks, and push notifications are not designed to grow your wealth. We explore the dark patterns in retail investing apps and how to protect yourself.",
    date: "March 24, 2026",
    readTime: "5 min read",
  },
  {
    cat: "markets",
    catLabel: "Markets",
    emoji: "🌏",
    title: "Small Cap vs Large Cap: Reading the Cycle Correctly",
    excerpt: "Small caps outperform in certain market phases and dramatically underperform in others. Understanding the cycle is the key to allocating wisely.",
    date: "March 20, 2026",
    readTime: "7 min read",
  },
];

const catColorMap: Record<string, string> = {
  markets: "bg-blue-100 text-blue-700",
  economy: "bg-purple-100 text-purple-700",
  "personal-finance": "bg-amber-100 text-amber-700",
  behaviour: "bg-pink-100 text-pink-700",
};

export default function PerspectivePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = activeCategory === "all"
    ? articles
    : articles.filter(a => a.cat === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="flex flex-col">
      {/* ── Blog Hero ─────────────────────────────────────────── */}
      <section className="gradient-navy pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-gold/8 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Perspective</span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Qurve Perspective</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-4 font-serif">
            Stay Ahead of the Curve,<br />
            <span className="gradient-text">with Qurve</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Ideas that move your money forward. Research, analysis, and perspectives on markets, economy, and investor behaviour.
          </p>
        </div>
      </section>

      {/* ── Category Filter ───────────────────────────────────── */}
      <section className="bg-white border-b border-border px-6 py-6 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-navy text-white shadow-md"
                    : "bg-off-white text-slate-600 hover:bg-gold-pale hover:text-navy border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Article ──────────────────────────────────── */}
      {(activeCategory === "all" || activeCategory === featured.cat) && (
        <section className="py-16 px-6 bg-off-white">
          <div className="max-w-7xl mx-auto">
            <AnimateOnScroll>
              <div className="gradient-navy rounded-2xl overflow-hidden shadow-gold">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Illustration side */}
                  <div className="bg-gradient-to-br from-navy-light to-navy p-12 flex items-center justify-center min-h-64">
                    <div className="text-center">
                      <div className="text-8xl mb-4">{featured.emoji}</div>
                      <div className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${catColorMap[featured.cat]}`}>
                        {featured.catLabel}
                      </div>
                    </div>
                  </div>
                  {/* Content side */}
                  <div className="p-10 lg:p-12 flex flex-col justify-center">
                    <div className="inline-block bg-gold/20 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 w-fit">
                      ★ Featured Article
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 font-serif leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-8">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-400">
                        <span>{featured.date}</span>
                        <span className="mx-2">·</span>
                        <span>{featured.readTime}</span>
                        <span className="mx-2">·</span>
                        <span>{featured.author}</span>
                      </div>
                      <button className="text-gold font-semibold text-sm hover:underline cursor-pointer">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* ── Article Grid ──────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg">No articles in this category yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((article, i) => (
                <AnimateOnScroll key={article.title} delay={i * 0.05}>
                  <div className="bg-white rounded-2xl border border-border hover:border-gold/40 hover:-translate-y-1 hover:shadow-gold transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer group">
                    {/* Illustration area */}
                    <div className="bg-gradient-to-br from-off-white to-slate-100 flex items-center justify-center py-12">
                      <span className="text-6xl">{article.emoji}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit mb-4 ${catColorMap[article.cat]}`}>
                        {article.catLabel}
                      </span>
                      <h3 className="font-bold text-navy text-lg mb-3 leading-tight group-hover:text-gold transition-colors font-serif">
                        {article.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-border">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-off-white">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl border border-border p-12 shadow-sm">
              <div className="text-5xl mb-4">📬</div>
              <h2 className="text-3xl font-bold text-navy mb-3 font-serif">Stay in the Loop</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Get our latest market perspectives, basket updates, and data-driven insights delivered to your inbox. No spam — just signal.
              </p>
              {subscribed ? (
                <div className="bg-qurve-emerald-bg border border-qurve-emerald rounded-xl px-6 py-4 text-qurve-emerald font-semibold">
                  ✓ You're subscribed! Welcome to the Qurve community.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-5 py-4 rounded-xl border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-slate-700 transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-gold hover:bg-gold-light text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-gold whitespace-nowrap cursor-pointer"
                  >
                    Subscribe →
                  </button>
                </form>
              )}
              <p className="text-xs text-slate-400 mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="gradient-navy py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        </div>
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
              Ideas Are Great.<br />
              <span className="gradient-text">Action Is Better.</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Put the insights to work. Start investing in a Qurve basket today with zero minimum and full transparency.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/invest-now"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-10 py-4 rounded-xl transition-all duration-200 shadow-gold hover:-translate-y-0.5"
              >
                Start Investing →
              </Link>
              <Link
                href="/baskets"
                className="inline-flex items-center gap-2 glass hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200"
              >
                View Baskets
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
