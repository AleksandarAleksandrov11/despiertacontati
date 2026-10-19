import { Lock } from "lucide-react";
import { arcano, teaser } from "@/content/arcanos";
import { cn } from "@/lib/utils";

export function ArcanoTitle({ numero, size = "md" }: { numero: number; size?: "md" | "lg" }) {
  const datos = arcano(numero);
  return (
    <div className="flex items-center gap-4">
      <span
        className={cn(
          "nums grid shrink-0 place-items-center rounded-full font-serif text-ciruela",
          size === "lg"
            ? "size-20 bg-[radial-gradient(circle_at_40%_35%,#f3e2bd,#c8a46a_60%,#a8834b)] text-[2.4rem] shadow-[0_0_40px_-6px_rgba(200,164,106,0.7)]"
            : "size-14 bg-crema text-[1.7rem] ring-1 ring-dorado/60",
        )}
      >
        {numero}
      </span>
      <div>
        <p className={cn("font-serif leading-tight text-ciruela", size === "lg" ? "text-h3" : "text-[1.55rem]")}>{datos?.nombre}</p>
        <p className="mt-1 text-sm italic text-ink-soft">{datos?.clave}</p>
      </div>
    </div>
  );
}

export function LecturaCard({
  label,
  intro,
  numero,
  text,
  size = "md",
  className,
}: {
  label: string;
  intro: string;
  numero: number;
  text: string;
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <article className={cn("rounded-[1.25rem] bg-crema p-7 shadow-[0_30px_70px_-50px_rgba(63,46,58,0.5)] sm:p-9", className)}>
      <p className="eyebrow">{label}</p>
      <p className="mt-2 text-sm text-ink-soft">{intro}</p>
      <div className="mt-6">
        <ArcanoTitle numero={numero} size={size} />
      </div>
      <p className={cn("mt-6 text-ink", size === "lg" && "text-lead")}>{text}</p>
    </article>
  );
}

export function PropositoCard({
  label,
  etapa,
  partes,
  valores,
  resultado,
  text,
}: {
  label: string;
  etapa: string;
  partes: string[];
  valores: number[];
  resultado: number;
  text: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-[1.25rem] bg-crema/90 p-7 sm:p-8">
      <p className="eyebrow">{etapa}</p>
      <h3 className="mt-3 text-h3">{label}</h3>
      <p className="nums mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft">
        {partes.map((parte, index) => (
          <span key={parte} className="inline-flex items-center gap-2">
            {index > 0 && <span aria-hidden>+</span>}
            <span>
              {parte} <strong className="font-medium text-ciruela">{valores[index]}</strong>
            </span>
          </span>
        ))}
      </p>
      <div className="mt-6 border-t border-ciruela/10 pt-6">
        <ArcanoTitle numero={resultado} />
      </div>
      <p className="mt-5 flex-1 text-ink-soft">{text}</p>
    </article>
  );
}

export function BloqueadaCard({
  label,
  intro,
  numero,
  text,
  lock,
}: {
  label: string;
  intro: string;
  numero: number;
  text: string;
  lock: string;
}) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[1.25rem] bg-crema p-7 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <p className="eyebrow">{label}</p>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ciruela px-3 py-1 text-xs text-crema">
          <Lock size={12} strokeWidth={1.5} aria-hidden />
          {lock}
        </span>
      </div>
      <p className="mt-2 text-sm text-ink-soft">{intro}</p>
      <div className="mt-6">
        <ArcanoTitle numero={numero} />
      </div>
      <p className="mt-6 text-ink">{teaser(text)}</p>
      <div aria-hidden className="mt-4 space-y-2.5 blur-[3px]">
        <span className="block h-3 w-full rounded-full bg-ciruela/15" />
        <span className="block h-3 w-11/12 rounded-full bg-ciruela/15" />
        <span className="block h-3 w-3/4 rounded-full bg-ciruela/15" />
      </div>
    </article>
  );
}
