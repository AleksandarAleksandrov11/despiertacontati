"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { ConsentProvider } from "./consent";
import { SmoothScroll } from "./smooth-scroll";

const loadFeatures = () => import("./motion-features").then((mod) => mod.default);

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadFeatures} strict>
        <ConsentProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ConsentProvider>
      </LazyMotion>
    </MotionConfig>
  );
}
