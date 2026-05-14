"use client";

import { useState } from "react";

interface Faq {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  faqs: Faq[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? null : i));
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-gold bg-gold-pale shadow-gold"
                : "border-border bg-white hover:border-gold/40"
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className={`font-semibold text-base transition-colors ${isOpen ? "text-navy" : "text-slate-800"}`}>
                {faq.q}
              </span>
              <span
                className={`ml-4 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xl font-light transition-all duration-300 ${
                  isOpen ? "bg-gold text-white rotate-45" : "bg-navy/10 text-navy"
                }`}
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 pb-5 text-slate-600 leading-relaxed text-sm">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
