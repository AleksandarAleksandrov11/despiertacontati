"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check } from "lucide-react";
import { useId, useState } from "react";
import { suscripcion } from "@/content/paginas";
import { subscribeSchema, type SubscribeInput } from "@/lib/schemas";
import { sendMessage } from "@/lib/send-message";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

export function SubscribeForm() {
  const [status, setStatus] = useState<Status>("idle");
  const id = useId();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscribeInput>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: { type: "suscripcion", email: "", empresa: "" },
  });

  async function onSubmit(values: SubscribeInput) {
    setStatus("sending");
    try {
      await sendMessage(values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="flex items-center gap-2 text-crema">
        <Check size={18} strokeWidth={1.25} aria-hidden className="text-dorado-soft" />
        {suscripcion.success}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full max-w-sm">
      <input type="hidden" {...register("type")} />
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-empresa`}>Empresa</label>
        <input id={`${id}-empresa`} type="text" tabIndex={-1} autoComplete="off" {...register("empresa")} />
      </div>
      <label htmlFor={`${id}-email`} className="sr-only">
        {suscripcion.label}
      </label>
      <div className="flex items-center gap-2 border-b border-crema/30 focus-within:border-crema/80">
        <input
          id={`${id}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={suscripcion.placeholder}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? `${id}-email-error` : undefined}
          className="min-h-12 w-full bg-transparent text-crema placeholder:text-crema/55 focus:outline-none"
          {...register("email")}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          aria-label={suscripcion.submit}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-crema transition-transform duration-500 hover:translate-x-1 disabled:opacity-50"
        >
          <ArrowRight size={20} strokeWidth={1.25} aria-hidden />
        </button>
      </div>
      {errors.email && (
        <p id={`${id}-email-error`} className="mt-2 text-sm text-rosa-polvo">
          {errors.email.message}
        </p>
      )}
      <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-crema/75">
        <input
          type="checkbox"
          className="mt-0.5 size-5 shrink-0 cursor-pointer accent-rosa"
          aria-invalid={errors.privacidad ? true : undefined}
          {...register("privacidad")}
        />
        <span>
          {suscripcion.privacyLabel}{" "}
          <Link href="/politica-de-privacidad" className="underline underline-offset-4 hover:text-crema">
            {suscripcion.privacyLink}
          </Link>
        </span>
      </label>
      {errors.privacidad && <p className="mt-2 text-sm text-rosa-polvo">{errors.privacidad.message}</p>}
      <p role="status" className={cn("mt-2 text-sm text-rosa-polvo", status !== "error" && "sr-only")}>
        {status === "error" ? suscripcion.error : ""}
      </p>
    </form>
  );
}
