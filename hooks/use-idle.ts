"use client";

import { useEffect, useState } from "react";

export function useIdle(timeout = 2000) {
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(() => setIdle(true), { timeout });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(() => setIdle(true), timeout / 2);
    return () => window.clearTimeout(id);
  }, [timeout]);

  return idle;
}
