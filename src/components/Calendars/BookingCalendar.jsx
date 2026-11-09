"use client";

import { useState } from "react";
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";

export default function BookingCalendar({ bookings = [] }) {
  const [selected, setSelected] = useState();

  const bookedRanges = bookings.map((b) => ({
    from: new Date(b.dateFrom),
    to: new Date(b.dateTo),
  }));

  console.log(bookedRanges);

  return (
    <DayPicker
      animate
      mode="range"
      selected={selected}
      onSelect={setSelected}
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
