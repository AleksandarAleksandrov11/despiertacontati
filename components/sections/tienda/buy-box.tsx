"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { fichaProducto, tiendaPage, type Producto } from "@/content/tienda";
import { WhatsappIcon } from "@/components/ui/icons";
import { TrackedAnchor } from "@/components/ui/tracked";
import { buyMessage, isDigital, notifyMessage } from "@/lib/tienda";
import { cn, whatsappHref } from "@/lib/utils";
import { PriceTag } from "./price-tag";

const buttonClass =
  "inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full px-7 py-3 text-center text-[0.95rem] font-medium transition-[background-color,opacity] duration-500";

export function BuyBox({ producto }: { producto: Producto }) {
  const copy = fichaProducto;
  const id = useId();
  const digital = isDigital(producto);
  const [terms, setTerms] = useState(false);
  const [supply, setSupply] = useState(false);
  const ready = terms && (!digital || supply);

  if (producto.estado === "proximamente") {
    return (
      <div className="rounded-[1.25rem] bg-crema p-7 shadow-[0_30px_70px_-45px_rgba(63,46,58,0.45)] sm:p-8">
        <PriceTag producto={producto} size="lg" />
        <h2 className="mt-6 text-h3">{copy.soon.title}</h2>
        <p className="mt-2 text-ink-soft">{copy.soon.text}</p>
        <TrackedAnchor
          href={whatsappHref(notifyMessage(producto))}
          target="_blank"
          rel="noopener noreferrer"
          event="click_avisame"
          data={{ producto: producto.slug }}
          className={cn(buttonClass, "mt-6 bg-ciruela text-crema hover:bg-malva-deep")}
        >
          <WhatsappIcon size={18} />
          {tiendaPage.card.notify}
        </TrackedAnchor>
      </div>
    );
  }

  return (
    <div className="rounded-[1.25rem] bg-crema p-7 shadow-[0_30px_70px_-45px_rgba(63,46,58,0.45)] sm:p-8">
      <PriceTag producto={producto} size="lg" />
      <h2 className="sr-only">{copy.buy.title}</h2>
      <div className="mt-7 space-y-4 border-t border-ciruela/10 pt-6">
        <label className="flex cursor-pointer items-start gap-3 text-[0.95rem]">
          <input
            type="checkbox"
            checked={terms}
            onChange={(event) => setTerms(event.target.checked)}
            required
            aria-describedby={ready ? undefined : `${id}-hint`}
            className="mt-0.5 size-5 shrink-0 cursor-pointer accent-ciruela"
          />
          <span>
            {copy.buy.terms}{" "}
            <Link href="/condiciones-de-compra" className="underline underline-offset-4 hover:text-malva-deep">
              {copy.buy.termsLink}
            </Link>
          </span>
        </label>
        {digital && (
          <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
            <input
              type="checkbox"
              checked={supply}
              onChange={(event) => setSupply(event.target.checked)}
              required
              aria-describedby={ready ? undefined : `${id}-hint`}
              className="mt-0.5 size-5 shrink-0 cursor-pointer accent-ciruela"
            />
            <span>{copy.buy.digital}</span>
          </label>
        )}
      </div>
      <div className="mt-7">
        {ready ? (
          <TrackedAnchor
            href={whatsappHref(buyMessage(producto))}
            target="_blank"
            rel="noopener noreferrer"
            event="click_comprar_whatsapp"
            data={{ producto: producto.slug }}
            className={cn(buttonClass, "bg-ciruela text-crema shadow-[0_10px_30px_-12px_rgba(63,46,58,0.45)] hover:bg-malva-deep")}
          >
            <WhatsappIcon size={18} />
            {copy.buy.button}
          </TrackedAnchor>
        ) : (
          <button type="button" disabled aria-describedby={`${id}-hint`} className={cn(buttonClass, "cursor-not-allowed bg-ciruela/40 text-crema")}>
            <WhatsappIcon size={18} />
            {copy.buy.button}
          </button>
        )}
        <p id={`${id}-hint`} aria-live="polite" className="mt-3 text-center text-sm text-ink-soft">
          {ready ? copy.buy.note : copy.buy.hint}
        </p>
      </div>
    </div>
  );
}
