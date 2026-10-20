
import {
  Compass,
  ShieldCheck,
  Sparkles,
  Headset,
} from "lucide-react";

const benefits = [
  {
    icon: Compass,
    title: "Thoughtfully Curated",
    description:
      "Every destination and experience is selected with care.",
  },
  {
    icon: ShieldCheck,
    title: "Travel With Confidence",
    description:
      "Clear booking information and transparent pricing.",
  },
  {
    icon: Sparkles,
    title: "Made for You",
    description:
      "Journeys shaped around your interests and travel style.",
  },
  {
    icon: Headset,
    title: "Here When You Need Us",
    description:
      "Helpful support throughout your travel planning journey.",
  },
];

export default function WhyVoyara() {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5">The Voyara difference</p>

            <h2 className="font-editorial text-4xl leading-tight sm:text-6xl">
              Travel well.
              <br />
              <span className="italic text-[#a78b5e]">
                Feel more.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#777b73]">
              We believe meaningful journeys begin long before
              you arrive. Discover thoughtful recommendations,
              inspiring stays and a simpler way to explore.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="border-t border-black/15 pt-6"
                >
                  <Icon
                    size={25}
                    strokeWidth={1.4}
                    className="mb-5 text-[#a78b5e]"
                  />

                  <h3 className="font-editorial text-2xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#777b73]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
