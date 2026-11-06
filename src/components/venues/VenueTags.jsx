import { Wifi, PawPrint, SquareParking, Utensils } from "lucide-react";

const venueTags = [
  {
    label: "wifi",
    Icon: Wifi,
  },
  {
    label: "pets",
    Icon: PawPrint,
  },
  {
    label: "parking",
    Icon: SquareParking,
  },
  {
    label: "breakfast",
    Icon: Utensils,
  },
];

export default function VenueTags({ tags }) {
  const available = venueTags.filter((amenity) => tags[amenity.label]);
  return (
    <ul>
      {available.map(({ label, Icon }) => (
        <li key={label}>
          <Icon size={18} />
          <p>{label}</p>
        </li>
      ))}
    </ul>
  );
}
