import Image from "next/image";

const books = [
  {
    href: "#buch",
    src: "/cover.png",
    alt: "NEXT LEVEL – Buchcover",
    title: "NEXT LEVEL",
    titleShort: "NEXT LEVEL",
    status: "Jetzt erhältlich",
    pulse: false,
  },
  {
    href: "#finn",
    src: "/cover-finn.png",
    alt: "NEXT LEVEL: FINN – Buchcover",
    title: "NEXT LEVEL: FINN",
    titleShort: "FINN",
    status: "Jetzt erhältlich",
    pulse: false,
  },
  {
    href: "#leo",
    src: "/cover-leo.webp",
    alt: "NEXT LEVEL: LEO – Buchcover",
    title: "NEXT LEVEL: LEO",
    titleShort: "LEO",
    status: "Frühjahr 2027",
    pulse: true,
  },
];

export default function BookNav() {
  return (
    <section className="py-8 px-4 bg-[#070c18] border-b border-white/5">
      {/* max-w-[480px] caps the 3-cover group at ~150px per cover on desktop */}
      <div className="max-w-[480px] mx-auto">
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {books.map((book) => (
            <a
              key={book.href}
              href={book.href}
              className="group flex flex-col items-center gap-2 text-center"
            >
              {/* Cover */}
              <div
                className="relative overflow-hidden rounded-md w-full transition-transform duration-300 group-hover:-translate-y-1"
                style={{
                  aspectRatio: "2/3",
                  boxShadow:
                    "0 0 0 1px rgba(201,162,54,0.15),0 8px 20px rgba(0,0,0,0.7)",
                }}
              >
                <Image
                  src={book.src}
                  alt={book.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 480px) 28vw, 150px"
                />
              </div>

              {/* Title — full on sm+, short single word on xs */}
              <p className="text-white font-bold leading-tight text-[10px] sm:text-xs">
                <span className="hidden sm:inline">{book.title}</span>
                <span className="sm:hidden">{book.titleShort}</span>
              </p>

              {/* Status */}
              <span className="inline-flex items-center gap-1">
                {book.pulse && (
                  <span className="w-1 h-1 rounded-full bg-[#c9a236] animate-pulse flex-shrink-0" />
                )}
                <span className="text-[#c9a236] text-[8px] sm:text-[9px] font-semibold tracking-[0.2em] uppercase">
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
