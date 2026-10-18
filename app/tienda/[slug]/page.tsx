import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { categorias, fichaProducto, getProducto, productos, type Producto } from "@/content/tienda";
import { GuiaBlock } from "@/components/sections/guia-block";
import { BuyBox } from "@/components/sections/tienda/buy-box";
import { ProductCard } from "@/components/sections/tienda/product-card";
import { Blobs, Section } from "@/components/ui/section";
import { FadeUp, SplitText } from "@/components/ui/split-text";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { TrackView } from "@/components/ui/tracked";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { formatPrice, productJsonLd } from "@/lib/tienda";

type Params = { slug: string };

const seoSuffix: Record<Producto["categoria"], string> = {
  meditaciones: "meditaciones guiadas para descargar",
  "crono-tarot": "Crono Tarot online",
  lecturas: "lectura de tarot online",
  autoconocimiento: "autoconocimiento online",
  sesiones: "tarot en Valencia y online",
  espacios: "Valencia",
};

const comprables = productos.filter((producto) => producto.precio !== null);

export function generateStaticParams() {
  return comprables.map((producto) => ({ slug: producto.slug }));
}

export const dynamicParams = false;

function seoTitle(producto: Producto) {
  const suffix = seoSuffix[producto.categoria];
  const base = producto.nombre.length + suffix.length < 46 ? `${producto.nombre}: ${suffix}` : producto.nombre;
  return `${base} | Despierta con Tati`;
}

function seoDescription(producto: Producto) {
  const price = producto.precio === null ? "" : ` ${formatPrice(producto.precio)}.`;
  const full = `${producto.frase}${price} ${producto.formato}.`;
  return full.length <= 170 ? full : producto.frase;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const producto = getProducto(slug);
  if (!producto) return {};
  return pageMetadata({ title: seoTitle(producto), description: seoDescription(producto), path: `/tienda/${producto.slug}` });
}

function relacionados(producto: Producto) {
  const misma = comprables.filter((item) => item.categoria === producto.categoria && item.slug !== producto.slug);
  const otros = comprables.filter((item) => item.categoria !== producto.categoria && item.destacado);
  return [...misma, ...otros].slice(0, 3);
}

function requirements(producto: Producto) {
  const copy = fichaProducto;
  if (producto.tipo === "meditacion") return [copy.requirementsMeditation];
  if (producto.tipo === "sesion") return [copy.requirementsSession];
  if (producto.categoria === "autoconocimiento" || producto.slug === "lectura-del-cumpleanos") {
    return [copy.requirementsBirthday, copy.requirementsReading];
  }
  return [copy.requirementsReading];
}

export default async function ProductoPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const producto = getProducto(slug);
  if (!producto || producto.precio === null) notFound();

  const copy = fichaProducto;
  const categoria = categorias.find((item) => item.id === producto.categoria);
  const audios = producto.tipo === "meditacion";
  const schema = productJsonLd(producto);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Tienda", path: "/tienda" },
            { name: producto.nombre, path: `/tienda/${producto.slug}` },
          ]),
          ...(schema ? [schema] : []),
        ]}
      />
      <TrackView event="ver_producto" data={{ producto: producto.slug }} />

      <section className="relative overflow-hidden bg-rosa-polvo pb-14 pt-28 sm:pb-20 sm:pt-36">
        <Blobs variant="b" />
        <div className="container-page relative">
          <FadeUp>
            <Link
              href={`/tienda#${producto.categoria}`}
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink-soft hover:text-ciruela"
            >
              <ArrowLeft size={16} strokeWidth={1.25} aria-hidden className="transition-transform duration-500 group-hover:-translate-x-1" />
              {copy.back}
            </Link>
          </FadeUp>
          <FadeUp as="p" delay={100} className="eyebrow mb-5 mt-6">
            {categoria?.nav}
          </FadeUp>
          <SplitText as="h1" text={producto.nombre} className="max-w-4xl text-h1" delay={150} />
          <FadeUp as="p" delay={450} className="mt-6 max-w-2xl font-serif text-[clamp(1.35rem,1.15rem+0.9vw,1.9rem)] italic leading-snug text-ink-soft">
            {producto.frase}
          </FadeUp>
        </div>
      </section>

      <Section tone="crema" className="!pt-14 sm:!pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16">
          <Reveal className="lg:col-span-7">
            <p className="max-w-2xl text-lead">{producto.descripcion}</p>
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
            <div className="lg:sticky lg:top-28">
              <BuyBox producto={producto} />
            </div>
          </div>

          <div className="space-y-12 lg:col-span-7">
            <Reveal>
              <h2 className="text-h3">{audios ? copy.includesAudios : copy.includes}</h2>
              <ul className="mt-5 divide-y divide-ciruela/10 border-y border-ciruela/10">
                {producto.incluye.map((item) => (
                  <li key={item.titulo} className="flex items-baseline justify-between gap-6 py-3.5">
                    <span className="flex items-baseline gap-3">
                      <Check size={16} strokeWidth={1.5} aria-hidden className="shrink-0 translate-y-0.5 text-malva-deep" />
                      {item.titulo}
                    </span>
                    {item.detalle && <span className="nums shrink-0 font-serif text-lg text-ink-soft">{item.detalle}</span>}
                  </li>
                ))}
              </ul>
              {producto.duracionTotal && (
                <p className="mt-4 flex justify-between gap-6 text-ink-soft">
                  <span>{copy.total}</span>
                  <span className="nums font-serif text-xl text-ciruela">{producto.duracionTotal}</span>
                </p>
              )}
            </Reveal>

            <Reveal>
              <dl className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[1.25rem] bg-lavanda/70 p-6">
                  <dt className="eyebrow">{copy.format}</dt>
                  <dd className="mt-3 font-serif text-[1.4rem] leading-snug">{producto.formato}</dd>
                </div>
                <div className="rounded-[1.25rem] bg-salvia p-6">
                  <dt className="eyebrow">{copy.delivery}</dt>
                  <dd className="mt-3 text-ink">{producto.entrega}</dd>
                </div>
              </dl>
            </Reveal>

            {producto.paraQuien.length > 0 && (
              <Reveal>
                <h2 className="text-h3">{copy.forWhom}</h2>
                <ul className="mt-5 space-y-3">
                  {producto.paraQuien.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink-soft">
                      <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-dorado" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal>
              <h2 className="text-h3">{copy.requirements}</h2>
              <ul className="mt-5 space-y-3">
                {requirements(producto).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-soft">
                    <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-dorado" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <p className="rounded-[1.25rem] border border-ciruela/10 p-6 text-sm text-ink-soft">{copy.wellbeing}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="lavanda" labelledBy="relacionados">
        <Reveal>
          <h2 id="relacionados" className="text-h2">
            {copy.related}
          </h2>
        </Reveal>
        <RevealGroup as="ul" className="mt-12 grid gap-5 md:grid-cols-3">
          {relacionados(producto).map((item) => (
            <RevealItem as="li" key={item.slug}>
              <ProductCard producto={item} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <GuiaBlock tone="salvia" id="guia-producto" />
    </>
  );
}
