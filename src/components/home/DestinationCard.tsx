
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { Destination } from "@/app/data/destinations";


export default function DestinationCard({
  destination,
}: {
  destination: Destination
  ;
}) {
  return (
    <article className="group">
      <Link
        href={`/destinations/${destination.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-[#e7e5dc]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url("${destination.image}")`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />

        <div className="absolute left-5 top-5 border border-white/40 bg-black/10 px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-white backdrop-blur-sm">
          {destination.category}
        </div>

        <div className="absolute bottom-5 left-5 right-5 text-white">
          <p className="mb-2 text-xs text-white/75">
            {destination.country}
          </p>

          <div className="flex items-end justify-between gap-3">
            <h3 className="font-editorial text-3xl sm:text-4xl">
              {destination.name}
            </h3>

            <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 transition group-hover:bg-white group-hover:text-[#183b2d]">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </Link>

      <div className="flex items-center justify-between gap-3 py-4">
        <div>
          <p className="text-xs text-[#777b73]">
            Starting from
          </p>
          <p className="mt-1 text-sm font-medium">
            ${destination.priceFrom.toLocaleString()}
            <span className="font-normal text-[#777b73]">
              {" "} / person
            </span>
          </p>
        </div>

        <div className="flex items-center gap-1 text-xs">
          <Star size={14} fill="#c5a572" stroke="#c5a572" />
          {destination.rating}
        </div>
      </div>
    </article>
  );
}
