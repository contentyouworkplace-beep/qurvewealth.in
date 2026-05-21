import type { Metadata } from "next";
import Link from "next/link";
import { CITIES, FEATURED_STATES } from "@/lib/cities";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppForm from "@/components/WhatsAppForm";

export const metadata: Metadata = {
  title: "Mutual Fund Advisor India | 200+ Cities | AMFI Registered | Qurve Wealth",
  description: "Mutual fund advisor India — Qurve Wealth (AMFI ARN-356292) serves 200+ cities across India. Find a trusted mutual fund advisor and SIP investment expert in your city. Zero minimum investment.",
  keywords: ["mutual fund advisor India", "SIP investment advisor India", "AMFI registered mutual fund advisor", "mutual fund distributor India", "SIP advisor 200 cities India"],
  alternates: { canonical: "https://qurvewealth.in/mutual-fund-advisor" },
};

export default function MutualFundAdvisorIndexPage() {
  const tier1 = CITIES.filter(c => c.tier === 1);
  const tier2 = CITIES.filter(c => c.tier === 2);
  const tier3 = CITIES.filter(c => c.tier === 3);
  const tier4 = CITIES.filter(c => c.tier === 4);

  // Group by state for featured states
  const byState: Record<string, typeof CITIES> = {};
  for (const city of CITIES) {
    if (!byState[city.state]) byState[city.state] = [];
    byState[city.state].push(city);
  }

  return (
    <div className="flex flex-col">
      <section className="gradient-hero pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gold/8 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Mutual Fund Advisor — India" }]} light />
          <div className="mt-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">All India Coverage</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-serif">
              Mutual Fund Advisor<br />
              <span className="gradient-text">Across India</span>
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed mb-8">
              Qurve Wealth (AMFI ARN-356292) provides quant-driven mutual fund advisory and SIP investment guidance to investors across 200+ cities in India. Find your city below.
            </p>
            <div className="max-w-sm">
              <WhatsAppForm light />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-x-10 gap-y-3 justify-center">
            {["AMFI Registered ARN-356292", "200+ Cities Served", "Zero Minimum Investment", "Fully Digital Onboarding", "SEBI-Regulated Funds"].map(t => (
              <div key={t} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="text-navy font-bold">✓</span> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 1 */}
      <section className="py-16 px-6 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-navy mb-2 font-serif">Metro Cities</h2>
            <p className="text-slate-500 mb-8 text-sm">Tier 1 — Highest Priority Locations</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tier1.map(city => (
                <Link key={city.slug} href={`/mutual-fund-advisor/${city.slug}`}
                  className="group bg-white rounded-xl border-2 border-navy/20 hover:border-gold/50 p-5 transition-all duration-200 hover:shadow-gold hover:-translate-y-0.5">
                  <div className="font-bold text-navy group-hover:text-gold transition-colors">{city.name}</div>
                  <div className="text-xs text-slate-400 mt-1">{city.state}</div>
                  <div className="text-xs font-semibold text-navy-mid mt-2">Mutual Fund Advisor →</div>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Tier 2 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-navy mb-2 font-serif">Large Cities</h2>
            <p className="text-slate-500 mb-8 text-sm">Tier 2 — Large Urban Centres</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {tier2.map(city => (
                <Link key={city.slug} href={`/mutual-fund-advisor/${city.slug}`}
                  className="group bg-off-white hover:bg-white rounded-xl border border-border hover:border-gold/30 px-4 py-3 transition-all duration-200">
                  <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">{city.name}</div>
                  <div className="text-xs text-slate-400">{city.state}</div>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Tier 3 */}
      <section className="py-16 px-6 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-navy mb-2 font-serif">Mid Cities</h2>
            <p className="text-slate-500 mb-8 text-sm">Tier 3 — Growing Urban Markets</p>
            <div className="flex flex-wrap gap-3">
              {tier3.map(city => (
                <Link key={city.slug} href={`/mutual-fund-advisor/${city.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-gold-pale border border-border hover:border-gold/30 text-slate-600 hover:text-navy text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200">
                  {city.name}
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Tier 4 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-navy mb-2 font-serif">Emerging Cities</h2>
            <p className="text-slate-500 mb-8 text-sm">Tier 4 — Aspirational & Emerging Markets</p>
            <div className="flex flex-wrap gap-2">
              {tier4.map(city => (
                <Link key={city.slug} href={`/mutual-fund-advisor/${city.slug}`}
                  className="inline-flex items-center text-xs bg-off-white hover:bg-gold-pale border border-border hover:border-gold/20 text-slate-500 hover:text-navy font-medium px-3 py-1.5 rounded-lg transition-all duration-200">
                  {city.name}
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">
            Don't See Your City? <span className="gradient-text">We Still Serve You.</span>
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Qurve Wealth is fully digital — we serve investors across all of India, regardless of city. Onboarding, advisory, and portfolio management are 100% online.
          </p>
          <Link href="/invest-now" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-10 py-4 rounded-xl transition-all shadow-gold hover:-translate-y-0.5">
            Start Investing Today →
          </Link>
        </div>
      </section>
    </div>
  );
}
