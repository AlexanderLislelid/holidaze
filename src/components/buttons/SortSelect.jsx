"use client";

import { useRouter } from "next/navigation";

export default function SortSelect({ query, sort, sortOrder }) {
  const router = useRouter();

  function handleChange(event) {
    router.push(
      `/?query=${encodeURIComponent(query ?? "")}&${event.target.value}`,
    );
  }

  return (
    <select
      value={`sort=${sort}&sortOrder=${sortOrder}`}
      onChange={handleChange}
      aria-label="Sort venues"
    >
      <option value="sort=created&sortOrder=desc">Newest</option>
      <option value="sort=price&sortOrder=asc">Lowest price</option>
      <option value="sort=price&sortOrder=desc">Highest price</option>
    </select>
  );
}
