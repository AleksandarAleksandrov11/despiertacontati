"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { contactoPage } from "@/content/paginas";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { contactSchema, contactTopics, type ContactInput } from "@/lib/schemas";
import { sendMessage } from "@/lib/send-message";
import { cn, whatsappHref } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

const copy = contactoPage.form;
const stepFields: (keyof ContactInput)[][] = [["servicio"], ["modalidad"], ["mensaje"], ["nombre", "contacto", "privacidad"]];
const ease = [0.22, 1, 0.36, 1] as const;

function isTopic(value: string | null): value is ContactInput["servicio"] {
  return value !== null && (contactTopics as readonly string[]).includes(value);
}

export function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("servicio");
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  const id = useId();

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      type: "contacto",
      servicio: isTopic(preset) ? preset : undefined,
      mensaje: "",
      nombre: "",
      contacto: "",
      empresa: "",
    },
  });

  const servicio = useWatch({ control, name: "servicio" });
  const modalidad = useWatch({ control, name: "modalidad" });

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [step, status]);

  async function next() {
    const valid = await trigger(stepFields[step]);
    if (!valid) return;
    setDirection(1);
    setStep((current) => Math.min(current + 1, stepFields.length - 1));
  }

  function back() {
    setDirection(-1);
    setStep((current) => Math.max(current - 1, 0));
  }

  function choose(field: "servicio" | "modalidad", value: string) {
    setValue(field, value as never, { shouldValidate: true });
    window.setTimeout(() => {
      setDirection(1);
      setStep((current) => Math.min(current + 1, stepFields.length - 1));
    }, 280);
  }

  async function onSubmit(values: ContactInput) {
    setStatus("sending");
    try {
      await sendMessage(values);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLFormElement>) {
    if (event.key !== "Enter" || event.shiftKey) return;
    const target = event.target as HTMLElement;
    if (target.tagName === "BUTTON" || target.tagName === "A") return;
    if (step < stepFields.length - 1) {
      event.preventDefault();
      void next();
    }
  }

  function restart() {
    reset();
    setStep(0);
    setStatus("idle");
  }

  if (status === "success" || status === "error") {
    const success = status === "success";
    const message = success ? copy.success : copy.error;
    return (
      <m.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="rounded-[2rem] bg-crema p-8 sm:p-12"
        role="status"
      >
        <span
          aria-hidden
          className={cn(
            "mb-8 inline-flex size-14 items-center justify-center rounded-full",
            success ? "bg-salvia text-ciruela" : "bg-rosa-polvo text-ciruela",
          )}
        >
          {success ? <Check size={24} strokeWidth={1.25} /> : <WhatsappIcon size={24} />}
        </span>
        <h2 ref={headingRef} tabIndex={-1} className="text-h2 outline-none">
          {message.title}
        </h2>
        <p className="mt-4 max-w-md text-lead text-ink-soft">{message.text}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button
            href={whatsappHref(success ? site.whatsappMessages.success : site.whatsappMessages.error)}
            variant={success ? "secondary" : "primary"}
            icon={<WhatsappIcon size={18} />}
          >
            {site.cta.whatsapp}
          </Button>
          {success ? (
            <Button variant="link" onClick={restart}>
              {copy.success.again}
            </Button>
          ) : (
            <Button variant="link" onClick={handleSubmit(onSubmit)}>
              {copy.error.retry}
            </Button>
          )}
        </div>
      </m.div>
    );
  }

  const total = copy.steps.length;
  const current = copy.steps[step];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={onKeyDown}
      noValidate
      className="relative overflow-hidden rounded-[2rem] bg-crema p-6 sm:p-10"
      aria-describedby={`${id}-progress`}
    >
      <input type="hidden" {...register("type")} />
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-empresa`}>Empresa</label>
        <input id={`${id}-empresa`} type="text" tabIndex={-1} autoComplete="off" {...register("empresa")} />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p id={`${id}-progress`} className="eyebrow">
          {copy.stepLabel} {step + 1} {copy.of} {total}
        </p>
        {step > 0 && (
          <button
            type="button"
            onClick={back}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink-soft hover:text-ciruela"
          >
            <ArrowLeft size={16} strokeWidth={1.25} aria-hidden />
            {copy.back}
          </button>
        )}
      </div>
      <div
        className="mt-3 h-px w-full bg-ciruela/10"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={step + 1}
        aria-label={`${copy.stepLabel} ${step + 1} ${copy.of} ${total}`}
      >
        <m.div
          className="h-px origin-left bg-ciruela"
          initial={false}
          animate={{ scaleX: (step + 1) / total }}
          transition={{ duration: 0.8, ease }}
        />
      </div>

      <div className="relative mt-10 min-h-[22rem]">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <m.fieldset
            key={step}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: direction * -40, filter: "blur(6px)" }}
            transition={{ duration: 0.55, ease }}
            aria-labelledby={`${id}-question`}
          >
            <h2 id={`${id}-question`} ref={headingRef} tabIndex={-1} className="text-h2 outline-none">
              {current.question}
            </h2>

            {step === 0 && (
              <div role="radiogroup" aria-label={current.question} className="mt-8 flex flex-wrap gap-3">
                {copy.topics.map((option) => (
                  <OptionButton
                    key={option.value}
                    label={option.label}
                    selected={servicio === option.value}
                    onSelect={() => choose("servicio", option.value)}
                  />
                ))}
                {errors.servicio && <FieldError id={`${id}-servicio`}>{errors.servicio.message}</FieldError>}
              </div>
            )}

            {step === 1 && (
              <div role="radiogroup" aria-label={current.question} className="mt-8 flex flex-wrap gap-3">
                {copy.modalities.map((option) => (
                  <OptionButton
                    key={option.value}
                    label={option.label}
                    selected={modalidad === option.value}
                    onSelect={() => choose("modalidad", option.value)}
                  />
                ))}
                {errors.modalidad && <FieldError id={`${id}-modalidad`}>{errors.modalidad.message}</FieldError>}
              </div>
            )}

            {step === 2 && (
              <div className="mt-8">
                <label htmlFor={`${id}-mensaje`} className="sr-only">
                  {copy.messageLabel}
                </label>
                <textarea
                  id={`${id}-mensaje`}
                  rows={5}
                  placeholder={copy.messagePlaceholder}
                  className="w-full resize-none rounded-2xl border border-ciruela/15 bg-white/60 p-5 text-lead placeholder:text-ink-soft/80 focus:border-ciruela/50 focus:outline-none"
                  aria-invalid={errors.mensaje ? true : undefined}
                  {...register("mensaje")}
                />
                {errors.mensaje && <FieldError id={`${id}-mensaje-error`}>{errors.mensaje.message}</FieldError>}
              </div>
            )}

            {step === 3 && (
              <div className="mt-8 space-y-6">
                <TextField
                  id={`${id}-nombre`}
                  label={copy.nameLabel}
                  autoComplete="given-name"
                  error={errors.nombre?.message}
                  {...register("nombre")}
                />
                <TextField
                  id={`${id}-contacto`}
                  label={copy.contactLabel}
                  autoComplete="email"
                  inputMode="email"
                  error={errors.contacto?.message}
                  {...register("contacto")}
                />
                <div>
                  <label className="flex cursor-pointer items-start gap-3 text-[0.95rem]">
                    <input
                      type="checkbox"
                      className="mt-1 size-5 shrink-0 cursor-pointer accent-ciruela"
                      aria-invalid={errors.privacidad ? true : undefined}
                      aria-describedby={errors.privacidad ? `${id}-privacidad-error` : undefined}
                      {...register("privacidad")}
                    />
                    <span>
                      {copy.privacyLabel}{" "}
                      <Link href="/politica-de-privacidad" className="underline underline-offset-4">
                        {copy.privacyLink}
                      </Link>
                    </span>
                  </label>
                  {errors.privacidad && <FieldError id={`${id}-privacidad-error`}>{errors.privacidad.message}</FieldError>}
                </div>
                <p className="text-xs leading-relaxed text-ink-soft">{copy.privacyNote}</p>
              </div>
            )}
          </m.fieldset>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        {step < total - 1 ? (
          <>
            <Button onClick={next} icon={<ArrowRight size={18} strokeWidth={1.25} aria-hidden />} className="flex-row-reverse">
              {copy.next}
            </Button>
            <span className="hidden text-sm text-ink-soft sm:inline">{copy.enterHint}</span>
          </>
        ) : (
          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? copy.sending : copy.submit}
          </Button>
        )}
      </div>
    </form>
  );
}

function OptionButton({ label, selected, onSelect }: { label: string; selected: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "inline-flex min-h-12 items-center gap-2.5 rounded-full border px-6 text-[0.95rem] transition-all duration-500 ease-[var(--ease-breath)]",
        selected
          ? "border-ciruela bg-ciruela text-crema"
          : "border-ciruela/20 text-ciruela hover:border-ciruela/60 hover:bg-white/60",
      )}
    >
      {selected && <Check size={16} strokeWidth={1.5} aria-hidden />}
      {label}
    </button>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} role="alert" className="mt-2 w-full text-sm text-rosa-deep">
      {children}
    </p>
  );
}

type TextFieldProps = React.ComponentPropsWithRef<"input"> & { id: string; label: string; error?: string };

function TextField({ id, label, error, ...props }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-2 block">
        {label}
      </label>
      <input
        id={id}
        type="text"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="min-h-12 w-full border-b border-ciruela/20 bg-transparent py-2 text-lead focus:border-ciruela focus:outline-none"
        {...props}
      />
      {error && <FieldError id={`${id}-error`}>{error}</FieldError>}
    </div>
  );
}
