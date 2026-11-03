"use client";

import { useRouter } from "next/navigation";

export default function SortSelect({ query }) {
  const router = useRouter();

  function handleChange(event) {
    router.push(
      `/?query=${encodeURIComponent(query ?? "")}&${event.target.value}`,
    );
  }

  return (
    <select onChange={handleChange}>
      <option value="sort=created&sortOrder=desc">Newest</option>
      <option value="sort=price&sortOrder=asc">Lowest price</option>
    </select>
  );
}
