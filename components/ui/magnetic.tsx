"use client";

import { m, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useRef, type PointerEvent, type ReactNode } from "react";
import { useFinePointer } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

export function Magnetic({ children, strength = 0.28, className }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 160, damping: 18, mass: 0.6 });
  const active = fine && !reduce;

  function onMove(event: PointerEvent<HTMLSpanElement>) {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={active ? { x: sx, y: sy } : undefined}
      className={cn("inline-flex", className)}
    >
      {children}
    </m.span>
  );
}
