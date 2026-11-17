import { apiRequest } from "@/lib/api";
import BreadCrumb from "@/components/navigation/BreadCrumb";
import Image from "next/image";
import { UsersRound } from "lucide-react";
import ManagerCalendar from "@/components/calendars/ManagerCalendar";
import { PLACEHOLDER_IMAGE } from "@/lib/constants";
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
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:gap-12">
          <Image
            src={venue.media[0]?.url || PLACEHOLDER_IMAGE}
            alt={venue.media[0]?.alt || `${venue.name}`}
            width={400}
            height={200}
            className="w-full min-w-0 rounded-lg object-cover md:aspect-auto md:flex-1"
          ></Image>
          <div className="shrink-0 rounded-lg bg-white p-4 shadow">
            <div className="flex items-center gap-4">
              <div className="rounded bg-primary-100 p-2"></div>
              <p className="text-sm text-muted-100">Booked</p>
            </div>
            <ManagerCalendar bookings={venue.bookings} />
          </div>
        </div>

        <section className="flex flex-col gap-3">
          <h3 className="font-heading text-xl font-medium">
            {venue.bookings.length > 0 ? "Guests" : "No guests yet"}
          </h3>
          <ul className="flex flex-col gap-3">
            {venue.bookings.map((booking) => (
              <li key={booking.id}>
                <div className="flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-white px-5 py-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <Image
                      src={booking.customer.avatar?.url || ""}
                      alt={
                        booking.customer.avatar?.alt ||
                        `${booking.customer.name}'s avatar`
                      }
                      width={50}
                      height={50}
                      className="size-12 shrink-0 rounded-full object-cover"
                    ></Image>
                    <div className="">
                      <p className="truncate font-heading text-lg font-medium capitalize">
                        {booking.customer.name}
                      </p>
                      <p className="text-sm text-text-80">
                        {new Date(booking.dateFrom).toLocaleDateString("nb-NO")}{" "}
                        - {new Date(booking.dateTo).toLocaleDateString("nb-NO")}
                      </p>
                    </div>
                  </div>
                  <p className="flex shrink-0 items-center gap-2 rounded-full bg-primary-10 px-3 py-1 text-sm font-medium text-primary-100">
                    <UsersRound size={16} />
                    {booking.guests} guests
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
