import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { guideSchema, type GuideInput } from "@/lib/schemas";
import { guideEmail, guideNoticeEmail } from "@/lib/email";
import { clientIp, createRateLimiter, senderAddress } from "@/lib/rate-limit";
import { guiaAudioDisponible } from "@/lib/descargas";
import { site } from "@/content/site";

const rateLimited = createRateLimiter(5, 10 * 60 * 1000);

async function saveContact(resend: Resend, data: GuideInput, audienceId: string) {
  const created = await resend.contacts.create({
    email: data.email,
    firstName: data.nombre,
    unsubscribed: !data.novedades,
    segments: [{ id: audienceId }],
  });
  if (!created.error) return;
  await resend.contacts.segments.add({ email: data.email, segmentId: audienceId });
  if (data.novedades) await resend.contacts.update({ email: data.email, unsubscribed: false });
}

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

  const parsed = guideSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_data" }, { status: 400 });
  }

  if (parsed.data.empresa) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ ok: true, mocked: true });
    }
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const data = parsed.data;
  const resend = new Resend(apiKey);
  const from = senderAddress();
  const email = guideEmail(data, guiaAudioDisponible);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [data.email],
      subject: email.subject,
      html: email.html,
      text: email.text,
    });
    if (error) {
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const notice = guideNoticeEmail(data);
  await Promise.allSettled([
    audienceId ? saveContact(resend, data, audienceId) : Promise.resolve(),
    resend.emails.send({
      from,
      to: [process.env.CONTACT_TO_EMAIL || site.contact.email],
      subject: notice.subject,
      html: notice.html,
      text: notice.text,
      replyTo: notice.replyTo,
    }),
  ]);

  return NextResponse.json({ ok: true });
}
