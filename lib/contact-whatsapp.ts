import { contactoPage } from "@/content/paginas";
import type { ContactInput } from "./schemas";
import { whatsappHref } from "./utils";

const copy = contactoPage.form;

function labelFor(list: readonly { value: string; label: string }[], value?: string) {
  return list.find((item) => item.value === value)?.label ?? "";
}

export function contactWhatsappHref(values: Partial<ContactInput>) {
  const w = copy.whatsapp;
  const lines = [
    w.greeting,
    "",
    `*${w.name}:* ${values.nombre?.trim() ?? ""}`,
    `*${w.contact}:* ${values.contacto?.trim() ?? ""}`,
    `*${w.topic}:* ${labelFor(copy.topics, values.servicio)}`,
    `*${w.modality}:* ${labelFor(copy.modalities, values.modalidad)}`,
  ];
  const message = values.mensaje?.trim();
  if (message) lines.push("", `*${w.message}:*`, message);
  return whatsappHref(lines.join("\n"));
}
