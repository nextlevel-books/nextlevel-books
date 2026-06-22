"use client";

import Image from "next/image";

export default function Author() {
  return (
    <section id="autor" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1220] to-[#080d18] pointer-events-none" />

      {/* Dezente goldene Linie oben */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#c9a236]/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-start text-center md:text-left">

          {/* Autorenfoto */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <div
              className="relative overflow-hidden rounded-2xl flex-shrink-0"
              style={{
                width: "clamp(160px, 35vw, 200px)",
                aspectRatio: "1 / 1",
                boxShadow: "0 20px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,162,54,0.1)",
              }}
            >
              <Image
                src="/autor.png"
                alt="Daniel Feigenbutz – Autor"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col items-center md:items-start">
            <span className="inline-block text-xs font-semibold tracking-[0.4em] text-[#c9a236] uppercase mb-3">
              Der Autor
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Daniel Feigenbutz
            </h2>
            <p className="text-[#7a90ae] text-base leading-relaxed max-w-sm">
              NEXT LEVEL entstand aus dem Wunsch, Geschichten zu erzählen,
              die unterhalten und gleichzeitig Mut machen.
            </p>
            <p className="text-[#7a90ae] text-base leading-relaxed mt-4 max-w-sm">
              Im Mittelpunkt stehen Jugendliche, die lernen, ihren eigenen Weg
              zu finden, unterschiedliche Perspektiven zu verstehen und sich
              selbst treu zu bleiben.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
