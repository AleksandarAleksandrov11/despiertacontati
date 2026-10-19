import type { ReactNode } from "react";
import { Blobs } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export function CalculadoraHero({ heading, children }: { heading: ReactNode; children: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-lavanda pb-16 pt-32 sm:pb-24 sm:pt-40">
      <Blobs variant="c" />
      <div className="container-page relative grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">{heading}</div>
        <div className="lg:col-span-6">{children}</div>
      </div>
    </section>
  );
}

const tones = {
  crema: "bg-crema",
  rosa: "bg-rosa-polvo",
  lavanda: "bg-lavanda",
  salvia: "bg-salvia",
};

export function ResultadosSection({
  id,
  eyebrow,
  title,
  text,
  tone,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  text?: string;
  tone: keyof typeof tones;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("section-pad relative overflow-hidden", tones[tone])}>
      <div className="container-page relative">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h2 id={`${id}-title`} className="text-h2">
            {title}
          </h2>
          {text && <p className="mt-5 text-lead text-ink-soft">{text}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
