import Link from "next/link";
export default function LoadMoreButton({ query, sort, sortOrder, page }) {
  const nextPage = Number(page) + 1;

  return (
    <Link
      href={`/?query=${encodeURIComponent(query ?? "")}&sort=${sort}&sortOrder=${sortOrder}&page=${nextPage}`}
      scroll={false}
    >
      Load more
    </Link>
  );
}
