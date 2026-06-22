"use client";

const lines = [
  "Für Jugendliche zwischen 13 und 17 Jahren.",
  "Für alle, die sich manchmal fragen, wo sie eigentlich hingehören.",
  "Für Leserinnen und Leser, die Abenteuer, Geheimnisse, Freundschaft und echte Charakterentwicklung lieben.",
  "Für Eltern, Großeltern und Lehrkräfte, die moderne Jugendbücher mit Tiefgang suchen.",
];

export default function ForWhom() {
  return (
    <section className="py-28 px-6 relative text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080d18] via-[#090e1c] to-[#080d18] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto">
        <span className="inline-block text-[11px] font-semibold tracking-[0.45em] text-[#c9a236] uppercase mb-6">
          Für wen?
        </span>

        <h2 className="text-3xl md:text-4xl font-black text-white mb-16 leading-tight">
          Für wen ist{" "}
          <span className="text-[#c9a236]">NEXT LEVEL</span>?
        </h2>

        <div className="flex flex-col gap-10">
          {lines.map((line, i) => (
            <p key={i} className="text-[#b0a898] text-lg md:text-xl leading-relaxed font-light">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
