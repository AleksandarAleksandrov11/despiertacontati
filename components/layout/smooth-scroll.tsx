"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let instance: Lenis | null = null;
    let frame = 0;

    function start() {
      instance = new Lenis({ duration: 1.25, smoothWheel: true, anchors: { offset: -96 } });
      setLenis(instance);
      const raf = (time: number) => {
        instance?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    }

    function stop() {
      cancelAnimationFrame(frame);
      instance?.destroy();
      instance = null;
      setLenis(null);
    }

    function onChange() {
      if (reduce.matches) stop();
      else if (!instance) start();
    }

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 600));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    const idleId = idle(onChange, { timeout: 1500 });
    reduce.addEventListener("change", onChange);
    return () => {
      cancelIdle(idleId);
      reduce.removeEventListener("change", onChange);
      stop();
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) return;
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
