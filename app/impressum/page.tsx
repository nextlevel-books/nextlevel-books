import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – NEXT LEVEL",
};

export default function Impressum() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#00c9c8] hover:text-[#00b0af] mb-10 transition-colors"
        >
          ← Zurück
        </Link>
        <h1 className="text-4xl font-black text-white mb-8">Impressum</h1>
        <div className="text-slate-300 space-y-4 text-base leading-relaxed">
          <p>
            <strong className="text-white">Angaben gemäß § 5 TMG</strong>
          </p>
          <p>
            Daniel Feigenbutz
            <br />
            [Adresse]
            <br />
            [PLZ Ort]
          </p>
          <p>
            <strong className="text-white">Kontakt</strong>
            <br />
            E-Mail: kontakt@danielfeigenbutz.de
          </p>
          <p className="text-slate-500 text-sm mt-8">
            Dieses Impressum ist ein Platzhalter und muss vor dem Livegang
            vervollständigt werden.
          </p>
        </div>
      </div>
    </main>
  );
}
