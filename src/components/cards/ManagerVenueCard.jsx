import Link from "next/link";
import Image from "next/image";
import { MapPin, SquarePen, Users } from "lucide-react";
import VenueTags from "../venues/VenueTags";

export default function ManagerVenueCard({ venue }) {
  const bookingsQty = venue._count.bookings;
  console.log("log:", venue);

  return (
    <div className="flex flex-col rounded-xl bg-white p-3 shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={venue.media?.[0]?.url || "https://placehold.co/400.png"}
          alt={venue.media?.[0]?.alt || venue.name}
          fill
          className="rounded-xl object-cover"
        />
        <div className="absolute top-2 left-2 rounded-full border border-border bg-white px-2 py-1 text-sm text-text-80 shadow-lg">
          <p>{bookingsQty > 0 ? `${bookingsQty} upcoming` : "No bookings"}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-border py-4">
        <h2 className="text-2xl font-semibold">{venue.name}</h2>
        <p className="flex items-center gap-2">
          <MapPin size={18} className="text-accent-100" />
          {venue.location.address}
        </p>
        <p className="flex items-center gap-2">
          <Users size={18} className="text-primary-100" />
          Up to {venue.maxGuests} guests
        </p>
        <div className="my-4">
          <VenueTags tags={venue.meta} />
        </div>
      </div>

      <p className="my-2 font-heading text-2xl">
        {venue.price}kr <span className="font-sans text-sm">/ night</span>
      </p>

      <div className="mt-4 flex">
        <Link
          href={`/venues/${venue.id}/edit`}
          className="flex items-center gap-2 rounded-lg bg-primary-100 px-4 py-1 text-white hover:bg-primary-hover"
        >
          Edit <SquarePen size={18} />
        </Link>
      </div>
    </div>
  );
}
