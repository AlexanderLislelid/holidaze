"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuthStore from "@/store/authStore";
import LogoutButton from "@/components/buttons/LogoutButton";
import {
  Calendar,
  House,
  HousePlus,
  UserRound,
  UserRoundPlus,
} from "lucide-react";

const guestLinks = [
  {
    href: "/register",
    label: "Register",
    icon: UserRoundPlus,
  },
  {
    href: "/login",
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

  const isActive = (href) => pathName === href;

  const linkClass = (href) =>
    `flex items-center gap-2 ${isActive(href) ? "text-primary-hover bg-secondary-30" : ""}`;

  const links = guest
    ? guestLinks
    : venueManager
      ? venueManagerLinks
      : userLinks;

  return (
    <nav>
      <ul>
        {links.map(({ href, label, icon: Icon }) => (
          <li key={label}>
            <Link
              href={href}
              className={linkClass(href)}
              aria-current={isActive(href) ? "page" : undefined}
            >
              <Icon />
              {label}
            </Link>
          </li>
        ))}
        {!guest && (
          <li>
            <LogoutButton />
          </li>
        )}
      </ul>
    </nav>
  );
}
