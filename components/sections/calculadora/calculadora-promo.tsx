import { calculadoraPromo, rutasCalculadora } from "@/content/calculadora";
import { Button } from "@/components/ui/button";
import { calcularMatriz } from "@/lib/matriz";
import { cn } from "@/lib/utils";
import { CalculadoraMini } from "./calculadora-mini";
import { MatrizSvg } from "./matriz-svg";

const ejemplo = calcularMatriz({ dia: 21, mes: 6, anio: 1988 }).puntos;

export function CalculadoraPromo({ tone = "dark", id = "calculadora" }: { tone?: "dark" | "light"; id?: string }) {
  const copy = calculadoraPromo;
  const dark = tone === "dark";
  return (
    <section
      aria-labelledby={`${id}-title`}
      className={cn("section-pad relative overflow-hidden", dark ? "bg-ciruela text-crema" : "bg-lavanda text-ciruela")}
    >
      <div aria-hidden className={cn("blob -left-40 top-0 size-[30rem]", dark ? "bg-malva/35" : "bg-rosa-polvo")} />
      <div aria-hidden className={cn("blob -right-32 bottom-0 size-[26rem]", dark ? "bg-rosa/25" : "bg-salvia")} />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className={cn("eyebrow mb-5", dark && "text-crema/70")}>{copy.eyebrow}</p>
          <h2 id={`${id}-title`} className="text-h2">
            {copy.title}
          </h2>
          <p className={cn("mt-5 max-w-xl text-lead", dark ? "text-crema/80" : "text-ink-soft")}>{copy.text}</p>
          <div className="mt-8 max-w-lg">
            <CalculadoraMini idPrefix={`${id}-fecha`} />
          </div>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
            <Button href={rutasCalculadora.codigo} variant="link" tone={dark ? "dark" : "light"}>
              {copy.codigo}
            </Button>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className={cn("mx-auto max-w-[30rem] rounded-full", !dark && "bg-ciruela p-4 sm:p-6")}>
            <MatrizSvg puntos={ejemplo} etiquetas={["", "", ""]} done label="" decorativa />
          </div>
        </div>
      </div>
    </section>
  );
}
