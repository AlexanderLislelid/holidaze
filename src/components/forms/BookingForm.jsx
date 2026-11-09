"use client";

import { useState } from "react";
import useAuthStore from "@/store/authStore";
import BookingCalendar from "../Calendars/BookingCalendar";
import SelectInput from "../inputs/SelectInput";

export default function BookingForm({ bookings = [], price, maxGuests = 1 }) {
  const [selected, setSelected] = useState();
  const [guests, setGuests] = useState(1);
  const accessToken = useAuthStore((state) => state.accessToken);

  const guestOptions = Array.from({ length: maxGuests }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} ${i === 0 ? "Guest" : "Guests"}`,
  }));

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
      <div className="flex justify-between">
        <div className="flex gap-2">
          <span className="flex items-center justify-center rounded bg-primary-100 p-3"></span>
          <p>Selected</p>
        </div>
        <div className="flex gap-2">
          <span className="flex items-center justify-center rounded bg-accent-100 p-3"></span>
          <p>Booked</p>
        </div>
      </div>
      <SelectInput
        label="Guests"
        name="guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        options={guestOptions}
      />
    </form>
  ) : (
    <p>Please log in to book</p>
  );
}
