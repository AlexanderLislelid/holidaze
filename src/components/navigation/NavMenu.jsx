"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuthStore from "@/store/authStore";
import {
  Calendar,
  House,
  HousePlus,
  LogOut,
  UserRound,
  UserRoundPlus,
} from "lucide-react";

const userLinks = [
  {
    href: "/profile",
    label: "Profile",
    icon: UserRound,
  },
  {
    href: "/#",
    label: "My venues",
    icon: House,
  },
  {
    href: "/#",
    label: "Create venue",
    icon: HousePlus,
  },
  {
    href: "/#",
    label: "My bookings",
    icon: Calendar,
  },
  {
    href: "/#",
    label: "Log out",
    icon: LogOut,
  },
  {
    href: "/#",
    label: "Register",
    icon: UserRoundPlus,
  },
];

export default function NavMenu() {
  const user = useAuthStore((state) => state.user);
  const pathName = usePathname();

  return (
    <nav>
      {userLinks.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          className={pathName === href ? "active" : ""}
        >
          <Icon />
          {label}
        </Link>
      ))}
    </nav>
  );
}
