
"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { destinations } from "@/app/data/destinations";
import DestinationCard from "@/components/home/DestinationCard";

const categories = [
  "All",
  "Island Escape",
  "Mountain Retreat",
  "Coastal Luxury",
  "Cultural Journey",
];

export default function DestinationsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredDestinations = useMemo(() => {
    const term = search.trim().toLowerCase();

    return destinations.filter((destination) => {
      const matchesSearch =
        destination.name.toLowerCase().includes(term) ||
        destination.country.toLowerCase().includes(term);

      const matchesCategory =
        category === "All" ||
        destination.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <>
      <section className="bg-[#183b2d] py-20 text-white sm:py-28">
        <div className="container-luxury">
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#e3cda6]">
            Find your somewhere
          </p>

          <h1 className="font-editorial text-5xl sm:text-7xl">
            The world,
            <br />
            <span className="italic text-[#e3cda6]">
              beautifully explored.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white/70">
            Discover extraordinary destinations for your next
            unforgettable journey.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <label className="flex min-h-12 items-center gap-3 border border-black/15 bg-white px-4 lg:w-[380px]">
              <Search size={18} className="text-[#777b73]" />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search destinations or countries"
                className="w-full bg-transparent text-sm outline-none"
              />
            </label>

            <div className="flex items-center gap-3">
              <SlidersHorizontal
                size={17}
                className="text-[#777b73]"
              />

              <label className="sr-only" htmlFor="destination-category">
                Filter by category
              </label>

              <select
                id="destination-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="min-h-12 border border-black/15 bg-white px-4 text-sm outline-none"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="mb-8 text-sm text-[#777b73]">
            {filteredDestinations.length} destinations found
          </p>

          {filteredDestinations.length > 0 ? (
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h2 className="font-editorial text-3xl">
                No destinations found
              </h2>

              <p className="mt-3 text-sm text-[#777b73]">
                Try another name or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="luxury-button mt-6"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
