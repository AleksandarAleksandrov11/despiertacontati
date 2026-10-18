"use client";

import { useEffect, useRef } from "react";
import { tablonPage } from "@/content/paginas";
import { instagramPosts } from "@/content/instagram";
import { useConsent } from "@/components/layout/consent";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/ui/icons";
import { TiltCard } from "@/components/ui/tilt-card";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const SCRIPT_ID = "instagram-embed";

function useInstagramEmbeds(enabled: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!enabled || !ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        if (window.instgrm) {
          window.instgrm.Embeds.process();
          return;
        }
        if (document.getElementById(SCRIPT_ID)) return;
        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.async = true;
        script.src = "https://www.instagram.com/embed.js";
        document.body.appendChild(script);
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [enabled]);
  return ref;
}

function accountFor(handle: string) {
  return tablonPage.instagram.accounts.find((account) => account.url.includes(handle)) ?? tablonPage.instagram.accounts[0];
}

export function InstagramFeed() {
  const copy = tablonPage.instagram;
  const { allows } = useConsent();
  const embeds = allows("marketing") && instagramPosts.length > 0;
  const ref = useInstagramEmbeds(embeds);

  if (instagramPosts.length === 0) {
    return (
      <ul className="grid gap-5 md:grid-cols-2">
        {copy.accounts.map((account) => (
          <li key={account.url}>
            <TiltCard as="article" className="h-full" innerClassName="flex h-full flex-col bg-crema p-8 sm:p-10">
              <span className="inline-flex size-14 items-center justify-center rounded-full border border-ciruela/15 text-malva-deep">
                <InstagramIcon size={26} />
              </span>
              <h3 className="mt-8 text-h2 italic">{account.name}</h3>
              <p className="mt-1 font-medium text-malva-deep">{account.handle}</p>
              <p className="mt-4 flex-1 text-ink-soft">{account.text}</p>
              <div className="mt-8">
                <Button href={account.url} variant="secondary" icon={<InstagramIcon size={18} />}>
                  {copy.follow}
                </Button>
              </div>
            </TiltCard>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div ref={ref}>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {instagramPosts.map((post) => {
          const account = accountFor(post.account);
          return (
            <li key={post.url} className="min-w-0">
              {embeds ? (
                <blockquote
                  className="instagram-media !m-0 !w-full !min-w-0 !max-w-none"
                  data-instgrm-permalink={post.url}
                  data-instgrm-version="14"
                >
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    {copy.embedLabel} {account.handle}
                  </a>
                </blockquote>
              ) : (
                <TiltCard as="article" className="h-full" innerClassName="flex h-full min-h-56 flex-col justify-between bg-crema p-7">
                  <span className="flex items-center gap-3 text-malva-deep">
                    <InstagramIcon size={22} />
                    <span className="font-medium">{account.handle}</span>
                  </span>
                  <p className="mt-6 font-serif text-[1.5rem] leading-snug">{account.name}</p>
                  <div className="mt-6">
                    <Button href={post.url} variant="link">
                      {copy.view}
                    </Button>
                  </div>
                </TiltCard>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
