"use client";

import { useState } from "react";
import useAuthStore from "@/store/authStore";
import BookingCalendar from "../Calendars/BookingCalendar";

export default function BookingForm({ bookings = [], price }) {
  const [selected, setSelected] = useState();
  const [guests, setGuests] = useState(1);
  const accessToken = useAuthStore((state) => state.accessToken);

  return accessToken ? (
    <form className="flex w-fit flex-col gap-8 rounded-xl bg-white p-6">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold">{price}kr</h2>
        <p> / night</p>
      </div>
      <BookingCalendar
        bookings={bookings}
        selected={selected}
        onSelect={setSelected}
      />
    </form>
  ) : (
    <p>Please log in to book</p>
  );
}
