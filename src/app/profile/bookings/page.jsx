import UserBookings from "@/components/profile/UserBookings";

export default function BookingsPage() {
  return (
    <div className="m-4">
      <h1 className="mb-4 text-xl font-semibold">My bookings</h1>
      <UserBookings />
    </div>
  );
}
