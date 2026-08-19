const TO_EMAIL = "info@countmecr.com";

type ContactRequest = {
  name?: string;
  email?: string;
  message?: string;
};

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let payload: ContactRequest;

  try {
    payload = (await request.json()) as ContactRequest;
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = text(payload.name, 120);
  const email = text(payload.email, 160);
  const message = text(payload.message, 2500);

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const body = [
    "Countme website contact",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const notifyPayload = {
    _subject: `Countme contact: ${name}`,
    _template: "table" as const,
    _replyto: email,
    name,
    email,
    message: body,
  };

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(TO_EMAIL)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(notifyPayload),
      },
    );

    if (!response.ok) throw new Error("FormSubmit rejected the request.");
  } catch {
    return Response.json({
      ok: true,
      delivery: "client",
      notifyUrl: `https://formsubmit.co/ajax/${encodeURIComponent(TO_EMAIL)}`,
      notifyPayload,
    });
  }

  return Response.json({ ok: true });
}
