import { cookieCategories, cookieTableHeaders } from "@/content/cookies";
import { legalToc, type LegalBlock, type LegalDocument } from "@/content/legal";
import { CookieSettingsButton } from "@/components/layout/cookie-settings-button";
import { FadeUp, SplitText } from "@/components/ui/split-text";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";

function CookiesTable() {
  return (
    <div className="my-6 space-y-6">
      {cookieCategories.map((category) => (
        <div key={category.id} className="rounded-2xl border border-ciruela/10 bg-white/50 p-5">
          <p className="font-medium text-ciruela">{category.title}</p>
          <p className="mt-1 text-sm">{category.description}</p>
          {category.items.length > 0 && (
            <dl className="mt-4 space-y-4 sm:hidden">
              {category.items.map((item) => (
                <div key={item.name} className="border-t border-ciruela/10 pt-3 text-sm">
                  <dt className="font-medium text-ciruela">{item.name}</dt>
                  <dd className="mt-1">
                    {cookieTableHeaders.provider}: {item.provider}
                  </dd>
                  <dd>
                    {cookieTableHeaders.purpose}: {item.purpose}
                  </dd>
                  <dd>
                    {cookieTableHeaders.duration}: {item.duration}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          {category.items.length > 0 && (
            <div className="mt-4 hidden overflow-x-auto sm:block">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-ciruela/10 text-ciruela">
                    <th scope="col" className="py-2 pr-4 font-medium">{cookieTableHeaders.name}</th>
                    <th scope="col" className="py-2 pr-4 font-medium">{cookieTableHeaders.provider}</th>
                    <th scope="col" className="py-2 pr-4 font-medium">{cookieTableHeaders.purpose}</th>
                    <th scope="col" className="py-2 font-medium">{cookieTableHeaders.duration}</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item) => (
                    <tr key={item.name} className="border-b border-ciruela/5 align-top text-ink-soft">
                      <td className="py-2 pr-4">{item.name}</td>
                      <td className="py-2 pr-4">{item.provider}</td>
                      <td className="py-2 pr-4">{item.purpose}</td>
                      <td className="py-2">{item.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") return <p>{block}</p>;
  if ("list" in block) {
    return (
      <ul>
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if ("cookiesTable" in block) return <CookiesTable />;
  return (
    <p>
      <CookieSettingsButton className="inline-flex min-h-11 items-center rounded-full border border-ciruela/25 px-6 text-sm font-medium text-ciruela hover:border-ciruela/60">
        {block.cookieSettings}
      </CookieSettingsButton>
    </p>
  );
}

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: document.title, path: `/${document.slug}` }])} />
      <section className="relative overflow-hidden bg-crema pb-12 pt-32 sm:pt-40">
        <div aria-hidden className="blob -right-32 -top-20 size-[22rem] bg-rosa-polvo animate-drift" />
        <div className="container-page relative">
          <FadeUp as="p" className="eyebrow mb-6">
            {document.eyebrow}
          </FadeUp>
          <SplitText as="h1" text={document.title} className="text-h1" delay={100} />
          <FadeUp as="p" delay={400} className="mt-6 max-w-xl text-lead text-ink-soft">
            {document.intro}
          </FadeUp>
        </div>
      </section>
      <section className="bg-crema pb-24">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <nav aria-label={legalToc} className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p className="eyebrow mb-4">{legalToc}</p>
              <ol className="space-y-1 border-l border-ciruela/10">
                {document.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-ink-soft transition-colors hover:border-ciruela hover:text-ciruela"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
          <article className="prose-legal min-w-0 max-w-[70ch] lg:col-span-8 lg:col-start-5">
            {document.sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id}>{section.title}</h2>
                {section.blocks.map((block, index) => (
                  <Block key={index} block={block} />
                ))}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
