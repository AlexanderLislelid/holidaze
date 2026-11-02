import { ArrowRight, MapPin, Star, Users } from "lucide-react";
import Link from "next/link";

export default function VenueCard({ venue }) {
  const image = venue.media?.[0];
  const tags = Object.entries(venue.meta).filter(
    ([tag, value]) => value === true,
  );

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

      <div className="flex flex-col gap-4 border-b border-secondary-20 p-4">
        <h2 className="truncate text-2xl font-bold">{venue.name}</h2>
        <div className="flex gap-2">
          <MapPin size={20} className="text-accent-100" />
          <p className="truncate font-medium">
            {venue.location.address}, {venue.location.country}
          </p>
        </div>
        <div className="flex gap-2">
          <Users size={20} className="text-primary-100" />
          <p className="font-medium">Up to {venue.maxGuests} guests</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map(([tag]) => (
            <span
              key={tag}
              className="flex items-center gap-1 rounded-full bg-primary-10 px-2 py-1 text-sm text-info-text"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-baseline gap-2">
          <p className="font-heading text-xl">{venue.price} kr</p>
          <p className="text-sm">/ night</p>
        </div>
        <Link
          href={`/venues/${venue.id}`}
          className="flex items-center gap-2 text-primary-100 hover:text-primary-hover"
        >
          view
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
