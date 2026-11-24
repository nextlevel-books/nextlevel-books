"use client";

import Image from "next/image";

export default function FinnTeaser() {
  return (
    <section id="finn" className="py-20 px-6 relative bg-[#070c18] scroll-mt-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(232,160,48,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ══ Mobile layout ═══════════════════════════════════════════════════ */}
        <div className="flex flex-col items-center text-center gap-6 md:hidden">
          <div className="inline-flex items-center gap-2 bg-[#c9a236]/10 border border-[#c9a236]/20 rounded-full px-5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a236]" />
            <span className="text-[11px] font-semibold tracking-[0.4em] text-[#c9a236] uppercase">Jetzt erhältlich</span>
          </div>
          <h2 className="text-4xl font-black text-white leading-tight -mt-2">NEXT LEVEL: <span className="text-[#c9a236]">FINN</span></h2>
          <span className="text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/70 uppercase -mt-4">1. Spin-off</span>
          <div className="relative">
            <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(232,160,48,0.10)_0%,transparent_65%)] opacity-60 pointer-events-none" />
            <div className="relative overflow-hidden rounded-xl"
              style={{ width:"clamp(200px,42vw,252px)", aspectRatio:"2/3",
                boxShadow:"0 0 0 1px rgba(201,162,54,0.18),0 28px 64px rgba(0,0,0,0.85),0 8px 20px rgba(0,0,0,0.5)" }}>
              <Image src="/cover-finn.png" alt="NEXT LEVEL: FINN – Buchcover von Daniel Feigenbutz" fill className="object-cover object-center" sizes="252px" />
            </div>
          </div>
          <p className="text-[#c9a236] font-semibold text-lg leading-snug">Fremde Stadt. Fremde Sprache. Ein neues Ich.</p>
          <p className="text-[#b0a898] text-base leading-relaxed max-w-sm">
            Tausend Kilometer von zu Hause. Eine fremde Sprache, eine neue Stadt – und plötzlich kennt niemand den Finn, der er bisher gewesen ist.
            <br /><br />
            Für ein Austauschjahr verlässt Finn Hamburg und zieht nach Paris. Zwischen einer neuen Schule, fremden Menschen und einer Stadt, die sich nicht dafür interessiert, wer er bisher war, bekommt er etwas, das er zu Hause kaum hatte: die Freiheit, sich selbst neu kennenzulernen. Dabei begegnet er Menschen, die ganz unterschiedliche Vorstellungen davon haben, was ein guter und richtiger Lebensweg ist.
            <br /><br />
            Je länger Finn in Paris lebt, desto stärker beschäftigt ihn eine Frage: Wie viel von dem, was wir für unsere eigenen Wünsche und Entscheidungen halten, stammt wirklich von uns – und wie viel davon wurde uns von Eltern, Schule, Freunden oder gesellschaftlichen Erwartungen mitgegeben?
            <br /><br />
            NEXT LEVEL: FINN ist eine Geschichte über Selbstfindung, Freundschaft, Liebe und den Mut, die richtigen Fragen zu stellen – auch dann, wenn die Antworten unbequem werden.
          </p>
          <a href="https://amzn.eu/d/0e8EivRF" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#c9a236] hover:bg-[#d4b050] text-[#070c18] font-bold px-8 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200 hover:shadow-[0_0_28px_rgba(201,162,54,0.4)]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            Bei Amazon kaufen
          </a>
        </div>

        {/* ══ Desktop layout: 2-row × 2-col grid ═══════════════════════════════
            Row 1: [empty]  [badge]
            Row 2: [cover]  [title + series + subtitle + desc + button]       */}
        <div className="hidden md:grid gap-x-24"
          style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto" }}>

          {/* Row 1, Col 2: Badge */}
          <div style={{ gridColumn: 2, gridRow: 1 }} className="flex items-center pb-3">
            <div className="inline-flex items-center gap-2 bg-[#c9a236]/10 border border-[#c9a236]/20 rounded-full px-5 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a236]" />
              <span className="text-[11px] font-semibold tracking-[0.4em] text-[#c9a236] uppercase">Jetzt erhältlich</span>
            </div>
          </div>

          {/* Row 2, Col 1: Cover */}
          <div style={{ gridColumn: 1, gridRow: 2 }} className="flex justify-end self-start">
            <div className="relative group">
              <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(232,160,48,0.10)_0%,transparent_65%)] opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative overflow-hidden rounded-xl transition-transform duration-500 group-hover:-translate-y-2"
                style={{ width:"clamp(200px,42vw,252px)", aspectRatio:"2/3",
                  boxShadow:"0 0 0 1px rgba(201,162,54,0.18),0 28px 64px rgba(0,0,0,0.85),0 8px 20px rgba(0,0,0,0.5)" }}>
                <Image src="/cover-finn.png" alt="NEXT LEVEL: FINN – Buchcover von Daniel Feigenbutz" fill className="object-cover object-center" sizes="252px" />
              </div>
            </div>
          </div>

          {/* Row 2, Col 2: Text block */}
          <div style={{ gridColumn: 2, gridRow: 2 }} className="flex flex-col items-start self-start">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-1">NEXT LEVEL: <span className="text-[#c9a236]">FINN</span></h2>
            <span className="inline-block text-[10px] font-semibold tracking-[0.35em] text-[#c9a236]/70 uppercase mb-5">1. Spin-off</span>
            <p className="text-[#c9a236] font-semibold text-lg mb-6 leading-snug">Fremde Stadt. Fremde Sprache. Ein neues Ich.</p>
            <p className="text-[#b0a898] text-base leading-relaxed mb-10 max-w-sm">
              Tausend Kilometer von zu Hause. Eine fremde Sprache, eine neue Stadt – und plötzlich kennt niemand den Finn, der er bisher gewesen ist.
              <br /><br />
              Für ein Austauschjahr verlässt Finn Hamburg und zieht nach Paris. Zwischen einer neuen Schule, fremden Menschen und einer Stadt, die sich nicht dafür interessiert, wer er bisher war, bekommt er etwas, das er zu Hause kaum hatte: die Freiheit, sich selbst neu kennenzulernen. Dabei begegnet er Menschen, die ganz unterschiedliche Vorstellungen davon haben, was ein guter und richtiger Lebensweg ist.
              <br /><br />
              Je länger Finn in Paris lebt, desto stärker beschäftigt ihn eine Frage: Wie viel von dem, was wir für unsere eigenen Wünsche und Entscheidungen halten, stammt wirklich von uns – und wie viel davon wurde uns von Eltern, Schule, Freunden oder gesellschaftlichen Erwartungen mitgegeben?
              <br /><br />
              NEXT LEVEL: FINN ist eine Geschichte über Selbstfindung, Freundschaft, Liebe und den Mut, die richtigen Fragen zu stellen – auch dann, wenn die Antworten unbequem werden.
            </p>
            <a href="https://amzn.eu/d/0e8EivRF" target="_blank" rel="noopener noreferrer"
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
