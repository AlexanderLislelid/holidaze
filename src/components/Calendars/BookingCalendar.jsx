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
      animate
      mode="range"
      selected={selected}
      onSelect={onSelect}
      disabled={[{ before: new Date() }, ...bookedRanges]}
      excludeDisabled
      footer={
        selected?.from && selected?.to
          ? `${selected.from.toLocaleDateString()} - ${selected.to.toLocaleDateString()}`
          : "Pick check-in and check-out dates"
      }
    />
  );
}
