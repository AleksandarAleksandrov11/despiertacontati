import type { Metadata } from "next";
import Link from "next/link";
import { notFoundPage } from "@/content/paginas";

export const metadata: Metadata = {
  title: { absolute: "Página no encontrada | Despierta con Tati" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-crema pb-20 pt-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 size-[min(80vw,36rem)] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,#fbeff0,#f0d9e2_45%,#e4d6ee_70%,transparent_72%)] blur-2xl animate-drift" />
        <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(143,185,150,0.4),transparent_60%)] blur-2xl animate-drift-slow" />
      </div>
      <div className="container-page relative text-center">
        <p className="eyebrow mb-6">{notFoundPage.eyebrow}</p>
        <h1 className="text-h1 italic">{notFoundPage.title}</h1>
        <p className="mx-auto mt-6 max-w-md text-lead text-ink-soft">{notFoundPage.text}</p>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {notFoundPage.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="link-underline-static inline-flex min-h-11 items-center font-serif text-2xl">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
