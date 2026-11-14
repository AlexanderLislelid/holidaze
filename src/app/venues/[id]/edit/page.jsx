import { apiRequest } from "@/lib/api";
import VenueForm from "@/components/forms/VenueForm";
import BreadCrumb from "@/components/navigation/BreadCrumb";

export default async function EditVenuePage({ params }) {
  const { id } = await params;
  const { data: venue } = await apiRequest(`holidaze/venues/${id}?_owner=true`);

  return (
    <div>
      <BreadCrumb href={`/venues/${id}`} name="venue" />
      <VenueForm venue={venue} />
    </div>
  );
}
