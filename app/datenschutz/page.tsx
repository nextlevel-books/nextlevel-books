import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – NEXT LEVEL",
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#00c9c8] hover:text-[#00b0af] mb-10 transition-colors"
        >
          ← Zurück
        </Link>
        <h1 className="text-4xl font-black text-white mb-8">Datenschutz</h1>
        <div className="text-slate-300 space-y-4 text-base leading-relaxed">
          <p>
            <strong className="text-white">Datenschutzerklärung</strong>
          </p>
          <p>
            Diese Website erhebt keine personenbezogenen Daten, die über die
            technisch notwendige Verbindung hinausgehen.
          </p>
          <p>
            Das Kontaktformular (Club-Warteliste) ist derzeit ein Platzhalter
            und sendet keine Daten an externe Dienste.
          </p>
          <p>
            <strong className="text-white">Verantwortlicher</strong>
            <br />
            Daniel Feigenbutz
            <br />
            E-Mail: kontakt@danielfeigenbutz.de
          </p>
          <p className="text-slate-500 text-sm mt-8">
            Diese Datenschutzerklärung ist ein Platzhalter und muss vor dem
            Livegang durch eine vollständige Erklärung gemäß DSGVO ersetzt
            werden.
          </p>
        </div>
      </div>
    </main>
  );
}
