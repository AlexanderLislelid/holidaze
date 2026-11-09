"use client";

import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";

export default function BookingCalendar({ bookings = [], selected, onSelect }) {
  const bookedRanges = bookings.map((b) => ({
    from: new Date(b.dateFrom),
    to: new Date(b.dateTo),
  }));

  return (
    <DayPicker
      className="booking-calendar"
      animate
      mode="range"
      selected={selected}
      onSelect={onSelect}
      disabled={[{ before: new Date() }, ...bookedRanges]}
      excludeDisabled
      footer={
        selected?.from && selected?.to ? (
          `${selected.from.toLocaleDateString()} - ${selected.to.toLocaleDateString()}`
        ) : (
          <p className="mt-3 text-sm text-gray-500">
            Pick check-in and check-out dates
          </p>
        )
      }
    />
  );
}
