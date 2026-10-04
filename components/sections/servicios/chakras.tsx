"use client";

import { AnimatePresence, m } from "motion/react";
import { useState } from "react";
import { reikiPage } from "@/content/servicios";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export function Chakras() {
  const { chakras } = reikiPage;
  const [active, setActive] = useState(3);

  return (
    <Section tone="salvia" labelledBy="chakras-title">
      <div aria-hidden className="blob -left-32 top-10 size-[24rem] bg-lavanda/70 animate-drift-slow" />
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow={chakras.eyebrow} title={chakras.title} text={chakras.hint} id="chakras-title" />
        </Reveal>
        <Reveal delay={0.1} className="flex justify-center lg:justify-start">
          <div className="relative flex">
            <span aria-hidden className="absolute bottom-6 left-[1.375rem] top-6 w-px bg-gradient-to-b from-chakra-corona via-chakra-corazon to-chakra-raiz opacity-50" />
            <ol aria-label={chakras.eyebrow} className="relative flex flex-col gap-2 sm:gap-3">
              {chakras.items.map((item, index) => {
                const isActive = active === index;
                return (
                  <li key={item.name} className="relative flex items-center">
                    <button
                      type="button"
                      aria-label={`${item.name}: ${item.meaning}`}
                      aria-pressed={isActive}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      className="relative flex size-11 items-center justify-center"
                    >
                      <span
                        className={cn(
                          "rounded-full transition-all duration-700 ease-[var(--ease-breath)]",
                          isActive ? "size-7" : "size-4",
                        )}
                        style={{
                          backgroundColor: item.color,
                          boxShadow: isActive ? `0 0 0 8px color-mix(in srgb, ${item.color} 22%, transparent)` : undefined,
                        }}
                      />
                    </button>
                    <AnimatePresence>
                      {isActive && (
                        <m.span
                          key={item.name}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -4 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          aria-hidden
                          className="pointer-events-none absolute left-14 flex items-center gap-4 whitespace-nowrap"
                        >
                          <m.span
                            className="block h-px w-10 origin-left sm:w-16"
                            style={{ backgroundColor: item.color }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          />
                          <span>
                            <span className="block font-serif text-2xl leading-tight text-ciruela sm:text-3xl">{item.name}</span>
                            <span className="block text-sm text-ink-soft">{item.meaning}</span>
                          </span>
                        </m.span>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ol>
            <span aria-hidden className="block w-52 sm:w-80" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
