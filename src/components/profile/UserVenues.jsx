"use client";

import { useEffect, useState } from "react";
import useAuthStore from "@/store/authStore";
import { apiRequest } from "@/lib/api";
import ManagerVenueCard from "@/components/cards/ManagerVenueCard";

export default function UserVenues() {
  const user = useAuthStore((state) => state.user);
  const accessToken = useAuthStore((state) => state.accessToken);
  const [venues, setVenues] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user || !accessToken) return;

    async function fetchVenues() {
      try {
        const { data } = await apiRequest(
          `holidaze/profiles/${user.name}/venues?owner=true&bookings=true`,
          { token: accessToken },
        );

        setVenues(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchVenues();
  }, [user, accessToken]);

  if (error) return <p>{error}</p>;
  if (!venues) return <p>Loading venues...</p>;
  if (venues.length === 0) return <p>You have no venues yet.</p>;

  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {venues.map((venue) => (
        <li key={venue.id}>
          <ManagerVenueCard venue={venue} />
        </li>
      ))}
    </ul>
  );
}
