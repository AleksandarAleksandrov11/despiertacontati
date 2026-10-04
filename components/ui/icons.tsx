import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    ...props,
  };
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4l-4.5 1.1z" />
      <path d="M9.2 8.4c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.7l-.5.6c-.1.1-.1.3 0 .5.6 1 1.4 1.8 2.4 2.4.2.1.4.1.5 0l.6-.6c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.2.7-.6.9-.6.3-1.4.5-2.4.2-2.2-.7-4.5-3-5.2-5.2-.3-1-.1-1.8.1-2.4z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function PenduloIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2.5v8" />
      <circle cx="12" cy="4.5" r="0.9" />
      <circle cx="12" cy="7.5" r="0.9" />
      <path d="M8.5 13.5h7L12 21.5z" />
      <path d="M8.5 13.5L12 10.5l3.5 3" />
    </svg>
  );
}

export function MatrizIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5.5" y="5.5" width="13" height="13" />
      <rect x="5.5" y="5.5" width="13" height="13" transform="rotate(45 12 12)" />
      <circle cx="12" cy="12" r="1.6" />
    </svg>
  );
}

export function LotoIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 6c1.8 2 2.6 4.2 2.6 6.4S13.6 16.6 12 18c-1.6-1.4-2.6-3.4-2.6-5.6S10.2 8 12 6z" />
      <path d="M12 18c-2.8 0-6-1.6-7.5-5 2.2-.4 4.2.1 5.6 1.4" />
      <path d="M12 18c2.8 0 6-1.6 7.5-5-2.2-.4-4.2.1-5.6 1.4" />
      <path d="M5 19.5h14" />
    </svg>
  );
}
