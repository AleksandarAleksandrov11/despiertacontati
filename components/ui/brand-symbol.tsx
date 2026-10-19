import Image from "next/image";
import simbolo from "@/public/brand/simbolo.webp";

export function BrandSymbol({ size, className, eager = true }: { size: number; className?: string; eager?: boolean }) {
  return (
    <Image
      src={simbolo}
      alt=""
      aria-hidden
      width={size}
      height={Math.round((size * simbolo.height) / simbolo.width)}
      sizes={`${size}px`}
      loading={eager ? "eager" : "lazy"}
      className={className}
    />
  );
}
