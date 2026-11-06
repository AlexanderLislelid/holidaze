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
    <ul className="flex gap-2">
      {available.map(({ label, Icon }) => (
        <li
          key={label}
          className="flex items-center gap-1 rounded-lg border border-info-text bg-primary-10 px-2 text-info-text capitalize"
        >
          <p>{label}</p>
          <Icon size={16} />
        </li>
      ))}
    </ul>
  );
}
