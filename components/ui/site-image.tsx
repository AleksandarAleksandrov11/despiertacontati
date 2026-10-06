import Image from "next/image";
import { imagenes, type ImageKey } from "@/content/imagenes";
import { cn } from "@/lib/utils";

type SiteImageProps = {
  name: ImageKey;
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  shape?: "arch" | "rounded" | "circle" | "none";
};

const shapes = {
  arch: "mask-arch",
  rounded: "rounded-[1.75rem]",
  circle: "rounded-full",
  none: "",
};

export function SiteImage({ name, sizes, className, imgClassName, priority = false, shape = "rounded" }: SiteImageProps) {
  const image = imagenes[name];
  const position = "position" in image ? image.position : undefined;
  return (
    <div className={cn("relative overflow-hidden bg-crema-deep", shapes[shape], className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        preload={priority}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? "eager" : undefined}
        placeholder={priority ? "empty" : "blur"}
        quality={80}
        className={cn("object-cover", imgClassName)}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
