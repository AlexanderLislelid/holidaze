import { apiRequest } from "@/lib/api";
import BreadCrumb from "@/components/navigation/BreadCrumb";
import { Star, MapPin, UsersRound } from "lucide-react";
import Image from "next/image";
import VenueTags from "@/components/venues/VenueTags";
import VenueMap from "@/components/venues/VenueMap";
import BookingForm from "@/components/forms/BookingForm";
import ImageCarousel from "@/components/venues/ImageCarousel";
export default async function VenuePage({ params }) {
  const { id } = await params;
  const { data: venue } = await apiRequest(
    `holidaze/venues/${id}?_owner=true&_bookings=true`,
  );

  return (
    <main>
      <BreadCrumb href="/" name="home" />
      <div className="mx-4 mb-6 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">{venue.name}</h1>
        <div className="flex gap-6 text-sm">
          <div className="flex gap-1">
            <MapPin
              size={18}
              className="text-accent-100"
              aria-label="Location"
            />
            <p>
              {venue.location.address}, {venue.location.country}
            </p>
          </div>
          <div className="flex gap-1">
            <Star
              size={18}
              className="text-highlight-100"
              aria-label="Rating"
            />
            <p>{venue.rating}</p>
          </div>
          <div className="flex gap-1">
            <UsersRound
              size={18}
              className="text-secondary-100"
              aria-label="Max guests"
            />
            <p>{venue.maxGuests}</p>
          </div>
        </div>
      </div>
      <div className="relative h-80 w-full">
        <ImageCarousel images={venue.media} altText={venue.name} />
      </div>
      <div className="m-4 flex items-end gap-4 border-b border-border pb-6">
        <Image
          src={venue.owner.avatar.url}
          alt={venue.owner.avatar.alt || venue.name}
          width={75}
          height={75}
          className="size-18.75 shrink-0 rounded-full object-cover"
        />
        <div className="">
          <p className="text-sm text-muted-100">Hosted by</p>
          <p className="font-medium text-text-90">{venue.owner.name}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="justify-between md:flex">
          <div className="py-6 md:pr-6">
            <h2 className="font-sans text-xl">About this place</h2>
            <p className="mt-2 font-light text-text-90">{venue.description}</p>
            <h2 className="my-4 font-sans text-xl">What this place offers</h2>
            <VenueTags tags={venue.meta} />
          </div>
          <BookingForm
            bookings={venue.bookings ?? []}
            price={venue.price}
            maxGuests={venue.maxGuests}
            venueId={venue.id}
            venueName={venue.name}
          />
        </div>
        <div className="my-12">
          <VenueMap
            lat={venue.location.lat}
            lng={venue.location.lng}
            name={venue.location.address}
          />
        </div>
      </div>
    </main>
  );
}
