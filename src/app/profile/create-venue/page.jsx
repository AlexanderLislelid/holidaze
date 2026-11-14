import ManagerVenueForm from "@/components/forms/ManagerVenueForm";
import BreadCrumb from "@/components/navigation/BreadCrumb";

export default function CreateVenuePage() {
  return (
    <div>
      <BreadCrumb href="/profile" name="profile" />
      <ManagerVenueForm />
    </div>
  );
}
