import Hero from "@/components/layout/Hero";
import Venues from "@/components/layout/Venues";
import HowItWorks from "@/components/layout/HowItWorks";

export default async function Home({ searchParams }) {
  const { query, sort } = await searchParams;

  return (
    <main>
      <Hero />
      <HowItWorks />
      <Venues query={query} sort={sort} />
    </main>
  );
}
