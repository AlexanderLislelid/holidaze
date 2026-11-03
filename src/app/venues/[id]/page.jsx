import { apiRequest } from "@/lib/api";
import BreadCrumb from "@/components/navigation/BreadCrumb";
export default async function VenuePage({ params }) {
  const { id } = await params;
  const { data: venue } = await apiRequest(`holidaze/venues/${id}`);

  console.log(venue);
  return (
    <main>
      <BreadCrumb href="/" name="home" />
      <h1>{venue.name}</h1>
      <p>{venue.description}</p>
    </main>
  );
}
