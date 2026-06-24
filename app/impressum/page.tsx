import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – NEXT LEVEL",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-[11px] font-semibold tracking-[0.4em] text-[#c9a236] uppercase mb-4">
        {title}
      </h2>
      <div className="text-[#b0a898] text-base leading-relaxed space-y-1">
        {children}
      </div>
    </div>
  );
}

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#070c18] px-6 py-20">
      <div className="max-w-2xl mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#c9a236]/60 hover:text-[#c9a236] mb-12 transition-colors duration-200"
        >
          ← Zurück
        </Link>

        <h1 className="text-4xl font-black text-white uppercase tracking-wide mb-12">
          Impressum
        </h1>

        <Section title="Angaben gemäß § 5 TMG">
          <p>Daniel Feigenbutz – Executive Sparring &amp; Consulting</p>
          <p>Benrodestraße 44a</p>
          <p>40597 Düsseldorf</p>
          <p>Deutschland</p>
        </Section>

        <Section title="Kontakt">
          <p>
            E-Mail:{" "}
            <a
              href="mailto:hallo@nextlevel-books.de"
              className="text-[#c9a236] hover:text-[#d4b050] transition-colors duration-200"
            >
              hallo@nextlevel-books.de
            </a>
          </p>
        </Section>

        <Section title="Umsatzsteuer">
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          </p>
          <p>DE331105309</p>
        </Section>

        <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <p>Daniel Feigenbutz</p>
          <p>Benrodestraße 44a</p>
          <p>40597 Düsseldorf</p>
        </Section>

        <Section title="Haftung für Inhalte">
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder
            nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
            hinweisen.
          </p>
          <p className="mt-3">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
            von entsprechenden Rechtsverletzungen werden wir diese Inhalte
            umgehend entfernen.
          </p>
        </Section>

        <Section title="Haftung für Links">
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
          <p className="mt-3">
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
            Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
            der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
            der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </Section>

        <Section title="Urheberrecht">
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers.
          </p>
        </Section>

      </div>
    </main>
  );
}
