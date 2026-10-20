import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Meditación online. Medita en lo cotidiano. Clases en grupo, meditaciones guiadas y una guía gratuita.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Claridad",
    title: "Meditación online",
    subtitle: "Medita en lo cotidiano. Clases en grupo, meditaciones guiadas y una guía gratuita.",
  });
}
