"use client";

import Image from "next/image";

/* Statisches metallisches Gold – kein Shine, kein Sweep */
const goldTextStyle: React.CSSProperties = {
  background:
    "linear-gradient(175deg, #f5df80 0%, #c9a236 18%, #7a5a10 38%, #d4a830 52%, #f0d060 62%, #a07020 76%, #c9a236 88%, #e8c850 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.7))",
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start md:justify-center px-6 pt-20 pb-16 md:py-28 overflow-hidden text-center bg-[#070c18]">

      {/* ── Hintergrundbild ─────────────────────────────── */}
      <div className="absolute inset-0 bg-[#070c18]">
        <Image
          src="/background.png"
          alt=""
          fill
          priority
          className="object-cover object-center scale-105"
          style={{ filter: "blur(3px) brightness(0.30)" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070c18]/70 via-[#070c18]/45 to-[#070c18]" />
      </div>

      {/* ── Wetterleuchten ──────────────────────────────── */}
      <div className="absolute inset-0 bg-[#b8cce0] pointer-events-none lightning-a" />
      <div className="absolute inset-0 bg-[#c0d0e8] pointer-events-none lightning-b" />
      <div className="absolute inset-0 bg-[#a8c0d8] pointer-events-none lightning-c" />

      {/* ── SVG-Blitze ──────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <svg className="bolt-1 absolute" style={{ top: "4%", left: "18%", width: "8vw", maxWidth: 80 }}
          viewBox="0 0 60 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 30 0 L 22 55 L 34 55 L 18 130" stroke="rgba(210,230,255,0.9)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 34 55 L 48 95" stroke="rgba(210,230,255,0.55)" strokeWidth="0.7" strokeLinecap="round"/>
          <path d="M 18 130 L 10 180" stroke="rgba(210,230,255,0.4)" strokeWidth="0.6" strokeLinecap="round"/>
          <path d="M 18 130 L 28 175" stroke="rgba(210,230,255,0.35)" strokeWidth="0.5" strokeLinecap="round"/>
        </svg>
        <svg className="bolt-2 absolute" style={{ top: "2%", right: "22%", width: "6vw", maxWidth: 60 }}
          viewBox="0 0 50 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 25 0 L 18 50 L 30 50 L 14 120" stroke="rgba(210,230,255,0.85)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 30 50 L 42 85" stroke="rgba(210,230,255,0.45)" strokeWidth="0.6" strokeLinecap="round"/>
          <path d="M 14 120 L 6 170" stroke="rgba(210,230,255,0.35)" strokeWidth="0.5" strokeLinecap="round"/>
        </svg>
        <svg className="bolt-3 absolute" style={{ top: "6%", left: "54%", width: "5vw", maxWidth: 50 }}
          viewBox="0 0 45 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 22 0 L 16 45 L 28 45 L 12 110" stroke="rgba(210,230,255,0.80)" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 28 45 L 38 78" stroke="rgba(210,230,255,0.40)" strokeWidth="0.6" strokeLinecap="round"/>
          <path d="M 12 110 L 20 155" stroke="rgba(210,230,255,0.30)" strokeWidth="0.5" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ── Textinhalt ─────────────────────────────────── */}
      <div className="relative flex flex-col items-center w-full max-w-2xl mx-auto" style={{ zIndex: 10 }}>

        <div className="fade-in">
          <span className="inline-block text-[11px] font-semibold tracking-[0.45em] text-[#c9a236] uppercase mb-8">
            Eine Jugendbuchreihe
          </span>
        </div>

        {/* Titel – statisch gold, kein Shine */}
        <div className="fade-in delay-1 mb-7 leading-[0.88]">
          <h1 className="text-[clamp(4rem,16vw,10rem)] font-black tracking-tight block" style={goldTextStyle}>
            NEXT
          </h1>
          <h1 className="text-[clamp(4rem,16vw,10rem)] font-black tracking-tight block" style={goldTextStyle}>
            LEVEL
          </h1>
        </div>

        <p className="fade-in delay-2 text-base md:text-lg text-[#b0a898] font-normal mb-10 max-w-md leading-relaxed">
          Geschichten über Freundschaft, Mut, Vertrauen und die Frage,
          wer du sein möchtest, wenn niemand zuschaut.
        </p>

        {/* Sätze gestaffelt: 2.0 / 3.1 / 4.2 / 5.7s */}
        <div className="mb-12 space-y-3 text-sm md:text-base">
          <p className="sentence sentence-1 text-[#b0a898]">Du musst nicht perfekt sein.</p>
          <p className="sentence sentence-2 text-[#b0a898]">Du musst nicht überall dazugehören.</p>
          <p className="sentence sentence-3 text-[#b0a898]">Du musst nicht alle Antworten kennen.</p>
          <p className="sentence-4 mt-6 text-white font-bold text-lg md:text-xl tracking-wide">
            Aber du bist nicht allein.
          </p>
        </div>

        <div className="fade-in delay-4 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none">
          <a href="#buch"
            className="inline-flex items-center justify-center bg-[#c9a236] hover:bg-[#d4b050] text-[#070c18] font-bold px-10 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200 hover:shadow-[0_0_32px_rgba(201,162,54,0.5)]">
            Zum Buch
          </a>
          <a href="#club"
            className="inline-flex items-center justify-center border border-[#c9a236]/45 text-[#c9a236] hover:bg-[#c9a236]/10 font-bold px-10 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200">
            Club-Warteliste
          </a>
        </div>
      </div>
    </section>
  );
}
