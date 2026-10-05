import { site } from "@/content/site";
import { metodo, servicios, sesionesIndividuales, clasesGrupales } from "@/content/servicios";
import { meditaciones } from "@/content/meditaciones";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.person.fullName} (Tati) es terapeuta holística en ${site.location.locality} (${site.location.region}, España) con más de 20 años de experiencia y profesora de Reiki desde ${site.facts.reikiSince}. Acompaña, sobre todo a mujeres, en momentos de estrés y ansiedad con Reiki, meditación y tarot terapéutico, de forma presencial en ${site.location.locality} y online.

Lema: ${site.tagline}

## Quién es Tati
- Hace más de 20 años abrió Antacarana, su primer centro de terapias naturales (Reiki, cuencoterapia, cromoterapia y masajes).
- Enseña Reiki desde ${site.facts.reikiSince}: formaciones de Reiki y de crecimiento personal.
- Trabaja también con péndulo hebreo, registros akáshicos, meditación, tarot terapéutico y Matriz del Destino.
- Estilo práctico y directo, sin misticismo recargado.

## Método Despierta
${metodo.steps.map((step) => `${step.number}. ${step.step} (${step.tool}): ${step.text}`).join("\n")}

## Servicios
${servicios.map((servicio) => `- [${servicio.name}](${absoluteUrl(servicio.href)}): ${servicio.summary}`).join("\n")}

Sesiones individuales (presencial en ${site.location.locality} u online): ${sesionesIndividuales.join(", ")}.
Clases grupales: ${clasesGrupales.join(", ")}.
Meditaciones grabadas (se piden por WhatsApp): ${meditaciones.map((item) => `${item.title} (${item.moment.toLowerCase()})`).join(", ")}.
Cursos de Reiki en ${site.location.locality} y online; información de próximas fechas por formulario o WhatsApp.

Los precios no se publican en la web: se informan por formulario o WhatsApp.

## Contacto
- Web: ${site.url}
- Reservas: ${absoluteUrl("/contacto")}
- Email: ${site.contact.email}
- Teléfono y WhatsApp: ${site.contact.phoneDisplay}
- Instagram: ${site.social.instagram.url}
- Instagram de tarot (${site.social.tarot.label}): ${site.social.tarot.url}
- Ubicación: ${site.location.locality}, sesiones presenciales y online

## Páginas
- [Inicio](${absoluteUrl("/")})
- [Servicios](${absoluteUrl("/servicios")})
- [Sobre mí](${absoluteUrl("/sobre-mi")})
- [Testimonios](${absoluteUrl("/testimonios")})
- [Tablón](${absoluteUrl("/tablon")})
- [Contacto](${absoluteUrl("/contacto")})

## Nota
${site.disclaimer}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
