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
import Image from "next/image";
import CancelBookingButton from "../buttons/CancelBookingButton";

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

  function handleCancel(id) {
    setBookings((prev) => prev.filter((booking) => booking.id !== id));
  }

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
              <div className="flex gap-3 overflow-hidden rounded-xl border border-border bg-white">
                <div className="relative w-24 shrink-0 bg-text-10 sm:w-32">
                  {booking.venue?.media?.[0]?.url && (
                    <Image
                      src={booking.venue.media[0].url}
                      alt={booking.venue.media[0].alt || booking.venue.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 py-3 pr-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="truncate font-medium">
                        {booking.venue?.name}
                      </h3>
                      <p className="text-[12px] text-text-70">
                        {dateFrom} - {dateTo}
                      </p>
                    </div>

                    {new Date(booking.dateFrom) > today && (
                      <div className="shrink-0">
                        <CancelBookingButton
                          bookingId={booking.id}
                          venueName={booking.venue?.name}
                          onCancelled={handleCancel}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-sm">
                      <UsersRound size={18} className="text-primary-100" />
                      <p>Guests {booking.guests}</p>
                    </div>

                    <div className="flex gap-2 text-primary-100">
                      {booking.venue?.meta?.breakfast && <Utensils size={18} />}
                      {booking.venue?.meta?.parking && (
                        <ParkingSquare size={18} />
                      )}
                      {booking.venue?.meta?.pets && <PawPrint size={18} />}
                      {booking.venue?.meta?.wifi && <Wifi size={18} />}
                    </div>
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
