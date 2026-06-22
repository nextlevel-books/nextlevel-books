"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden text-center">

      {/* Cover als Hintergrundbild */}
      <div className="absolute inset-0">
        <Image
          src="/cover.png"
          alt="NEXT LEVEL Cover"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Schichten: oben dunkel für Text-Lesbarkeit, unten dunkler Übergang */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d18]/80 via-[#080d18]/55 to-[#080d18]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">

        <div className="fade-in">
          <span className="inline-block text-xs font-semibold tracking-[0.4em] text-[#c9a236] uppercase mb-6">
            Eine Jugendbuchreihe
          </span>
        </div>

        <h1 className="fade-in delay-1 text-[clamp(3.5rem,14vw,9rem)] font-black leading-none tracking-tight text-white mb-5 drop-shadow-2xl">
          NEXT<br />
          <span className="text-[#c9a236]">LEVEL</span>
        </h1>

        <p className="fade-in delay-2 text-base md:text-lg text-[#c8d4e8] font-medium mb-8 max-w-md leading-relaxed">
          Geschichten über Freundschaft, Mut, Vertrauen und die Frage,
          wer du sein möchtest, wenn niemand zuschaut.
        </p>

        <div className="fade-in delay-3 text-[#9aacca] text-sm md:text-base leading-loose mb-10 space-y-0.5">
          <p>Du musst nicht perfekt sein.</p>
          <p>Du musst nicht überall dazugehören.</p>
          <p>Du musst nicht alle Antworten kennen.</p>
          <p className="mt-3 text-[#e8e0d0] font-semibold">Aber du bist nicht allein.</p>
        </div>

        <div className="fade-in delay-4 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm sm:max-w-none">
          <a
            href="#buch"
            className="inline-flex items-center justify-center bg-[#c9a236] hover:bg-[#d4b050] text-[#080d18] font-bold px-8 py-4 rounded-lg text-sm tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_28px_rgba(201,162,54,0.45)]"
          >
            Zum Buch
          </a>
          <a
            href="#club"
            className="inline-flex items-center justify-center border border-[#c9a236]/50 text-[#c9a236] hover:bg-[#c9a236]/10 font-bold px-8 py-4 rounded-lg text-sm tracking-widest uppercase transition-all duration-200"
          >
            Club-Warteliste
          </a>
        </div>
      </div>

      {/* Scroll-Linie */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in delay-5 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] text-[#c9a236]/60 uppercase">Mehr</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#c9a236]/60 to-transparent" />
      </div>
    </section>
  );
}
