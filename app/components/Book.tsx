"use client";

import Image from "next/image";

export default function Book() {
  return (
    <section id="buch" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-[#070c18] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/*
          Mobile:  flex-col → Titel (order-1), Cover (order-2), Text (order-3), Button (order-4)
          Desktop: 2-Spalten-Grid → Cover links, alles Text rechts
        */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24 items-center text-center md:text-left">

          {/* ── Titel + Band-Info: mobile order-1, Desktop im rechten Block ── */}
          <div className="order-1 md:hidden flex flex-col items-center w-full">
            <div className="flex flex-col items-center gap-y-1 mb-0">
              <h2 className="text-4xl font-black text-white leading-tight">NEXT LEVEL</h2>
              <span className="text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/60 uppercase">
                · Band 1
              </span>
            </div>
          </div>

          {/* ── Cover: mobile order-2, Desktop linke Spalte ── */}
          <div className="order-2 md:order-none flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(201,162,54,0.13)_0%,transparent_65%)] opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div
                className="relative overflow-hidden rounded-xl transition-transform duration-500 group-hover:-translate-y-2 cover-reflex"
                style={{
                  width: "clamp(200px, 42vw, 252px)",
                  aspectRatio: "2 / 3",
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

          {/* ── Beschreibungstext: mobile order-3 ── */}
          <div className="order-3 md:hidden flex flex-col items-center w-full">
            <p className="text-[#e8a030] font-semibold text-lg mb-5 leading-snug">
              Fünf Fremde. Sechs Wochen. Keine zweite Chance.
            </p>
            <p className="text-[#b0a898] text-base leading-relaxed mb-8 max-w-sm">
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
              className="inline-flex items-center gap-3 bg-[#c9a236] hover:bg-[#d4b050] text-[#070c18] font-bold px-8 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200 hover:shadow-[0_0_28px_rgba(201,162,54,0.4)]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              Jetzt bei Amazon
            </a>
          </div>

          {/* ── Desktop: rechte Spalte mit allem ── */}
          <div className="hidden md:flex flex-col items-start">
            {/* Titel + Band nebeneinander auf Desktop */}
            <div className="flex flex-row flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">NEXT LEVEL</h2>
              <span className="text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/60 uppercase">
                · Band 1
              </span>
            </div>
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
              className="inline-flex items-center gap-3 bg-[#c9a236] hover:bg-[#d4b050] text-[#070c18] font-bold px-8 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200 hover:shadow-[0_0_28px_rgba(201,162,54,0.4)]"
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
