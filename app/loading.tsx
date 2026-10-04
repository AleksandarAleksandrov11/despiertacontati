import { loadingLabel } from "@/content/paginas";

export default function Loading() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-crema" role="status" aria-label={loadingLabel}>
      <span className="relative flex size-16 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-rosa-polvo [animation-duration:2.4s]" />
        <span className="relative size-6 rounded-full bg-rosa" />
      </span>
    </div>
  );
}
