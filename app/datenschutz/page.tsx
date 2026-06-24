import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – NEXT LEVEL",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-[11px] font-semibold tracking-[0.4em] text-[#c9a236] uppercase mb-4">
        {title}
      </h2>
      <div className="text-[#b0a898] text-base leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[#070c18] px-6 py-20">
      <div className="max-w-2xl mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#c9a236]/60 hover:text-[#c9a236] mb-12 transition-colors duration-200"
        >
          ← Zurück
        </Link>

        <h1 className="text-4xl font-black text-white uppercase tracking-wide mb-4">
          Datenschutzerklärung
        </h1>
        <p className="text-[#b0a898] text-base leading-relaxed mb-12">
          Stand: Juni 2025
        </p>

        <Section title="1. Verantwortlicher">
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <p>
            Daniel Feigenbutz<br />
            Benrodestraße 44a<br />
            40597 Düsseldorf<br />
            Deutschland<br />
            E-Mail:{" "}
            <a
              href="mailto:hallo@nextlevel-books.de"
              className="text-[#c9a236] hover:text-[#d4b050] transition-colors duration-200"
            >
              hallo@nextlevel-books.de
            </a>
          </p>
        </Section>

        <Section title="2. Hosting">
          <p>
            Diese Website wird gehostet bei Vercel Inc., 340 Pine Street, Suite 900,
            San Francisco, CA 94104, USA. Vercel verarbeitet beim Aufruf dieser
            Website automatisch Server-Logfiles, die technisch zur Auslieferung
            der Seite erforderlich sind (IP-Adresse, Zeitstempel, aufgerufene URL,
            HTTP-Statuscode, übertragene Datenmenge, Referrer, Browser-Kennung).
          </p>
          <p>
            Die Datenübertragung in die USA erfolgt auf Grundlage der
            Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c
            DSGVO). Vercel ist im EU-US Data Privacy Framework zertifiziert.
          </p>
          <p>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
            am stabilen Betrieb der Website).
          </p>
          <p>
            Weitere Informationen:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a236] hover:text-[#d4b050] transition-colors duration-200"
            >
              vercel.com/legal/privacy-policy
            </a>
          </p>
        </Section>

        <Section title="3. Schriften (Google Fonts)">
          <p>
            Diese Website verwendet Schriftarten über das Next.js-Schriftladesystem
            (<code className="text-[#c9a236] text-sm">next/font/google</code>).
            Die Schriften werden beim Build-Prozess einmalig von Google-Servern
            geladen und anschließend lokal auf unserem Hosting-Server gespeichert.
            Beim Besuch dieser Website werden <strong className="text-white">keine
            Verbindungen zu Google-Servern</strong> hergestellt. Es findet keine
            Übertragung personenbezogener Daten an Google statt.
          </p>
        </Section>

        <Section title="4. Club-Warteliste (Newsletter-Anmeldung)">
          <p>
            Auf dieser Website besteht die Möglichkeit, sich für den NEXT LEVEL
            Club einzutragen. Dabei werden folgende Daten erhoben:
          </p>
          <ul className="list-none space-y-1 pl-4 border-l border-[#c9a236]/20">
            <li>E-Mail-Adresse (Pflichtfeld)</li>
            <li>Vorname (freiwillig)</li>
          </ul>
          <p>
            Die Anmeldung erfolgt über ein Double-Opt-In-Verfahren: Nach Absenden
            des Formulars erhalten Sie eine Bestätigungsmail. Ihre Anmeldung wird
            erst nach Klick auf den Bestätigungslink aktiviert.
          </p>
          <p>
            Die erhobenen Daten werden ausschließlich für den Versand von
            Informationen zum NEXT LEVEL Club (neue Bücher, Bonusinhalte,
            exklusive Aktionen) verwendet.
          </p>
          <p>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die
            Einwilligung kann jederzeit ohne Angabe von Gründen widerrufen werden,
            indem Sie auf den Abmeldelink in einer unserer E-Mails klicken oder
            uns per E-Mail kontaktieren. Die Rechtmäßigkeit der bis zum Widerruf
            erfolgten Verarbeitung bleibt unberührt.
          </p>
        </Section>

        <Section title="5. Auftragsverarbeitung – Brevo">
          <p>
            Der Versand von E-Mails sowie die Verwaltung von Kontaktdaten erfolgt
            über den Dienst Brevo (Sendinblue SAS), 55 rue d'Amsterdam, 75008 Paris,
            Frankreich.
          </p>
          <p>
            Brevo verarbeitet Ihre E-Mail-Adresse und Ihren Vornamen (sofern
            angegeben) in unserem Auftrag auf Grundlage eines
            Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO. Die
            Datenverarbeitung erfolgt auf Servern innerhalb der EU.
          </p>
          <p>
            Weitere Informationen:{" "}
            <a
              href="https://www.brevo.com/de/legal/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a236] hover:text-[#d4b050] transition-colors duration-200"
            >
              brevo.com/de/legal/privacypolicy
            </a>
          </p>
        </Section>

        <Section title="6. Amazon-Partnerlinks">
          <p>
            Diese Website enthält Links zu Produkten auf Amazon. Beim Klick auf
            einen solchen Link werden Sie direkt auf die Website von Amazon
            weitergeleitet. Amazon erhebt dabei Daten gemäß eigener
            Datenschutzerklärung. Wir nehmen an keinem Affiliate-Programm teil
            und erhalten keine Provision für Käufe über diese Links.
          </p>
          <p>
            Weitere Informationen:{" "}
            <a
              href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a236] hover:text-[#d4b050] transition-colors duration-200"
            >
              Datenschutzerklärung Amazon
            </a>
          </p>
        </Section>

        <Section title="7. Kontaktaufnahme per E-Mail">
          <p>
            Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten
            Daten (Name, E-Mail-Adresse, Nachrichteninhalt) zum Zweck der
            Bearbeitung Ihrer Anfrage gespeichert. Diese Daten geben wir nicht
            ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
            an der Beantwortung von Anfragen) bzw. Art. 6 Abs. 1 lit. b DSGVO,
            sofern Ihre Anfrage auf den Abschluss eines Vertrags gerichtet ist.
          </p>
        </Section>

        <Section title="8. Cookies und Tracking">
          <p>
            Diese Website verwendet keine Tracking-Cookies, keine Analyse-Tools
            (Google Analytics, Matomo o. ä.), kein Pixel-Tracking (Meta, TikTok
            o. ä.) und keine Werbetechnologien. Es werden ausschließlich technisch
            notwendige Prozesse zur Auslieferung der Seite genutzt.
          </p>
        </Section>

        <Section title="9. Ihre Rechte">
          <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
          <ul className="list-none space-y-2 pl-4 border-l border-[#c9a236]/20">
            <li><strong className="text-white">Auskunft</strong> – Art. 15 DSGVO</li>
            <li><strong className="text-white">Berichtigung</strong> – Art. 16 DSGVO</li>
            <li><strong className="text-white">Löschung</strong> – Art. 17 DSGVO</li>
            <li><strong className="text-white">Einschränkung der Verarbeitung</strong> – Art. 18 DSGVO</li>
            <li><strong className="text-white">Widerspruch gegen die Verarbeitung</strong> – Art. 21 DSGVO</li>
            <li><strong className="text-white">Datenübertragbarkeit</strong> – Art. 20 DSGVO</li>
            <li><strong className="text-white">Widerruf einer Einwilligung</strong> – Art. 7 Abs. 3 DSGVO</li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a
              href="mailto:hallo@nextlevel-books.de"
              className="text-[#c9a236] hover:text-[#d4b050] transition-colors duration-200"
            >
              hallo@nextlevel-books.de
            </a>
          </p>
          <p>
            Sie haben zudem das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde
            zu beschweren. Zuständig ist die Landesbeauftragte für Datenschutz und
            Informationsfreiheit Nordrhein-Westfalen (LDI NRW),{" "}
            <a
              href="https://www.ldi.nrw.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a236] hover:text-[#d4b050] transition-colors duration-200"
            >
              www.ldi.nrw.de
            </a>
            .
          </p>
        </Section>

      </div>
    </main>
  );
}
