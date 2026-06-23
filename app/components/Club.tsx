"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

// ── Erfolgsmeldung ──────────────────────────────────────────────────────────
// Aktuell: direkte Bestätigung (kein Double Opt-In aktiv).
// Für Double Opt-In später austauschen mit SUCCESS_MESSAGE_DOI:
const SUCCESS_MESSAGE =
  "Wir melden uns, sobald es Neuigkeiten gibt.";

// TODO: aktivieren sobald Double Opt-In in Brevo eingeschaltet ist:
// const SUCCESS_MESSAGE_DOI =
//   "Fast geschafft. Du erhältst gleich eine E-Mail zur Bestätigung deiner " +
//   "Anmeldung. Bitte klicke auf den Link in der E-Mail, damit du Neuigkeiten " +
//   "aus der Welt von NEXT LEVEL erhältst.";

export default function Club() {
  const [email, setEmail]         = useState("");
  const [firstname, setFirstname] = useState("");
  const [status, setStatus]       = useState<Status>("idle");
  const [errorMsg, setErrorMsg]   = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstname: firstname || undefined }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Etwas ist schiefgelaufen. Bitte versuche es erneut.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Keine Verbindung. Bitte versuche es erneut.");
      setStatus("error");
    }
  };

  return (
    <section id="club" className="py-20 px-6 relative overflow-hidden text-center bg-[#070c18]">
      {/* Subtiler Radialschimmer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,162,54,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center w-full">

        <div className="inline-flex items-center gap-2 bg-[#c9a236]/10 border border-[#c9a236]/20 rounded-full px-5 py-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a236] animate-pulse" />
          <span className="text-[11px] font-semibold tracking-[0.4em] text-[#c9a236] uppercase">
            Exklusiv
          </span>
        </div>

        {/*
          DER       → weiß
          NEXT LEVEL CLUB → komplett gold, Großbuchstaben
          ENTSTEHT  → weiß
        */}
        <h2 className="text-3xl md:text-4xl font-black leading-snug mb-4 uppercase tracking-wide">
          <span className="text-white block">Der</span>
          <span className="text-[#c9a236] block">Next Level Club</span>
          <span className="text-white block">entsteht</span>
        </h2>

        <p className="text-[#b0a898] text-base leading-relaxed mb-12 max-w-md">
          Trage dich ein und erfahre als Erstes von neuen Büchern,
          Bonusgeschichten und exklusiven Inhalten.
        </p>

        {status === "success" ? (
          <div className="border border-[#c9a236]/20 rounded-xl p-10 w-full max-w-md">
            <div className="w-12 h-12 rounded-full bg-[#c9a236]/10 flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a236" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <p className="text-[#c9a236] font-bold text-lg mb-1">Du bist dabei!</p>
            <p className="text-[#b0a898] text-sm">{SUCCESS_MESSAGE}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
            {/* Vorname (optional) */}
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Vorname (optional)"
              className="w-full bg-[#0d1828] border border-[#1a2e50] focus:border-[#c9a236]/50 focus:outline-none text-[#e8e0d0] placeholder:text-[#3a5070] px-5 py-4 rounded-lg text-sm transition-colors duration-200"
            />
            {/* E-Mail + Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="deine@email.de"
                className="flex-1 bg-[#0d1828] border border-[#1a2e50] focus:border-[#c9a236]/50 focus:outline-none text-[#e8e0d0] placeholder:text-[#3a5070] px-5 py-4 rounded-lg text-sm transition-colors duration-200"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#c9a236] hover:bg-[#d4b050] disabled:opacity-60 disabled:cursor-not-allowed text-[#070c18] font-bold px-6 py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase transition-all duration-200 hover:shadow-[0_0_20px_rgba(201,162,54,0.35)] whitespace-nowrap"
              >
                {status === "loading" ? "…" : "Auf die Warteliste"}
              </button>
            </div>

            {status === "error" && (
              <p className="text-red-400 text-xs text-left mt-1">{errorMsg}</p>
            )}
          </form>
        )}

        <p className="text-[#3a5070] text-xs mt-6">Kein Spam. Jederzeit abmeldbar.</p>
      </div>
    </section>
  );
}
