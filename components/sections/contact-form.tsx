"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useId, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { contactoPage } from "@/content/paginas";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { contactSchema, contactTopics, type ContactInput } from "@/lib/schemas";
import { contactWhatsappHref } from "@/lib/contact-whatsapp";
import { sendMessage } from "@/lib/send-message";
import { cn } from "@/lib/utils";

const copy = contactoPage.form;
const stepFields: (keyof ContactInput)[][] = [["servicio"], ["modalidad"], ["mensaje"], ["nombre", "contacto", "privacidad"]];
const lastStep = stepFields.length - 1;
const ease = [0.22, 1, 0.36, 1] as const;

function isTopic(value: string | null): value is ContactInput["servicio"] {
  return value !== null && (contactTopics as readonly string[]).includes(value);
}

export function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("servicio");
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [sentHref, setSentHref] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  const id = useId();

  const {
    register,
    trigger,
    setValue,
    getValues,
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

  const values = useWatch({ control });
  const waHref = contactWhatsappHref(values);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [step, sentHref]);

  function goTo(target: number) {
    setDirection(target > step ? 1 : -1);
    setStep(Math.max(0, Math.min(target, lastStep)));
  }

  async function next() {
    const valid = await trigger(stepFields[step]);
    if (valid) goTo(step + 1);
  }

  function choose(field: "servicio" | "modalidad", value: string) {
    setValue(field, value as never, { shouldValidate: true });
    window.setTimeout(() => goTo(step + 1), 260);
  }

  function validateAll() {
    const result = contactSchema.safeParse(getValues());
    if (!result.success) {
      void trigger(stepFields[lastStep]);
      return null;
    }
    return result.data;
  }

  function complete(data: ContactInput) {
    if (!data.empresa) void sendMessage(data).catch(() => undefined);
    const href = contactWhatsappHref(data);
    window.setTimeout(() => setSentHref(href), 0);
  }

  function onSend(event: MouseEvent<HTMLAnchorElement>) {
    const data = validateAll();
    if (!data) {
      event.preventDefault();
      return;
    }
    complete(data);
  }

  function onKeyDown(event: KeyboardEvent<HTMLFormElement>) {
    if (event.key !== "Enter" || event.shiftKey) return;
    const target = event.target as HTMLElement;
    if (target.tagName === "BUTTON" || target.tagName === "A") return;
    event.preventDefault();
    if (step < lastStep) {
      void next();
      return;
    }
    const data = validateAll();
    if (!data) return;
    window.open(contactWhatsappHref(data), "_blank", "noopener,noreferrer");
    complete(data);
  }

  function restart() {
    reset({ type: "contacto", mensaje: "", nombre: "", contacto: "", empresa: "" });
    setStep(0);
    setSentHref(null);
  }

  if (sentHref) {
    return (
      <m.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="rounded-[2rem] bg-crema p-8 shadow-[0_30px_80px_-50px_rgba(63,46,58,0.45)] sm:p-12"
        role="status"
      >
        <span aria-hidden className="mb-8 inline-flex size-14 items-center justify-center rounded-full bg-salvia text-ciruela">
          <Check size={24} strokeWidth={1.25} />
        </span>
        <h2 ref={headingRef} tabIndex={-1} className="text-h2 outline-none">
          {copy.success.title}
        </h2>
        <p className="mt-4 max-w-md text-lead text-ink-soft">{copy.success.text}</p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Button href={sentHref} icon={<WhatsappIcon size={18} />}>
            {copy.success.open}
          </Button>
          <Button variant="link" onClick={restart}>
            {copy.success.again}
          </Button>
        </div>
      </m.div>
    );
  }

  const current = copy.steps[step];

  return (
    <form
      noValidate
      onSubmit={(event) => event.preventDefault()}
      onKeyDown={onKeyDown}
      className="relative overflow-hidden rounded-[2rem] bg-crema shadow-[0_30px_80px_-50px_rgba(63,46,58,0.45)]"
    >
      <input type="hidden" {...register("type")} />
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-empresa`}>Empresa</label>
        <input id={`${id}-empresa`} type="text" tabIndex={-1} autoComplete="off" {...register("empresa")} />
      </div>

      <div className="border-b border-ciruela/10 px-6 pb-6 pt-7 sm:px-10">
        <p className="sr-only" aria-live="polite">
          {copy.stepLabel} {step + 1} {copy.of} {copy.steps.length}: {current.label}
        </p>
        <ol aria-hidden className="grid grid-cols-4 gap-2">
          {copy.steps.map((item, index) => {
            const done = index < step;
            const active = index === step;
            return (
              <li key={item.id} className="flex flex-col gap-3">
                <span className={cn("h-1 rounded-full transition-colors duration-700", index <= step ? "bg-ciruela" : "bg-ciruela/10")} />
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "inline-flex size-6 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-medium transition-colors duration-500",
                      active && "bg-ciruela text-crema",
                      done && "bg-salvia text-ciruela",
                      !active && !done && "border border-ciruela/20 text-ink-soft",
                    )}
                  >
                    {done ? <Check size={12} strokeWidth={2} /> : index + 1}
                  </span>
                  <span className={cn("hidden text-sm sm:inline", active ? "font-medium text-ciruela" : "text-ink-soft")}>{item.label}</span>
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="px-6 py-8 sm:px-10 sm:py-10">
        <AnimatePresence mode="wait" initial={false}>
          <m.fieldset
            key={step}
            initial={{ opacity: 0, x: direction * 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -32 }}
            transition={{ duration: 0.45, ease }}
            aria-labelledby={`${id}-question`}
            aria-describedby={`${id}-hint`}
            className="min-w-0"
          >
            <h2 id={`${id}-question`} ref={headingRef} tabIndex={-1} className="text-h3 outline-none sm:text-[2.25rem]">
              {current.question}
            </h2>
            <p id={`${id}-hint`} className="mt-2 text-ink-soft">
              {current.hint}
            </p>

            {step === 0 && (
              <div role="radiogroup" aria-labelledby={`${id}-question`} className="mt-8 grid gap-3 sm:grid-cols-2">
                {copy.topics.map((option) => (
                  <OptionCard
                    key={option.value}
                    label={option.label}
                    selected={values.servicio === option.value}
                    onSelect={() => choose("servicio", option.value)}
                  />
                ))}
                {errors.servicio && <FieldError id={`${id}-servicio`}>{errors.servicio.message}</FieldError>}
              </div>
            )}

            {step === 1 && (
              <div role="radiogroup" aria-labelledby={`${id}-question`} className="mt-8 grid gap-3 sm:grid-cols-2">
                {copy.modalities.map((option) => (
                  <OptionCard
                    key={option.value}
                    label={option.label}
                    selected={values.modalidad === option.value}
                    onSelect={() => choose("modalidad", option.value)}
                  />
                ))}
                {errors.modalidad && <FieldError id={`${id}-modalidad`}>{errors.modalidad.message}</FieldError>}
              </div>
            )}

            {step === 2 && (
              <div className="mt-8">
                <label htmlFor={`${id}-mensaje`} className="mb-2 block text-sm font-medium">
                  {copy.messageLabel}
                </label>
                <textarea
                  id={`${id}-mensaje`}
                  rows={5}
                  placeholder={copy.messagePlaceholder}
                  className="block w-full resize-none rounded-2xl border border-ciruela/15 bg-white/70 px-5 py-4 text-base leading-relaxed placeholder:text-ink-soft/70 focus:border-ciruela/50 focus:outline-none focus:ring-4 focus:ring-lavanda"
                  aria-invalid={errors.mensaje ? true : undefined}
                  {...register("mensaje")}
                />
                {errors.mensaje && <FieldError id={`${id}-mensaje-error`}>{errors.mensaje.message}</FieldError>}
              </div>
            )}

            {step === 3 && (
              <div className="mt-8 space-y-6">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-ink-soft">{copy.summary}:</span>
                  {[
                    { label: copy.topics.find((t) => t.value === values.servicio)?.label, step: 0 },
                    { label: copy.modalities.find((t) => t.value === values.modalidad)?.label, step: 1 },
                  ]
                    .filter((item) => item.label)
                    .map((item) => (
                      <button
                        key={item.step}
                        type="button"
                        onClick={() => goTo(item.step)}
                        className="inline-flex min-h-9 items-center rounded-full bg-rosa-polvo px-4 text-ciruela transition-colors hover:bg-lavanda"
                      >
                        {item.label}
                      </button>
                    ))}
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField
                    id={`${id}-nombre`}
                    label={copy.nameLabel}
                    placeholder={copy.namePlaceholder}
                    autoComplete="given-name"
                    error={errors.nombre?.message}
                    {...register("nombre", { onChange: () => errors.nombre && trigger("nombre") })}
                  />
                  <TextField
                    id={`${id}-contacto`}
                    label={copy.contactLabel}
                    placeholder={copy.contactPlaceholder}
                    autoComplete="email"
                    error={errors.contacto?.message}
                    {...register("contacto", { onChange: () => errors.contacto && trigger("contacto") })}
                  />
                </div>
                <div>
                  <label className="flex cursor-pointer items-start gap-3 text-[0.95rem]">
                    <input
                      type="checkbox"
                      className="mt-0.5 size-5 shrink-0 cursor-pointer accent-ciruela"
                      aria-invalid={errors.privacidad ? true : undefined}
                      aria-describedby={errors.privacidad ? `${id}-privacidad-error` : undefined}
                      {...register("privacidad", { onChange: () => errors.privacidad && trigger("privacidad") })}
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
                <p className="rounded-2xl bg-rosa-polvo/60 px-5 py-4 text-xs leading-relaxed text-ink-soft">{copy.privacyNote}</p>
              </div>
            )}
          </m.fieldset>
        </AnimatePresence>
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-ciruela/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-10">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => goTo(step - 1)}
            className="inline-flex min-h-11 items-center justify-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ciruela"
          >
            <ArrowLeft size={16} strokeWidth={1.25} aria-hidden />
            {copy.back}
          </button>
        ) : (
          <span className="hidden text-sm text-ink-soft sm:inline">{copy.enterHint}</span>
        )}
        {step < lastStep ? (
          <Button onClick={next} className="w-full flex-row-reverse sm:ml-auto sm:w-auto" icon={<ArrowRight size={18} strokeWidth={1.25} aria-hidden />}>
            {copy.next}
          </Button>
        ) : (
          <Button href={waHref} onClick={onSend} className="w-full whitespace-nowrap sm:ml-auto sm:w-auto" icon={<WhatsappIcon size={18} />}>
            {copy.submit}
          </Button>
        )}
      </div>
    </form>
  );
}

function OptionCard({ label, selected, onSelect }: { label: string; selected: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "flex min-h-14 w-full items-center justify-between gap-4 rounded-2xl border px-5 py-3 text-left transition-all duration-500 ease-[var(--ease-breath)]",
        selected
          ? "border-ciruela bg-ciruela text-crema"
          : "border-ciruela/15 bg-white/60 text-ciruela hover:border-ciruela/40 hover:bg-white",
      )}
    >
      <span className="font-medium">{label}</span>
      <span
        aria-hidden
        className={cn(
          "inline-flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors",
          selected ? "border-crema bg-crema text-ciruela" : "border-ciruela/30",
        )}
      >
        {selected && <Check size={12} strokeWidth={2.5} />}
      </span>
    </button>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} role="alert" className="col-span-full mt-2 text-sm text-rosa-deep">
      {children}
    </p>
  );
}

type TextFieldProps = React.ComponentPropsWithRef<"input"> & { id: string; label: string; error?: string };

function TextField({ id, label, error, ...props }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type="text"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "block min-h-13 w-full rounded-xl border bg-white/70 px-4 text-base placeholder:text-ink-soft/70 focus:outline-none focus:ring-4 focus:ring-lavanda",
          error ? "border-rosa-deep/60" : "border-ciruela/15 focus:border-ciruela/50",
        )}
        {...props}
      />
      {error && <FieldError id={`${id}-error`}>{error}</FieldError>}
    </div>
  );
}
