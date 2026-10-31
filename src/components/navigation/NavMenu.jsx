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
];

export default function NavMenu() {
  const user = useAuthStore((state) => state.user);
  const venueManager = user?.venueManager;
  const guest = !user;

  const pathName = usePathname();

  return (
    <nav>
      <ul>
        {guest
          ? guestLinks.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <Link href={href} className="flex items-center gap-2">
                  <Icon />
                  {label}
                </Link>
              </li>
            ))
          : venueManager
            ? venueManagerLinks.map(({ href, label, icon: Icon }) => (
                <div>
                  <li key={label}>
                    <Link href={href}>
                      <Icon />
                      {label}
                    </Link>
                  </li>
                  <button>
                    {/* note to self: add reusable logout button component here */}
                    Log out
                  </button>
                </div>
              ))
            : userLinks.map(({ href, label, icon: Icon }) => (
                <div>
                  <li key={label}>
                    <Link href={href}>
                      <Icon />
                      {label}
                    </Link>
                  </li>
                  <button>
                    {/* note to self: add reusable logout button component here */}
                    Log out
                  </button>
                </div>
              ))}
      </ul>
    </nav>
  );
}
