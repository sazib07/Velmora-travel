
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Compass,
} from "lucide-react";

const links = [
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/tours" },
  { label: "Hotels", href: "/hotels" },
  { label: "Plan a Trip", href: "/trip-planner" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#f8f7f2]">
      <div className="container-luxury">
        <div className="flex h-[82px] items-center justify-between border-b border-black/10">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Voyara homepage"
          >
            <Compass size={27} strokeWidth={1.4} />
            <span className="font-editorial text-[28px] tracking-[-1.5px]">
              Velmora<span className="text-[#173D35]">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-[#4c554d] transition hover:text-[#b69762]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <Link
              href="/login"
              className="text-sm hover:text-[#b69762]"
            >
              Sign in
            </Link>

            <Link
              href="/destinations"
              className="flex h-11 items-center gap-2 bg-[#183b4d] px-5 text-sm text-white transition hover:bg-[#10271e]"
            >
              Explore now
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <button
            type="button"
            className="p-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="absolute left-0 right-0 top-full border-b border-black/10 bg-[#f8f7f2] p-6 shadow-lg lg:hidden">
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="border-t border-black/10 pt-4 text-sm"
              >
                Sign in
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
