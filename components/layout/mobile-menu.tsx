"use client";

import Link from "next/link";
import { AnimatePresence, m } from "motion/react";
import { useEffect, useRef } from "react";
import { mainNav, site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { InstagramIcon, WhatsappIcon } from "@/components/ui/icons";
import { useLenis } from "./smooth-scroll";
import { isActivePath } from "./nav-utils";
import { whatsappHref } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const lenis = useLenis();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    lenis?.stop();
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus({ preventScroll: true });

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previousOverflow;
      lenis?.start();
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, lenis]);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          id="menu-movil"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={site.ui.mobileNav}
          data-lenis-prevent
          initial={{ clipPath: "circle(0% at 92% 2.5rem)" }}
          animate={{ clipPath: "circle(150% at 92% 2.5rem)" }}
          exit={{ clipPath: "circle(0% at 92% 2.5rem)" }}
          transition={{ duration: 0.8, ease }}
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-rosa-polvo pt-[calc(4.5rem+env(safe-area-inset-top))] lg:hidden"
        >
          <div aria-hidden className="blob -right-24 top-24 size-72 bg-lavanda" />
          <div aria-hidden className="blob -left-20 bottom-24 size-64 bg-salvia" />
          <nav aria-label={site.ui.mainNav} className="container-page relative flex-1 py-6">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item, i) => {
                const delay = 0.15 + i * 0.06;
                const active = isActivePath(pathname, item.href);
                return (
                  <m.li
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.7, delay, ease }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className="flex min-h-12 items-baseline gap-3 py-1 font-serif text-[clamp(2.1rem,9vw,3rem)] leading-tight text-ciruela"
                    >
                      <span className="link-underline">{item.label}</span>
                    </Link>
                    {item.children && (
                      <ul className="mb-2 ml-1 flex flex-wrap gap-x-5 gap-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              aria-current={pathname === child.href ? "page" : undefined}
                              className="link-underline inline-flex min-h-11 items-center text-[0.95rem] text-ink-soft"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </m.li>
                );
              })}
            </ul>
          </nav>
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
            className="container-page relative flex flex-col gap-5 pb-[calc(2rem+env(safe-area-inset-bottom))]"
          >
            <Button href={site.cta.primary.href} onClick={onClose} className="w-full">
              {site.cta.primary.label}
            </Button>
            <div className="flex items-center justify-center gap-2 text-ciruela">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={site.cta.whatsapp}
                className="inline-flex size-12 items-center justify-center rounded-full border border-ciruela/20 hover:border-ciruela/60"
              >
                <WhatsappIcon size={22} />
              </a>
              <a
                href={site.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${site.social.instagram.label}`}
                className="inline-flex size-12 items-center justify-center rounded-full border border-ciruela/20 hover:border-ciruela/60"
              >
                <InstagramIcon size={22} />
              </a>
              <a
                href={site.social.tarot.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-full border border-ciruela/20 px-5 text-sm hover:border-ciruela/60"
              >
                {site.social.tarot.label}
              </a>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
