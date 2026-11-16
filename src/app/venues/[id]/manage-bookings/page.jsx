import { apiRequest } from "@/lib/api";
import BreadCrumb from "@/components/navigation/BreadCrumb";
import Image from "next/image";
import { UsersRound } from "lucide-react";
export default async function ManageBookingsPage({ params }) {
  const { id } = await params;
  const { data: venue } = await apiRequest(
    `holidaze/venues/${id}?_bookings=true`,
  );

  console.log(venue);
  return (
    <div>
      <div>
        <BreadCrumb href="/profile/venues" name="Venues" />
        <ul>
          {venue.bookings.map((booking) => (
            <li key={booking.id}>
              <div className="m-4 flex max-w-125 justify-between rounded-2xl border border-border bg-white p-4 shadow-md">
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
