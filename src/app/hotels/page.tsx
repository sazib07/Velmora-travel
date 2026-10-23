import type { Metadata } from "next";
import { getHotels, getDestinations } from "@/lib/content";
import HotelCard from "@/components/hotels/HotelCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Hotels" };

export default async function HotelsPage() {
  const [hotels, destinations] = await Promise.all([getHotels(), getDestinations()]);

  const label = (slug: string) => {
    const d = destinations.find((x) => x.slug === slug);
    return d ? `${d.name}, ${d.country}` : "";
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-40">
      <SectionHeading title="Hotels" description="Properties we have stayed in and would book for ourselves." />
      <div className="mt-14 grid gap-4">
        {hotels.map((h) => (
          <HotelCard key={h.slug} hotel={h} destinationLabel={label(h.destinationSlug)} />
        ))}
      </div>
    </div>
  );
}