"use client";

import { m, useReducedMotion } from "motion/react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { inicio } from "@/content/paginas";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const PHASE_SECONDS = 4;
const scales = [1, 1, 0.62];
const initialClock = { phase: 0, left: PHASE_SECONDS, cycles: 0 };

export function Respira({ headingLevel = "h2" }: { headingLevel?: "h2" | "h3" }) {
  const copy = inicio.respira;
  const reduce = useReducedMotion();
  const [running, setRunning] = useState(false);
  const [{ phase, left, cycles }, setClock] = useState(initialClock);
  const [started, setStarted] = useState(false);
  const Heading = headingLevel;

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setClock((clock) => {
        if (clock.left > 1) return { ...clock, left: clock.left - 1 };
        const next = (clock.phase + 1) % 3;
        return { phase: next, left: PHASE_SECONDS, cycles: next === 0 ? clock.cycles + 1 : clock.cycles };
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  function toggle() {
    setStarted(true);
    setRunning((value) => !value);
  }

  function reset() {
    setRunning(false);
    setStarted(false);
    setClock(initialClock);
  }

  const scale = !started ? 0.62 : scales[phase];

  return (
    <Section tone="salvia" labelledBy="respira-title">
      <div aria-hidden className="blob -right-24 -top-24 size-[22rem] bg-crema/70 animate-drift-slow" />
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-5">{copy.eyebrow}</p>
          <Heading id="respira-title" className="text-h2">
            {copy.title}
          </Heading>
          <p className="mt-5 max-w-sm text-lead text-ink-soft">{copy.text}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={toggle}
              aria-pressed={running}
              className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-ciruela px-7 text-[0.95rem] font-medium text-crema transition-colors duration-500 hover:bg-malva-deep"
            >
              {running ? <Pause size={18} strokeWidth={1.25} aria-hidden /> : <Play size={18} strokeWidth={1.25} aria-hidden />}
              {running ? copy.pause : copy.start}
            </button>
            {started && (
              <button
                type="button"
                onClick={reset}
                aria-label={copy.reset}
                className="inline-flex size-12 items-center justify-center rounded-full border border-ciruela/25 text-ciruela hover:border-ciruela/60"
              >
                <RotateCcw size={18} strokeWidth={1.25} aria-hidden />
              </button>
            )}
            <p className="ml-2 text-sm text-ink-soft">
              <span className="font-serif text-2xl text-ciruela">{cycles}</span> {copy.cycles}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <div className="relative flex aspect-square w-full max-w-[22rem] items-center justify-center sm:max-w-[26rem]">
            <span aria-hidden className="absolute inset-0 rounded-full border border-ciruela/10" />
            <span aria-hidden className="absolute inset-[19%] rounded-full border border-dashed border-ciruela/15" />
            <m.span
              aria-hidden
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,#fbf7f2,#dce8da_55%,#c9d9cc)] shadow-[0_30px_80px_-30px_rgba(63,46,58,0.35)]"
              initial={false}
              animate={{ scale: reduce ? 0.85 : scale }}
              transition={{ duration: started ? PHASE_SECONDS : 0.8, ease: [0.45, 0, 0.55, 1] }}
            />
            <div className="relative max-w-[62%] text-center">
              <p
                aria-live="polite"
                className={`font-serif italic leading-tight text-ciruela ${started ? "text-[clamp(2rem,1.6rem+1.6vw,2.75rem)]" : "text-[clamp(1.4rem,1.2rem+0.8vw,1.85rem)]"}`}
              >
                {started ? copy.phases[phase] : copy.idle}
              </p>
              {started && (
                <p aria-hidden className="mt-1 font-serif text-5xl text-ciruela/70">
                  {left}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
