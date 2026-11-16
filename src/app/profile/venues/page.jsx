import UserVenues from "@/components/profile/UserVenues";
import BreadCrumb from "@/components/navigation/BreadCrumb";

export default function VenuesPage() {
  return (
    <div className="m-4">
      <BreadCrumb href="/profile" name="profile" />
      <h1 className="mb-4 text-xl font-semibold">My venues</h1>
      <UserVenues />
    </div>
  );
}
