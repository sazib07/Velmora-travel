
import Link from "next/link";
import {
  ArrowUpRight,
  Mountain,
  Waves,
  Building2,
} from "lucide-react";

const experiences = [
  {
    title: "Private Island Escapes",
    description: "Slow mornings, turquoise waters and secluded stays.",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1100&q=85",
    href: "/tours?category=island",
  },
  {
    title: "Mountain Hideaways",
    description: "Find stillness among dramatic mountain landscapes.",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1100&q=85",
    href: "/tours?category=mountain",
  },
  {
    title: "Heritage & Culture",
    description: "Discover timeless cities and meaningful traditions.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1100&q=85",
    href: "/tours?category=culture",
  },
];

export default function ExperiencesSection() {
  return (
    <section className="bg-[#183b2d] py-20 text-white sm:py-28">
      <div className="container-luxury">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d8bd8f]">
            Travel your way
          </p>

          <h2 className="font-editorial text-4xl leading-tight sm:text-6xl">
            Not just places.
            <br />
            <span className="italic text-[#d8bd8f]">
              Extraordinary feelings.
            </span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {experiences.map((experience) => {
            const Icon = experience.icon;

            return (
              <Link
                href={experience.href}
                key={experience.title}
                className="group relative flex min-h-[390px] flex-col justify-end overflow-hidden bg-[#10271e] p-6 sm:min-h-[440px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${experience.image}")`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

                <div className="relative z-10">
                  <Icon className="mb-5 text-[#e3cda6]" size={25} />

                  <h3 className="font-editorial text-3xl">
                    {experience.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                    {experience.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#e3cda6]">
                    Explore experience
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
