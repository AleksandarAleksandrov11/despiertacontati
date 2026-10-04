import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Hablemos. Reserva tu sesión en Valencia u online.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Contacto",
    title: "Hablemos.",
    subtitle: "Reserva tu sesión en Valencia u online.",
  });
}
