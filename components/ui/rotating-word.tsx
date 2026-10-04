"use client";

import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function RotatingWord({ words, interval = 2800, className }: { words: string[]; interval?: number; className?: string }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval, reduce]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden className="relative inline-grid overflow-hidden align-bottom">
        <span className="invisible col-start-1 row-start-1">
          {words.reduce((a, b) => (a.length >= b.length ? a : b))}
        </span>
        <AnimatePresence mode="popLayout" initial={false}>
          <m.span
            key={words[index]}
            initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="col-start-1 row-start-1"
          >
            {words[index]}
          </m.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
