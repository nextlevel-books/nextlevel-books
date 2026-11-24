"use client";

import Image from "next/image";

export default function Book() {
  return (
    <section id="buch" className="py-20 px-6 relative scroll-mt-8">
      <div className="absolute inset-0 bg-[#070c18] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ══ Mobile layout (flex-col) ══════════════════════════════════════════ */}
        <div className="flex flex-col items-center text-center gap-6 md:hidden">
          <div className="inline-flex items-center gap-2 bg-[#c9a236]/10 border border-[#c9a236]/20 rounded-full px-5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a236]" />
            <span className="text-[11px] font-semibold tracking-[0.4em] text-[#c9a236] uppercase">Jetzt erhältlich</span>
          </div>
          <h2 className="text-4xl font-black text-white leading-tight -mt-2">NEXT LEVEL</h2>
          <span className="text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/70 uppercase -mt-4">Hauptreihe</span>
          <div className="relative">
            <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(201,162,54,0.13)_0%,transparent_65%)] opacity-70 pointer-events-none" />
            <div className="relative overflow-hidden rounded-xl"
              style={{ width: "clamp(200px,42vw,252px)", aspectRatio:"2/3",
                boxShadow:"0 0 0 1px rgba(201,162,54,0.18),0 28px 64px rgba(0,0,0,0.85),0 8px 20px rgba(0,0,0,0.5)" }}>
              <Image src="/cover.png" alt="NEXT LEVEL – Buchcover von Daniel Feigenbutz" fill className="object-cover" style={{objectPosition:"46% center"}} sizes="252px" priority />
            </div>
          </div>
          <p className="text-[#c9a236] font-semibold text-lg leading-snug">Fünf Fremde. Sechs Wochen. Keine zweite Chance.</p>
          <p className="text-[#b0a898] text-base leading-relaxed max-w-sm">
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
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            Bei Amazon kaufen
          </a>
        </div>

        {/* ══ Desktop layout: 2-row × 2-col grid ═══════════════════════════════
            Row 1: [empty]  [badge]
            Row 2: [cover]  [title + series + subtitle + desc + button]
            → Cover-Oberkante bündig mit Buchtitel                           */}
        <div className="hidden md:grid gap-x-24"
          style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto" }}>

          {/* Row 1, Col 2: Badge only — nichts links davon */}
          <div style={{ gridColumn: 2, gridRow: 1 }} className="flex items-center pb-3">
            <div className="inline-flex items-center gap-2 bg-[#c9a236]/10 border border-[#c9a236]/20 rounded-full px-5 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a236]" />
              <span className="text-[11px] font-semibold tracking-[0.4em] text-[#c9a236] uppercase">Jetzt erhältlich</span>
            </div>
          </div>

          {/* Row 2, Col 1: Cover */}
          <div style={{ gridColumn: 1, gridRow: 2 }} className="flex justify-end self-start">
            <div className="relative group">
              <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(201,162,54,0.13)_0%,transparent_65%)] opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative overflow-hidden rounded-xl transition-transform duration-500 group-hover:-translate-y-2"
                style={{ width:"clamp(200px,42vw,252px)", aspectRatio:"2/3",
                  boxShadow:"0 0 0 1px rgba(201,162,54,0.18),0 28px 64px rgba(0,0,0,0.85),0 8px 20px rgba(0,0,0,0.5)" }}>
                <Image src="/cover.png" alt="NEXT LEVEL – Buchcover von Daniel Feigenbutz" fill className="object-cover"
                  style={{objectPosition:"46% center"}} sizes="252px" priority />
              </div>
            </div>
          </div>

          {/* Row 2, Col 2: Text block */}
          <div style={{ gridColumn: 2, gridRow: 2 }} className="flex flex-col items-start self-start">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-1">NEXT LEVEL</h2>
            <span className="inline-block text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/70 uppercase mb-5">Hauptreihe</span>
            <p className="text-[#c9a236] font-semibold text-lg mb-6 leading-snug">Fünf Fremde. Sechs Wochen. Keine zweite Chance.</p>
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
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              Bei Amazon kaufen
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
