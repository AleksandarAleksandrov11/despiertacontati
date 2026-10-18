"use client";

import { AnimatePresence, m } from "motion/react";
import { useId, useState } from "react";
import { autoconocimientoPage } from "@/content/servicios";
import { Button } from "@/components/ui/button";

export function FechaNacimiento() {
  const copy = autoconocimientoPage.fecha;
  const id = useId();
  const [value, setValue] = useState("");
  const ready = /^\d{4}-\d{2}-\d{2}$/.test(value);

  return (
    <div className="mx-auto max-w-xl rounded-[1.25rem] bg-crema/85 p-7 text-center shadow-[0_30px_70px_-45px_rgba(63,46,58,0.45)] sm:p-10">
      <label htmlFor={id} className="eyebrow block">
        {copy.label}
      </label>
      <input
        id={id}
        type="date"
        value={value}
        min="1900-01-01"
        onChange={(event) => setValue(event.target.value)}
        className="mx-auto mt-5 block min-h-14 w-full max-w-xs rounded-xl border border-ciruela/20 bg-white/70 px-4 text-center font-serif text-2xl text-ciruela focus:border-malva-deep focus:outline-none"
      />
      <div aria-live="polite" className="min-h-[7.5rem]">
        <AnimatePresence>
          {ready && (
            <m.div
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="pt-7"
            >
              <p className="font-serif text-[1.65rem] italic leading-snug text-ciruela">{copy.ready}</p>
              <div className="mt-5 flex justify-center">
                <Button href="/tienda#autoconocimiento">{copy.cta}</Button>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
      <p className="mt-2 text-sm text-ink-soft">{copy.note}</p>
    </div>
  );
}
