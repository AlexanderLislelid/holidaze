"use cache";
import { apiRequest } from "@/lib/api";
import VenueCard from "../cards/VenueCard";
import SortSelect from "../buttons/SortSelect";

export default async function Venues({
  query,
  sort = "created",
  sortOrder = "desc",
}) {
  const endpoint = query
    ? `holidaze/venues/search?q=${encodeURIComponent(query)}&sort=${sort}&sortOrder=${sortOrder}`
    : `holidaze/venues?sort=${sort}&sortOrder=${sortOrder}`;
  const { data } = await apiRequest(endpoint);

  if (!data.length) {
    return <p>No venues found.</p>;
  }

  return (
    <div>
      <SortSelect query={query} sort={sort} sortOrder={sortOrder} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  );
}
