"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";
import { ConsentProvider } from "./consent";
import { SmoothScroll } from "./smooth-scroll";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <ConsentProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ConsentProvider>
      </LazyMotion>
    </MotionConfig>
  );
}
