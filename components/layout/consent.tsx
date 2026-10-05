"use client";

import { createContext, useCallback, useContext, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";

export type ConsentCategory = "analytics" | "marketing";

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  date: string;
  version: number;
};

const STORAGE_KEY = "dct-consent";
const VERSION = 1;
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
const listeners = new Set<() => void>();

function readStored(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function parse(raw: string | null): ConsentState | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as ConsentState;
    const fresh = Date.now() - new Date(value.date).getTime() < MAX_AGE_MS;
    return value.version === VERSION && fresh ? value : null;
  } catch {
    return null;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function persist(analytics: boolean, marketing: boolean) {
  const value: ConsentState = {
    necessary: true,
    analytics,
    marketing,
    date: new Date().toISOString(),
    version: VERSION,
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {}
  listeners.forEach((listener) => listener());
}

type ConsentContextValue = {
  consent: ConsentState | null;
  ready: boolean;
  panelOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  save: (choice: { analytics: boolean; marketing: boolean }) => void;
  allows: (category: ConsentCategory) => boolean;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useConsent debe usarse dentro de ConsentProvider");
  return context;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, readStored, () => undefined);
  const ready = raw !== undefined;
  const consent = useMemo(() => (ready ? parse(raw) : null), [raw, ready]);
  const [panelOpen, setPanelOpen] = useState(false);

  const acceptAll = useCallback(() => {
    persist(true, true);
    setPanelOpen(false);
  }, []);

  const rejectAll = useCallback(() => {
    persist(false, false);
    setPanelOpen(false);
  }, []);

  const save = useCallback((choice: { analytics: boolean; marketing: boolean }) => {
    persist(choice.analytics, choice.marketing);
    setPanelOpen(false);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      ready,
      panelOpen,
      openPanel: () => setPanelOpen(true),
      closePanel: () => setPanelOpen(false),
      acceptAll,
      rejectAll,
      save,
      allows: (category) => Boolean(consent?.[category]),
    }),
    [consent, ready, panelOpen, acceptAll, rejectAll, save],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function ConsentGate({ category, children }: { category: ConsentCategory; children: ReactNode }) {
  const { allows } = useConsent();
  return allows(category) ? <>{children}</> : null;
}
