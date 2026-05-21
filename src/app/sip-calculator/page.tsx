"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppForm from "@/components/WhatsAppForm";

function formatINR(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} L`;
  return `₹${amount.toLocaleString("en-IN")}`;
}

export default function SIPCalculatorPage() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(() => {
    const months = years * 12;
    const monthlyRate = rate / 100 / 12;
    const futureValue =
      monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const totalInvested = monthly * months;
    const wealthGained = futureValue - totalInvested;
    return { futureValue: Math.round(futureValue), totalInvested, wealthGained: Math.round(wealthGained) };
  }, [monthly, rate, years]);

  const wealthPct = Math.round((result.wealthGained / result.futureValue) * 100);

  const presets = [
    { label: "₹5K / mo · 5yr · 10%", monthly: 5000, rate: 10, years: 5 },
    { label: "₹10K / mo · 10yr · 12%", monthly: 10000, rate: 12, years: 10 },
    { label: "₹25K / mo · 15yr · 14%", monthly: 25000, rate: 14, years: 15 },
    { label: "₹50K / mo · 20yr · 15%", monthly: 50000, rate: 15, years: 20 },
  ];

  return (
    <div className="flex flex-col">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="gradient-hero pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gold/8 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Free Tool</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-serif">
            SIP <span className="gradient-text">Calculator</span> India
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8">
            Calculate how much your SIP (Systematic Investment Plan) can grow over time. Visualise the power of compounding and rupee cost averaging in Indian mutual funds.
          </p>
          <div className="max-w-sm mx-auto">
            <WhatsAppForm light />
          </div>
        </div>
      </section>

      {/* ── Calculator ────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Inputs */}
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
                <h2 className="text-xl font-bold text-navy mb-8">Enter Your SIP Details</h2>

                {/* Presets */}
                <div className="mb-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Quick Presets</div>
                  <div className="grid grid-cols-2 gap-2">
                    {presets.map(p => (
                      <button
                        key={p.label}
                        onClick={() => { setMonthly(p.monthly); setRate(p.rate); setYears(p.years); }}
                        className="text-xs bg-off-white hover:bg-gold-pale border border-border hover:border-gold/30 text-slate-600 hover:text-navy px-3 py-2 rounded-lg transition-all font-medium"
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sliders */}
                <div className="space-y-8">
                  {/* Monthly SIP */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Monthly SIP Amount</label>
                      <span className="text-navy font-bold text-base">{formatINR(monthly)}</span>
                    </div>
                    <input type="range" min={500} max={500000} step={500} value={monthly}
                      onChange={e => setMonthly(Number(e.target.value))}
                      className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-navy" />
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>₹500</span><span>₹5L</span>
                    </div>
                  </div>

                  {/* Expected Return */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Expected Annual Return</label>
                      <span className="text-navy font-bold text-base">{rate}% p.a.</span>
                    </div>
                    <input type="range" min={6} max={30} step={0.5} value={rate}
                      onChange={e => setRate(Number(e.target.value))}
                      className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-navy" />
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>6% (Debt)</span><span>30% (Aggressive)</span>
                    </div>
                  </div>

                  {/* Time Period */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-semibold text-slate-700">Investment Duration</label>
                      <span className="text-navy font-bold text-base">{years} years</span>
                    </div>
                    <input type="range" min={1} max={40} step={1} value={years}
                      onChange={e => setYears(Number(e.target.value))}
                      className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-navy" />
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>1 yr</span><span>40 yrs</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    href="/invest-now"
                    className="w-full block text-center bg-gold hover:bg-gold-light text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-gold hover:-translate-y-0.5"
                  >
                    Start Your SIP with Qurve →
                  </Link>
                  <p className="text-xs text-slate-400 text-center mt-3">
                    AMFI Registered · ARN-356292 · Zero minimum investment
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Results */}
            <AnimateOnScroll delay={0.1}>
              <div className="space-y-5">
                {/* Main result */}
                <div className="gradient-navy rounded-2xl p-8 text-center">
                  <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                    Your Wealth at {years} Years
                  </div>
                  <div className="text-5xl font-bold text-white mb-1 font-serif">
                    {formatINR(result.futureValue)}
                  </div>
                  <div className="text-slate-300 text-sm">Total Corpus Value</div>

                  {/* Visual bar */}
                  <div className="mt-6 bg-white/10 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-700"
                      style={{ width: `${Math.min(wealthPct, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>Invested: {formatINR(result.totalInvested)}</span>
                    <span>Gains: {formatINR(result.wealthGained)}</span>
                  </div>
                </div>

                {/* Breakdown cards */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Total Invested", value: formatINR(result.totalInvested), sub: `₹${monthly.toLocaleString("en-IN")} × ${years * 12} months`, color: "text-slate-700" },
                    { label: "Wealth Gained", value: formatINR(result.wealthGained), sub: `${wealthPct}% of final corpus`, color: "text-navy font-bold" },
                    { label: "Final Value", value: formatINR(result.futureValue), sub: `At ${rate}% p.a.`, color: "text-gold font-bold" },
                  ].map(card => (
                    <div key={card.label} className="bg-white rounded-xl border border-border p-4 text-center">
                      <div className={`text-lg ${card.color}`}>{card.value}</div>
                      <div className="text-xs text-slate-400 mt-1 font-semibold uppercase tracking-wide">{card.label}</div>
                      <div className="text-xs text-slate-400 mt-1">{card.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Qurve baskets suggestion */}
                <div className="bg-white rounded-2xl border border-border p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-gold mb-4">Suggested Qurve Basket</div>
                  {rate <= 9 ? (
                    <div>
                      <div className="font-bold text-navy mb-1">🛡️ Smart Debt Basket</div>
                      <p className="text-slate-500 text-sm">At {rate}% expected return, the Smart Debt Basket — our conservative debt strategy — is well-aligned with your goal.</p>
                    </div>
                  ) : rate <= 14 ? (
                    <div>
                      <div className="font-bold text-navy mb-1">🌦️ All Weather Basket</div>
                      <p className="text-slate-500 text-sm">At {rate}% expected return, the All Weather Basket — our balanced multi-asset strategy — matches your return expectation.</p>
                    </div>
                  ) : (
                    <div>
                      <div className="font-bold text-navy mb-1">🚀 Growth Basket</div>
                      <p className="text-slate-500 text-sm">At {rate}% expected return, the Growth Basket — our high-conviction equity strategy — targets this level of return over a 5+ year horizon.</p>
                    </div>
                  )}
                  <Link href="/baskets" className="text-sm font-semibold text-navy hover:text-gold transition-colors mt-3 block">
                    View Basket Details →
                  </Link>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed bg-off-white rounded-lg p-4 border border-border">
                  <strong>Disclaimer:</strong> This calculator provides an estimate based on the return rate entered. Actual mutual fund returns are subject to market risks and may vary. Past performance is not a guarantee of future results. Please read all scheme-related documents carefully before investing.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Educational Section ───────────────────────────────── */}
      <section className="py-16 px-6 bg-white border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 font-serif">How SIP Works — Key Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Rupee Cost Averaging", desc: "SIPs automatically buy more units when markets fall and fewer when markets rise. This averages your purchase cost below the market average over time — a mathematical advantage over lump sum investing in volatile markets." },
              { title: "Power of Compounding", desc: "Your returns generate their own returns. A ₹10,000 monthly SIP at 12% for 20 years turns ₹24L invested into ₹99.9L — 4x your investment. Start early: even 2 extra years can add 25-30% more to your final corpus." },
              { title: "Discipline Over Timing", desc: "SIPs remove the need to time the market. Regular investing through market cycles — corrections, peaks, recoveries — ensures you participate in every phase of the market's long-term upward journey." },
              { title: "Flexible & Liquid", desc: "Unlike FDs, SIPs in open-ended mutual funds can be paused, increased, or redeemed anytime. Most equity fund redemptions are credited to your bank within 2–3 business days (T+3 settlement)." },
            ].map((item, i) => (
              <div key={i} className="bg-off-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/blog/how-to-start-investing-mutual-funds" className="text-navy font-semibold hover:text-gold transition-colors underline underline-offset-4">
              Read: Complete Beginner's Guide to Mutual Fund Investing →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
