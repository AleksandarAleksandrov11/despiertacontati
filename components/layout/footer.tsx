import Image from "next/image";
import Link from "next/link";
import { legalNav, mainNav, site } from "@/content/site";
import { suscripcion } from "@/content/paginas";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { LazySubscribeForm } from "./lazy-subscribe-form";
import { CookieSettingsButton } from "./cookie-settings-button";
import { FooterYear } from "./footer-year";
import { whatsappHref } from "@/lib/utils";
import logo from "@/public/brand/logo-despierta-con-tati.png";

const linkClass = "link-underline inline-flex min-h-11 items-center text-crema/80 hover:text-crema sm:min-h-9";

export function Footer() {
  const services = mainNav.find((item) => item.children)?.children ?? [];

  return (
    <footer className="relative overflow-hidden bg-ciruela text-crema" data-hide-whatsapp>
      <div aria-hidden className="blob -right-40 -top-40 size-[28rem] bg-malva/40 animate-drift-slow" />
      <div aria-hidden className="blob -bottom-48 -left-32 size-[24rem] bg-rosa/25 animate-drift" />
      <div className="container-page relative pb-10 pt-20 sm:pt-28">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-3xl font-serif text-h2 text-crema">
            {site.taglineParts.lead} <em className="text-rosa">{site.taglineParts.accent}</em>
          </p>
          <Button href={site.cta.primary.href} tone="dark" magnetic className="shrink-0">
            {site.cta.primary.label}
          </Button>
        </div>

        <div className="gold-rule my-14 sm:my-16" />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-3">
            <Logo tone="dark" />
            <p className="mt-3 max-w-xs text-crema/75">
              {site.footer.blurb} {site.location.label}.
            </p>
            <Image
              src={logo}
              alt={site.footer.sealAlt}
              width={112}
              height={112}
              sizes="112px"
              className="mt-8 size-28 rounded-full opacity-95"
            />
          </div>

          <nav aria-label={site.ui.footerNav} className="lg:col-span-2">
            <h2 className="eyebrow mb-4 text-crema/75">{site.ui.footerNav}</h2>
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={site.ui.footerServices} className="lg:col-span-2">
            <h2 className="eyebrow mb-4 text-crema/75">{site.ui.footerServices}</h2>
            <ul className="space-y-1">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contacto?servicio=curso-reiki" className={linkClass}>
                  {site.footer.courses}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow mb-4 text-crema/75">{site.ui.footerContact}</h2>
            <ul className="space-y-1">
              <li>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`tel:${site.contact.phoneE164}`} className={linkClass}>
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className={`${linkClass} break-words`}>
                  {site.contact.email}
                </a>
              </li>
              <li className="pt-2 text-crema/75">{site.location.label}</li>
            </ul>
            <h2 className="eyebrow mb-3 mt-8 text-crema/75">{site.ui.footerSocial}</h2>
            <ul className="space-y-1">
              <li>
                <a href={site.social.instagram.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {site.social.instagram.label}
                </a>
              </li>
              <li>
                <a href={site.social.tarot.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {site.social.tarot.label}
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="eyebrow mb-4 text-crema/75">{suscripcion.title}</h2>
            <p className="mb-4 text-crema/75">{suscripcion.text}</p>
            <LazySubscribeForm />
          </div>
        </div>

        <div className="mt-16 border-t border-crema/15 pt-8 text-sm text-crema/80">
          <p className="mb-5 max-w-2xl">{site.disclaimer}</p>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p>
              © <FooterYear /> {site.ui.rights}
            </p>
            <nav aria-label={site.ui.legalNav}>
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {legalNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-underline inline-flex min-h-11 items-center hover:text-crema">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <CookieSettingsButton className="link-underline inline-flex min-h-11 items-center hover:text-crema">
                    {site.ui.configureCookies}
                  </CookieSettingsButton>
                </li>
              </ul>
            </nav>
            <p className="text-crema/75">{site.credit.label}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
