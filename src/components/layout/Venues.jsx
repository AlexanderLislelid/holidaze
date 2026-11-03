"use cache";
import { apiRequest } from "@/lib/api";
import VenueCard from "../cards/VenueCard";
import SortSelect from "../buttons/SortSelect";
import LoadMoreButton from "../buttons/LoadMoreButton";

export default async function Venues({
  query,
  sort = "created",
  sortOrder = "desc",
  page = "1",
}) {
  const endpoint = query
    ? `holidaze/venues/search?q=${encodeURIComponent(query)}&sort=${sort}&sortOrder=${sortOrder}&limit=12`
    : `holidaze/venues?sort=${sort}&sortOrder=${sortOrder}&limit=12`;
  const requests = [];
  for (let p = 1; p <= Number(page); p++) {
    requests.push(apiRequest(`${endpoint}&page=${p}`));
  }
  const results = await Promise.all(requests);
  const allVenues = results.flatMap((result) => result.data);
  const data = allVenues.filter(
    (venue, index) => allVenues.findIndex((v) => v.id === venue.id) === index,
  );

  const meta = results.at(-1).meta;

  if (!data.length) {
    return <p>No venues found.</p>;
  }

  return (
    <div className="mt-12">
      <h2 className="mx-4 my-1 text-2xl font-medium text-text-80">
        Places to stay
      </h2>
      <p className="mx-4 mb-8 text-sm text-muted-100">
        Hand-picked cabins, apartments and hideaways, ready to book.
      </p>
      <SortSelect query={query} sort={sort} sortOrder={sortOrder} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
      <div className="my-12 flex justify-center">
        {!meta.isLastPage && (
          <LoadMoreButton
            query={query}
            sort={sort}
            sortOrder={sortOrder}
            page={page}
          />
        )}
      </div>
    </div>
  );
}
