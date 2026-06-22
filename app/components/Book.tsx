"use client";

import Image from "next/image";

export default function Book() {
  return (
    <section id="buch" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-[#050913] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-14 lg:gap-24 items-center text-center md:text-left">

          {/* ── Cover ─────────────────────────────────────── */}
          <div className="flex justify-center md:justify-end order-1 md:order-none">
            <div className="relative group">
              {/* Goldener Ambient Glow */}
              <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(201,162,54,0.13)_0%,transparent_65%)] opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/*
                Cover-Container: overflow-hidden + object-cover mit leicht
                linkszentrierter Position, um den weißen Rand rechts auszublenden.
                object-position "46% center" zeigt das Gebäude zentriert
                und schneidet den weißen Streifen rechts sanft ab.
              */}
              <div
                className="relative overflow-hidden rounded-xl transition-transform duration-500 group-hover:-translate-y-2"
                style={{
                  width: "clamp(200px, 42vw, 252px)",
                  aspectRatio: "2 / 3",
                  boxShadow:
                    "0 0 0 1px rgba(201,162,54,0.18), 0 28px 64px rgba(0,0,0,0.85), 0 8px 20px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src="/cover.png"
                  alt="NEXT LEVEL – Buchcover von Daniel Feigenbutz"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "46% center" }}
                  sizes="252px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ── Text ──────────────────────────────────────── */}
          <div className="flex flex-col items-center md:items-start">
            <span className="inline-block text-[11px] font-semibold tracking-[0.45em] text-[#c9a236] uppercase mb-4">
              Band 1
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
              NEXT LEVEL
            </h2>

            <p className="text-[#e8a030] font-semibold text-lg mb-6 leading-snug">
              Fünf Fremde. Sechs Wochen. Keine zweite Chance.
            </p>

            <p className="text-[#b0a898] text-base leading-relaxed mb-10 max-w-sm">
              Fünf Jugendliche. Ein leerstehendes Gebäude. Eine Aufgabe,
              die niemand von ihnen wollte.
              <br /><br />
              Was als Schulprojekt beginnt, wird zu einer Reise voller Konflikte,
              Freundschaften, Geheimnisse und Entscheidungen, die alles verändern können.
            </p>

            <a
              href="https://amzn.eu/d/01jVEtHN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#c9a236] hover:bg-[#d4b050] text-[#050913] font-bold px-8 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200 hover:shadow-[0_0_28px_rgba(201,162,54,0.4)]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              Jetzt bei Amazon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
