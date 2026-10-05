"use client";

import type { ReactNode } from "react";
import { useIdle } from "@/hooks/use-idle";

export function Deferred({ children, timeout }: { children: ReactNode; timeout?: number }) {
  const idle = useIdle(timeout);
  return idle ? <>{children}</> : null;
}
