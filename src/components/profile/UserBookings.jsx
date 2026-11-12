"use client";

import { useEffect, useState } from "react";
import useAuthStore from "@/store/authStore";
import { apiRequest } from "@/lib/api";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ParkingSquare,
  PawPrint,
  UsersRound,
  Utensils,
  Wifi,
} from "lucide-react";

/**
 * Fetches and shows the logged-in user's bookings.
 * Each booking shows venue name, dates, number of guests and venue amenities.
 * Bookings are sorted by start date, earliest first.
 *
 * Without `limit`, all bookings (past and upcoming) are shown.
 * With `limit`, only upcoming bookings are shown, cut to that number,
 * plus a "See all bookings" link if there are more.
 *
 * @param {Object} props
 * @param {number} [props.limit] - Max number of upcoming bookings to show. Leave out to show all bookings.
 * @returns {JSX.Element} A list of booking cards, or a loading, error or empty message.
 *
 * @example
 * // Profile page: next 3 upcoming bookings
 * <UserBookings limit={3} />
 *
 * @example
 * // Bookings page: all bookings
 * <UserBookings />
 */
export default function UserBookings({ limit }) {
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

  const sorted = [...bookings].sort(
    (firstBooking, secondBooking) =>
      new Date(firstBooking.dateFrom) - new Date(secondBooking.dateFrom),
  );

  const today = new Date();
  const upcoming = sorted.filter(
    (booking) => new Date(booking.dateTo) >= today,
  );
  const visibleBookings = limit ? upcoming.slice(0, limit) : sorted;

  if (visibleBookings.length === 0) return <p>No upcoming bookings.</p>;

  return (
    <div className="flex flex-col gap-3">
      <ul className="flex flex-col gap-3">
        {visibleBookings.map((booking) => {
          const dateFrom = new Date(booking.dateFrom).toLocaleDateString(
            "nb-NO",
          );
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

      {limit && upcoming.length > limit && (
        <Link
          href="/profile/bookings"
          className="flex items-center justify-end gap-2 text-sm text-primary-100"
        >
          See all bookings <ArrowRight size={18} />
        </Link>
      )}
    </div>
  );
}
