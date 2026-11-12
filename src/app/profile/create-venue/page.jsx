import CreateVenueForm from "@/components/forms/CreateVenueForm";
import BreadCrumb from "@/components/navigation/BreadCrumb";

export default function CreateVenuePage() {
  return (
    <div>
      <BreadCrumb href="/profile" name="profile" />
      <CreateVenueForm />
    </div>
  );
}
