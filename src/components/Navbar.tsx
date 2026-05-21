"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { href: "/",              label: "Home" },
  { href: "/qurve-way",    label: "Qurve Way" },
  { href: "/baskets",      label: "Baskets" },
  { href: "/perspective",  label: "Perspective" },
  {
    href: "/blog",
    label: "Resources",
    dropdown: [
      { href: "/blog",              label: "📰 Blog" },
      { href: "/mutual-funds",      label: "📚 Mutual Fund Guides" },
      { href: "/sip-calculator",    label: "🧮 SIP Calculator" },
      { href: "/blog/what-is-quant-investing-india", label: "📊 Quant Investing Guide" },
      { href: "/blog/sip-vs-lump-sum", label: "💡 SIP vs Lump Sum" },
      { href: "/mutual-fund-advisor", label: "📍 Find Advisor by City" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [open, setOpen]             = useState(false);
  const [dropOpen, setDropOpen]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setDropOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-xl shadow-lg shadow-black/8 py-3 border-b border-border"
          : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Qurve Wealth — Mutual Fund Advisor India"
              width={160} height={44}
              className={`h-10 w-auto transition-all duration-300 ${scrolled ? "brightness-100" : "logo-white"}`}
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {links.map(({ href, label, dropdown }) => {
              const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

              if (dropdown) {
                return (
                  <li key={href} className="relative">
                    <button
                      onClick={() => setDropOpen(!dropOpen)}
                      onBlur={() => setTimeout(() => setDropOpen(false), 150)}
                      className={`relative flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                        scrolled ? "text-slate-600 hover:text-navy-light" : "text-white/75 hover:text-white"
                      }`}
                    >
                      {label}
                      <ChevronDown size={14} className={`transition-transform ${dropOpen ? "rotate-180" : ""}`} />
                    </button>
                    {dropOpen && (
                      <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl border border-border shadow-xl py-2 z-50">
                        {dropdown.map(item => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:text-navy hover:bg-off-white transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative text-sm font-medium transition-colors duration-200 group ${
                      scrolled
                        ? active ? "text-navy-light" : "text-slate-600 hover:text-navy-light"
                        : active ? "text-white" : "text-white/75 hover:text-white"
                    }`}
                  >
                    {label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold rounded-full transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/sip-calculator"
              className={`hidden lg:inline-flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                scrolled ? "text-navy border border-border hover:bg-off-white" : "text-white/80 hover:text-white"
              }`}
            >
              SIP Calc
            </Link>
            <Link
              href="/invest-now"
              className={`hidden md:inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-navy-light text-white hover:bg-navy shadow-md"
                  : "bg-gold hover:bg-gold-light text-white shadow-gold"
              }`}
            >
              Invest Now <span>→</span>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden p-2 rounded-lg transition ${scrolled ? "text-navy-light hover:bg-navy-light/10" : "text-white hover:bg-white/10"}`}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 transition-all duration-400 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-navy/98 backdrop-blur-2xl flex flex-col pt-24 px-8 gap-5 overflow-y-auto pb-10">
          <Image src="/logo.png" alt="Qurve Wealth" width={140} height={40} className="h-9 w-auto logo-white mb-2" />
          {links.map(({ href, label, dropdown }) => (
            <div key={href}>
              <Link href={href} className="text-white text-2xl font-semibold hover:text-gold transition-colors">
                {label}
              </Link>
              {dropdown && (
                <div className="mt-2 ml-4 space-y-2">
                  {dropdown.map(item => (
                    <Link key={item.href} href={item.href} className="block text-slate-300 text-base hover:text-gold transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/invest-now" className="mt-4 inline-flex justify-center items-center gap-2 bg-gold text-white font-bold text-base px-6 py-3.5 rounded-full">
            Invest Now →
          </Link>
        </div>
      </div>
    </>
  );
}
