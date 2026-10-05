"use client";

import Link from "next/link";
import { AnimatePresence, m } from "motion/react";
import { X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { cookieBanner, cookieCategories } from "@/content/cookies";
import { useConsent, type ConsentCategory } from "./consent";
import { useLenis } from "./smooth-scroll";
import { cn } from "@/lib/utils";

const smallButton =
  "inline-flex min-h-11 flex-1 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors duration-300";

export function CookieBanner() {
  const { consent, ready, panelOpen, openPanel, acceptAll, rejectAll } = useConsent();
  const showBanner = ready && !consent && !panelOpen;

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <m.section
            key="banner"
            role="region"
            aria-label={cookieBanner.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-[70] mx-auto max-w-[26rem] rounded-3xl border border-linea bg-crema/95 p-5 shadow-[0_24px_60px_-24px_rgba(63,46,58,0.35)] backdrop-blur-md sm:left-6 sm:right-auto sm:mx-0"
            data-cookie-banner
          >
            <p className="eyebrow mb-2">{cookieBanner.title}</p>
            <p className="text-[0.95rem] leading-relaxed text-ink-soft">
              {cookieBanner.text}{" "}
              <Link href="/politica-de-cookies" className="text-ciruela underline underline-offset-4">
                {cookieBanner.policy}
              </Link>
            </p>
            <div className="mt-4 flex gap-2">
              <button type="button" onClick={acceptAll} className={cn(smallButton, "bg-ciruela text-crema hover:bg-malva-deep")}>
                {cookieBanner.accept}
              </button>
              <button type="button" onClick={rejectAll} className={cn(smallButton, "bg-ciruela text-crema hover:bg-malva-deep")}>
                {cookieBanner.reject}
              </button>
            </div>
            <button
              type="button"
              onClick={openPanel}
              className="mt-2 inline-flex min-h-11 w-full items-center justify-center text-sm font-medium text-ciruela underline-offset-4 hover:underline"
            >
              {cookieBanner.configure}
            </button>
          </m.section>
        )}
      </AnimatePresence>
      <AnimatePresence>{panelOpen && <CookiePanel key="panel" />}</AnimatePresence>
    </>
  );
}

function CookiePanel() {
  const { consent, closePanel, save, acceptAll, rejectAll } = useConsent();
  const [choice, setChoice] = useState<Record<ConsentCategory, boolean>>({
    analytics: consent?.analytics ?? false,
    marketing: consent?.marketing ?? false,
  });
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    lenis?.stop();
    dialogRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") closePanel();
      if (event.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>("button, a, input");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      lenis?.start();
      previous?.focus();
    };
  }, [closePanel, lenis]);

  return (
    <m.div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-ciruela/30 p-3 backdrop-blur-sm sm:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(event) => event.target === event.currentTarget && closePanel()}
    >
      <m.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        data-lenis-prevent
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-lg overflow-y-auto rounded-3xl bg-crema p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] shadow-2xl outline-none sm:p-8"
      >
        <button
          type="button"
          onClick={closePanel}
          aria-label={cookieBanner.panel.close}
          className="absolute right-3 top-3 inline-flex size-11 items-center justify-center rounded-full text-ink-soft hover:bg-rosa-polvo hover:text-ciruela"
        >
          <X size={20} strokeWidth={1.25} aria-hidden />
        </button>
        <h2 id={titleId} className="pr-10 text-h3">
          {cookieBanner.panel.title}
        </h2>
        <p className="mt-2 text-[0.95rem] text-ink-soft">{cookieBanner.panel.intro}</p>
        <ul className="mt-6 divide-y divide-linea border-y border-linea">
          {cookieCategories.map((category) => {
            const id = category.id;
            const isNecessary = id === "necessary";
            const checked = isNecessary ? true : choice[id];
            return (
              <li key={id} className="flex items-start justify-between gap-4 py-4">
                <div>
                  <p className="font-medium text-ciruela">{category.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{category.description}</p>
                </div>
                {isNecessary ? (
                  <span className="shrink-0 pt-0.5 text-xs font-medium text-ink-soft">{cookieBanner.panel.alwaysOn}</span>
                ) : (
                  <button
                    type="button"
                    role="switch"
                    aria-checked={checked}
                    aria-label={category.title}
                    onClick={() => setChoice((prev) => ({ ...prev, [id]: !prev[id] }))}
                    className="group relative inline-flex h-11 w-14 shrink-0 items-center justify-center"
                  >
                    <span
                      className={cn(
                        "h-7 w-12 rounded-full transition-colors duration-300",
                        checked ? "bg-malva-deep" : "bg-linea",
                      )}
                    />
                    <span
                      className={cn(
                        "absolute left-2 top-1/2 size-5 -translate-y-1/2 rounded-full bg-crema shadow transition-transform duration-300",
                        checked && "translate-x-5",
                      )}
                    />
                  </button>
                )}
              </li>
            );
          })}
        </ul>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={acceptAll} className={cn(smallButton, "bg-ciruela text-crema hover:bg-malva-deep")}>
            {cookieBanner.panel.acceptAll}
          </button>
          <button type="button" onClick={rejectAll} className={cn(smallButton, "bg-ciruela text-crema hover:bg-malva-deep")}>
            {cookieBanner.panel.rejectAll}
          </button>
        </div>
        <button
          type="button"
          onClick={() => save(choice)}
          className={cn(smallButton, "mt-2 w-full border border-ciruela/30 text-ciruela hover:border-ciruela")}
        >
          {cookieBanner.panel.save}
        </button>
      </m.div>
    </m.div>
  );
}
