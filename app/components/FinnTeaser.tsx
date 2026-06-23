"use client";

import Image from "next/image";

export default function FinnTeaser() {
  return (
    <section className="py-20 px-6 relative bg-[#070c18]">
      {/* Sehr subtiler warmer Glow – passt zur Paris-Atmosphäre des Covers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(232,160,48,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/*
          Mobile:  Titel → Cover → Text → CTA (flex-col)
          Desktop: Cover links, Text rechts (2-Spalten-Grid)
        */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24 items-center text-center md:text-left">

          {/* ── Titel-Block: nur auf Mobile sichtbar (order-1) ── */}
          <div className="order-1 md:hidden flex flex-col items-center w-full">
            <span className="inline-block text-[11px] font-semibold tracking-[0.45em] text-[#e8a030] uppercase mb-4">
              Demnächst
            </span>
            <h2 className="text-4xl font-black text-white leading-tight mb-1">
              NEXT LEVEL:
              <br />
              <span className="text-[#c9a236]">FINN</span>
            </h2>
            <span className="text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/60 uppercase mt-1">
              Band 1 der Spin-off-Reihe
            </span>
          </div>

          {/* ── Cover (mobile order-2, Desktop linke Spalte) ── */}
          <div className="order-2 md:order-none flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(232,160,48,0.10)_0%,transparent_65%)] opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
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
                  src="/cover-finn.png"
                  alt="NEXT LEVEL: FINN – Buchcover"
                  fill
                  className="object-cover object-center"
                  sizes="252px"
                />
                {/* Dezenter „Demnächst"-Overlay oben */}
                <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#070c18]/60 to-transparent flex items-start justify-center pt-2 pointer-events-none">
                  <span className="text-[9px] font-bold tracking-[0.4em] text-[#e8a030]/80 uppercase">
                    Demnächst
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Text + CTA: mobile order-3, Desktop rechte Spalte ── */}
          <div className="order-3 md:order-none flex flex-col items-center md:items-start w-full">

            {/* Titel-Block: nur auf Desktop sichtbar */}
            <div className="hidden md:block mb-3">
              <span className="inline-block text-[11px] font-semibold tracking-[0.45em] text-[#e8a030] uppercase mb-4">
                Demnächst
              </span>
              <div className="flex flex-row flex-wrap items-baseline gap-x-3 gap-y-1 mt-1">
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  NEXT LEVEL: <span className="text-[#c9a236]">FINN</span>
                </h2>
              </div>
              <span className="inline-block text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/60 uppercase mt-2">
                Band 1 der Spin-off-Reihe
              </span>
            </div>

            <p className="text-[#e8a030] font-semibold text-lg mb-5 leading-snug max-w-sm md:mt-4">
              Paris. Eine neue Schule. Neue Freunde. Neue Geheimnisse.
            </p>

            <p className="text-[#b0a898] text-base leading-relaxed mb-8 max-w-sm">
              Während Finn versucht, seinen Platz in einer fremden Stadt zu finden,
              gerät er in Ereignisse, die größer sind als alles, was er sich
              vorstellen konnte.
              <br /><br />
              Der erste Band der neuen Spin-off-Reihe erscheint demnächst.
            </p>

            <a
              href="#club"
              className="inline-flex items-center justify-center gap-3 border border-[#c9a236]/45 text-[#c9a236] hover:bg-[#c9a236]/10 font-bold px-8 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200"
            >
              Im Next Level Club erfahren
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
