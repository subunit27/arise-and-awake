import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const SUBSCRIBERS_FILE = path.join(DATA_DIR, "subscribers.json");

interface Subscriber {
  email: string;
  firstName: string;
  subscribedAt: string;
  source: string;
}

async function getSubscribers(): Promise<Subscriber[]> {
  try {
    const raw = await readFile(SUBSCRIBERS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function saveSubscriber(subscriber: Subscriber) {
  await mkdir(DATA_DIR, { recursive: true });
  const existing = await getSubscribers();
  const alreadyExists = existing.some((s) => s.email === subscriber.email);
  if (!alreadyExists) {
    existing.push(subscriber);
    await writeFile(SUBSCRIBERS_FILE, JSON.stringify(existing, null, 2));
  }
  return !alreadyExists;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, firstName, source = "course-page" } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const subscriber: Subscriber = {
      email: email.trim().toLowerCase(),
      firstName: firstName?.trim() || "",
      subscribedAt: new Date().toISOString(),
      source,
    };

    const isNew = await saveSubscriber(subscriber);

    // TODO: Integrate Resend (or ConvertKit / Mailchimp) here to:
    // 1. Add subscriber to your email list
    // 2. Trigger the welcome email / Day 1 lesson
    //
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Shubh <shubh@ariseandawake.com>",
    //   to: email,
    //   subject: "Day 1: The Wake-Up Call — Arise & Awake begins now",
    //   html: day1EmailHTML,
    // });

    return NextResponse.json({
      success: true,
      message: isNew ? "Welcome to Arise & Awake." : "You're already on the list.",
    });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
