import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  inquiry?: string;
  preferredTime?: string;
  message?: string;
  locale?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "ghabayenhussej@gmail.com";

    if (!apiKey) {
      console.info("[contact] RESEND_API_KEY missing. Submission:", body);
      return NextResponse.json({ ok: true, mode: "logged" });
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${body.phone || "N/A"}`,
        `Interest: ${body.interest || "N/A"}`,
        `Inquiry type: ${body.inquiry || "N/A"}`,
        `Preferred time: ${body.preferredTime || "N/A"}`,
        `Locale: ${body.locale || "en"}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
