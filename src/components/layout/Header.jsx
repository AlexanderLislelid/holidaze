"use client";

import Link from "next/link";
import NavMenu from "../navigation/NavMenu";
import { MenuIcon, MenuSquare, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((open) => !open);
  }

  return (
    <header className="flex justify-between p-4">
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
  );
}
