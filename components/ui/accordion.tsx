"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";
import type { Faq } from "@/content/faqs";
import { cn } from "@/lib/utils";

export function Accordion({ items, tone = "light" }: { items: Faq[]; tone?: "light" | "dark" }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ul className={cn("border-t", tone === "light" ? "border-ciruela/15" : "border-crema/20")}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-b-${index}`;
        const panelId = `${baseId}-p-${index}`;
        return (
          <li key={item.question} className={cn("border-b", tone === "light" ? "border-ciruela/15" : "border-crema/20")}>
            <h3 className="font-sans text-base">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="group flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-serif text-[clamp(1.25rem,1.1rem+0.6vw,1.6rem)] leading-snug">{item.question}</span>
                <span
                  className={cn(
                    "inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color] duration-500 ease-[var(--ease-breath)]",
                    tone === "light" ? "border-ciruela/20 group-hover:bg-white/60" : "border-crema/30",
                    isOpen && "rotate-45",
                  )}
                >
                  <Plus size={18} strokeWidth={1.25} aria-hidden />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-700 ease-[var(--ease-breath)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className={cn("max-w-2xl pb-6 pr-12", tone === "light" ? "text-ink-soft" : "text-crema/80")}>
                  {item.answer}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
