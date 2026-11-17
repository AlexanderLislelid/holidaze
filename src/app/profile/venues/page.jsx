import UserVenues from "@/components/profile/UserVenues";
import BreadCrumb from "@/components/navigation/BreadCrumb";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function VenuesPage() {
  return (
    <div className="m-4">
      <div className="flex items-center justify-between">
        <BreadCrumb href="/profile" name="profile" />
        <Link
          href={"/profile/create-venue"}
          className="flex items-center gap-2 rounded-lg border border-primary-100 px-2 py-1 text-primary-100 hover:bg-secondary-20"
        >
          Create <Plus size={18} />
        </Link>
      </div>

      <h1 className="mb-4 text-2xl font-semibold">My venues</h1>
      <UserVenues />
    </div>
  );
}
