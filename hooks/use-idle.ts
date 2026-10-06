"use client";

import { useEffect, useState } from "react";

const INTRO_MS = 3100;

export function useIdle(timeout = 2000) {
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    const introPlaying = document.documentElement.dataset.intro === "play";
    let idleId: number | undefined;
    const startId = window.setTimeout(
      () => {
        if (typeof window.requestIdleCallback === "function") {
          idleId = window.requestIdleCallback(() => setIdle(true), { timeout });
        } else {
          setIdle(true);
        }
      },
      introPlaying ? INTRO_MS : 0,
    );
    return () => {
      window.clearTimeout(startId);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
    };
  }, [timeout]);

  return idle;
}
