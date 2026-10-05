"use client";

import dynamic from "next/dynamic";

export const LazySubscribeForm = dynamic(() => import("./subscribe-form").then((mod) => mod.SubscribeForm), {
  ssr: false,
  loading: () => <div className="h-32 w-full max-w-sm" />,
});
