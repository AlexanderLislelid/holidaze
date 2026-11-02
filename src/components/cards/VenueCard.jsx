import { Star } from "lucide-react";

export default function VenueCard({ venue }) {
  const image = venue.media?.[0];

  return (
    <div className="m-4 max-w-75 overflow-hidden rounded-xl shadow-lg">
      <div className="relative">
        <img
          src={image?.url || "https://placehold.co/400"}
          alt={image?.alt || venue.name}
          className="h-48 w-full rounded-t-xl object-cover"
        />
        {venue.rating ? (
          <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-sm">
            <Star size={14} aria-hidden="true" />
            {venue.rating}
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-col gap-4 border-b border-secondary-20 px-4">
        <h2 className="truncate text-2xl font-bold">{venue.name}</h2>
        <p>{venue.description}</p>
      </div>
    </div>
  );
}
