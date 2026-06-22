"use client";

export default function Author() {
  return (
    <section id="autor" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#06101e] to-[#0a0f1a] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
          {/* Avatar placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-[#0f2040] to-[#060c18] border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Monogram */}
                <span className="text-3xl font-black text-[#00c9c8] select-none">
                  DF
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#00c9c8]" />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.35em] text-[#00c9c8] uppercase mb-3">
              Der Autor
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Daniel Feigenbutz
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              NEXT LEVEL entstand aus dem Wunsch, Geschichten zu erzählen, die
              unterhalten und gleichzeitig Mut machen.
            </p>
            <p className="text-slate-300 text-base leading-relaxed mt-4">
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
