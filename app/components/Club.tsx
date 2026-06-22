"use client";

import { useState } from "react";

export default function Club() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="club" className="py-24 px-6 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080d18] to-[#0a1220] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a236]/25 to-transparent" />

      {/* Subtiler goldener Radialschimmer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,162,54,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">

        <div className="inline-flex items-center gap-2 bg-[#c9a236]/10 border border-[#c9a236]/25 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#c9a236] animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.35em] text-[#c9a236] uppercase">
            Exklusiv
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
          Der Next Level Club
          <br />
          <span className="text-[#c9a236]">entsteht</span>
        </h2>

        <p className="text-[#9aacca] text-base md:text-lg leading-relaxed mb-10 max-w-md">
          Trage dich ein und erfahre als Erstes von neuen Büchern,
          Bonusgeschichten und exklusiven Inhalten.
        </p>

        {submitted ? (
          <div className="bg-[#c9a236]/08 border border-[#c9a236]/25 rounded-xl p-8 w-full max-w-md">
            <div className="w-12 h-12 rounded-full bg-[#c9a236]/15 flex items-center justify-center mx-auto mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a236" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <p className="text-[#c9a236] font-bold text-lg mb-1">Du bist dabei!</p>
            <p className="text-[#9aacca] text-sm">Wir melden uns, sobald es Neuigkeiten gibt.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="deine@email.de"
              className="flex-1 bg-[#121f35] border border-[#1a2e50] focus:border-[#c9a236]/60 focus:outline-none text-[#e8e0d0] placeholder:text-[#4a5e7a] px-5 py-4 rounded-lg text-sm transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-[#c9a236] hover:bg-[#d4b050] text-[#080d18] font-bold px-6 py-4 rounded-lg text-sm tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_20px_rgba(201,162,54,0.35)] whitespace-nowrap"
            >
              Auf die Warteliste
            </button>
          </form>
        )}

        <p className="text-[#4a5e7a] text-xs mt-5">Kein Spam. Jederzeit abmeldbar.</p>
      </div>
    </section>
  );
}
