"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";
import { useIsClient } from "usehooks-ts";
import useAuthStore from "@/store/authStore";
import { apiRequest } from "@/lib/api";
import ConfirmationModal from "../modals/ConfirmationModal";

export default function DeleteVenueButton({ venueId, ownerName, venueName }) {
  const user = useAuthStore((state) => state.user);
  const accessToken = useAuthStore((state) => state.accessToken);
  const isClient = useIsClient();
  const router = useRouter();

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [error, setError] = useState(null);

  if (!isClient) return null;
  if (user?.name !== ownerName) return null;

  async function handleDelete() {
    setConfirmOpen(false);
    try {
      await apiRequest(`holidaze/venues/${venueId}`, {
        method: "DELETE",
        token: accessToken,
      });
      router.push("/profile/venues");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <button
        onClick={() => setConfirmOpen(true)}
        className="flex max-w-62 items-center justify-center gap-2 rounded-md bg-error-icon px-4 py-1 text-white hover:bg-error-text"
      >
        Delete venue <Trash size={18} />
      </button>

      {error && <p className="text-sm font-medium text-error-text">{error}</p>}

      <ConfirmationModal
        open={confirmOpen}
        title="Delete venue"
        message={`Are you sure you want to delete ${venueName}? This cannot be undone.`}
        confirmText="Delete"
        onConfirm={handleDelete}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  );
}
