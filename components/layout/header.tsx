"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState, type FocusEvent } from "react";
import { mainNav, site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { isActivePath } from "./nav-utils";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const submenuId = useId();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMenuOpen(false);
    setSubmenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
    menuButton.current?.focus({ preventScroll: true });
  }

  function onSubmenuBlur(event: FocusEvent<HTMLLIElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setSubmenuOpen(false);
  }

  const solid = scrolled && !menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-700 ease-[var(--ease-breath)]",
          solid
            ? "bg-crema/80 shadow-[0_8px_30px_-20px_rgba(63,46,58,0.35)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
          <Logo />
          <nav aria-label={site.ui.mainNav} className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {mainNav.map((item) => {
                const active = isActivePath(pathname, item.href);
                if (!item.children) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className="link-underline py-2 text-[0.95rem] text-ciruela"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setSubmenuOpen(true)}
                    onMouseLeave={() => setSubmenuOpen(false)}
                    onBlur={onSubmenuBlur}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") setSubmenuOpen(false);
                    }}
                  >
                    <span className="flex items-center gap-1">
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className="link-underline py-2 text-[0.95rem] text-ciruela"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={submenuOpen}
                        aria-controls={submenuId}
                        aria-label={site.ui.openSubmenu}
                        onClick={() => setSubmenuOpen((open) => !open)}
                        className="-mr-2 inline-flex size-9 items-center justify-center rounded-full text-ink-soft hover:text-ciruela"
                      >
                        <ChevronDown
                          size={16}
                          strokeWidth={1.25}
                          aria-hidden
                          className={cn("transition-transform duration-500", submenuOpen && "rotate-180")}
                        />
                      </button>
                    </span>
                    <AnimatePresence>
                      {submenuOpen && (
                        <m.div
                          id={submenuId}
                          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3"
                        >
                          <ul className="rounded-3xl border border-linea bg-crema/95 p-2 shadow-[0_24px_60px_-30px_rgba(63,46,58,0.4)] backdrop-blur-xl">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  aria-current={pathname === child.href ? "page" : undefined}
                                  className="block rounded-2xl px-4 py-3 transition-colors duration-300 hover:bg-rosa-polvo aria-[current=page]:bg-rosa-polvo"
                                >
                                  <span className="block font-serif text-xl text-ciruela">{child.label}</span>
                                  <span className="block text-sm text-ink-soft">{child.description}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <Button href={site.cta.primary.href} magnetic>
                {site.cta.primary.label}
              </Button>
            </div>
            <button
              ref={menuButton}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              aria-label={menuOpen ? site.ui.closeMenu : site.ui.openMenu}
              onClick={() => setMenuOpen((open) => !open)}
              className="relative -mr-2 inline-flex size-12 items-center justify-center rounded-full lg:hidden"
            >
              <span
                aria-hidden
                className={cn(
                  "absolute h-px w-6 bg-ciruela transition-transform duration-500 ease-[var(--ease-breath)]",
                  menuOpen ? "rotate-45" : "-translate-y-[4px]",
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "absolute h-px bg-ciruela transition-all duration-500 ease-[var(--ease-breath)]",
                  menuOpen ? "w-6 -rotate-45" : "w-4 translate-x-1 translate-y-[4px]",
                )}
              />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={closeMenu} pathname={pathname} />
    </>
  );
}
