"use client";

import Image from "next/image";

export default function Book() {
  return (
    <section id="buch" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-[#070c18] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Status-Badge: Desktop (über dem Grid, damit Cover am Titel ausgerichtet) ── */}
        <div className="hidden md:flex mb-4">
          <div className="inline-flex items-center gap-2 bg-[#c9a236]/10 border border-[#c9a236]/20 rounded-full px-5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a236]" />
            <span className="text-[11px] font-semibold tracking-[0.4em] text-[#c9a236] uppercase">
              Jetzt erhältlich
            </span>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24 items-start">

          {/* ── Mobile: Badge + Titel (order-1) ── */}
          <div className="order-1 md:hidden flex flex-col items-center w-full gap-1 text-center">
            <div className="inline-flex items-center gap-2 bg-[#c9a236]/10 border border-[#c9a236]/20 rounded-full px-5 py-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a236]" />
              <span className="text-[11px] font-semibold tracking-[0.4em] text-[#c9a236] uppercase">
                Jetzt erhältlich
              </span>
            </div>
            <h2 className="text-4xl font-black text-white leading-tight">NEXT LEVEL</h2>
            <span className="text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/70 uppercase">
              Hauptreihe
            </span>
          </div>

          {/* ── Cover: mobile order-2, Desktop linke Spalte ── */}
          <div className="order-2 md:order-none flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(201,162,54,0.13)_0%,transparent_65%)] opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div
                className="relative overflow-hidden rounded-xl transition-transform duration-500 group-hover:-translate-y-2"
                style={{
                  width: "clamp(200px, 42vw, 252px)",
                  aspectRatio: "2 / 3",
                  boxShadow: "0 0 0 1px rgba(201,162,54,0.18), 0 28px 64px rgba(0,0,0,0.85), 0 8px 20px rgba(0,0,0,0.5)",
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

          {/* ── Mobile: Beschreibung + Button (order-3) ── */}
          <div className="order-3 md:hidden flex flex-col items-center w-full text-center">
            <p className="text-[#c9a236] font-semibold text-lg mb-5 leading-snug">
              Fünf Fremde. Sechs Wochen.<br className="sm:hidden" /> Keine zweite Chance.
            </p>
            <p className="text-[#b0a898] text-base leading-relaxed mb-8 max-w-sm">
              Fünf Jugendliche, die unterschiedlicher kaum sein könnten. Ein altes Kontor. Und sechs Wochen Zeit, um ein Projekt zu entwickeln, das über die Zukunft eines ganzen Stadtviertels entscheidet.
              <br /><br />
              Finn beobachtet lieber, bevor er spricht. Zara sagt, was sie denkt. Mia sieht Dinge, die anderen entgehen. Leo hält sich lieber im Hintergrund. Und Niko übernimmt die Führung, noch bevor jemand entschieden hat, wer eigentlich führen soll. Aus fünf Fremden wird ein Team – doch je größer der Druck wird, desto deutlicher zeigt sich, wie unterschiedlich Vertrauen, Verantwortung und Führung verstanden werden können.
              <br /><br />
              Zwischen Konflikten, Freundschaften und unerwarteten Wendungen müssen die fünf herausfinden, wem sie vertrauen können, wofür sie selbst stehen und wann es Zeit ist, die eigene Stimme zu erheben.
              <br /><br />
              Der Auftakt des NEXT LEVEL-Universums verbindet Spannung mit den großen Fragen des Erwachsenwerdens: Was bedeutet echte Führung? Wie entsteht Vertrauen? Und was passiert, wenn junge Menschen plötzlich Entscheidungen treffen müssen, die wirklich etwas verändern?
            </p>
            <a href="https://amzn.eu/d/01jVEtHN" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#c9a236] hover:bg-[#d4b050] text-[#070c18] font-bold px-8 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200 hover:shadow-[0_0_28px_rgba(201,162,54,0.4)]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              Bei Amazon kaufen
            </a>
          </div>

          {/* ── Desktop: rechte Spalte (kein Badge hier – steht über dem Grid) ── */}
          <div className="hidden md:flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-1">
              NEXT LEVEL
            </h2>
            <span className="inline-block text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/70 uppercase mb-5">
              Hauptreihe
            </span>
            <p className="text-[#c9a236] font-semibold text-lg mb-6 leading-snug">
              Fünf Fremde. Sechs Wochen. Keine zweite Chance.
            </p>
            <p className="text-[#b0a898] text-base leading-relaxed mb-10 max-w-sm">
              Fünf Jugendliche, die unterschiedlicher kaum sein könnten. Ein altes Kontor. Und sechs Wochen Zeit, um ein Projekt zu entwickeln, das über die Zukunft eines ganzen Stadtviertels entscheidet.
              <br /><br />
              Finn beobachtet lieber, bevor er spricht. Zara sagt, was sie denkt. Mia sieht Dinge, die anderen entgehen. Leo hält sich lieber im Hintergrund. Und Niko übernimmt die Führung, noch bevor jemand entschieden hat, wer eigentlich führen soll. Aus fünf Fremden wird ein Team – doch je größer der Druck wird, desto deutlicher zeigt sich, wie unterschiedlich Vertrauen, Verantwortung und Führung verstanden werden können.
              <br /><br />
              Zwischen Konflikten, Freundschaften und unerwarteten Wendungen müssen die fünf herausfinden, wem sie vertrauen können, wofür sie selbst stehen und wann es Zeit ist, die eigene Stimme zu erheben.
              <br /><br />
              Der Auftakt des NEXT LEVEL-Universums verbindet Spannung mit den großen Fragen des Erwachsenwerdens: Was bedeutet echte Führung? Wie entsteht Vertrauen? Und was passiert, wenn junge Menschen plötzlich Entscheidungen treffen müssen, die wirklich etwas verändern?
            </p>
            <a href="https://amzn.eu/d/01jVEtHN" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#c9a236] hover:bg-[#d4b050] text-[#070c18] font-bold px-8 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200 hover:shadow-[0_0_28px_rgba(201,162,54,0.4)]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              Bei Amazon kaufen
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
