"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060c18] via-[#0a0f1a] to-[#0a0f1a] pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,201,200,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Title */}
        <div className="fade-in">
          <span className="inline-block text-xs font-semibold tracking-[0.35em] text-[#00c9c8] uppercase mb-6">
            Eine Jugendbuchreihe
          </span>
        </div>

        <h1 className="fade-in delay-1 text-[clamp(4rem,16vw,10rem)] font-black leading-none tracking-tight text-white mb-6">
          NEXT
          <br />
          <span className="text-[#00c9c8]">LEVEL</span>
        </h1>

        <p className="fade-in delay-2 text-lg md:text-xl text-slate-300 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
          Geschichten über Freundschaft, Mut, Vertrauen und die Frage, wer du
          sein möchtest, wenn niemand zuschaut.
        </p>

        <div className="fade-in delay-3 text-slate-400 text-base md:text-lg leading-loose mb-12 space-y-1">
          <p>Du musst nicht perfekt sein.</p>
          <p>Du musst nicht überall dazugehören.</p>
          <p>Du musst nicht alle Antworten kennen.</p>
          <p className="mt-4 text-slate-300 font-medium">
            Aber du bist nicht allein.
          </p>
        </div>

        <div className="fade-in delay-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#buch"
            className="inline-flex items-center justify-center gap-2 bg-[#00c9c8] hover:bg-[#00b0af] text-[#0a0f1a] font-bold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,201,200,0.4)]"
          >
            Zum Buch
          </a>
          <a
            href="#club"
            className="inline-flex items-center justify-center gap-2 border border-[#00c9c8] text-[#00c9c8] hover:bg-[rgba(0,201,200,0.08)] font-bold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-200"
          >
            Club-Warteliste
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in delay-5">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#00c9c8] mx-auto opacity-60" />
      </div>
    </section>
  );
}
