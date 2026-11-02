import SearchBar from "../search/SearchBar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid items-center gap-8 md:grid-cols-2 md:p-4">
      <Image
        src="/img/hero.jpg"
        alt="tropical island with bridge access"
        width={690}
        height={337}
        sizes="100vw"
        className="h-auto w-full md:order-last md:rounded-2xl"
        priority
      />

      <div className="flex flex-col gap-4 p-4">
        <p className="text-[12px] text-muted-100">
          CABINS, APARTMENTS AND HIDEAWAYS
        </p>
        <h1 className="text-4xl font-semibold">Your next escape starts here</h1>
        <p className="text-muted-100">
          Browse places to stay, check available dates, and book in a few
          clicks.
        </p>
        <SearchBar />
      </div>
    </section>
  );
}
