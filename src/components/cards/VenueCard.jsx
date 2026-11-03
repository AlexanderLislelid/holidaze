import { ArrowRight, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VenueCard({ venue }) {
  const image = venue.media?.[0];
  const tags = Object.entries(venue.meta).filter(
    ([tag, value]) => value === true,
  );

  return (
    <Link
      href={`/venues/${venue.id}`}
      className="group m-4 block overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-48">
        <Image
          src={image?.url || "https://placehold.co/400.png"}
          alt={image?.alt || venue.name}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {venue.rating ? (
          <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-warning-bg px-2 py-0.5 text-sm font-medium text-warning-text shadow-md">
            <Star
              size={16}
              aria-hidden="true"
              className="fill-warning-border text-accent-100"
            />
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
              className="flex items-center gap-1 rounded-full border border-primary-70 bg-primary-10 px-2 text-sm text-info-text"
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
        <span
          aria-hidden="true"
          className="flex items-center gap-2 text-primary-100 group-hover:text-primary-hover"
        >
          View
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
