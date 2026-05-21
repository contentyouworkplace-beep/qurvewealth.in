"use client";

import { useState } from "react";

interface WhatsAppFormProps {
  light?: boolean;
  cityDefault?: string;
}

const interests = [
  "SIP Investment",
  "Lump Sum Investment",
  "All Weather Basket",
  "Growth Basket",
  "Smart Debt Basket",
  "Tax Saving (ELSS)",
  "Retirement Planning",
  "General Advisory",
];

export default function WhatsAppForm({ light = false, cityDefault = "" }: WhatsAppFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState(cityDefault);
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\s/g, ""))) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    setError("");

    const text = encodeURIComponent(
      `Hi Qurve Wealth! I'd like to start investing.\n\nName: ${name}\nPhone: ${phone}\nCity: ${city || "Not specified"}\nInterest: ${interest || "General Advisory"}${message.trim() ? `\nMessage: ${message.trim()}` : ""}\n\nPlease guide me on the next steps.`
    );
    window.open(`https://wa.me/919272402253?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  const inputCls = light
    ? "w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
    : "w-full bg-white border border-border text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all";

  const labelCls = light ? "text-xs font-semibold text-white/70 uppercase tracking-wider" : "text-xs font-semibold text-slate-500 uppercase tracking-wider";

  if (submitted) {
    return (
      <div className={`rounded-2xl p-8 text-center ${light ? "bg-white/10 border border-white/20" : "bg-white border border-border shadow-sm"}`}>
        <div className="text-4xl mb-3">✅</div>
        <div className={`font-bold text-lg mb-2 ${light ? "text-white" : "text-navy"}`}>Opening WhatsApp…</div>
        <p className={`text-sm ${light ? "text-white/70" : "text-slate-500"}`}>
          If WhatsApp didn't open, tap the button below.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs text-gold underline underline-offset-4"
        >
          Submit again
        </button>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl p-6 ${light ? "bg-white/10 border border-white/20 backdrop-blur-sm" : "bg-white border border-border shadow-sm"}`}>
      <div className="flex items-center gap-2 mb-5">
        <span className="text-xl">💬</span>
        <div>
          <div className={`font-bold text-sm ${light ? "text-white" : "text-navy"}`}>Talk to a Qurve Advisor</div>
          <div className={`text-xs ${light ? "text-white/60" : "text-slate-400"}`}>Free · No spam · AMFI Registered ARN-356292</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className={`block mb-1.5 ${labelCls}`}>Your Name *</label>
          <input
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={name}
            onChange={e => setName(e.target.value)}
            className={inputCls}
            required
          />
        </div>

        <div>
          <label className={`block mb-1.5 ${labelCls}`}>Mobile Number *</label>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            value={phone}
            onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
            className={inputCls}
            required
            maxLength={10}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={`block mb-1.5 ${labelCls}`}>Your City</label>
            <input
              type="text"
              placeholder="e.g. Pune"
              value={city}
              onChange={e => setCity(e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label className={`block mb-1.5 ${labelCls}`}>I'm Interested In</label>
            <select
              value={interest}
              onChange={e => setInterest(e.target.value)}
              className={inputCls}
            >
              <option value="">Select…</option>
              {interests.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className={`block mb-1.5 ${labelCls}`}>Any Message (Optional)</label>
          <textarea
            placeholder="e.g. I want to start a ₹5,000/month SIP for retirement…"
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={2}
            className={`${inputCls} resize-none`}
          />
        </div>

        {error && <p className="text-red-400 text-xs font-medium">{error}</p>}

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/25 text-sm mt-1"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat on WhatsApp →
        </button>

        <p className={`text-center text-xs ${light ? "text-white/40" : "text-slate-400"}`}>
          Typically replies within 2 hours · Mon–Sat 9AM–7PM
        </p>
      </form>
    </div>
  );
}
