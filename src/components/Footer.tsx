import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/",             label: "Home" },
  { href: "/qurve-way",   label: "Qurve Way" },
  { href: "/baskets",     label: "Our Baskets" },
  { href: "/perspective", label: "Perspective" },
  { href: "/invest-now",  label: "Invest Now" },
];

const baskets = [
  "All Weather Basket",
  "Smart Debt Basket",
  "Growth Basket",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center mb-5">
              <Image
                src="/logo.png"
                alt="Qurve Wealth"
                width={160}
                height={44}
                className="h-10 w-auto logo-white"
              />
            </Link>
            <p className="text-sm leading-7 mb-4 max-w-[260px]">
              AI-driven, data-backed mutual fund basket strategies. Built to stay resilient across every market cycle.
            </p>
            <span className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 text-gold text-xs font-semibold px-3 py-1.5 rounded-full">
              ✓ AMFI ARN-356292 · Valid till March 2029
            </span>
            <div className="flex gap-2.5 mt-5">
              {["in", "f"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-sm font-bold hover:bg-gold hover:border-gold hover:text-navy transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-white text-xs font-bold uppercase tracking-widest mb-5">Quick Links</div>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-1.5">
                    <span className="text-gold/60">→</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Baskets */}
          <div>
            <div className="text-white text-xs font-bold uppercase tracking-widest mb-5">Our Baskets</div>
            <ul className="space-y-2.5">
              {baskets.map((b) => (
                <li key={b}>
                  <Link href="/baskets" className="text-sm hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-1.5">
                    <span className="text-gold/60">→</span> {b}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white text-xs font-bold uppercase tracking-widest mb-5">Get in Touch</div>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="text-gold mt-0.5">✉</span>
                <span>support@qurvewealth.com</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold mt-0.5">📍</span>
                <span className="leading-6">F Building, Konark Indrayu Enclave-2,<br />NIBM Undri Road, Pune – 411048</span>
              </div>
            </div>
            <Link
              href="/invest-now"
              className="mt-5 inline-flex items-center gap-1.5 bg-gold text-white font-bold text-sm px-4 py-2.5 rounded-full hover:bg-gold-light transition-all"
            >
              Schedule a Call →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© 2025 Qurve Wealth · qurvewealth.in · All rights reserved.</span>
          <span>Designed with ♥ in Pune, India</span>
        </div>
        <p className="pb-6 text-xs text-white/25 leading-6 max-w-4xl">
          Qurve Wealth is an AMFI Registered Mutual Fund Distributor (ARN-356292). Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not necessarily indicative or a guarantee of future performance.
        </p>
      </div>
    </footer>
  );
}
