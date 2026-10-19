"use client";

import { FileDown } from "lucide-react";
import { TrackedAnchor } from "@/components/ui/tracked";
import { cn } from "@/lib/utils";

type PdfCopy = { title: string; text: string; button: string };

export function PdfCard({ copy, href, tipo }: { copy: PdfCopy; href: string; tipo: "individual" | "pareja" }) {
  return (
    <div className="rounded-[1.25rem] bg-lavanda p-7 sm:p-8">
      <div className="flex items-start gap-5">
        <span aria-hidden className="grid size-14 shrink-0 place-items-center rounded-full bg-crema text-malva-deep">
          <FileDown size={24} strokeWidth={1.25} />
        </span>
        <div>
          <h3 className="font-serif text-[1.6rem] leading-tight text-ciruela">{copy.title}</h3>
          <p className="mt-1.5 text-ink-soft">{copy.text}</p>
        </div>
      </div>
      <PdfButton href={href} tipo={tipo} label={copy.button} className="mt-6 w-full sm:w-auto" />
    </div>
  );
}

export function PdfButton({
  href,
  tipo,
  label,
  tone = "light",
  className,
}: {
  href: string;
  tipo: "individual" | "pareja";
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <TrackedAnchor
      href={href}
      download
      event="descarga_pdf_matriz"
      data={{ tipo }}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3 text-center text-[0.95rem] font-medium transition-colors duration-500",
        tone === "light"
          ? "bg-ciruela text-crema shadow-[0_10px_30px_-12px_rgba(63,46,58,0.45)] hover:bg-malva-deep"
          : "border border-crema/35 text-crema hover:border-crema/80 hover:bg-white/5",
        className,
      )}
    >
      <FileDown size={18} strokeWidth={1.25} aria-hidden />
      {label}
    </TrackedAnchor>
  );
}
