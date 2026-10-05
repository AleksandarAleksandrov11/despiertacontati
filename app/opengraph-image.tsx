import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Despierta. Conócete, toma conciencia y elige mejor.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Terapeuta holística en Valencia",
    title: "Despierta.",
    subtitle: "Conócete, toma conciencia y elige mejor.",
  });
}
