"use client";

const lines = [
  "Für Jugendliche zwischen 13 und 17 Jahren.",
  "Für alle, die sich manchmal fragen, wo sie eigentlich hingehören.",
  "Für Leserinnen und Leser, die Abenteuer, Geheimnisse, Freundschaft und echte Charakterentwicklung lieben.",
  "Für Eltern, Großeltern und Lehrkräfte, die moderne Jugendbücher mit Tiefgang suchen.",
];

export default function ForWhom() {
  return (
    <section className="py-20 px-6 relative text-center overflow-hidden bg-[#070c18]">
      <div className="relative z-10 max-w-xl mx-auto">
        <span className="inline-block text-[11px] font-semibold tracking-[0.45em] text-[#c9a236] uppercase mb-6">
          Für wen?
        </span>

        {/*
          "NEXT LEVEL" darf nicht zwischen den Wörtern umbrechen.
          Lösung: whitespace-nowrap auf dem goldenen Span.
        */}
        <h2 className="text-3xl md:text-4xl font-black text-white mb-14 leading-tight">
          Für wen ist{" "}
          <span className="text-[#c9a236] whitespace-nowrap">NEXT LEVEL</span>?
        </h2>

        <div className="flex flex-col gap-8">
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
