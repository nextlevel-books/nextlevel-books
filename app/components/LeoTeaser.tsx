"use client";

import Image from "next/image";

export default function LeoTeaser() {
  return (
    <section className="py-20 px-6 relative bg-[#070c18]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(232,160,48,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24 items-start">

          {/* ── Titel-Block: nur Mobile (order-1) ── */}
          <div className="order-1 md:hidden flex flex-col items-center w-full gap-1 text-center">
            <div className="inline-flex items-center gap-2 bg-[#c9a236]/10 border border-[#c9a236]/20 rounded-full px-5 py-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a236] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.4em] text-[#c9a236] uppercase">
                Frühjahr 2027
              </span>
            </div>
            <h2 className="text-4xl font-black text-white leading-tight">
              NEXT LEVEL: <span className="text-[#c9a236]">LEO</span>
            </h2>
            <span className="text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/70 uppercase mt-1">
              2. Spin-off
            </span>
          </div>

          {/* ── Cover: mobile order-2, Desktop linke Spalte ── */}
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
                  src="/cover-leo.webp"
                  alt="NEXT LEVEL: LEO – Cover. Andere Sicht. Eigene Wahrheit. Ein neuer Weg."
                  fill
                  className="object-cover object-center"
                  sizes="252px"
                />
              </div>
            </div>
          </div>

          {/* ── Text + CTA: mobile order-3, Desktop rechte Spalte ── */}
          <div className="order-3 md:order-none flex flex-col items-center md:items-start w-full text-center md:text-left">

            {/* Titel: nur Desktop */}
            <div className="hidden md:flex flex-col items-start mb-5">
              <div className="inline-flex items-center gap-2 bg-[#c9a236]/10 border border-[#c9a236]/20 rounded-full px-5 py-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a236] animate-pulse" />
                <span className="text-[11px] font-semibold tracking-[0.4em] text-[#c9a236] uppercase">
                  Frühjahr 2027
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-1">
                NEXT LEVEL: <span className="text-[#c9a236]">LEO</span>
              </h2>
              <span className="inline-block text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/70 uppercase">
                2. Spin-off
              </span>
            </div>

            <p className="text-[#e8a030] font-semibold text-lg mb-5 leading-snug max-w-sm md:max-w-none">
              Andere Sicht. Eigene Wahrheit. Ein neuer Weg.
            </p>

            <p className="text-[#b0a898] text-base leading-relaxed mb-8 max-w-sm">
              Leo macht eine Ausbildung zum Mediengestalter. In einer Welt, in
              der künstliche Intelligenz Bilder, Stimmen und ganze Geschichten
              erschaffen kann, wird es immer schwieriger, zwischen Wahrheit und
              Manipulation zu unterscheiden.
              <br /><br />
              Doch wer hinterfragt, was andere für selbstverständlich halten,
              macht sich nicht unbedingt beliebt. Während Leo versucht, seinen
              eigenen Blick auf die Welt zu entwickeln, gerät auch seine
              persönliche Wirklichkeit zunehmend ins Wanken.
              <br /><br />
              Was ist noch wahr, wenn sich nahezu alles künstlich erzeugen
              lässt? Wem kann man vertrauen, wenn verschiedene Menschen dieselbe
              Wirklichkeit völlig unterschiedlich wahrnehmen? Und was passiert,
              wenn man irgendwann auch der eigenen Wahrnehmung nicht mehr sicher
              ist?
              <br /><br />
              NEXT LEVEL: LEO erzählt von Wahrheit und Täuschung, Zugehörigkeit
              und Ausgrenzung – und vom Mut, Dinge anders zu sehen, die eigene
              Wahrheit zu hinterfragen und schließlich einen neuen Weg zu gehen.
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
