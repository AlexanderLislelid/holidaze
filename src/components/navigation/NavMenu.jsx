"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuthStore from "@/store/authStore";
import LogoutButton from "@/components/buttons/LogoutButton";
import {
  Calendar,
  House,
  HousePlus,
  LogIn,
  UserRound,
  UserRoundPlus,
} from "lucide-react";

const guestLinks = [
  {
    href: "/",
    label: "Venues",
    icon: House,
  },
  {
    href: "/login",
    label: "Log in",
    icon: LogIn,
  },
  {
    href: "/register",
    label: "Register",
    icon: UserRoundPlus,
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
    `flex items-center gap-3 rounded-md px-3 py-2 text-sm ${isActive(href) ? "text-primary-hover bg-secondary-30" : "text-text-100"}`;

  const links = guest
    ? guestLinks
    : venueManager
      ? venueManagerLinks
      : userLinks;

  return (
    <nav className="w-60 rounded-lg border border-border bg-white p-3 shadow-md">
      {!guest && (
        <div className="mb-2 flex items-center gap-3 border-b border-border px-3 pb-3">
          <img
            src={user.avatar?.url}
            alt={user.avatar?.alt || ""}
            className="size-10 rounded-full object-cover"
          />
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm font-medium">{user.name}</span>
            <span className="rounded-full bg-primary-10 px-2 py-0.5 text-xs text-primary-100">
              {venueManager ? "Venue manager" : "Customer"}
            </span>
          </div>
        </div>
      )}
      <ul className="flex flex-col gap-1">
        {links.map(({ href, label, icon: Icon }) => (
          <li key={label}>
            <Link
              href={href}
              className={linkClass(href)}
              aria-current={isActive(href) ? "page" : undefined}
            >
              <Icon size={18} />
              {label}
            </Link>
          </li>
        ))}
        {!guest && (
          <li className="mt-1 border-t border-border pt-2">
            <LogoutButton />
          </li>
        )}
      </ul>
    </nav>
  );
}
