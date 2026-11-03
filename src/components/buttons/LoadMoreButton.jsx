import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function LoadMoreButton({ query, sort, sortOrder, page }) {
  const nextPage = Number(page) + 1;

  return (
    <Link
      href={`/?query=${encodeURIComponent(query ?? "")}&sort=${sort}&sortOrder=${sortOrder}&page=${nextPage}`}
      scroll={false}
      className="flex justify-center gap-2 rounded-lg border border-primary-90 bg-white px-4 py-2 font-medium text-primary-90 hover:border-primary-hover hover:text-primary-100 hover:shadow-md"
    >
      Show more venues <ArrowRight />
    </Link>
  );
}
