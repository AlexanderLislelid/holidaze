"use cache";
import { apiRequest } from "@/lib/api";
import VenueCard from "../cards/VenueCard";

export default async function Venues() {
  const { data } = await apiRequest("holidaze/venues");

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  );
}
