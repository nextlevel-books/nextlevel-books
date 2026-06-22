"use client";

export default function Book() {
  return (
    <section id="buch" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#080d16] to-[#0a0f1a] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Book cover visual */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(0,201,200,0.15)_0%,transparent_70%)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Book card */}
              <div className="relative w-64 md:w-72 aspect-[2/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-[#0f1e3a] to-[#060c18] transition-transform duration-500 group-hover:-translate-y-2">
                {/* Cover art placeholder — architectural dark atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0c1830] via-[#071020] to-[#030810]" />

                {/* Building silhouette layers */}
                <div className="absolute inset-0 flex flex-col justify-end">
                  <div className="w-full h-3/5 relative">
                    {/* Building facade */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-full bg-gradient-to-t from-[#1a2540] to-[#0d1830] rounded-t-sm" />
                    {/* Windows */}
                    {[0, 1, 2, 3, 4].map((row) =>
                      [0, 1, 2, 3, 4].map((col) => (
                        <div
                          key={`${row}-${col}`}
                          className="absolute w-2 h-3 rounded-sm"
                          style={{
                            bottom: `${12 + row * 18}%`,
                            left: `${28 + col * 10}%`,
                            background:
                              (row + col) % 3 === 0
                                ? "rgba(201,168,76,0.7)"
                                : "rgba(255,255,255,0.05)",
                          }}
                        />
                      ))
                    )}
                  </div>
                </div>

                {/* Overlay gradient top */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#060c18] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030810] via-transparent to-transparent" />

                {/* Title overlay */}
                <div className="absolute top-6 inset-x-0 text-center">
                  <div className="text-3xl font-black tracking-widest text-[#c9a84c] drop-shadow-lg leading-tight">
                    NEXT
                    <br />
                    LEVEL
                  </div>
                </div>

                {/* Subtitle */}
                <div className="absolute bottom-10 inset-x-0 text-center px-4">
                  <p className="text-[10px] font-semibold tracking-widest text-white/80 uppercase">
                    Daniel Feigenbutz
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.35em] text-[#00c9c8] uppercase mb-4">
              Band 1
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
              NEXT LEVEL
            </h2>

            <p className="text-[#c9a84c] font-semibold text-lg mb-6">
              Fünf Fremde. Sechs Wochen. Keine zweite Chance.
            </p>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Fünf Jugendliche. Ein leerstehendes Gebäude. Eine Aufgabe, die
              niemand von ihnen wollte.
              <br />
              <br />
              Was als Schulprojekt beginnt, wird zu einer Reise voller
              Konflikte, Freundschaften, Geheimnisse und Entscheidungen, die
              alles verändern können.
            </p>

            <a
              href="https://amzn.eu/d/01jVEtHN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#b8943d] text-[#0a0f1a] font-bold px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-200 hover:shadow-[0_0_24px_rgba(201,168,76,0.35)]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              Jetzt bei Amazon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
