import { contactoPage } from "@/content/paginas";
import type { ContactInput, SubscribeInput } from "./schemas";

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

export function subscribeEmail(data: SubscribeInput) {
  const rows: [string, string][] = [["Email", data.email]];
  return {
    subject: "Nueva suscripción",
    html: layout("Nueva suscripción a novedades", rows),
    text: `Email: ${data.email}`,
    replyTo: data.email,
  };
}
