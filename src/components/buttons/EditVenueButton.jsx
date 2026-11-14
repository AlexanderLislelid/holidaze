"use client";

import Link from "next/link";
import { SquarePen } from "lucide-react";
import { useIsClient } from "usehooks-ts";
import useAuthStore from "@/store/authStore";

export default function EditVenueButton({ venueId, ownerName }) {
  const user = useAuthStore((state) => state.user);
  const isClient = useIsClient();

  if (!isClient) return null;
  if (user?.name !== ownerName) return null;

  return (
    <Link
      href={`/venues/${venueId}/edit`}
      className="flex max-w-62 items-center justify-center gap-2 rounded-md bg-primary-100 py-1 text-white hover:bg-primary-hover"
    >
      Edit venue <SquarePen size={18} />
    </Link>
  );
}
