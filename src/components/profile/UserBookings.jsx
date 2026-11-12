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
    <ul>
      {bookings.map((booking) => {
        const dateFrom = new Date(booking.dateFrom).toLocaleDateString("nb-NO");
        const dateTo = new Date(booking.dateTo).toLocaleDateString("nb-NO");

        return (
          <li key={booking.id} className="p-4">
            <div className="rounded-md border border-border bg-white p-2">
              <div className="items- flex justify-between">
                <h3 className="font-medium">{booking.venue?.name}</h3>
                <p className="pr-8 text-[10px]">
                  {dateFrom} - {dateTo}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
