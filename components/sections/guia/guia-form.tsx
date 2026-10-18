"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { track } from "@vercel/analytics";
import { AnimatePresence, m } from "motion/react";
import { Download, Headphones } from "lucide-react";
import { useId, useState } from "react";
import { guia } from "@/content/guia";
import { guideSchema, type GuideInput } from "@/lib/schemas";
import { guiaAudioDisponible } from "@/lib/descargas";
import { TrackedAnchor } from "@/components/ui/tracked";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "mt-2 block min-h-13 w-full rounded-xl border border-ciruela/20 bg-white/70 px-4 py-3 text-ciruela placeholder:text-ink-soft/70 focus:border-malva-deep focus:outline-none aria-[invalid=true]:border-rosa-deep";

const actionClass =
  "inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full px-7 py-3 text-center text-[0.95rem] font-medium transition-colors duration-500 sm:w-auto";

export function GuiaForm() {
  const copy = guia.form;
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GuideInput>({
    resolver: zodResolver(guideSchema),
    defaultValues: { nombre: "", email: "", novedades: false, empresa: "" },
  });

  async function onSubmit(values: GuideInput) {
    setStatus("sending");
    try {
      const response = await fetch("/api/guia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(String(response.status));
      track("descarga_guia", { paso: "formulario" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[1.25rem] bg-crema p-7 shadow-[0_30px_80px_-50px_rgba(63,46,58,0.45)] sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <m.div
            key="gracias"
            role="status"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-h2 italic">{guia.gracias.title}</h2>
            <p className="mt-4 text-lead text-ink-soft">{guia.gracias.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedAnchor
                href={guia.pdf}
                download
                event="descarga_guia"
                data={{ archivo: "pdf" }}
                className={cn(actionClass, "bg-ciruela text-crema hover:bg-malva-deep")}
              >
                <Download size={18} strokeWidth={1.5} aria-hidden />
                {guia.gracias.pdf}
              </TrackedAnchor>
              {guiaAudioDisponible && (
                <TrackedAnchor
                  href={guia.audio}
                  target="_blank"
                  rel="noopener"
                  event="descarga_guia"
                  data={{ archivo: "audio" }}
                  className={cn(actionClass, "border border-ciruela/25 text-ciruela hover:border-ciruela/60")}
                >
                  <Headphones size={18} strokeWidth={1.5} aria-hidden />
                  {guia.gracias.audio}
                </TrackedAnchor>
              )}
            </div>
            <p className="mt-6 text-sm text-ink-soft">{guia.gracias.spam}</p>
          </m.div>
        ) : (
          <m.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-h3">{copy.title}</h2>
            <p className="mt-2 text-ink-soft">{copy.text}</p>
            <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor={`${id}-empresa`}>Empresa</label>
              <input id={`${id}-empresa`} type="text" tabIndex={-1} autoComplete="off" {...register("empresa")} />
            </div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor={`${id}-nombre`} className="text-sm font-medium">
                  {copy.name}
                </label>
                <input
                  id={`${id}-nombre`}
                  type="text"
                  autoComplete="given-name"
                  placeholder={copy.namePlaceholder}
                  aria-invalid={errors.nombre ? true : undefined}
                  aria-describedby={errors.nombre ? `${id}-nombre-error` : undefined}
                  className={fieldClass}
                  {...register("nombre")}
                />
                {errors.nombre && (
                  <p id={`${id}-nombre-error`} className="mt-2 text-sm text-rosa-deep">
                    {errors.nombre.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor={`${id}-email`} className="text-sm font-medium">
                  {copy.email}
                </label>
                <input
                  id={`${id}-email`}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={copy.emailPlaceholder}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? `${id}-email-error` : undefined}
                  className={fieldClass}
                  {...register("email")}
                />
                {errors.email && (
                  <p id={`${id}-email-error`} className="mt-2 text-sm text-rosa-deep">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <label className="flex cursor-pointer items-start gap-3 text-[0.95rem]">
                <input
                  type="checkbox"
                  className="mt-0.5 size-5 shrink-0 cursor-pointer accent-ciruela"
                  aria-invalid={errors.privacidad ? true : undefined}
                  aria-describedby={errors.privacidad ? `${id}-privacidad-error` : undefined}
                  {...register("privacidad")}
                />
                <span>
                  {copy.privacyLabel}{" "}
                  <Link href="/politica-de-privacidad" className="underline underline-offset-4 hover:text-malva-deep">
                    {copy.privacyLink}
                  </Link>
                </span>
              </label>
              {errors.privacidad && (
                <p id={`${id}-privacidad-error`} className="text-sm text-rosa-deep">
                  {errors.privacidad.message}
                </p>
              )}
              <label className="flex cursor-pointer items-start gap-3 text-[0.95rem] text-ink-soft">
                <input type="checkbox" className="mt-0.5 size-5 shrink-0 cursor-pointer accent-ciruela" {...register("novedades")} />
                <span>{copy.news}</span>
              </label>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className={cn(actionClass, "mt-8 bg-ciruela text-crema shadow-[0_10px_30px_-12px_rgba(63,46,58,0.45)] hover:bg-malva-deep disabled:opacity-60")}
            >
              {status === "sending" ? copy.sending : copy.submit}
            </button>
            <p role="status" className={cn("mt-3 text-sm text-rosa-deep", status !== "error" && "sr-only")}>
              {status === "error" ? copy.error : ""}
            </p>
            <p className="mt-6 border-t border-ciruela/10 pt-5 text-xs leading-relaxed text-ink-soft">{copy.layer}</p>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
