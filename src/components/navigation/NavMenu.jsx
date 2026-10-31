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

const guestLinks = [
  {
    href: "/#",
    label: "Register",
    icon: UserRoundPlus,
  },
  {
    href: "/#",
    label: "Login",
    icon: UserRound,
  },
];

const userLinks = [
  {
    href: "/profile",
    label: "Profile",
    icon: UserRound,
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
];

const venueManagerLinks = [
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
];

export default function NavMenu() {
  const user = useAuthStore((state) => state.user);
  const pathName = usePathname();

  return <nav></nav>;
}
