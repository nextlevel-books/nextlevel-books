"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 overflow-hidden text-center">

      {/* Hintergrundbild – abgedunkelt, leicht weichgezeichnet */}
      <div className="absolute inset-0">
        <Image
          src="/background.png"
          alt=""
          fill
          priority
          className="object-cover object-center scale-105"
          style={{ filter: "blur(3px) brightness(0.35)" }}
          sizes="100vw"
        />
        {/* Navy-Overlay für maximale Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d18]/70 via-[#0a1228]/50 to-[#080d18]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">

        <div className="fade-in">
          <span className="inline-block text-xs font-semibold tracking-[0.4em] text-[#c9a236] uppercase mb-8">
            Eine Jugendbuchreihe
          </span>
        </div>

        <h1 className="fade-in delay-1 text-[clamp(4rem,16vw,10rem)] font-black leading-[0.9] tracking-tight text-white mb-6 drop-shadow-2xl">
          NEXT<br />
          <span className="text-[#c9a236]">LEVEL</span>
        </h1>

        <p className="fade-in delay-2 text-base md:text-lg text-[#c0cce0] font-medium mb-10 max-w-md leading-relaxed">
          Geschichten über Freundschaft, Mut, Vertrauen und die Frage,
          wer du sein möchtest, wenn niemand zuschaut.
        </p>

        <div className="fade-in delay-3 text-[#7a90ae] text-sm md:text-base leading-loose mb-12 space-y-1">
          <p>Du musst nicht perfekt sein.</p>
          <p>Du musst nicht überall dazugehören.</p>
          <p>Du musst nicht alle Antworten kennen.</p>
          <p className="mt-4 text-[#e8e0d0] font-semibold">Aber du bist nicht allein.</p>
        </div>

        <div className="fade-in delay-4 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none">
          <a
            href="#buch"
            className="inline-flex items-center justify-center bg-[#c9a236] hover:bg-[#d4b050] text-[#080d18] font-bold px-9 py-4 rounded-lg text-xs tracking-[0.2em] uppercase transition-all duration-200 hover:shadow-[0_0_32px_rgba(201,162,54,0.5)]"
          >
            Zum Buch
          </a>
          <a
            href="#club"
            className="inline-flex items-center justify-center border border-[#c9a236]/50 text-[#c9a236] hover:bg-[#c9a236]/10 font-bold px-9 py-4 rounded-lg text-xs tracking-[0.2em] uppercase transition-all duration-200"
          >
            Club-Warteliste
          </a>
        </div>
      </div>
    </section>
  );
}
