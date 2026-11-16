export default function ManagerVenueCard({ venue }) {
  return (
    <div className="rounded border p-4">
      <h2 className="text-lg font-semibold">{venue.name}</h2>
      <p>{venue.description}</p>
    </div>
  );
}
