"use client";

import Image from "next/image";

export default function Book() {
  return (
    <section id="buch" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-[#080d18] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-14 lg:gap-24 items-center text-center md:text-left">

          {/* Cover */}
          <div className="flex justify-center md:justify-end order-1 md:order-none">
            <div className="relative group">
              {/* Ambient Glow */}
              <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(201,162,54,0.15)_0%,transparent_65%)] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Cover-Bild */}
              <div
                className="relative rounded-xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-2"
                style={{
                  width: "clamp(200px, 45vw, 260px)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.75), 0 0 0 1px rgba(201,162,54,0.15)",
                }}
              >
                <Image
                  src="/cover.png"
                  alt="NEXT LEVEL – Buchcover von Daniel Feigenbutz"
                  width={400}
                  height={600}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col items-center md:items-start">
            <span className="inline-block text-xs font-semibold tracking-[0.4em] text-[#c9a236] uppercase mb-4">
              Band 1
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
              NEXT LEVEL
            </h2>

            <p className="text-[#e8a030] font-semibold text-lg mb-6">
              Fünf Fremde. Sechs Wochen. Keine zweite Chance.
            </p>

            <p className="text-[#7a90ae] text-base leading-relaxed mb-8 max-w-sm">
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
              className="inline-flex items-center gap-3 bg-[#c9a236] hover:bg-[#d4b050] text-[#080d18] font-bold px-8 py-4 rounded-lg text-xs tracking-[0.2em] uppercase transition-all duration-200 hover:shadow-[0_0_28px_rgba(201,162,54,0.4)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
