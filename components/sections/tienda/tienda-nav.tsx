"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useLenis } from "@/components/layout/smooth-scroll";
import { cn } from "@/lib/utils";

type Item = { id: string; label: string };

const OFFSET = 150;

export function TiendaNav({ items, label }: { items: Item[]; label: string }) {
  const lenis = useLenis();
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = items[0]?.id;
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element && element.getBoundingClientRect().top <= line) current = item.id;
      }
      setActive(current);
    }
    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [items]);

  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !link) return;
    const left = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  function go(event: MouseEvent<HTMLAnchorElement>, id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();
    if (lenis) {
      lenis.scrollTo(target, { offset: -OFFSET });
    } else {
      const top = target.getBoundingClientRect().top + window.scrollY - OFFSET;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    }
    window.history.replaceState(null, "", `#${id}`);
    setActive(id);
  }

  return (
    <nav
      aria-label={label}
      className="sticky top-[4.5rem] z-30 border-y border-ciruela/10 bg-crema/90 backdrop-blur-xl lg:top-20"
    >
      <div className="container-page">
        <ul ref={listRef} className="no-scrollbar -mx-2 flex gap-1 overflow-x-auto py-1.5 sm:gap-3">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                data-id={item.id}
                aria-current={active === item.id ? "location" : undefined}
                onClick={(event) => go(event, item.id)}
                className={cn(
                  "inline-flex min-h-11 items-center whitespace-nowrap px-2 text-[0.95rem] transition-colors duration-500",
                  active === item.id ? "text-ciruela" : "text-ink-soft hover:text-ciruela",
                )}
              >
                <span className={cn("link-underline", active === item.id && "[background-size:100%_1px]")}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
