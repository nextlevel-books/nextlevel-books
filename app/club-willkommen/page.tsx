import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Willkommen im NEXT LEVEL Club",
  robots: { index: false, follow: false },
};

const perks = [
  "Einblicke hinter die Kulissen",
  "Bonusmaterial zu Figuren, Orten und Storylines",
  "Updates zu neuen Bänden",
  "Aktionen und besondere Inhalte für Club-Mitglieder",
];

async function updateFirstname(email: string, firstname: string): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("[club-willkommen] BREVO_API_KEY missing, skipping FIRSTNAME update");
    return;
  }

  // 1. Alle Kontaktattribute abrufen → korrekten Feldnamen für Vorname ermitteln
  try {
    const attrRes = await fetch("https://api.brevo.com/v3/contacts/attributes", {
      headers: { "api-key": apiKey },
    });
    const attrData = await attrRes.json();
    const attrs = (attrData.attributes ?? []).map((a: Record<string, unknown>) => ({
      category: a.category,
      name:     a.name,
      type:     a.type,
    }));
    console.log("[club-willkommen] contact attributes:", JSON.stringify(attrs));
  } catch (e) {
    console.error("[club-willkommen] attributes fetch error:", e);
  }

  // 2. FIRSTNAME setzen (Attributname wird durch Log oben verifiziert)
  try {
    const putRes = await fetch(
      `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json", "api-key": apiKey },
        body: JSON.stringify({ attributes: { FIRSTNAME: firstname } }),
      }
    );
    if (putRes.ok || putRes.status === 204) {
      console.log("[club-willkommen] PUT FIRSTNAME succeeded, status:", putRes.status);
    } else {
      const body = await putRes.json().catch(() => ({}));
      console.error("[club-willkommen] PUT FIRSTNAME failed:", { status: putRes.status, body });
    }
  } catch (e) {
    console.error("[club-willkommen] PUT error:", e);
  }

  // 3. Kontakt direkt danach lesen → prüfen ob Attribut gespeichert wurde
  try {
    const getRes = await fetch(
      `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
      { headers: { "api-key": apiKey } }
    );
    const contact = await getRes.json();
    console.log("[club-willkommen] contact attributes after PUT:", JSON.stringify(contact.attributes ?? {}));
  } catch (e) {
    console.error("[club-willkommen] GET after PUT error:", e);
  }
}

export default async function ClubWillkommen({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; fn?: string }>;
}) {
  const params = await searchParams;
  const email     = params.email?.trim() ?? "";
  const firstname = params.fn?.trim() ?? "";

  // Serverseitig FIRSTNAME in Brevo aktualisieren, sobald DOI bestätigt wurde.
  if (email && firstname) {
    await updateFirstname(email, firstname);
  }

  return (
    <main className="min-h-screen bg-[#070c18] flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">

      {/* Subtiler Hintergrundschimmer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,162,54,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-xl w-full flex flex-col items-center">

        {/* Bestätigungs-Icon */}
        <div className="w-16 h-16 rounded-full bg-[#c9a236]/10 border border-[#c9a236]/25 flex items-center justify-center mb-8">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#c9a236]/10 border border-[#c9a236]/20 rounded-full px-5 py-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a236]" />
          <span className="text-[11px] font-semibold tracking-[0.4em] text-[#c9a236] uppercase">
            Next Level Club
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3 uppercase tracking-wide">
          Willkommen im<br />
          <span className="text-[#c9a236]">NEXT LEVEL Club</span>
        </h1>

        <p className="text-[#e8a030] font-semibold text-lg mb-8 leading-snug">
          Deine Anmeldung ist bestätigt.
        </p>

        {/* Intro-Text */}
        <p className="text-[#b0a898] text-base leading-relaxed mb-12 max-w-md">
          Schön, dass du dabei bist. Ab jetzt bekommst du exklusive Einblicke
          in die Welt von NEXT LEVEL, Hintergrundmaterial zur Jugendbuchreihe,
          Hinweise auf neue Bücher und besondere Aktionen nur für Club-Mitglieder.
        </p>

        {/* Was dich erwartet */}
        <div className="w-full border border-[#c9a236]/15 rounded-xl p-8 mb-12 text-left">
          <p className="text-[11px] font-semibold tracking-[0.4em] text-[#c9a236] uppercase mb-5">
            Was dich erwartet
          </p>
          <ul className="flex flex-col gap-4">
            {perks.map((perk, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c9a236] flex-shrink-0" />
                <span className="text-[#b0a898] text-base leading-relaxed">{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#c9a236] hover:bg-[#d4b050] text-[#070c18] font-bold px-10 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200 hover:shadow-[0_0_32px_rgba(201,162,54,0.5)]"
        >
          Zur NEXT LEVEL Seite
        </Link>

      </div>
    </main>
  );
}
