"use client";

import { ChevronDown } from "lucide-react";
import { calculadoraForm, meses } from "@/content/calculadora";
import { cn } from "@/lib/utils";

export type FechaForm = { dia: string; mes: string; anio: string; nombre: string };

export const fechaVacia: FechaForm = { dia: "", mes: "", anio: "", nombre: "" };

const dias = Array.from({ length: 31 }, (_, index) => String(index + 1));
const anioActual = new Date().getFullYear();
const anios = Array.from({ length: anioActual - 1899 }, (_, index) => String(anioActual - index));

const fieldClass =
  "block min-h-13 w-full appearance-none rounded-xl border border-ciruela/20 bg-white/75 py-3 pl-4 pr-10 font-serif text-xl text-ciruela transition-colors focus:border-malva-deep focus:outline-none aria-[invalid=true]:border-rosa-deep";

function Select({
  id,
  label,
  value,
  onChange,
  options,
  invalid,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  invalid: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-2 block">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          required
          aria-invalid={invalid || undefined}
          onChange={(event) => onChange(event.target.value)}
          className={fieldClass}
        >
          <option value="" disabled>
            {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={18}
          strokeWidth={1.25}
          aria-hidden
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft"
        />
      </div>
    </div>
  );
}

export function FechaCampos({
  idPrefix,
  value,
  onChange,
  invalid,
  showName = true,
  legend,
}: {
  idPrefix: string;
  value: FechaForm;
  onChange: (value: FechaForm) => void;
  invalid: boolean;
  showName?: boolean;
  legend?: string;
}) {
  const copy = calculadoraForm;
  const set = (key: keyof FechaForm) => (next: string) => onChange({ ...value, [key]: next });

  return (
    <fieldset className="min-w-0">
      {legend && <legend className="mb-4 font-serif text-2xl text-ciruela">{legend}</legend>}
      <div className="grid grid-cols-[1fr_1.6fr_1.25fr] gap-2.5 sm:gap-3">
        <Select
          id={`${idPrefix}-dia`}
          label={copy.dia}
          value={value.dia}
          onChange={set("dia")}
          options={dias.map((dia) => ({ value: dia, label: dia }))}
          invalid={invalid}
        />
        <Select
          id={`${idPrefix}-mes`}
          label={copy.mes}
          value={value.mes}
          onChange={set("mes")}
          options={meses.map((mes, index) => ({ value: String(index + 1), label: mes }))}
          invalid={invalid}
        />
        <Select
          id={`${idPrefix}-anio`}
          label={copy.anio}
          value={value.anio}
          onChange={set("anio")}
          options={anios.map((anio) => ({ value: anio, label: anio }))}
          invalid={invalid}
        />
      </div>
      {showName && (
        <div className="mt-4">
          <label htmlFor={`${idPrefix}-nombre`} className="eyebrow mb-2 block">
            {copy.nombre} <span className="normal-case tracking-normal text-ink-soft">({copy.opcional})</span>
          </label>
          <input
            id={`${idPrefix}-nombre`}
            type="text"
            value={value.nombre}
            maxLength={40}
            autoComplete="given-name"
            onChange={(event) => set("nombre")(event.target.value)}
            aria-describedby={`${idPrefix}-nombre-hint`}
            className={cn(fieldClass, "pr-4")}
          />
          <p id={`${idPrefix}-nombre-hint`} className="mt-1.5 text-sm text-ink-soft">
            {copy.nombreHint}
          </p>
        </div>
      )}
    </fieldset>
  );
}
