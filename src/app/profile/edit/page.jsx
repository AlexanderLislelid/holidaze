import EditProfileForm from "@/components/forms/EditProfileForm";
import BreadCrumb from "@/components/navigation/BreadCrumb";

export default function EditProfilePage() {
  return (
    <div>
      <BreadCrumb href="/profile" name="profile" />
      <EditProfileForm />
    </div>
  );
}
