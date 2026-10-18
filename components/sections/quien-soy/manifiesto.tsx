"use client";

import { m } from "motion/react";
import { Section } from "@/components/ui/section";

export function Manifiesto({ lines, label }: { lines: string[]; label: string }) {
  return (
    <Section tone="ciruela" labelledBy="manifiesto">
      <div aria-hidden className="blob -right-40 top-10 size-[30rem] bg-malva/30 animate-drift-slow" />
      <h2 id="manifiesto" className="sr-only">
        {label}
      </h2>
      <m.ul
        className="relative flex flex-col gap-2 sm:gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -20% 0px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.45 } } }}
      >
        {lines.map((line, index) => (
          <m.li
            key={line}
            variants={{
              hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } },
            }}
            className={`font-serif text-[clamp(2.75rem,1.4rem+6.5vw,8rem)] leading-[0.98] text-crema ${index === lines.length - 1 ? "italic text-rosa" : ""} ${index === 1 ? "sm:pl-[12%]" : ""}`}
          >
            {line}
          </m.li>
        ))}
      </m.ul>
    </Section>
  );
}
