import { apiRequest } from "@/lib/api";

export default async function VenuePage({ params }) {
  const { id } = await params;
  const { data: venue } = await apiRequest(`holidaze/venues/${id}`);

  return (
    <main>
      <h1>{venue.name}</h1>
      <p>{venue.description}</p>
    </main>
  );
}
