"use client";

import { useState } from "react";
import UserBookings from "../profile/UserBookings";
import UserVenues from "../profile/UserVenues";

export default function ToggleContentButton() {
  const [activeContent, setActiveContent] = useState("bookings");

  return (
    <div className="mx-4 md:hidden">
      <div className="max mb-6 flex items-center justify-between border-b border-border">
        <button
          onClick={() => setActiveContent("bookings")}
          className={
            activeContent === "bookings"
              ? "text-lg font-semibold text-primary-100 underline underline-offset-8"
              : ""
          }
        >
          Bookings
        </button>
        <button
          onClick={() => setActiveContent("venues")}
          className={
            activeContent === "venues"
              ? "text-lg font-semibold text-primary-100 underline underline-offset-8"
              : ""
          }
        >
          Venues
        </button>
      </div>

      {activeContent === "bookings" && <UserBookings />}
      {activeContent === "venues" && <UserVenues />}
    </div>
  );
}
