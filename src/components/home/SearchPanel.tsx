
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  Users,
  Search,
} from "lucide-react";

export default function SearchPanel() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("2");

  const query = new URLSearchParams();

  if (destination.trim()) {
    query.set("destination", destination.trim());
  }

  if (date) {
    query.set("date", date);
  }

  query.set("travelers", travelers);

  const searchHref = `/destinations?${query.toString()}`;

  return (
    <section className="relative z-20 -mt-10">
      <div className="container-luxury">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = searchHref;
          }}
          className="grid gap-5 bg-white p-5 shadow-[0_15px_60px_rgba(0,0,0,0.08)] sm:grid-cols-2 sm:p-7 lg:grid-cols-[1.4fr_1fr_1fr_auto] lg:items-end"
        >
          <label className="block">
            <span className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#777b73]">
              <MapPin size={15} />
              Where to?
            </span>

            <input
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              placeholder="Explore a destination"
              className="w-full border-b border-black/15 bg-transparent pb-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#183b2d]"
            />
          </label>

          <label className="block">
            <span className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#777b73]">
              <CalendarDays size={15} />
              Travel date
            </span>

            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              min={new Date().toLocaleDateString("en-CA")}
              className="w-full border-b border-black/15 bg-transparent pb-3 text-sm outline-none focus:border-[#183b2d]"
            />
          </label>

          <label className="block">
            <span className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-black/60">
              <Users size={15} />
              Travelers
            </span>

            <select
              value={travelers}
              onChange={(event) => setTravelers(event.target.value)}
              className="w-full border-b border-black/15 bg-transparent pb-3 text-sm outline-none focus:border-[#183b2d]"
            >
              <option value="1">1 traveler</option>
              <option value="2">2 travelers</option>
              <option value="3">3 travelers</option>
              <option value="4">4 travelers</option>
              <option value="5">5+ travelers</option>
            </select>
          </label>

          <button
            type="submit"
            className="flex min-h-12 items-center justify-center gap-3 bg-[#183b2d] px-6 text-sm text-white transition hover:bg-[#10271e]"
          >
            <Search size={17} />
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
