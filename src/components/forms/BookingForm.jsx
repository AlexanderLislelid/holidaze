"use client";

import { useState } from "react";
import useAuthStore from "@/store/authStore";
import BookingCalendar from "../Calendars/BookingCalendar";
import SelectInput from "../inputs/SelectInput";
import { differenceInCalendarDays } from "date-fns";
import { apiRequest } from "@/lib/api";
import { useRouter } from "next/navigation";
import SuccessToast from "../toasts/SuccessToast";

export default function BookingForm({
  bookings = [],
  price,
  maxGuests = 1,
  venueId,
  venueName,
}) {
  const [selected, setSelected] = useState();
  const [guests, setGuests] = useState(1);
  const accessToken = useAuthStore((state) => state.accessToken);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();

  const guestOptions = Array.from({ length: maxGuests }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} ${i === 0 ? "Guest" : "Guests"}`,
  }));
  const nights =
    selected?.from && selected?.to
      ? differenceInCalendarDays(selected.to, selected.from)
      : 0;

  const total = nights * price;

  async function handleSubmit(event) {
    setError("");
    setIsLoading(true);
    event.preventDefault();

    try {
      await apiRequest("holidaze/bookings", {
        method: "POST",
        token: accessToken,
        body: {
          dateFrom: selected.from.toISOString(),
          dateTo: selected.to.toISOString(),
          guests,
          venueId,
        },
      });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      setSelected(undefined);
      router.refresh();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return accessToken ? (
    <form
      className="flex w-fit flex-col gap-8 rounded-xl bg-white p-6"
      onSubmit={handleSubmit}
    >
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
      <div className="flex justify-between border-t border-b border-border py-4">
        <p>
          {price}kr x {nights} nights
        </p>
        <p className="font-bold">{total}kr</p>
      </div>
      {error && <p className="text-sm text-error-text">{error}</p>}
      <button type="submit" disabled={isLoading || nights < 1}>
        {isLoading ? "Booking..." : "Book now"}
      </button>
      {showToast && (
        <SuccessToast message={`Successfully booked ${venueName}`} />
      )}
    </form>
  ) : (
    <p>Please log in to book</p>
  );
}
