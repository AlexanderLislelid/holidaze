"use client";

import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function SortSelect({ query, sort, sortOrder }) {
  const router = useRouter();

  function handleChange(event) {
    router.push(
      `/?query=${encodeURIComponent(query ?? "")}&${event.target.value}`,
    );
  }

  return (
    <div className="relative mx-4 w-fit">
      <select
        value={`sort=${sort}&sortOrder=${sortOrder}`}
        onChange={handleChange}
        aria-label="Sort venues"
        className="cursor-pointer appearance-none rounded-lg border border-border bg-white py-1 pr-10 pl-3"
      >
        <option value="sort=created&sortOrder=desc">Newest</option>
        <option value="sort=price&sortOrder=asc">Lowest price</option>
        <option value="sort=price&sortOrder=desc">Highest price</option>
        <option value="sort=rating&sortOrder=desc">Highest rated</option>
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
      />
    </div>
  );
}
