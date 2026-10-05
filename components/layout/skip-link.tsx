import { site } from "@/content/site";

export function SkipLink() {
  return (
    <a
      href="#contenido"
      className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ciruela px-5 py-3 text-sm text-crema transition-transform focus:translate-y-0"
    >
      {site.ui.skipLink}
    </a>
  );
}
