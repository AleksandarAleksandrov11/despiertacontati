import { guia } from "@/content/guia";
import { cn } from "@/lib/utils";

const chakras = [
  "var(--color-chakra-raiz)",
  "var(--color-chakra-sacro)",
  "var(--color-chakra-plexo)",
  "var(--color-chakra-corazon)",
  "var(--color-chakra-garganta)",
  "var(--color-chakra-tercer-ojo)",
  "var(--color-chakra-corona)",
];

export function EbookCover({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[17rem] [perspective:1400px]", className)}>
      <div
        role="img"
        aria-label={`Portada de la guía ${guia.title}`}
        className="relative aspect-[3/4] w-full overflow-hidden rounded-r-xl rounded-l-sm bg-crema shadow-[0_40px_70px_-30px_rgba(63,46,58,0.55),0_8px_18px_-10px_rgba(63,46,58,0.35)] [transform:rotateY(-14deg)_rotateX(3deg)] [transform-style:preserve-3d]"
      >
        <span aria-hidden className="absolute -right-16 -top-16 size-48 rounded-full bg-rosa-polvo blur-2xl" />
        <span aria-hidden className="absolute -bottom-20 -left-10 size-52 rounded-full bg-lavanda blur-2xl" />
        <span aria-hidden className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-ciruela/25 via-ciruela/5 to-transparent" />
        <span aria-hidden className="absolute inset-3 rounded-r-lg border border-dorado/40" />
        <span className="relative flex h-full flex-col justify-between px-7 pb-7 pt-9">
          <span className="block text-[0.6rem] font-medium uppercase tracking-[0.24em] text-ink-soft">{guia.kicker}</span>
          <span className="block">
            <span className="block font-serif text-[2.6rem] italic leading-[0.95] text-ciruela">{guia.title}</span>
            <span aria-hidden className="mt-5 block h-px w-12 bg-dorado" />
            <span className="mt-4 block text-[0.75rem] leading-snug text-ink-soft">{guia.puntos.map((punto) => punto.title).join(" · ")}</span>
          </span>
          <span className="flex items-end justify-between">
            <span className="flex items-baseline gap-1 leading-none">
              <span className="script-accent text-[1.6rem] text-rosa-deep">Despierta</span>
              <span className="font-serif text-[0.7rem] italic text-ink-soft">con</span>
              <span className="script-accent text-[1.6rem] text-malva-deep">Tati</span>
            </span>
            <span aria-hidden className="flex gap-1">
              {chakras.map((color) => (
                <span key={color} className="size-1.5 rounded-full" style={{ backgroundColor: color }} />
              ))}
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}
