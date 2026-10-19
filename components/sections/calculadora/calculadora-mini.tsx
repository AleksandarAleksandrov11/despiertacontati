"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { calculadoraForm, calculadoraPromo, rutasCalculadora } from "@/content/calculadora";
import { Button } from "@/components/ui/button";
import { fechaParam, fechaValida } from "@/lib/matriz";
import { FechaCampos, fechaVacia, type FechaForm } from "./fecha-campos";

export function CalculadoraMini({ idPrefix }: { idPrefix: string }) {
  const router = useRouter();
  const [form, setForm] = useState<FechaForm>(fechaVacia);
  const [invalid, setInvalid] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fecha = { dia: Number(form.dia), mes: Number(form.mes), anio: Number(form.anio) };
    if (!fechaValida(fecha)) {
      setInvalid(true);
      return;
    }
    router.push(`${rutasCalculadora.individual}?fecha=${fechaParam(fecha)}`);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[1.25rem] bg-crema p-6 text-ciruela shadow-[0_30px_70px_-45px_rgba(63,46,58,0.6)] sm:p-8">
      <FechaCampos idPrefix={idPrefix} value={form} onChange={setForm} invalid={invalid} showName={false} />
      <p aria-live="polite" className="mt-2 min-h-5 text-sm text-rosa-deep">
        {invalid ? calculadoraForm.error : ""}
      </p>
      <Button type="submit" className="mt-2 w-full">
        {calculadoraPromo.individual}
      </Button>
    </form>
  );
}
