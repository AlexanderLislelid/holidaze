"use client";

import { useEffect, useState } from "react";
import useAuthStore from "@/store/authStore";
import { apiRequest } from "@/lib/api";

export default function UserBookings() {
  const user = useAuthStore((state) => state.user);
  const accessToken = useAuthStore((state) => state.accessToken);
  const [bookings, setBookings] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user || !accessToken) return;

    async function fetchBookings() {
      try {
        const { data } = await apiRequest(
          `holidaze/profiles/${user.name}/bookings?_venue=true`,
          { token: accessToken },
        );

        setBookings(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchBookings();
  }, [user, accessToken]);

  if (error) return <p>{error}</p>;
  if (!bookings) return <p>Loading bookings...</p>;
  if (bookings.length === 0) return <p>You have no bookings yet.</p>;

  return (
    <ul className="flex flex-col gap-3">
      {bookings.map((booking) => {
        const dateFrom = new Date(booking.dateFrom).toLocaleDateString("nb-NO");
        const dateTo = new Date(booking.dateTo).toLocaleDateString("nb-NO");

        return (
          <li key={booking.id}>
            <div className="rounded-xl border border-border bg-white p-4">
              <div className="flex justify-between gap-2">
                <h3 className="font-medium">{booking.venue?.name}</h3>
                <p className="shrink-0 text-sm text-text-70">
                  {dateFrom} - {dateTo}
                </p>
              </div>
              <div className="flex justify-between">
                <p>guests</p>
                <p>icons</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
