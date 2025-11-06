"use client";

import { useState } from "react";
import Link from "next/link";
import { IconMenu3, IconX } from "@tabler/icons-react";
import BeautyTempleLogo from "@/components/ui/BeautyTempleLogo";

const BOOKING_URL =
  "https://squareup.com/appointments/book/REPLACE_WITH_YOUR_SQUARE_LINK";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#rent", label: "Rent a Space" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 z-50 border-b border-grey-10">
        <div className="max-w-[1400px] mx-auto py-3 px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center">
            <div className="font-bold text-black/70">BEAUTY TEMPLE</div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-text text-sm text-grey-80 hover:text-primary-80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={BOOKING_URL}
              className="bg-primary-80 text-white text-sm px-5 py-2.5 rounded-full font-text font-medium hover:bg-primary-60 active:bg-primary-100 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden z-50 p-2 hover:bg-grey-10 rounded-lg transition-colors"
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-label="Toggle mobile menu"
          >
            {isMobileOpen ? (
              <IconX size={28} stroke={2} className="text-grey-100" />
            ) : (
              <IconMenu3 size={28} stroke={2} className="text-grey-100" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg z-40 px-6 pt-24 pb-8 md:hidden">
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="font-text text-lg text-grey-80 hover:text-primary-80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={BOOKING_URL}
              onClick={() => setIsMobileOpen(false)}
              className="bg-primary-80 text-white text-base px-8 py-3 rounded-full font-text font-medium hover:bg-primary-60 transition-all duration-300 shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
