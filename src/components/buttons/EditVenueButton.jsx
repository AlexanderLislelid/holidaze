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
      className="flex gap-2 rounded-xl border p-2"
    >
      Edit venue <SquarePen size={18} />
    </Link>
  );
}
