"use client";

import Image from "next/image";

/* Metallisches Gold-Gradient – nah am Cover-Schriftzug */
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
    /*
      bg-[#050913] als harter Fallback – verhindert jeden hellblauen
      Zwischenzustand, bevor das Hintergrundbild geladen ist.
    */
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 overflow-hidden text-center bg-[#050913]">

      {/* ── Hintergrundbild ─────────────────────────────── */}
      <div className="absolute inset-0 bg-[#050913]">
        <Image
          src="/background.png"
          alt=""
          fill
          priority
          className="object-cover object-center scale-105"
          style={{ filter: "blur(3px) brightness(0.30)" }}
          sizes="100vw"
        />
        {/* Navy-Overlay: Lesbarkeit + Fade nach unten */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050913]/75 via-[#080d18]/50 to-[#050913]" />
      </div>

      {/* ── Wetterleuchten (3 Lagen, opaque Farbe, opacity via CSS) */}
      {/* Farbe: gedämpftes kaltes Weiß-Blau wie Blitzlicht hinter Wolken */}
      <div className="absolute inset-0 bg-[#b8cce0] pointer-events-none lightning-a" />
      <div className="absolute inset-0 bg-[#c0d0e8] pointer-events-none lightning-b" />
      <div className="absolute inset-0 bg-[#a8c0d8] pointer-events-none lightning-c" />

      {/* ── Inhalt ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center w-full">

        {/* Kicker */}
        <div className="fade-in">
          <span className="inline-block text-[11px] font-semibold tracking-[0.45em] text-[#c9a236] uppercase mb-8">
            Eine Jugendbuchreihe
          </span>
        </div>

        {/* Titel – beide Zeilen metallisch gold wie auf dem Cover */}
        <div className="fade-in delay-1 mb-7 leading-[0.88]">
          <h1
            className="text-[clamp(4rem,16vw,10rem)] font-black tracking-tight block"
            style={goldTextStyle}
          >
            NEXT
          </h1>
          <h1
            className="text-[clamp(4rem,16vw,10rem)] font-black tracking-tight block"
            style={goldTextStyle}
          >
            LEVEL
          </h1>
        </div>

        {/* Untertitel */}
        <p className="fade-in delay-2 text-base md:text-lg text-[#b0a898] font-normal mb-12 max-w-md leading-relaxed">
          Geschichten über Freundschaft, Mut, Vertrauen und die Frage,
          wer du sein möchtest, wenn niemand zuschaut.
        </p>

        {/* Sätze – filmisch gestaffelt eingeblendet */}
        <div className="mb-14 space-y-3 text-sm md:text-base">
          <p className="sentence sentence-1 text-[#b0a898]">Du musst nicht perfekt sein.</p>
          <p className="sentence sentence-2 text-[#b0a898]">Du musst nicht überall dazugehören.</p>
          <p className="sentence sentence-3 text-[#b0a898]">Du musst nicht alle Antworten kennen.</p>
          <p className="sentence-last mt-6 text-white font-semibold text-base md:text-xl tracking-wide">
            Aber du bist nicht allein.
          </p>
        </div>

        {/* Buttons */}
        <div className="fade-in delay-4 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none">
          <a
            href="#buch"
            className="inline-flex items-center justify-center bg-[#c9a236] hover:bg-[#d4b050] text-[#050913] font-bold px-10 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200 hover:shadow-[0_0_32px_rgba(201,162,54,0.5)]"
          >
            Zum Buch
          </a>
          <a
            href="#club"
            className="inline-flex items-center justify-center border border-[#c9a236]/45 text-[#c9a236] hover:bg-[#c9a236]/10 font-bold px-10 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200"
          >
            Club-Warteliste
          </a>
        </div>
      </div>
    </section>
  );
}
