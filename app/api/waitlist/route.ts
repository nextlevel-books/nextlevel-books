import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    console.error("BREVO_API_KEY or BREVO_LIST_ID not configured");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  let body: { email?: string; firstname?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { email, firstname } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const payload: Record<string, unknown> = {
    email,
    listIds: [Number(listId)],
    // updateEnabled: contact already exists → just add to list, no error
    updateEnabled: true,
  };

  if (firstname?.trim()) {
    payload.attributes = { FIRSTNAME: firstname.trim() };
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(payload),
  });

  // 201 = created, 204 = already exists but updated → both are success
  if (res.status === 201 || res.status === 204) {
    return NextResponse.json({ success: true });
  }

  const errorData = await res.json().catch(() => ({}));
  console.error("Brevo API error:", res.status, errorData);
  return NextResponse.json(
    { error: "Could not save contact" },
    { status: 500 }
  );
}
