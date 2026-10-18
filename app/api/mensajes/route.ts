import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas";
import { contactEmail } from "@/lib/email";
import { clientIp, createRateLimiter, senderAddress } from "@/lib/rate-limit";
import { site } from "@/content/site";

const rateLimited = createRateLimiter(5, 10 * 60 * 1000);

export async function POST(request: NextRequest) {
  if (rateLimited(clientIp(request))) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_data" }, { status: 400 });
  }

  if (parsed.data.empresa) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.contact.email;

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ ok: true, mocked: true });
    }
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const email = contactEmail(parsed.data);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: senderAddress(),
      to: [to],
      subject: email.subject,
      html: email.html,
      text: email.text,
      ...(email.replyTo ? { replyTo: email.replyTo } : {}),
    });
    if (error) {
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
