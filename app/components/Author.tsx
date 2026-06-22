"use client";

export default function Author() {
  return (
    <section id="autor" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1220] to-[#080d18] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-start text-center md:text-left">

          {/* Monogramm-Avatar */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1a2e50] to-[#0d1828] border border-[#c9a236]/20 flex items-center justify-center shadow-[0_0_32px_rgba(201,162,54,0.1)]">
                <span className="text-2xl font-black text-[#c9a236] select-none tracking-tight">DF</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#c9a236]" />
            </div>
          </div>

          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.4em] text-[#c9a236] uppercase mb-3">
              Der Autor
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Daniel Feigenbutz
            </h2>
            <p className="text-[#9aacca] text-base leading-relaxed">
              NEXT LEVEL entstand aus dem Wunsch, Geschichten zu erzählen,
              die unterhalten und gleichzeitig Mut machen.
            </p>
            <p className="text-[#9aacca] text-base leading-relaxed mt-4">
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
