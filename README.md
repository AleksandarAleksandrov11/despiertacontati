# Despierta con Tati

Web de Despierta con Tati, terapia holística en Valencia y online: Reiki, meditación y tarot terapéutico.

## Stack

- Next.js (App Router) y TypeScript
- Tailwind CSS
- Motion, Lenis y Embla Carousel
- React Hook Form y Zod
- Formulario de contacto que abre WhatsApp con los datos y envía copia por email con Resend
- Resend para la suscripción a novedades
- Vercel Analytics y Speed Insights

## Arranque

```bash
npm install
cp .env.example .env.local
npm run dev
```

Scripts disponibles: `npm run dev`, `npm run build`, `npm run start` y `npm run lint`.

## Variables de entorno

| Variable | Uso |
| --- | --- |
| `RESEND_API_KEY` | Clave de Resend para recibir por email la copia de cada formulario y las suscripciones. Sin clave, el formulario sigue funcionando por WhatsApp; en desarrollo el email se simula. |
| `CONTACT_TO_EMAIL` | Dirección que recibe los mensajes. |
| `CONTACT_FROM_EMAIL` | Remitente verificado en Resend. |

## Contenido

Todo el contenido editable está en `/content`:

- `site.ts`: datos de contacto, redes, navegación, textos globales y NIF para los textos legales.
- `paginas.ts`: textos de inicio, sobre mí, testimonios, tablón, contacto y errores.
- `servicios.ts`: servicios, Método Despierta y textos de cada página de servicio.
- `meditaciones.ts`: meditaciones grabadas.
- `anuncios.ts`: anuncios del tablón. Si un anuncio lleva `date`, se muestra la fecha, se ordena por ella, desaparece al pasar y genera datos estructurados de evento.
- `testimonios.ts`, `faqs.ts` y `recorrido.ts`.
- `legal.ts` y `cookies.ts`: aviso legal, privacidad, política de cookies y textos del banner. Si `legal.nif` de `site.ts` está vacío, la línea del NIF no se muestra.
- `imagenes.ts`: fotos y textos alternativos. Las imágenes están en `/public/images` y el logotipo en `/public/brand`.

Las tipografías de las imágenes Open Graph están en `/assets/fonts`.

## Despliegue

Preparada para Vercel: conecta el repositorio, añade las variables de entorno y despliega.
