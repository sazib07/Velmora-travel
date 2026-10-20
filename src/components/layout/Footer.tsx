
import Link from "next/link";
import {
  Compass,
  Instagram,
  Facebook,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  Explore: [
    { label: "Destinations", href: "/destinations" },
    { label: "Tour packages", href: "/tours" },
    { label: "Hotels", href: "/hotels" },
    { label: "Trip planner", href: "/trip-planner" },
  ],
  Account: [
    { label: "Sign in", href: "/login" },
    { label: "My bookings", href: "/bookings" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "My profile", href: "/profile" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#10271e] text-white">
      <div className="container-luxury py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Compass size={26} strokeWidth={1.4} />
              <span className="font-editorial text-3xl">
                voyara<span className="text-[#c5a572]">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              Discover extraordinary places and create journeys
              that mean something.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 transition hover:text-[#e3cda6]"
              >
                <Instagram size={19} />
              </a>

              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 transition hover:text-[#e3cda6]"
              >
                <Facebook size={19} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#e3cda6]">
                {heading}
              </h3>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#e3cda6]">
              Get inspired
            </h3>

            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
            >
              Find your next escape
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Voyara. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
