import { site } from "@/content/site";
import { bloques, metodo } from "@/content/servicios";
import { categorias, productosDe } from "@/content/tienda";
import { guia } from "@/content/guia";
import { calculadoraHub, rutasCalculadora } from "@/content/calculadora";
import { hayTestimonios } from "@/content/testimonios";
import { formatPrice, productHref } from "@/lib/tienda";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

function tienda() {
  return categorias
    .map((categoria) => {
      const lines = productosDe(categoria.id).map((producto) => {
        const price =
          producto.precio === null
            ? "precio a consultar"
            : `${formatPrice(producto.precio)}${producto.precioHabitual ? ` (precio habitual ${formatPrice(producto.precioHabitual)})` : ""}`;
        const estado = producto.estado === "proximamente" ? ", próximamente" : "";
        return `- [${producto.nombre}](${absoluteUrl(productHref(producto))}): ${price}${estado}. ${producto.frase}`;
      });
      return `### ${categoria.nav}\n${categoria.text}\n${lines.join("\n")}`;
    })
    .join("\n\n")
    .replace(/ /g, " ");
}

export function GET() {
  const pages = [
    ["Inicio", "/"],
    ["Quién soy", "/quien-soy"],
    ["Servicios", "/servicios"],
    ["Tienda", "/tienda"],
    ["Calculadoras gratuitas", rutasCalculadora.hub],
    ["Guía gratuita Tu primera pausa", guia.slug],
    ["Tablón", "/tablon"],
    ...(hayTestimonios ? [["Testimonios", "/testimonios"]] : []),
    ["Contacto", "/contacto"],
    ["Condiciones de compra", "/condiciones-de-compra"],
  ];

  const body = `# ${site.name}

> ${site.person.fullName} (Tati) es terapeuta holística con más de 20 años de experiencia y profesora de Reiki desde ${site.facts.reikiSince}. Acompaña con Reiki y terapias energéticas, limpieza energética de espacios, meditación, tarot y autoconocimiento, online y a distancia, también las clases de meditación en grupo.

Frase de marca: ${site.tagline}

## Quién es Tati
- Hace más de 20 años abrió Anthakarana, su primer centro de terapias naturales.
- Enseña Reiki desde ${site.facts.reikiSince}: formaciones de Reiki y de crecimiento personal.
- Trabaja con Reiki, péndulo hebreo, chakras, sanación akáshica, limpieza energética, meditación, tarot, Matriz del Destino, Código Personal y Carta Personal.
- Estilo práctico y directo. Para ella, despertar es recordar quién eres, recuperar tu poder de elegir y crear tu nueva vida.

## Método Despierta
${metodo.steps.map((step) => `${step.number}. ${step.step} (${step.tool}): ${step.text}`).join("\n")}

## Servicios
${bloques.map((bloque) => `- [${bloque.benefit} · ${bloque.area}](${absoluteUrl(bloque.href)}): ${bloque.includes.join(", ")}.`).join("\n")}

La sanación akáshica es un trabajo de sanación energética, no una lectura de registros. La Matriz del Destino se calcula con la fecha de nacimiento y no es tarot; el Código Personal y la Carta Personal son tarot numerológico. Todos los servicios son online o a distancia, también las clases de meditación en grupo. Los servicios sin precio publicado se informan por WhatsApp.

## Tienda
Compra por WhatsApp desde la ficha de cada producto. Los datos de pago se facilitan de forma privada. Meditaciones en MP3 por enlace privado de descarga y lecturas en vídeo y PDF por WhatsApp, siempre tras confirmar el pago.

${tienda()}

## Calculadoras gratuitas
${calculadoraHub.subtitle}
- [Matriz del Destino](${absoluteUrl(rutasCalculadora.individual)}): con la fecha de nacimiento muestra la matriz completa, la energía personal, el centro, el talento, el linaje y los cuatro propósitos, con un PDF gratuito.
- [Arcano Personal y Código Personal](${absoluteUrl(rutasCalculadora.codigo)}): tarot numerológico. Con la fecha de nacimiento muestra el arcano personal (la carta personal) y las cinco cartas del Código Personal, con el método Tarot Pragmático de Raúl Muñoz Jara y un PDF gratuito.
El análisis completo de la matriz, en una sesión en directo de 50 minutos con Tati, se pide por WhatsApp desde la propia calculadora.

## Guía gratuita
[${guia.title}](${absoluteUrl(guia.slug)}): ${guia.subtitle} Incluye: ${guia.puntos.map((punto) => punto.title).join(", ")}.

## Contacto
- Web: ${site.url}
- Email: ${site.contact.email}
- Teléfono y WhatsApp: ${site.contact.phoneDisplay}
- Instagram: ${site.social.instagram.url}
- Instagram de tarot (${site.social.tarot.label}): ${site.social.tarot.url}
- Sesiones: online

## Páginas
${pages.map(([label, path]) => `- [${label}](${absoluteUrl(path)})`).join("\n")}

## Nota
Las prácticas de esta web son de bienestar y complementarias. No sustituyen la atención médica ni psicológica.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
