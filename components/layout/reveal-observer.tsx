"use client";

import { useEffect } from "react";

const SELECTOR = ".reveal:not(.is-visible), .reveal-group:not(.is-visible)";

export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    function scan(root: ParentNode) {
      root.querySelectorAll(SELECTOR).forEach((element) => observer.observe(element));
    }

    scan(document);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) =>
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(SELECTOR)) observer.observe(node);
          scan(node);
        }),
      );
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
