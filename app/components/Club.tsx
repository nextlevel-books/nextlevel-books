"use client";

import { useState } from "react";

export default function Club() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — Brevo integration to be added later
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="club" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] to-[#06101e] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00c9c8]/30 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,201,200,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-[rgba(0,201,200,0.08)] border border-[rgba(0,201,200,0.2)] rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00c9c8] animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.3em] text-[#00c9c8] uppercase">
            Exklusiv
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
          Der Next Level Club
          <br />
          <span className="text-[#00c9c8]">entsteht</span>
        </h2>

        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Trage dich ein und erfahre als Erstes von neuen Büchern,
          Bonusgeschichten und exklusiven Inhalten.
        </p>

        {submitted ? (
          <div className="bg-[rgba(0,201,200,0.08)] border border-[rgba(0,201,200,0.25)] rounded-xl p-8">
            <div className="w-12 h-12 rounded-full bg-[rgba(0,201,200,0.15)] flex items-center justify-center mx-auto mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00c9c8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-[#00c9c8] font-semibold text-lg mb-1">
              Du bist dabei!
            </p>
            <p className="text-slate-400 text-sm">
              Wir melden uns, sobald es Neuigkeiten gibt.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="deine@email.de"
              className="flex-1 bg-[rgba(255,255,255,0.04)] border border-white/10 focus:border-[#00c9c8] focus:outline-none text-white placeholder:text-slate-500 px-5 py-4 rounded-lg text-base transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-[#00c9c8] hover:bg-[#00b0af] text-[#0a0f1a] font-bold px-7 py-4 rounded-lg text-base tracking-wide transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,201,200,0.35)] whitespace-nowrap"
            >
              Auf die Warteliste
            </button>
          </form>
        )}

        <p className="text-slate-600 text-xs mt-5">
          Kein Spam. Jederzeit abmeldbar.
        </p>
      </div>
    </section>
  );
}
