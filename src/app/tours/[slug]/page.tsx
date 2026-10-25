import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tours } from "@/data/tours";
import { getTour, getDestination } from "@/lib/content";
import SafeImage from "@/components/ui/SafeImage";
import Rating from "@/components/ui/Rating";
import TourBookingPanel from "@/components/tours/TourBookingPanel";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: (await getTour(slug))?.title ?? "Tour" };
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params;
  const tour = await getTour(slug);
  if (!tour) notFound();
  const destination = await getDestination(tour.destinationSlug);

  return (
    <>
      <section className="relative isolate flex min-h-[60svh] items-end" style={{ background: tour.tone }}>
        <SafeImage src={tour.image} alt={tour.title} priority />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-ink/30 to-ink/20" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14">
          <p className="text-sand/80">
            {destination?.name}, {tour.days} days
          </p>
          <h1 className="font-display text-6xl font-light md:text-7xl">{tour.title}</h1>
          <div className="mt-4">
            <Rating value={tour.rating} />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <p className="max-w-prose font-display text-2xl font-light leading-relaxed">{tour.summary}</p>

          <h2 className="mt-16 font-display text-3xl">Included</h2>
          <ul className="mt-5 grid gap-2 text-mist sm:grid-cols-2">
            {tour.includes.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>

          <h2 className="mt-16 font-display text-3xl">Itinerary</h2>
          <ol className="mt-6 divide-y divide-brass/20 border-y border-brass/20">
            {tour.itinerary.map((d) => (
              <li key={d.day} className="grid gap-2 py-6 sm:grid-cols-[7rem_1fr]">
                <span className="text-sm text-brass">Day {d.day}</span>
                <div>
                  <h3 className="font-display text-2xl">{d.title}</h3>
                  <p className="mt-1 text-mist">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <TourBookingPanel tour={tour} />
      </div>
    </>
  );
}