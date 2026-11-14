import VenueForm from "@/components/forms/VenueForm";
import BreadCrumb from "@/components/navigation/BreadCrumb";

export default function CreateVenuePage() {
  return (
    <div>
      <BreadCrumb href="/profile" name="profile" />
      <VenueForm />
    </div>
  );
}
