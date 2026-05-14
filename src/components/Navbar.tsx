"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/",             label: "Home" },
  { href: "/qurve-way",   label: "Qurve Way" },
  { href: "/baskets",     label: "Baskets" },
  { href: "/perspective", label: "Perspective" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/97 backdrop-blur-xl shadow-lg shadow-black/8 py-3 border-b border-border"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Qurve Wealth"
              width={160}
              height={44}
              className={`h-10 w-auto transition-all duration-300 ${
                scrolled ? "brightness-100" : "logo-white"
              }`}
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => {
              const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
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
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gold rounded-full transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
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
              className={`md:hidden p-2 rounded-lg transition ${
                scrolled ? "text-navy-light hover:bg-navy-light/10" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-400 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-navy/98 backdrop-blur-2xl flex flex-col pt-24 px-8 gap-6">
          <Image src="/logo.png" alt="Qurve Wealth" width={140} height={40} className="h-9 w-auto logo-white mb-2" />
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white text-2xl font-semibold hover:text-gold transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/invest-now"
            className="mt-4 inline-flex justify-center items-center gap-2 bg-gold text-white font-bold text-base px-6 py-3.5 rounded-full"
          >
            Invest Now →
          </Link>
        </div>
      </div>
    </>
  );
}
