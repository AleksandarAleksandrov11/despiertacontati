# Despierta con Tati

Web de Despierta con Tati, terapia holística online: Reiki y terapias energéticas, limpieza energética de espacios, meditación, tarot y autoconocimiento, con tienda, calculadora de la Matriz del Destino y guía gratuita.

## Stack

- Next.js (App Router) y TypeScript
- Tailwind CSS
- Motion, Lenis y Embla Carousel
- React Hook Form y Zod
- React PDF para el PDF gratuito de la calculadora
- Vercel Analytics y Speed Insights, con eventos de la tienda, la guía y la calculadora

## Arranque

```bash
npm install
cp .env.example .env.local
npm run dev
```

Scripts disponibles: `npm run dev`, `npm run build`, `npm run start`, `npm run lint` y `npm run ebook`.

## Variables de entorno

| Variable | Uso |
| --- | --- |
| `LECTURA_COMPLETA_CLAVE` | Clave privada para generar la lectura completa de la Matriz del Destino en `/api/matriz/completa?fecha=AAAA-MM-DD&nombre=Nombre&clave=...`. Sin ella, la ruta responde 404. |

## Tienda

Los productos y precios están en `content/tienda.ts`. Cada producto con precio tiene su ficha en `/tienda/[slug]`. La compra se hace por WhatsApp desde la ficha, tras aceptar las condiciones de compra. Los productos con `ventana` (por ejemplo la oferta del Black Friday) solo se muestran entre sus fechas.

## Calculadora de la Matriz del Destino

- Páginas: `/calculadora` (elección), `/calculadora/matriz-del-destino` (individual) y `/calculadora/compatibilidad-de-pareja` (pareja). Las fechas y los nombres viajan en la URL (`?fecha=1985-03-15&nombre=Laura`, o `fecha1`, `fecha2`, `nombre1` y `nombre2` en pareja), así que cada resultado se puede compartir.
- El cálculo está en `lib/matriz.ts` (método de los 22 arcanos) y la posición de cada punto del octograma en `lib/matriz-geometria.ts`, que usan tanto la animación como el PDF.
- El PDF gratuito se genera al vuelo en `/api/matriz/pdf` con React PDF (`lib/pdf`). No se guarda nada: cada descarga se calcula con los datos de la URL.
- La compra de la lectura completa usa la misma caja de compra que la tienda, con la fecha y el nombre ya escritos en el mensaje de WhatsApp. La lectura de pareja no tiene precio publicado y abre WhatsApp para pedir información; al ponerle precio en `content/tienda.ts` pasa a tener ficha propia.
- Textos: `content/calculadora.ts` (páginas, formularios, PDF y mensajes) y `content/arcanos.ts` (los 22 arcanos).

## Guía gratuita

- Página: `/tu-primera-pausa`. Presenta la guía y lleva al formulario de contacto con la guía ya elegida (`/contacto?servicio=guia`); Tati la envía por WhatsApp.
- Archivos: `public/descargas/tu-primera-pausa.pdf` y `public/descargas/meditacion-freno.mp3`. La carpeta `/descargas` se sirve con `noindex`.
- El PDF se genera con `npm run ebook` a partir de `content/ebook.ts` (textos) y `scripts/ebook.ts` (maqueta y código QR). Usa Playwright con Chromium; si Chromium no está en la ruta por defecto, indica su ruta en `CHROMIUM_PATH`.

## Formulario de contacto

`/contacto` es el único formulario de la web. En tres pasos se elige qué se quiere (la guía gratuita, un programa de meditación, una lectura, una sesión, una terapia, el curso de Reiki u otra consulta), el producto concreto y su formato, y el nombre. Al enviar se abre WhatsApp con un mensaje ya escrito (`lib/contact-whatsapp.ts`); no se guarda nada en la web. Acepta `?servicio=` (guia, meditacion, tarot, autoconocimiento, reiki, limpieza, curso-reiki, no-lo-se) y `?producto=` (el `slug` de un producto, `guia` o `grupo`) para abrirlo con la opción elegida. Las opciones salen de `content/tienda.ts`, así que los productos nuevos aparecen solos.

## Contenido

Todo el contenido editable está en `/content`:

- `site.ts`: datos de contacto, redes, navegación, frases de marca y datos legales de la titular.
- `paginas.ts`: textos de inicio, quién soy, testimonios, tablón, contacto y errores.
- `servicios.ts`: bloques de servicios, Método Despierta y textos de cada página de servicio.
- `tienda.ts`: catálogo, precios, textos de la tienda y de las fichas.
- `guia.ts` y `ebook.ts`: guía gratuita, emails y textos del PDF.
- `calculadora.ts` y `arcanos.ts`: calculadora de la Matriz del Destino, su PDF y los textos de los arcanos.
- `anuncios.ts`: anuncios del tablón. Si un anuncio lleva `date`, se muestra la fecha, se ordena por ella, desaparece al pasar y genera datos estructurados de evento.
- `instagram.ts`: publicaciones de Instagram para el tablón. Con la lista vacía se muestran las tarjetas para seguir las dos cuentas.
- `testimonios.ts`: solo testimonios reales y autorizados. Con la lista vacía no aparecen ni el menú, ni la página, ni la sección de inicio.
- `faqs.ts` y `recorrido.ts`.
- `legal.ts` y `cookies.ts`: aviso legal, privacidad, cookies, condiciones de compra y textos del banner.
- `imagenes.ts`: fotos y textos alternativos. Las imágenes están en `/public/images`.

Las tipografías de las imágenes Open Graph y de los PDF están en `/assets/fonts`, con sus licencias OFL. El logo está en `/public/brand` (símbolo y versión vertical) y los iconos de la web se generan a partir del símbolo.

## Despliegue

Preparada para Vercel: conecta el repositorio, añade las variables de entorno y despliega.
