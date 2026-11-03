import Link from "next/link";

export default function SortButtons({ query }) {
  return (
    <div>
      <Link
        href={`/?query=${encodeURIComponent(query ?? "")}&sort=price&sortOrder=asc`}
      >
        Price low - high
      </Link>
    </div>
  );
}
