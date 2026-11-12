"use client";

import { useEffect, useState } from "react";
import useAuthStore from "@/store/authStore";
import { apiRequest } from "@/lib/api";
import {
  ParkingSquare,
  PawPrint,
  UsersRound,
  Utensils,
  Wifi,
} from "lucide-react";

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
            <div className="flex flex-col gap-2 rounded-xl border border-border bg-white p-4">
              <div className="flex justify-between gap-2">
                <h3 className="font-medium">{booking.venue?.name}</h3>
                <p className="shrink-0 text-[12px] text-text-70">
                  {dateFrom} - {dateTo}
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <UsersRound size={18} className="text-primary-100" />
                  <p>Guests {booking.guests}</p>
                </div>
                <div className="flex gap-1 text-primary-100">
                  {booking.venue.meta.breakfast ? <Utensils size={18} /> : ""}
                  {booking.venue.meta.parking ? (
                    <ParkingSquare size={18} />
                  ) : (
                    ""
                  )}
                  {booking.venue.meta.pets ? <PawPrint size={18} /> : ""}
                  {booking.venue.meta.wifi ? <Wifi size={18} /> : ""}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
