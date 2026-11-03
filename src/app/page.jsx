import Hero from "@/components/layout/Hero";
import Venues from "@/components/layout/Venues";
import HowItWorks from "@/components/layout/HowItWorks";

export default async function Home({ searchParams }) {
  const { query } = await searchParams;

  return (
    <main>
      <Hero />
      <HowItWorks />
      <Venues query={query} />
    </main>
  );
}
