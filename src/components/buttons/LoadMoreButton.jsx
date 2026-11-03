import Link from "next/link";
export default function LoadMoreButton({ query, sort, sortOrder, limit }) {
  const nextLimit = Number(limit) + 12;

  return (
    <Link
      href={`/?query=${encodeURIComponent(query ?? "")}&sort=${sort}&sortOrder=${sortOrder}&limit=${nextLimit}`}
      scroll={false}
    >
      Load more
    </Link>
  );
}
