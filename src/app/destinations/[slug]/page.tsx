import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import { destinations } from "@/data/destinations";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function DestinationDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const destination = destinations.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b0d0b] text-white">
      <section className="relative min-h-[75vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${destination.image}")`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0b] via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 sm:px-10 lg:px-16">
          <Link
            href="/destinations"
            className="mb-10 flex w-fit items-center gap-2 text-sm text-white/75 transition hover:text-amber-200"
          >
            <ArrowLeft size={17} />
            All destinations
          </Link>

          <div className="mb-5 flex items-center gap-2 text-sm text-amber-200">
            <MapPin size={17} />
            {destination.country}
          </div>

          <h1 className="max-w-4xl text-5xl font-light tracking-tight sm:text-7xl lg:text-8xl">
            {destination.name}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            {destination.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`/trip-planner?destination=${encodeURIComponent(destination.slug)}`}
              className="inline-flex items-center gap-3 rounded-full bg-amber-200 px-6 py-4 text-sm font-medium text-black transition hover:bg-amber-100"
            >
              Plan your journey
              <ArrowUpRight size={18} />
            </a>

            <span className="rounded-full border border-white/25 bg-black/20 px-5 py-4 text-sm backdrop-blur-md">
              {destination.category}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_320px] lg:px-16 lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
            The destination
          </p>

          <h2 className="mt-5 text-3xl font-light sm:text-4xl">
            Discover somewhere extraordinary.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-white/60">
            {destination.description} Explore the local culture,
            discover remarkable landscapes, and create a journey
            that feels entirely your own.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Clock className="mb-4 text-amber-200" size={22} />
              <p className="text-sm text-white/50">Recommended stay</p>
              <p className="mt-2 text-xl">5–7 days</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Star className="mb-4 text-amber-200" size={22} />
              <p className="text-sm text-white/50">Travel style</p>
              <p className="mt-2 text-xl">Curated escapes</p>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <p className="text-xs uppercase tracking-[0.25em] text-white/45">
            Your next escape
          </p>

          <h3 className="mt-4 text-2xl font-light">
            Make it unforgettable.
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/55">
            Start planning your trip and build an itinerary around
            the experiences you love.
          </p>

          <Link
            href={`/trip-planner?destination=${encodeURIComponent(destination.slug)}`}
            className="mt-7 flex items-center justify-between rounded-full bg-white px-5 py-4 text-sm font-medium text-black transition hover:bg-amber-200"
          >
            Start planning
            <ArrowUpRight size={18} />
          </Link>
        </aside>
      </section>
    </main>
  );
}