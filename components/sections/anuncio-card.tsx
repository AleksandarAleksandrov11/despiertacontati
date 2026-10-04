import type { Anuncio } from "@/content/anuncios";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { formatAnuncioDate } from "@/lib/anuncios";
import { whatsappHref } from "@/lib/utils";

const accents: Record<Anuncio["type"], string> = {
  Grupo: "var(--color-chakra-tercer-ojo)",
  Curso: "var(--color-chakra-corazon)",
  Meditación: "var(--color-chakra-garganta)",
  Novedad: "var(--color-chakra-sacro)",
};

export function AnuncioCard({ anuncio, headingLevel = "h3" }: { anuncio: Anuncio; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const href =
    anuncio.cta.kind === "whatsapp" ? whatsappHref(anuncio.cta.message) : `/contacto?servicio=${anuncio.cta.topic}`;

  return (
    <TiltCard as="article" className="h-full" innerClassName="flex h-full flex-col p-7 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow flex items-center gap-2.5">
          <span aria-hidden className="size-2 rounded-full" style={{ backgroundColor: accents[anuncio.type] }} />
          {anuncio.type}
        </p>
        {anuncio.date ? (
          <time dateTime={anuncio.date} className="text-sm text-ink-soft">
            {formatAnuncioDate(anuncio.date)}
          </time>
        ) : (
          <p className="text-sm text-ink-soft">{anuncio.status}</p>
        )}
      </div>
      <Heading className="mt-6 text-h3">{anuncio.title}</Heading>
      <p className="mt-2 text-sm font-medium text-malva-deep">{anuncio.modality}</p>
      <p className="mt-4 flex-1 text-ink-soft">{anuncio.text}</p>
      <div className="mt-6">
        <Button href={href} variant="link">
          {anuncio.cta.label}
        </Button>
      </div>
    </TiltCard>
  );
}
