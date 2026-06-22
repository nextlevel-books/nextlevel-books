import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // ── 1. Env-Check mit detailliertem Logging ─────────────────────────────
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  console.log("[waitlist] env check:", {
    hasApiKey:    !!apiKey,
    apiKeyLength: apiKey?.length ?? 0,
    // ersten 4 Zeichen zeigen, ob der Key überhaupt gelesen wird – kein Leak
    apiKeyPrefix: apiKey ? `${apiKey.slice(0, 4)}…` : "MISSING",
    hasListId:    !!listId,
    listIdRaw:    listId ?? "MISSING",          // Liste-ID ist kein Secret
    listIdParsed: Number(listId),
    listIdValid:  Number.isInteger(Number(listId)) && Number(listId) > 0,
  });

  if (!apiKey) {
    console.error("[waitlist] BREVO_API_KEY is not set or empty");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }
  if (!listId) {
    console.error("[waitlist] BREVO_LIST_ID is not set or empty");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const listIdNum = Number(listId);
  if (!Number.isInteger(listIdNum) || listIdNum <= 0) {
    console.error("[waitlist] BREVO_LIST_ID is not a valid positive integer:", listId);
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  // ── 2. Request-Body parsen ─────────────────────────────────────────────
  let body: { email?: string; firstname?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { email, firstname } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail-Adresse" }, { status: 400 });
  }

  // ── 3. Brevo API aufrufen ──────────────────────────────────────────────
  const payload: Record<string, unknown> = {
    email,
    listIds: [listIdNum],
    updateEnabled: true, // kein Fehler, wenn Kontakt bereits existiert
  };

  if (firstname?.trim()) {
    payload.attributes = { FIRSTNAME: firstname.trim() };
  }

  console.log("[waitlist] calling Brevo API for:", email, "listId:", listIdNum);

  let res: Response;
  try {
    res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(payload),
    });
  } catch (networkErr) {
    console.error("[waitlist] network error reaching Brevo:", networkErr);
    return NextResponse.json({ error: "Verbindungsfehler" }, { status: 502 });
  }

  // Brevo: 201 = angelegt, 204 = bereits vorhanden + aktualisiert
  // Beides gilt als Erfolg; zur Sicherheit akzeptieren wir alle 2xx
  if (res.status >= 200 && res.status < 300) {
    console.log("[waitlist] success, Brevo status:", res.status);
    return NextResponse.json({ success: true });
  }

  // Fehlerfall: Brevo-Antwort vollständig loggen
  let errorBody: unknown = "(no body)";
  try { errorBody = await res.json(); } catch { /* ignore */ }

  console.error("[waitlist] Brevo API error:", {
    status:   res.status,
    headers:  Object.fromEntries(res.headers.entries()),
    body:     errorBody,
    listId:   listIdNum,
    email,
  });

  return NextResponse.json({ error: "Eintragung fehlgeschlagen" }, { status: 500 });
}
