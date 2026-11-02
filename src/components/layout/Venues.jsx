"use cache";
import { apiRequest } from "@/lib/api";
import VenueCard from "../cards/VenueCard";

export default async function Venues() {
  const { data } = await apiRequest("holidaze/venues");

  return (
    <>
      {data.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </>
  );
}
