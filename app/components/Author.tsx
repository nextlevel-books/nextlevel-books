"use client";

import Image from "next/image";

export default function Author() {
  return (
    <section id="autor" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#090e1c] to-[#080d18] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-start text-center md:text-left">

          {/* ── Autorenfoto ────────────────────────────────────
              Originalrahmen im Bild → kein overflow-hidden, kein border-radius.
              Das Bild ist quadratisch mit goldener Border — unverändert zeigen.
          ─────────────────────────────────────────────────── */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <div
              className="relative flex-shrink-0"
              style={{
                width: "clamp(160px, 35vw, 210px)",
                aspectRatio: "1 / 1",
                boxShadow: "0 20px 50px rgba(0,0,0,0.55)",
              }}
            >
              <Image
                src="/autor.png"
                alt="Daniel Feigenbutz – Autor"
                fill
                className="object-cover"
                sizes="210px"
              />
            </div>
          </div>

          {/* ── Text ─────────────────────────────────────────── */}
          <div className="flex flex-col items-center md:items-start">
            <span className="inline-block text-[11px] font-semibold tracking-[0.45em] text-[#c9a236] uppercase mb-3">
              Der Autor
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-7 leading-tight">
              Daniel Feigenbutz
            </h2>

            <p className="text-[#b0a898] text-base leading-relaxed max-w-sm">
              Daniel Feigenbutz schreibt über Menschen, die ihren eigenen Weg suchen –
              in Führung, im Leben und jetzt auch in Geschichten für Jugendliche.
            </p>
            <p className="text-[#b0a898] text-base leading-relaxed mt-5 max-w-sm">
              Mit NEXT LEVEL verbindet er Coming-of-Age, Spannung und persönliche Entwicklung.
              Seine Bücher sollen nicht belehren, sondern Räume öffnen: für Fragen, Mut,
              Selbstvertrauen und neue Perspektiven.
            </p>
            <p className="text-[#b0a898] text-base leading-relaxed mt-5 max-w-sm">
              Denn manchmal beginnt Veränderung nicht mit einer Antwort, sondern mit dem
              Gefühl:{" "}
              <em className="text-white not-italic font-medium">
                Vielleicht bin ich gar nicht falsch.
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
