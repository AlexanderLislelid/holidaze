"use client";
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";

export default function ManagerCalendar({ bookings = [] }) {
  const daysBooked = bookings.map((b) => ({
    from: new Date(b.dateFrom),
    to: new Date(b.dateTo),
  }));

  return (
    <DayPicker
      modifiers={{ booked: daysBooked }}
      modifiersClassNames={{ booked: "days-booked" }}
    />
  );
}
