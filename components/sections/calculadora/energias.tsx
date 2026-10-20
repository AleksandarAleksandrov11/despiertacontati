import { arcano } from "@/content/arcanos";
import { calculadoraIndividual } from "@/content/calculadora";
import type { EnergiasAnio, FilaChakra, Puntos, Tramo } from "@/lib/matriz";
import { cn } from "@/lib/utils";
import { ArcanoTitle } from "./lectura";

const chakraColors = [
  "var(--color-chakra-corona)",
  "var(--color-chakra-tercer-ojo)",
  "var(--color-chakra-garganta)",
  "var(--color-chakra-corazon)",
  "var(--color-chakra-plexo)",
  "var(--color-chakra-sacro)",
  "var(--color-chakra-raiz)",
];

export function EnergiasAnioCard({ anio, className }: { anio: EnergiasAnio; className?: string }) {
  const copy = calculadoraIndividual.edades.anio;
  const items = [
    { label: copy.edad(anio.edad), valor: anio.propia },
    { label: copy.edad(anio.opuesta), valor: anio.deOpuesta },
    { label: copy.suma, valor: anio.suma },
  ];
  return (
    <div className={cn("rounded-[1.25rem] bg-ciruela p-7 text-crema sm:p-9", className)}>
      <p className="eyebrow text-crema/70">{copy.eyebrow}</p>
      <p className="mt-3 font-serif text-[1.8rem] leading-tight">{copy.title(anio.edad)}</p>
      <p className="mt-2 max-w-xl text-crema/75">{copy.text}</p>
      <ul className="mt-7 grid gap-3 md:grid-cols-3">
        {items.map((item) => (
          <li key={item.label} className="rounded-2xl bg-crema px-5 py-4">
            <p className="eyebrow mb-3 text-ink-soft">{item.label}</p>
            <ArcanoTitle numero={item.valor} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EnergiasEdades({ tramos, anio }: { tramos: Tramo[]; anio: EnergiasAnio | null }) {
  const copy = calculadoraIndividual.edades;
  const nivel = (tramo: number, etapa: number) => (anio ? anio.posiciones.findIndex((item) => item.tramo === tramo && item.etapa === etapa) : -1);
  return (
    <>
      {anio && <EnergiasAnioCard anio={anio} className="mb-8" />}
      <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {tramos.map((tramo, tramoIndex) => (
          <li key={tramo.desde} className="rounded-[1.25rem] bg-crema p-5 sm:p-6">
            <p className="eyebrow">{copy.tramo(tramo.desde)}</p>
            <ul className="mt-4 flex flex-col gap-1">
              {tramo.etapas.map((etapa, etapaIndex) => {
                const marca = nivel(tramoIndex, etapaIndex);
                return (
                  <li
                    key={etapa.etiqueta}
                    aria-current={marca === 0 ? "true" : undefined}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-2.5 py-1.5",
                      marca === 0 && "bg-dorado-soft/45 ring-1 ring-dorado",
                      marca === 1 && "outline-1 outline-dashed outline-dorado",
                      marca < 0 && etapa.principal && "bg-lavanda/70",
                    )}
                  >
                    <span className="nums w-[4.6rem] shrink-0 whitespace-nowrap text-[0.8rem] text-ink-soft">
                      <span className="sr-only">{copy.edad} </span>
                      {etapa.etiqueta}
                    </span>
                    <span
                      className={cn(
                        "nums grid size-8 shrink-0 place-items-center rounded-full text-sm font-medium",
                        etapa.principal ? "bg-ciruela text-crema" : "bg-rosa-polvo text-ciruela",
                      )}
                    >
                      {etapa.valor}
                    </span>
                    <span className="min-w-0 text-[0.92rem] leading-tight text-ciruela">{arcano(etapa.valor)?.nombre}</span>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-ink-soft">{copy.nota}</p>
    </>
  );
}

export function MapaChakras({ filas, total }: { filas: FilaChakra[]; total: FilaChakra }) {
  const copy = calculadoraIndividual.chakras;
  const celda = "nums px-3 py-3 text-center text-base font-medium text-ciruela sm:px-5";
  return (
    <>
      <div className="overflow-hidden rounded-[1.25rem] bg-crema">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{copy.title}</caption>
          <thead>
            <tr className="border-b border-ciruela/10 text-[0.72rem] uppercase tracking-[0.16em] text-ink-soft">
              <th scope="col" className="px-4 py-4 font-medium sm:px-6">
                {copy.columnas.chakra}
              </th>
              <th scope="col" className="px-3 py-4 text-center font-medium sm:px-5">
                {copy.columnas.energia}
              </th>
              <th scope="col" className="px-3 py-4 text-center font-medium sm:px-5">
                {copy.columnas.fisico}
              </th>
              <th scope="col" className="px-3 py-4 text-center font-medium sm:px-5">
                {copy.columnas.emocion}
              </th>
            </tr>
          </thead>
          <tbody>
            {filas.map((fila, index) => {
              const chakra = copy.filas[index]!;
              return (
                <tr key={chakra.nombre} className="border-b border-ciruela/10">
                  <th scope="row" className="px-4 py-3 font-normal sm:px-6">
                    <span className="flex items-center gap-3">
                      <span aria-hidden className="size-3 shrink-0 rounded-full" style={{ backgroundColor: chakraColors[index] }} />
                      <span>
                        <span className="block font-serif text-[1.2rem] leading-tight text-ciruela">
                          {chakra.es} <span className="text-[0.95rem] italic text-ink-soft">· {chakra.nombre}</span>
                        </span>
                        <span className="hidden text-sm text-ink-soft sm:block">{chakra.area}</span>
                      </span>
                    </span>
                  </th>
                  <td className={celda}>{fila.energia}</td>
                  <td className={celda}>{fila.fisico}</td>
                  <td className={celda}>{fila.emocion}</td>
                </tr>
              );
            })}
            <tr className="bg-lavanda/70">
              <th scope="row" className="px-4 py-4 font-serif text-[1.2rem] font-normal text-ciruela sm:px-6">
                {copy.total}
              </th>
              <td className={celda}>{total.energia}</td>
              <td className={celda}>{total.fisico}</td>
              <td className={celda}>{total.emocion}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-5 text-sm text-ink-soft">{copy.aviso}</p>
    </>
  );
}

function LineaLinaje({ label, partes, valores }: { label: string; partes: string[]; valores: [number, number, number] }) {
  return (
    <article className="flex h-full flex-col rounded-[1.25rem] bg-crema p-7 sm:p-8">
      <h3 className="text-h3">{label}</h3>
      <p className="nums mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft">
        <span>
          {partes[0]} <strong className="font-medium text-ciruela">{valores[0]}</strong>
        </span>
        <span aria-hidden>+</span>
        <span>
          {partes[1]} <strong className="font-medium text-ciruela">{valores[1]}</strong>
        </span>
      </p>
      <div className="mt-6 border-t border-ciruela/10 pt-6">
        <ArcanoTitle numero={valores[2]} />
      </div>
    </article>
  );
}

export function Linaje({ puntos, masculino, femenino }: { puntos: Puntos; masculino: number; femenino: number }) {
  const copy = calculadoraIndividual.linaje;
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        <LineaLinaje label={copy.paterna.label} partes={copy.paterna.partes} valores={[puntos.f, puntos.h, masculino]} />
        <LineaLinaje label={copy.materna.label} partes={copy.materna.partes} valores={[puntos.g, puntos.i, femenino]} />
        {[
          { ...copy.centro, numero: puntos.k },
          { ...copy.union, numero: puntos.k1 },
        ].map((item) => (
          <article key={item.label} className="rounded-[1.25rem] bg-crema/70 p-7 sm:p-8">
            <p className="eyebrow">{item.label}</p>
            <p className="mt-2 text-sm text-ink-soft">{item.text}</p>
            <div className="mt-6">
              <ArcanoTitle numero={item.numero} />
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-ink-soft">{copy.nota}</p>
    </>
  );
}
