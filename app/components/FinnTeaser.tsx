"use client";

import Image from "next/image";

export default function FinnTeaser() {
  return (
    <section className="py-20 px-6 relative bg-[#070c18]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(232,160,48,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24 items-center text-center md:text-left">

          {/* ── Titel-Block: nur Mobile (order-1) ── */}
          <div className="order-1 md:hidden flex flex-col items-center w-full gap-1">
            <span className="inline-block text-[11px] font-semibold tracking-[0.45em] text-[#e8a030] uppercase mb-3">
              Demnächst
            </span>
            <h2 className="text-4xl font-black text-white leading-tight">
              NEXT LEVEL: <span className="text-[#c9a236]">FINN</span>
            </h2>
            <span className="text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/70 uppercase mt-1">
              Band 1 der Spin-off-Reihe
            </span>
          </div>

          {/* ── Cover: mobile order-2, Desktop linke Spalte ── */}
          {/* Kein Overlay, kein Blinkeffekt – statisch */}
          <div className="order-2 md:order-none flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(232,160,48,0.10)_0%,transparent_65%)] opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div
                className="relative overflow-hidden rounded-xl transition-transform duration-500 group-hover:-translate-y-2"
                style={{
                  width: "clamp(200px, 42vw, 252px)",
                  aspectRatio: "2 / 3",
                  boxShadow: "0 0 0 1px rgba(201,162,54,0.18), 0 28px 64px rgba(0,0,0,0.85), 0 8px 20px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src="/cover-finn.png"
                  alt="NEXT LEVEL: FINN – Buchcover"
                  fill
                  className="object-cover object-center"
                  sizes="252px"
                />
              </div>
            </div>
          </div>

          {/* ── Text + CTA: mobile order-3, Desktop rechte Spalte ── */}
          <div className="order-3 md:order-none flex flex-col items-center md:items-start w-full">

            {/* Titel: nur Desktop */}
            <div className="hidden md:flex flex-col items-start mb-5">
              <span className="inline-block text-[11px] font-semibold tracking-[0.45em] text-[#e8a030] uppercase mb-3">
                Demnächst
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-1">
                NEXT LEVEL: <span className="text-[#c9a236]">FINN</span>
              </h2>
              <span className="inline-block text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/70 uppercase">
                Band 1 der Spin-off-Reihe
              </span>
            </div>

            <p className="text-[#e8a030] font-semibold text-lg mb-5 leading-snug max-w-sm">
              Fremde Stadt. Fremde Sprache.<br className="sm:hidden" /> Ein neues Ich.
            </p>

            <p className="text-[#b0a898] text-base leading-relaxed mb-8 max-w-sm">
              Finn ist in einer neuen Stadt, in einer fremden Sprache und in
              einem Leben, das sich noch nicht wie seines anfühlt.
              <br /><br />
              Während er versucht herauszufinden, wer er ohne die Gruppe wirklich
              ist, begegnet er Menschen, die ihn fordern, spiegeln und verändern.
              <br /><br />
              Manche Antworten findet man nicht dort, wo man gesucht hat.
            </p>

            <a
              href="#club"
              className="inline-flex items-center justify-center border border-[#c9a236]/45 text-[#c9a236] hover:bg-[#c9a236]/10 font-bold px-8 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200"
            >
              Als erster informiert werden
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
