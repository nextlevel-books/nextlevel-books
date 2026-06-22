"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 overflow-hidden text-center">

      {/* ── Hintergrundbild ────────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src="/background.png"
          alt=""
          fill
          priority
          className="object-cover object-center scale-105"
          style={{ filter: "blur(3px) brightness(0.32)" }}
          sizes="100vw"
        />
        {/* Navy-Overlay: Lesbarkeit + Übergang nach unten */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d18]/65 via-[#0a1228]/45 to-[#080d18]" />
      </div>

      {/* ── Wetterleuchten (3 unabhängige Lagen, sehr subtil) ── */}
      <div className="absolute inset-0 bg-[#8ab0d8] pointer-events-none lightning-a" />
      <div className="absolute inset-0 bg-[#a0c0e0] pointer-events-none lightning-b" />
      <div className="absolute inset-0 bg-[#90b8d8] pointer-events-none lightning-c" />

      {/* ── Inhalt ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center w-full">

        {/* Kicker */}
        <div className="fade-in">
          <span className="inline-block text-[11px] font-semibold tracking-[0.45em] text-[#c9a236] uppercase mb-8">
            Eine Jugendbuchreihe
          </span>
        </div>

        {/* Titel */}
        <h1 className="fade-in delay-1 text-[clamp(4rem,16vw,10rem)] font-black leading-[0.88] tracking-tight text-white mb-7 drop-shadow-2xl">
          NEXT<br />
          <span className="text-[#c9a236]">LEVEL</span>
        </h1>

        {/* Untertitel */}
        <p className="fade-in delay-2 text-base md:text-lg text-[#b0a898] font-normal mb-12 max-w-md leading-relaxed">
          Geschichten über Freundschaft, Mut, Vertrauen und die Frage,
          wer du sein möchtest, wenn niemand zuschaut.
        </p>

        {/* Sätze — filmisch nacheinander eingeblendet */}
        <div className="mb-14 space-y-3 text-sm md:text-base">
          <p className="sentence sentence-1 text-[#b0a898]">Du musst nicht perfekt sein.</p>
          <p className="sentence sentence-2 text-[#b0a898]">Du musst nicht überall dazugehören.</p>
          <p className="sentence sentence-3 text-[#b0a898]">Du musst nicht alle Antworten kennen.</p>
          <p className="sentence-last mt-5 text-white font-semibold text-base md:text-lg">
            Aber du bist nicht allein.
          </p>
        </div>

        {/* Buttons */}
        <div className="fade-in delay-4 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none">
          <a
            href="#buch"
            className="inline-flex items-center justify-center bg-[#c9a236] hover:bg-[#d4b050] text-[#080d18] font-bold px-10 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200 hover:shadow-[0_0_32px_rgba(201,162,54,0.5)]"
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
