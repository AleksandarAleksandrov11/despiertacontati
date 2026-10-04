import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Magnetic } from "./magnetic";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "link";
type Tone = "light" | "dark";

type CommonProps = {
  variant?: Variant;
  tone?: Tone;
  magnetic?: boolean;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

type NativeButtonProps = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type ButtonProps = LinkProps | NativeButtonProps;

const pill =
  "group relative inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3 text-[0.95rem] font-medium tracking-[0.01em] transition-[background-color,color,border-color,box-shadow] duration-500 ease-[var(--ease-breath)] disabled:pointer-events-none disabled:opacity-60";

const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    primary: `${pill} bg-ciruela text-crema shadow-[0_10px_30px_-12px_rgba(63,46,58,0.45)] hover:bg-malva-deep`,
    secondary: `${pill} border border-ciruela/25 text-ciruela hover:border-ciruela/60 hover:bg-white/50`,
    link: "group inline-flex min-h-11 items-center gap-2 font-medium text-ciruela",
  },
  dark: {
    primary: `${pill} bg-crema text-ciruela hover:bg-rosa-polvo`,
    secondary: `${pill} border border-crema/35 text-crema hover:border-crema/80 hover:bg-white/5`,
    link: "group inline-flex min-h-11 items-center gap-2 font-medium text-crema",
  },
};

function Inner({ variant, icon, children }: { variant: Variant; icon?: ReactNode; children: ReactNode }) {
  if (variant === "link") {
    return (
      <>
        <span className="link-underline-static">{children}</span>
        <span className="transition-transform duration-500 ease-[var(--ease-breath)] group-hover:translate-x-1">
          {icon ?? <ArrowRight size={18} strokeWidth={1.25} aria-hidden />}
        </span>
      </>
    );
  }
  return (
    <>
      {icon}
      <span>{children}</span>
    </>
  );
}

export function Button({
  variant = "primary",
  tone = "light",
  magnetic = false,
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(styles[tone][variant], className);
  let element: ReactNode;

  if (props.href !== undefined) {
    const { href, external, ...rest } = props as Omit<LinkProps, keyof CommonProps>;
    const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
    const linkIcon =
      icon ?? (isExternal && variant === "link" ? <ArrowUpRight size={18} strokeWidth={1.25} aria-hidden /> : undefined);
    const content = (
      <Inner variant={variant} icon={linkIcon}>
        {children}
      </Inner>
    );
    element = isExternal ? (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    ) : (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  } else {
    const { type = "button", ...rest } = props as Omit<NativeButtonProps, keyof CommonProps>;
    element = (
      <button type={type} className={classes} {...rest}>
        <Inner variant={variant} icon={icon}>
          {children}
        </Inner>
      </button>
    );
  }

  return magnetic && variant !== "link" ? <Magnetic>{element}</Magnetic> : element;
}
