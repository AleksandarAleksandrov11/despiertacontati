"use client";

import { m, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useRef, type PointerEvent, type ReactNode } from "react";
import { useFinePointer } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  max?: number;
  as?: "div" | "article" | "li";
};

const spring = { stiffness: 140, damping: 18, mass: 0.7 };

export function TiltCard({ children, className, innerClassName, max = 7, as = "div" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const active = fine && !reduce;
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glow = useMotionValue(0);
  const srx = useSpring(rx, spring);
  const sry = useSpring(ry, spring);
  const sglow = useSpring(glow, { stiffness: 120, damping: 20 });
  const glare = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, rgba(255,255,255,0.55), transparent 55%)`;
  const Component = m[as];

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * max * 2);
    rx.set((0.5 - py) * max * 2);
    mx.set(px * 100);
    my.set(py * 100);
    glow.set(1);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
    glow.set(0);
  }

  return (
    <Component
      className={cn("group/tilt relative [perspective:1100px]", className)}
      whileTap={active ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      <m.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={active ? { rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" } : undefined}
        className="relative h-full rounded-[1.75rem] p-px transition-shadow duration-700 ease-[var(--ease-breath)] hover:shadow-[0_30px_60px_-30px_rgba(63,46,58,0.35)]"
      >
        <span
          aria-hidden
          className="chakra-gradient absolute inset-0 rounded-[1.75rem] opacity-25 transition-opacity duration-700 group-hover/tilt:opacity-70"
        />
        <div className={cn("relative h-full overflow-hidden rounded-[calc(1.75rem-1px)] bg-crema", innerClassName)}>
          {children}
          {active && (
            <m.span
              aria-hidden
              style={{ backgroundImage: glare, opacity: sglow }}
              className="pointer-events-none absolute inset-0 mix-blend-soft-light"
            />
          )}
        </div>
      </m.div>
    </Component>
  );
}
