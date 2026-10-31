"use client";

import Link from "next/link";
import NavMenu from "../navigation/NavMenu";
import { MenuIcon, MenuSquare, X } from "lucide-react";
import { useState } from "react";
import useAuthStore from "@/store/authStore";

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const guest = !user;

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((open) => !open);
  }

  return user ? (
    <header className="mx-auto flex w-full max-w-300 items-center justify-between bg-white p-3">
      <Link href="/">
        <img src="/holidaze-logo-light-36px.svg" />
      </Link>
      <div className="relative">
        {/* Mobilmeny */}
        <button
          className="sm:hidden"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <MenuSquare />}
        </button>
        <button className="hidden sm:flex" onClick={toggleMenu}>
          {/*  Legg inn desktop knappen her!  og endre chevron pila*/}
          <MenuIcon />
        </button>
        <div
          className={`${menuOpen ? "block" : "hidden"} absolute top-full right-0 mt-6`}
        >
          <NavMenu />
        </div>
      </div>
    </header>
  ) : (
    <header className="mx-auto flex w-full max-w-300 items-center justify-between bg-white p-3">
      <Link href="/">
        <img src="/holidaze-logo-light-36px.svg" />
      </Link>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Venues</Link>
          </li>
          <li>
            <Link href="/login">Log in</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
