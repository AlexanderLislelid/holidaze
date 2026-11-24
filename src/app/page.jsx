import Hero from "@/components/layout/Hero";
import Venues from "@/components/layout/Venues";
import HowItWorks from "@/components/layout/HowItWorks";

export default async function Home({ searchParams }) {
  const { query, sort, sortOrder, page } = await searchParams;

  return (
    <div>
      <Hero />
      {!query && <HowItWorks />}
      <Venues query={query} sort={sort} sortOrder={sortOrder} page={page} />
    </div>
  );
}
