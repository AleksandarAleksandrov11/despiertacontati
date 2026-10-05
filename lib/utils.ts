import { clsx, type ClassValue } from "clsx";
import { site } from "@/content/site";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function whatsappHref(message: string = site.whatsappMessages.general) {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
