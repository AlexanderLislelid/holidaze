"use client";

import { useState } from "react";
import { CircleX } from "lucide-react";
import useAuthStore from "@/store/authStore";
import { apiRequest } from "@/lib/api";
import ConfirmationModal from "../modals/ConfirmationModal";

export default function CancelBookingButton({
  bookingId,
  venueName,
  onCancelled,
}) {
  const accessToken = useAuthStore((state) => state.accessToken);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [error, setError] = useState(null);

  async function handleCancel() {
    setConfirmOpen(false);
    try {
      await apiRequest(`holidaze/bookings/${bookingId}`, {
        method: "DELETE",
        token: accessToken,
      });
      onCancelled(bookingId);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <button
        onClick={() => setConfirmOpen(true)}
        className="group flex max-w-62 items-center justify-center gap-2 rounded-md px-2 py-1 text-sm text-text-70 hover:text-text-100"
      >
        Cancel <CircleX size={16} className="group-hover:text-error-icon" />
      </button>

      {error && <p className="text-sm font-medium text-error-text">{error}</p>}

      <ConfirmationModal
        open={confirmOpen}
        title="Cancel booking"
        message={`Are you sure you want to cancel your stay at ${venueName}? This cannot be undone.`}
        confirmText="Yes, cancel booking"
        onConfirm={handleCancel}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  );
}
