import Image from "next/image";

const books = [
  {
    href: "#buch",
    src: "/cover.png",
    alt: "NEXT LEVEL – Buchcover",
    title: "NEXT LEVEL",
    series: "Hauptreihe",
    status: "Jetzt erhältlich",
    pulse: false,
  },
  {
    href: "#finn",
    src: "/cover-finn.png",
    alt: "NEXT LEVEL: FINN – Buchcover",
    title: "NEXT LEVEL: FINN",
    series: "1. Spin-off",
    status: "Jetzt erhältlich",
    pulse: false,
  },
  {
    href: "#leo",
    src: "/cover-leo.webp",
    alt: "NEXT LEVEL: LEO – Buchcover",
    title: "NEXT LEVEL: LEO",
    series: "2. Spin-off",
    status: "Frühjahr 2027",
    pulse: true,
  },
];

export default function BookNav() {
  return (
    <section className="py-10 px-6 bg-[#070c18] border-b border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-4 sm:gap-8">
          {books.map((book) => (
            <a
              key={book.href}
              href={book.href}
              className="group flex flex-col items-center gap-3 text-center"
            >
              {/* Cover */}
              <div
                className="relative overflow-hidden rounded-lg w-full transition-transform duration-300 group-hover:-translate-y-1"
                style={{
                  aspectRatio: "2/3",
                  boxShadow:
                    "0 0 0 1px rgba(201,162,54,0.15),0 12px 32px rgba(0,0,0,0.7)",
                }}
              >
                <Image
                  src={book.src}
                  alt={book.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 30vw, 200px"
                />
              </div>

              {/* Title */}
              <p className="text-white font-bold text-xs sm:text-sm leading-tight">
                {book.title}
              </p>

              {/* Status */}
              <span className="inline-flex items-center gap-1.5">
                {book.pulse && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a236] animate-pulse flex-shrink-0" />
                )}
                <span className="text-[#c9a236] text-[9px] sm:text-[10px] font-semibold tracking-[0.3em] uppercase">
                  {book.status}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
