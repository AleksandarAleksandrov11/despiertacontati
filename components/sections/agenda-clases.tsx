import { agendaClases } from "@/content/agenda";
import { WhatsappIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { cn, whatsappHref } from "@/lib/utils";

function hoyMadrid() {
  return new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Madrid" });
}

function partes(fecha: string) {
  const date = new Date(`${fecha}T12:00:00Z`);
  return {
    dia: date.getUTCDate(),
    semana: new Intl.DateTimeFormat("es-ES", { weekday: "long", timeZone: "UTC" }).format(date),
    anio: date.getUTCFullYear(),
  };
}

export function AgendaClases({ id = "agenda" }: { id?: string }) {
  const hoy = hoyMadrid();
  const meses = agendaClases.meses.filter((mes) => mes.clases.some((clase) => clase.fecha >= hoy));

  if (meses.length === 0) return null;

  return (
    <div>
      <p className="eyebrow mb-5">{agendaClases.eyebrow}</p>
      <h2 id={`${id}-title`} className="text-h2">
        {agendaClases.title}
      </h2>
      <p className="mt-5 max-w-xl text-lead text-ink-soft">{agendaClases.text}</p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {meses.map((mes) => (
          <li key={mes.nombre} className="rounded-[1.25rem] bg-crema/80 p-6">
            <h3 className="font-serif text-[1.6rem] leading-tight">
              {mes.nombre} <span className="text-ink-soft">{partes(mes.clases[0]!.fecha).anio}</span>
            </h3>
            <ul className="mt-5 space-y-3">
              {mes.clases.map((clase) => {
                const { dia, semana } = partes(clase.fecha);
                const pasada = clase.fecha < hoy;
                return (
                  <li key={clase.fecha} className={cn("flex items-baseline gap-4", pasada && "opacity-40")}>
                    <time dateTime={clase.fecha} className="nums font-serif text-[2.2rem] leading-none text-ciruela">
                      {dia}
                    </time>
                    <span className="capitalize text-ink-soft">{semana}</span>
                    {clase.nota && <span className="ml-auto text-sm font-medium text-malva-deep">{clase.nota}</span>}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Button href={whatsappHref(agendaClases.whatsapp)} icon={<WhatsappIcon size={18} />}>
          {agendaClases.cta}
        </Button>
      </div>
    </div>
  );
}
