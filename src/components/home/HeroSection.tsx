
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#10271e] sm:min-h-[720px] lg:min-h-[760px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
           "url('/images/hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#101d17]/85 via-[#101d17]/45 to-[#101d17]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101d17]/45 via-transparent to-black/10" />

      <div className="container-luxury relative z-10 py-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#e3cda6] sm:text-xs">
            <span className="h-px w-9 bg-[#c5a572]" />
            The art of meaningful travel
          </p>

          <h1 className="font-editorial text-5xl leading-[1.08] tracking-[-1.5px] sm:text-7xl lg:text-[92px]">
            The world is
            <br />
            <span className="italic text-[#e1c89d]">
              yours to discover.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
            Extraordinary places. Thoughtfully curated stays.
            Journeys that stay with you long after you return.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/destinations"
              className="inline-flex min-h-14 items-center gap-5 bg-[#e3cda6] px-6 text-sm font-medium text-[#182b21] transition hover:bg-white"
            >
              Discover destinations
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/trip-planner"
              className="inline-flex min-h-14 items-center border border-white/40 px-6 text-sm transition hover:bg-white/10"
            >
              Plan your journey
            </Link>
          </div>
        </motion.div>

        <div className="absolute bottom-8 right-0 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/70 md:flex">
          <ArrowDown size={15} />
          Scroll to explore
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#c5a572]" />
    </section>
  );
}
