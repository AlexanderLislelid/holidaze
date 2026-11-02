"use cache";
import { apiRequest } from "@/lib/api";
import VenueCard from "../cards/VenueCard";

export default async function Venues({ query }) {
  const endpoint = query
    ? `holidaze/venues/search?q=${encodeURIComponent(query)}`
    : "holidaze/venues";
  const { data } = await apiRequest(endpoint);

  if (!data.length) {
    return <p>No venues found.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  );
}
