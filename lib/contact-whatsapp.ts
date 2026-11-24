import { contactoPage } from "@/content/paginas";
import type { ContactInput } from "./schemas";
import { formatosDe, opcionesDe, productoDe } from "./contacto";
import { whatsappHref } from "./utils";

const copy = contactoPage.form;

export function contactWhatsappHref(values: Partial<ContactInput>) {
  const w = copy.whatsapp;
  const tema = copy.topics.find((item) => item.value === values.servicio)?.label;
  const producto = productoDe(values.producto);
  const opcion = opcionesDe(values.servicio).find((item) => item.value === values.producto);
  const nombreProducto = producto?.nombre ?? opcion?.label;

  let motivo: string = w.forOther;
  if (nombreProducto) motivo = w.forProduct(nombreProducto);
  else if (tema && values.servicio !== "no-lo-se") motivo = w.forTopic(tema);

  const lines = [`${w.greeting} ${motivo}.`, "", `*${w.name}:* ${values.nombre?.trim() ?? ""}`];
  const contacto = values.contacto?.trim();
  if (contacto) lines.push(`*${w.contact}:* ${contacto}`);
  if (tema && values.servicio !== "no-lo-se") lines.push(`*${w.topic}:* ${tema}`);
  if (nombreProducto) lines.push(`*${w.item}:* ${nombreProducto}${opcion?.detalle ? ` (${opcion.detalle.toLowerCase()})` : ""}`);
  const formato = formatosDe(producto).find((item) => item.value === values.formato);
  if (formato) lines.push(`*${w.format}:* ${formato.label}${formato.detalle ? ` (${formato.detalle})` : ""}`);
  if (values.pdf) lines.push(`*${w.pdf}*`);
  const message = values.mensaje?.trim();
  if (message) lines.push("", `*${w.message}:*`, message);
  lines.push("", w.closing);
  return whatsappHref(lines.join("\n"));
}
