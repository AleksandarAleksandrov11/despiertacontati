"use client";

export function FooterYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
