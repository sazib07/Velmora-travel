
"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { tours } from "@/data/tours";
import TourCard from "@/components/tours/TourCard";

const categories = ["All", "Beach", "Adventure", "Luxury", "Culture"];

export default function ToursPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const matchesCategory =
        category === "All" || tour.category === category;

      const term = search.trim().toLowerCase();
      const matchesSearch =
        tour.title.toLowerCase().includes(term) ||
        tour.destination.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className="min-h-screen bg-[#0b0d0b] px-5 pb-24 pt-32 text-white sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-200">
          Curated experiences
        </p>

        <h1 className="mt-5 max-w-3xl text-5xl font-light leading-tight sm:text-7xl">
          Journeys beyond
          <span className="block text-white/45">the ordinary.</span>
        </h1>

        <p className="mt-6 max-w-xl leading-7 text-white/55">
          Thoughtfully curated escapes for travellers who want
          more than an ordinary holiday.
        </p>

        <div className="mt-10 flex max-w-xl items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-4">
          <Search size={19} className="text-white/45" />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search tours or destinations..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/35"
            aria-label="Search tours"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-5 py-3 text-sm transition ${
                category === item
                  ? "border-amber-200 bg-amber-200 text-black"
                  : "border-white/15 text-white/65 hover:border-white/40"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm text-white/50">
            {filteredTours.length} experiences found
          </p>
        </div>

        {filteredTours.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-white/10 p-12 text-center">
            <p className="text-lg">No matching journeys found.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-4 text-sm text-amber-200 underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
