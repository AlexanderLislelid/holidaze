"use client";

import Link from "next/link";
import NavMenu from "../navigation/NavMenu";
import { ChevronDown, MenuSquare, X, UserRoundPlus } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import useAuthStore from "@/store/authStore";

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const guest = !user;

  const [menuOpen, setMenuOpen] = useState(false);

  const pathName = usePathname();

  const isActive = (href) => pathName === href;

  const linkClass = (href) =>
    ` ${isActive(href) ? "text-primary-hover font-semibold" : ""}`;

  function toggleMenu() {
    setMenuOpen((open) => !open);
  }

  return user ? (
    <header className="mx-auto flex w-full max-w-300 items-center justify-between bg-white p-3">
      <Link href="/">
        <img src="/holidaze-logo-light-36px.svg" alt="Holidaze" />
      </Link>
      <div className="relative flex items-center gap-4">
        <Link
          href="/"
          className={`hidden md:block ${linkClass("/")}`}
          aria-current={isActive("/") ? "page" : undefined}
        >
          Venues
        </Link>
        {/* Mobilmeny */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <MenuSquare />}
        </button>
        {/* Desktopmeny */}
        <button
          className="hidden items-center gap-2 rounded-full bg-primary-100 py-1 pr-3 pl-1 text-sm text-white hover:bg-primary-hover md:flex"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <img
            src={user.avatar?.url}
            alt=""
            className="size-7 rounded-full object-cover"
          />
          {user.name}
          <ChevronDown
            size={16}
            className={`transition-transform ${menuOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`${menuOpen ? "block" : "hidden"} absolute top-full right-0 z-10 mt-4`}
        >
          <NavMenu />
        </div>
      </div>
    </header>
  ) : (
    <header className="mx-auto flex w-full max-w-300 items-center justify-between bg-white p-3">
      <Link href="/">
        <img src="/holidaze-logo-light-36px.svg" alt="Holidaze" />
      </Link>
      {/* Mobilmeny */}
      <div className="relative md:hidden">
        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <MenuSquare />}
        </button>
        <div
          className={`${menuOpen ? "block" : "hidden"} absolute top-full right-0 z-10 mt-4`}
        >
          <NavMenu />
        </div>
      </div>
      {/* Desktopmeny */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href="/"
              className={linkClass("/")}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Venues
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className={linkClass("/login")}
              aria-current={isActive("/login") ? "page" : undefined}
            >
              Log in
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-white hover:bg-primary-hover ${isActive("/register") ? "bg-primary-hover" : "bg-primary-100"}`}
              aria-current={isActive("/register") ? "page" : undefined}
            >
              <UserRoundPlus size={20} /> Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
