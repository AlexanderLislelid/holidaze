import Hero from "@/components/layout/Hero";
import Venues from "@/components/layout/Venues";

export default async function Home({ searchParams }) {
  const { query } = await searchParams;

  return (
    <main>
      <Hero />
      <Venues query={query} />
    </main>
  );
}
