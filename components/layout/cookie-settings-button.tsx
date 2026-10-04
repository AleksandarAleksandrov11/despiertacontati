"use client";

import type { ReactNode } from "react";
import { useConsent } from "./consent";

export function CookieSettingsButton({ className, children }: { className?: string; children: ReactNode }) {
  const { openPanel } = useConsent();
  return (
    <button type="button" onClick={openPanel} className={className}>
      {children}
    </button>
  );
}
