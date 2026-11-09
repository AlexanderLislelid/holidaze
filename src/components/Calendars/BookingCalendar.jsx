"use client";

import { useState } from "react";
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";

export default function BookingCalendar() {
  const [selected, setSelected] = useState();

  return (
    <DayPicker
      animate
      mode="range"
      selected={selected}
      onSelect={setSelected}
      disabled={{ before: new Date() }}
      footer={
        selected?.from && selected?.to
          ? `${selected.from.toLocaleDateString()} - ${selected.to.toLocaleDateString()}`
          : "Pick check-in and check-out dates"
      }
    />
  );
}
