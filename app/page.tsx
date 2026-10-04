import { inicio } from "@/content/paginas";

export default function Home() {
  return (
    <main>
      <h1 className="text-display font-serif italic">{inicio.hero.title}</h1>
    </main>
  );
}
