import { join } from "node:path";
import { Font } from "@react-pdf/renderer";

let registradas = false;

export function registrarFuentes() {
  if (registradas) return;
  const dir = join(process.cwd(), "assets/fonts");
  Font.register({
    family: "Cormorant",
    fonts: [
      { src: join(dir, "cormorant-garamond-500.ttf"), fontWeight: 500 },
      { src: join(dir, "cormorant-garamond-400-italic.ttf"), fontWeight: 400, fontStyle: "italic" },
    ],
  });
  Font.register({
    family: "Manrope",
    fonts: [
      { src: join(dir, "manrope-400.ttf"), fontWeight: 400 },
      { src: join(dir, "manrope-500.ttf"), fontWeight: 500 },
      { src: join(dir, "manrope-600.ttf"), fontWeight: 600 },
    ],
  });
  Font.register({ family: "Allura", src: join(dir, "allura-400.ttf") });
  Font.registerHyphenationCallback((word) => [word]);
  registradas = true;
}
