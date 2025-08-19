"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link href="/" aria-label="Kae's Kitchen Home" className="nav__logo">
        <img
  src="/assets/img/logo-small.png"
  alt="Kae’s Kitchen logo"
  className="nav__logo-img"
/>

        </Link>

        <div className={`nav__menu ${open ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link href="/#home" className="nav__link">Home</Link>
            </li>
            <li className="nav__item">
              <Link href="/#new" className="nav__link">Our Latest</Link>
            </li>
            <li className="nav__item">
              <Link href="/#about" className="nav__link">About Us</Link>
            </li>
            <li className="nav__item">
              <Link href="/#favorite" className="nav__link">Favorites</Link>
            </li>
            <li className="nav__item">
              <Link href="/#visit" className="nav__link">Visit Us</Link>
            </li>
            <li className="nav__item">
              <Link href="/order" className="nav__link">Order</Link>
            </li>
            <li className="nav__item">
              <Link href="/policy" className="nav__link">Policy</Link>
            </li>
            <li className="nav__item">
              <Link href="/allergens" className="nav__link">Allergens</Link>
            </li>
          </ul>
          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setOpen(false)}
          >
            <i className="ri-close-line" aria-hidden="true" />
          </div>
        </div>

        <div
          className="nav__toggle"
          id="nav-toggle"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <i className="ri-menu-line" aria-hidden="true" />
        </div>
      </nav>
    </header>
  );
}
