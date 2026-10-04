"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroOrb = dynamic(() => import("./hero-orb"), { ssr: false });

type NavigatorWithHints = Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };

function canRender3d() {
  const nav = navigator as NavigatorWithHints;
  const wide = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)").matches;
  const calm = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cores = (nav.hardwareConcurrency ?? 2) >= 4;
  const memory = (nav.deviceMemory ?? 8) >= 4;
  const data = !nav.connection?.saveData;
  return wide && calm && cores && memory && data;
}

export function HeroVisual() {
  const [enabled, setEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!canRender3d()) return;
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
    const cancel = window.cancelIdleCallback ?? window.clearTimeout;
    const id = idle(() => setEnabled(true), { timeout: 2500 });
    return () => cancel(id);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const id = window.setTimeout(() => setLoaded(true), 300);
    return () => window.clearTimeout(id);
  }, [enabled]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/2 size-[115%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#fbeff0,#f0d9e2_45%,#e4d6ee_70%,transparent_72%)] blur-2xl animate-drift" />
        <div className="absolute inset-[22%] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(143,185,150,0.45),transparent_60%)] blur-2xl animate-drift-slow" />
        {enabled && (
          <div className={`absolute inset-0 transition-opacity duration-[2000ms] ${loaded ? "opacity-100" : "opacity-0"}`}>
            <HeroOrb />
          </div>
        )}
      </div>
    </div>
  );
}
