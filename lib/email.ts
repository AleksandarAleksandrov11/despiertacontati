import { contactoPage } from "@/content/paginas";
import { guia } from "@/content/guia";
import type { ContactInput, GuideInput } from "./schemas";
import { absoluteUrl } from "./utils";

function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function labelFor(list: readonly { value: string; label: string }[], value: string) {
  return list.find((item) => item.value === value)?.label ?? value;
}

function layout(title: string, rows: [string, string][]) {
  const body = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 0;color:#6e5a66;font-size:13px;width:140px;vertical-align:top">${escape(label)}</td><td style="padding:10px 0;color:#3f2e3a;font-size:15px;white-space:pre-wrap">${escape(value)}</td></tr>`,
    )
    .join("");
  return `<div style="background:#fbf7f2;padding:32px;font-family:Arial,sans-serif"><h1 style="font-family:Georgia,serif;font-weight:400;color:#3f2e3a;font-size:26px;margin:0 0 20px">${escape(title)}</h1><table style="border-collapse:collapse;width:100%">${body}</table></div>`;
}

export function contactEmail(data: ContactInput) {
  const servicio = labelFor(contactoPage.form.topics, data.servicio);
  const modalidad = labelFor(contactoPage.form.modalities, data.modalidad);
  const rows: [string, string][] = [
    ["Nombre", data.nombre],
    ["Contacto", data.contacto],
    ["Le interesa", servicio],
    ["Modalidad", modalidad],
    ["Mensaje", data.mensaje?.trim() || "Sin mensaje"],
  ];
  return {
    subject: `Nueva consulta: ${servicio} · ${data.nombre}`,
    html: layout("Nueva consulta desde la web", rows),
    text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
    replyTo: data.contacto.includes("@") ? data.contacto : undefined,
  };
}

export function guideNoticeEmail(data: GuideInput) {
  const copy = guia.aviso;
  const rows: [string, string][] = [
    [copy.name, data.nombre],
    [copy.email, data.email],
    [copy.news, data.novedades ? copy.yes : copy.no],
  ];
  return {
    subject: copy.subject,
    html: layout(copy.title, rows),
    text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
    replyTo: data.email,
  };
}

function emailButton(href: string, label: string) {
  return `<a href="${escape(href)}" style="display:inline-block;background:#3f2e3a;color:#fbf7f2;text-decoration:none;font-family:Arial,sans-serif;font-size:15px;padding:14px 28px;border-radius:999px;margin:6px 8px 6px 0">${escape(label)}</a>`;
}

export function guideEmail(data: GuideInput, audioAvailable: boolean) {
  const copy = guia.email;
  const pdf = absoluteUrl(guia.pdf);
  const audio = absoluteUrl(guia.audio);
  const buttons = [emailButton(pdf, copy.pdf), ...(audioAvailable ? [emailButton(audio, copy.audio)] : [])].join("");
  const html = `<div style="background:#f6e9e6;padding:32px 16px;font-family:Arial,sans-serif;color:#3f2e3a">
<span style="display:none;max-height:0;overflow:hidden">${escape(copy.preheader)}</span>
<div style="max-width:560px;margin:0 auto;background:#fbf7f2;border-radius:20px;padding:40px 32px">
<p style="margin:0 0 28px;font-family:Georgia,serif;font-style:italic;font-size:22px;color:#9c5f6c">Despierta <span style="font-size:15px;color:#6e5a66">con</span> <span style="color:#8e5f80">Tati</span></p>
<p style="margin:0 0 6px;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#6e5a66">${escape(guia.kicker)}</p>
<h1 style="margin:0 0 24px;font-family:Georgia,serif;font-weight:400;font-style:italic;font-size:34px;line-height:1.1;color:#3f2e3a">${escape(guia.title)}</h1>
<p style="margin:0 0 12px;font-size:16px;line-height:1.6">${escape(copy.greeting(data.nombre))}</p>
<p style="margin:0 0 24px;font-size:16px;line-height:1.6">${escape(copy.intro)}</p>
<p style="margin:0 0 24px">${buttons}</p>
<p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#6e5a66">${escape(copy.tip)}</p>
<p style="margin:0;font-size:16px;line-height:1.6">${escape(copy.signature)}<br><span style="font-family:Georgia,serif;font-style:italic;font-size:22px;color:#9c5f6c">${escape(copy.name)}</span></p>
<hr style="border:none;border-top:1px solid #e7dcd3;margin:32px 0 16px">
<p style="margin:0;font-size:12px;line-height:1.6;color:#6e5a66">${escape(copy.footer)}</p>
</div>
</div>`;
  const text = [
    copy.greeting(data.nombre),
    "",
    copy.intro,
    "",
    `${copy.pdf}: ${pdf}`,
    ...(audioAvailable ? [`${copy.audio}: ${audio}`] : []),
    "",
    copy.tip,
    "",
    copy.signature,
    copy.name,
    "",
    copy.footer,
  ].join("\n");
  return { subject: copy.subject, html, text };
}
