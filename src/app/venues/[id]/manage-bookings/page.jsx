import { apiRequest } from "@/lib/api";
import BreadCrumb from "@/components/navigation/BreadCrumb";
import Image from "next/image";
import { UsersRound } from "lucide-react";
import ManagerCalendar from "@/components/calendars/ManagerCalendar";
export default async function ManageBookingsPage({ params }) {
  const { id } = await params;
  const { data: venue } = await apiRequest(
    `holidaze/venues/${id}?_bookings=true`,
  );

  return (
    <div>
      <BreadCrumb href="/profile/venues" name="Venues" />
      <div className="mx-4 mb-8 flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-semibold">{venue.name}</h2>
          <p className="text-sm text-text-80">Bookings for this venue</p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <Image
            src={venue.media[0]?.url || "https://placehold.net/400x200.png"}
            alt={venue.media[0]?.alt || `${venue.name}`}
            width={400}
            height={200}
            className="rounded-lg"
          ></Image>
          <ManagerCalendar bookings={venue.bookings} />
        </div>

        <ul className="flex flex-col gap-4">
          {venue.bookings.map((booking) => (
            <li key={booking.id}>
              <div className="flex max-w-125 justify-between rounded-2xl border border-border bg-white p-4 shadow-md">
                <div className="flex items-center gap-4">
                  <Image
                    src={booking.customer.avatar?.url || ""}
                    alt={
                      booking.customer.avatar?.alt ||
                      `${booking.customer.name}'s avatar`
                    }
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  ></Image>
                  <div>
                    <p className="font-heading text-xl font-medium capitalize">
                      {booking.customer.name}
                    </p>
                    <p className="text-[13px]">
                      {new Date(booking.dateFrom).toLocaleDateString("nb-NO")} -{" "}
                      {new Date(booking.dateTo).toLocaleDateString("nb-NO")}
                    </p>
                  </div>
                </div>
                <p className="flex items-end gap-2 text-sm">
                  <UsersRound size={18} className="text-primary-100" />
                  {booking.guests} guests
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
