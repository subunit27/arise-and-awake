import { NextRequest, NextResponse } from "next/server";

async function addToKit(email: string, firstName: string): Promise<boolean> {
  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    console.warn("KIT_API_KEY or KIT_FORM_ID not set — skipping Kit subscription");
    return false;
  }

  const res = await fetch(`https://api.kit.com/v4/forms/${formId}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": apiKey,
    },
    body: JSON.stringify({
      email_address: email,
      first_name: firstName || undefined,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Kit API error:", err);
    return false;
  }

  return true;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, firstName = "", source = "course-page" } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = firstName.trim();

    const added = await addToKit(cleanEmail, cleanName);

    console.log(`Subscribe: ${cleanEmail} | source: ${source} | kit: ${added}`);

    return NextResponse.json({
      success: true,
      message: "Welcome to Arise & Awake. Day 1 is on its way.",
    });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
