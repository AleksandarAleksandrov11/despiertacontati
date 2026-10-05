import Image from "next/image";
import { imagenes, photoMarquee } from "@/content/imagenes";
import { Marquee } from "@/components/ui/marquee";

export function PhotoMarquee() {
  return (
    <div className="bg-crema py-10">
      <Marquee duration={90} trackClassName="gap-0">
        {photoMarquee.map((key, index) => {
          const image = imagenes[key];
          const tall = index % 2 === 0;
          return (
            <div
              key={key}
              className={`relative mx-2.5 shrink-0 overflow-hidden ${tall ? "h-64 w-48 rounded-t-full rounded-b-3xl sm:h-80 sm:w-60" : "h-52 w-64 rounded-3xl sm:h-64 sm:w-80"}`}
            >
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 320px, 256px" quality={70} className="object-cover" />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
