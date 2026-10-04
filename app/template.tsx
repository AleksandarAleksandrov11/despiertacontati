"use client";

import { m } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

let hasNavigated = false;

export default function Template({ children }: { children: ReactNode }) {
  const [animate] = useState(() => hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <m.div
      initial={animate ? { opacity: 0, y: 14 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
