import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import SearchPanel from "@/components/home/SearchPanel";
import DestinationsSection from "@/components/home/DestinationsSection";
import ExperiencesSection from "@/components/home/ExperiencesSection";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className=" ">
      <main className=" w-full ">
           <>
      <HeroSection />
      <SearchPanel />
      <DestinationsSection />
      <ExperiencesSection />
      {/* <Why /> */}
      <Newsletter />
    </>
      </main>
    </div>
  );
}
