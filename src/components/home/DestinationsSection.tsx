
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/app/data/destinations";
import DestinationCard from "./DestinationCard";

export default function DestinationsSection() {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Curated for the curious</p>

            <h2 className="font-editorial text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Places that move
              <br />
              <span className="italic text-[#a78b5e]">
                your soul.
              </span>
            </h2>
          </div>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-3 text-sm"
          >
            Explore all destinations
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
