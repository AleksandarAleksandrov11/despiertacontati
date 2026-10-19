"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import type { Puntos, Tramo } from "@/lib/matriz";
import { pasosEnTiempo, type Variante } from "@/lib/matriz-geometria";
import { cn } from "@/lib/utils";
import { MatrizSvg } from "./matriz-svg";

type Props = {
  puntos: Puntos;
  etiquetas: [string, string, string, string];
  pasos: string[];
  valores: (string | null)[];
  skip: string;
  label: string;
  title: string;
  subtitle: string;
  resultsId: string;
  resultsLabel: string;
  instant?: boolean;
  destacados?: (keyof Puntos)[];
  actions?: ReactNode;
  variante?: Variante;
  edades?: Tramo[];
  etapaActiva?: { tramo: number; etapa: number } | null;
};

export function MatrizEscena({
  puntos,
  etiquetas,
  pasos,
  valores,
  skip,
  label,
  title,
  subtitle,
  resultsId,
  resultsLabel,
  instant = false,
  destacados,
  actions,
  variante = "individual",
  edades,
  etapaActiva,
}: Props) {
  const final = pasos.length - 1;
  const [step, setStep] = useState(instant ? final : 0);
  const [visible, setVisible] = useState(instant);
  const done = step >= final;
  const timers = useRef<number[]>([]);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible || !root.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(root.current);
    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    if (instant || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = window.setTimeout(() => setStep(final), 0);
      return () => window.clearTimeout(id);
    }
    timers.current = pasosEnTiempo[variante].slice(1).map((seconds, index) => window.setTimeout(() => setStep(index + 1), seconds * 1000));
    return () => timers.current.forEach((id) => window.clearTimeout(id));
  }, [final, instant, variante, visible]);

  function finish() {
    timers.current.forEach((id) => window.clearTimeout(id));
    setStep(final);
  }

  const valor = valores[step];

  return (
    <div ref={root} className="relative">
      <div className="relative mx-auto w-full max-w-[34rem]">
        <MatrizSvg
          puntos={puntos}
          etiquetas={etiquetas}
          done={done}
          paused={!visible}
          label={label}
          destacados={done ? destacados : []}
          variante={variante}
          edades={edades}
          etapaActiva={done ? etapaActiva : null}
        />
      </div>
      <div className="mx-auto mt-6 flex min-h-[9.5rem] max-w-xl flex-col items-center text-center">
        <div aria-hidden className="flex gap-1.5">
          {pasos.map((paso, index) => (
            <span
              key={paso}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                index <= step ? "w-6 bg-dorado" : "w-3 bg-crema/20",
              )}
            />
          ))}
        </div>
        <p aria-live="polite" className="mt-5 font-serif text-[clamp(1.5rem,1.2rem+1.2vw,2.2rem)] italic leading-tight text-crema">
          {done ? title : pasos[step]}
          {!done && valor && <span className="nums not-italic text-dorado-soft"> · {valor}</span>}
        </p>
        {done ? (
          <>
            <p className="mt-2 text-crema/70">{subtitle}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`#${resultsId}`}
                className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-crema px-7 py-3 text-[0.95rem] font-medium text-ciruela transition-colors duration-500 hover:bg-rosa-polvo"
              >
                {resultsLabel}
                <ArrowDown size={18} strokeWidth={1.25} aria-hidden />
              </a>
              {actions}
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={finish}
            className="mt-5 inline-flex min-h-11 items-center px-4 text-sm text-crema/70 underline underline-offset-4 transition-colors hover:text-crema"
          >
            {skip}
          </button>
        )}
      </div>
    </div>
  );
}
