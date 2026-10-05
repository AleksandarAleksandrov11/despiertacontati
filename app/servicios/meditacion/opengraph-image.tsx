import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Meditación en Valencia y online Medita en lo cotidiano. Clases en grupo y meditaciones grabadas.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Meditación",
    title: "Meditación en Valencia y online",
    subtitle: "Medita en lo cotidiano. Clases en grupo y meditaciones grabadas.",
  });
}
