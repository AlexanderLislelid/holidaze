export default function VenueMap({ lat, lng, name }) {
  if (!lat || !lng) {
    return <p>No map available</p>;
  }

  const offset = 0.003;
  const bbox = [lng - offset, lat - offset, lng + offset, lat + offset].join(
    ",",
  );
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <iframe
      src={src}
      title={`Map showing the location of ${name}`}
      className="h-64 w-full rounded-lg border border-border"
      loading="lazy"
    />
  );
}
