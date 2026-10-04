"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ConsentGate } from "./consent";

export function ConsentScripts() {
  return (
    <ConsentGate category="analytics">
      <Analytics />
      <SpeedInsights />
    </ConsentGate>
  );
}
