"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FaqAccordion from "@/components/FaqAccordion";
import WhatsAppForm from "@/components/WhatsAppForm";

const howItWorks = [
  { step: "01", title: "Tell Us Your Goal", desc: "Share your investment horizon, risk comfort, and what you're saving for." },
  { step: "02", title: "Pick Your Basket", desc: "Choose from All Weather, Smart Debt, or Growth — or combine them." },
  { step: "03", title: "We Analyse the Market", desc: "Our quantitative model evaluates 50+ signals across macro and sector data." },
  { step: "04", title: "Funds Are Allocated", desc: "Weights are assigned to SEBI-regulated mutual fund schemes based on our model output." },
  { step: "05", title: "You Invest via MFD", desc: "Transactions happen through licensed MFD infrastructure — regulated, secure, and paperless." },
  { step: "06", title: "We Monitor & Rebalance", desc: "Markets shift. We review allocations regularly and rebalance when signals demand it." },
];

const faqs = [
  {
    q: "How do I get started with Qurve?",
    a: "Fill in the contact form on this page. We'll reach out within 1 business day to understand your goals, walk you through the basket options, and guide you through the onboarding process. It's quick and fully digital.",
  },
  {
    q: "What documents do I need to invest?",
    a: "You'll need a PAN card, Aadhaar, and a bank account. KYC verification is done digitally through our MFD partner platform. Most investors are onboarded and ready to invest within 24–48 hours.",
  },
  {
    q: "Is there any lock-in period?",
    a: "No. Our baskets use open-ended mutual fund schemes, which can be redeemed at any time. There's no platform-level lock-in. However, ELSS schemes (if any) carry a statutory 3-year lock-in as per tax law.",
  },
  {
    q: "How are my investments held? Are they safe?",
    a: "Your investments are held directly in your name in SEBI-regulated mutual fund schemes — not with Qurve. Qurve provides advisory and basket management services. Your units are safe in your own folio, even if Qurve ceased operations.",
  },
  {
    q: "What fees does Qurve charge?",
    a: "Qurve earns a trail commission from the AMCs through the MFD structure, just like any registered distributor. There are no additional platform fees or advisory charges imposed on you as an investor.",
  },
  {
    q: "Can I invest in multiple baskets simultaneously?",
    a: "Absolutely. Many investors split their corpus across baskets — for example, 50% All Weather + 50% Growth. We'll help you design a combination that aligns with your overall financial goals.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer, Pune",
    text: "The onboarding was surprisingly simple. Within two days I was invested in the All Weather basket. The transparency and data behind every decision is unlike anything I've seen.",
    rating: 5,
  },
  {
    name: "Rahul Desai",
    role: "Entrepreneur, Mumbai",
    text: "I reached out through the contact form and got a response the next morning. The team took time to understand my goals before recommending a basket. No sales pressure whatsoever.",
    rating: 5,
  },
  {
    name: "Ananya Krishnan",
    role: "Doctor, Bengaluru",
    text: "As someone with no time to track markets, having a systematic, data-driven approach managing my investments is exactly what I needed. Highly recommend.",
    rating: 5,
  },
];

export default function InvestNowPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    basket: "",
    amount: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section className="gradient-navy pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-gold/8 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Invest Now</span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Get Started</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-serif">
            Your Journey to<br />
            <span className="gradient-text">Smarter Investing</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
            Fill in the form below and our team will reach out within 1 business day. Zero pressure. Just honest guidance.
          </p>
          <div className="max-w-sm mx-auto">
            <WhatsAppForm light />
          </div>
        </div>
      </section>

      {/* ── Trust Strip ───────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-6 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-x-10 gap-y-3 justify-center">
            {[
              "AMFI Registered",
              "Zero Minimum",
              "No Hidden Charges",
              "SEBI-Regulated Funds",
              "Withdraw in 2–3 Days",
            ].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <span className="w-5 h-5 rounded-full bg-qurve-emerald-bg text-qurve-emerald flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Contact Section ──────────────────────────────── */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* LEFT — Info */}
          <AnimateOnScroll>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8 font-serif">Let's Connect</h2>

              {/* Contact info */}
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-pale flex items-center justify-center text-xl flex-shrink-0">📧</div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Email</div>
                    <a href="mailto:hello@qurvewealth.in" className="font-semibold text-navy hover:text-gold transition-colors">
                      hello@qurvewealth.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-pale flex items-center justify-center text-xl flex-shrink-0">📍</div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Address</div>
                    <p className="text-navy font-semibold">Pune, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-pale flex items-center justify-center text-xl flex-shrink-0">🏛️</div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Registration</div>
                    <p className="text-navy font-semibold">AMFI ARN-356292</p>
                  </div>
                </div>
              </div>

              {/* What happens after */}
              <div className="gradient-navy rounded-2xl p-8 mb-8">
                <h3 className="text-white font-bold text-lg mb-6">What Happens After You Submit?</h3>
                <div className="space-y-5">
                  {[
                    { num: "1", title: "We Review Your Details", desc: "Our team reads every submission carefully — no auto-replies." },
                    { num: "2", title: "We Schedule a Call", desc: "We reach out within 1 business day to understand your goals." },
                    { num: "3", title: "Basket Recommendation", desc: "We suggest the most suitable basket(s) for your profile." },
                  ].map(step => (
                    <div key={step.num} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-sm flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{step.title}</div>
                        <div className="text-slate-400 text-xs mt-1">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Follow Qurve</div>
                <div className="flex gap-3">
                  {[
                    { label: "LinkedIn", icon: "💼" },
                    { label: "Twitter / X", icon: "𝕏" },
                    { label: "Instagram", icon: "📸" },
                  ].map(s => (
                    <div
                      key={s.label}
                      className="flex items-center gap-2 bg-white border border-border rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:border-gold/40 hover:text-navy transition-all cursor-pointer"
                    >
                      <span>{s.icon}</span>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* RIGHT — Form */}
          <AnimateOnScroll delay={0.15}>
            <div className="bg-white rounded-2xl border border-border shadow-sm p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 h-full">
                  <div className="text-7xl mb-6">🎉</div>
                  <h3 className="text-2xl font-bold text-navy mb-3 font-serif">Thank You!</h3>
                  <p className="text-slate-500 leading-relaxed max-w-sm">
                    We've received your details and will reach out within 1 business day. Welcome to the Qurve community.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/baskets"
                      className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-8 py-3 rounded-xl transition-all"
                    >
                      Explore Baskets →
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-navy mb-8">Tell Us About Your Goals</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={e => update("firstName", e.target.value)}
                          placeholder="Rahul"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-slate-700 text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.lastName}
                          onChange={e => update("lastName", e.target.value)}
                          placeholder="Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-slate-700 text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => update("email", e.target.value)}
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-slate-700 text-sm transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => update("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-slate-700 text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={form.city}
                          onChange={e => update("city", e.target.value)}
                          placeholder="Pune"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-slate-700 text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Interested Basket
                      </label>
                      <select
                        value={form.basket}
                        onChange={e => update("basket", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-slate-700 text-sm transition-all bg-white cursor-pointer"
                      >
                        <option value="">Select a basket...</option>
                        <option value="all-weather">🌦️ All Weather — Moderate Risk</option>
                        <option value="smart-debt">🛡️ Smart Debt — Low Risk</option>
                        <option value="growth">🚀 Growth — High Risk</option>
                        <option value="multiple">📦 Multiple / Not Sure Yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Monthly Investment Amount
                      </label>
                      <select
                        value={form.amount}
                        onChange={e => update("amount", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-slate-700 text-sm transition-all bg-white cursor-pointer"
                      >
                        <option value="">Select a range...</option>
                        <option value="under-5k">Under ₹5,000</option>
                        <option value="5k-25k">₹5,000 – ₹25,000</option>
                        <option value="25k-1l">₹25,000 – ₹1,00,000</option>
                        <option value="1l-plus">₹1,00,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={e => update("message", e.target.value)}
                        placeholder="Tell us about your financial goals, questions, or anything else you'd like us to know..."
                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-slate-700 text-sm transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-light text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-gold hover:-translate-y-0.5 cursor-pointer text-base"
                    >
                      Submit & Get Started →
                    </button>
                    <p className="text-xs text-slate-400 text-center">
                      By submitting, you agree to be contacted by our team. We respect your privacy and never share your data.
                    </p>
                  </form>
                </>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────── */}
      <section className="gradient-navy py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">The Process</span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-4 font-serif">
                How It Works
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                From your first message to your first investment — here's what to expect.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 0.08}>
                <div className="glass rounded-2xl p-7 h-full">
                  <div className="text-gold font-bold text-xs mb-4 font-mono">{step.step}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">FAQ</span>
              <h2 className="text-4xl font-bold text-navy mt-3 mb-4 font-serif">
                Investing & Onboarding FAQs
              </h2>
              <p className="text-slate-500">Common questions about getting started with Qurve.</p>
            </div>
          </AnimateOnScroll>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Investor Stories</span>
              <h2 className="text-4xl font-bold text-navy mt-3 mb-4 font-serif">
                Investors Who Made the Move
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-border shadow-sm h-full flex flex-col">
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 italic">"{t.text}"</p>
                  <div>
                    <div className="font-bold text-navy">{t.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA Banner ──────────────────────────────────── */}
      <section className="gradient-navy py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        </div>
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
              The Best Time to Start<br />
              <span className="gradient-text">Was Yesterday.</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              The second best time is today. Fill in the form above or reach out directly. We'll handle the rest.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-10 py-4 rounded-xl transition-all duration-200 shadow-gold hover:-translate-y-0.5 cursor-pointer"
              >
                Fill the Form →
              </a>
              <Link
                href="/baskets"
                className="inline-flex items-center gap-2 glass hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200"
              >
                Explore Baskets
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
