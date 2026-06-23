import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // ── 1. Env-Check ───────────────────────────────────────────────────────────
  const apiKey        = process.env.BREVO_API_KEY;
  const listId        = process.env.BREVO_LIST_ID;
  const templateId    = process.env.BREVO_DOI_TEMPLATE_ID;
  const redirectionUrl = process.env.BREVO_DOI_REDIRECT_URL;

  console.log("[waitlist] env check:", {
    hasApiKey:        !!apiKey,
    apiKeyPrefix:     apiKey ? `${apiKey.slice(0, 4)}…` : "MISSING",
    hasListId:        !!listId,
    listIdRaw:        listId ?? "MISSING",
    listIdParsed:     Number(listId),
    listIdValid:      Number.isInteger(Number(listId)) && Number(listId) > 0,
    hasTemplateId:    !!templateId,
    templateIdRaw:    templateId ?? "MISSING",
    hasRedirectionUrl: !!redirectionUrl,
    redirectionUrl:   redirectionUrl ?? "MISSING",
  });

  if (!apiKey) {
    console.error("[waitlist] BREVO_API_KEY is not set or empty");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }
  if (!listId) {
    console.error("[waitlist] BREVO_LIST_ID is not set or empty");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }
  if (!templateId) {
    console.error("[waitlist] BREVO_DOI_TEMPLATE_ID is not set or empty");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }
  if (!redirectionUrl) {
    console.error("[waitlist] BREVO_DOI_REDIRECT_URL is not set or empty");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const listIdNum     = Number(listId);
  const templateIdNum = Number(templateId);

  if (!Number.isInteger(listIdNum) || listIdNum <= 0) {
    console.error("[waitlist] BREVO_LIST_ID is not a valid positive integer:", listId);
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }
  if (!Number.isInteger(templateIdNum) || templateIdNum <= 0) {
    console.error("[waitlist] BREVO_DOI_TEMPLATE_ID is not a valid positive integer:", templateId);
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  // ── 2. Request-Body parsen ─────────────────────────────────────────────────
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

  // ── 3. Brevo Double-Opt-In-Endpunkt aufrufen ───────────────────────────────
  // POST /v3/contacts/doubleOptinConfirmation
  // Brevo versendet die DOI-Mail automatisch und trägt den Kontakt erst nach
  // Bestätigung des Links aktiv in die Liste ein.
  const payload: Record<string, unknown> = {
    email,
    includeListIds: [listIdNum],
    templateId:     templateIdNum,
    redirectionUrl,
  };

  if (firstname?.trim()) {
    payload.attributes = { FIRSTNAME: firstname.trim() };
  }

  console.log("[waitlist] calling Brevo DOI API for:", email, "listId:", listIdNum, "templateId:", templateIdNum);

  let res: Response;
  try {
    res = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
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

  // Brevo: 201 = DOI-Mail wurde versendet (Kontakt noch nicht aktiv)
  if (res.status >= 200 && res.status < 300) {
    console.log("[waitlist] DOI email triggered, Brevo status:", res.status);
    return NextResponse.json({ success: true });
  }

  let errorBody: unknown = "(no body)";
  try { errorBody = await res.json(); } catch { /* ignore */ }

  console.error("[waitlist] Brevo DOI API error:", {
    status:   res.status,
    headers:  Object.fromEntries(res.headers.entries()),
    body:     errorBody,
    listId:   listIdNum,
    templateId: templateIdNum,
    email,
  });

  return NextResponse.json({ error: "Eintragung fehlgeschlagen" }, { status: 500 });
}
