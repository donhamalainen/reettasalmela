// import { PortableText } from "next-sanity";

import HomeHeroImage from "@/components/homeHeroImage";
import HomeParagraph from "@/components/homeParagraph";
import { FlowerSvg } from "@/components/Svg/flowerSvg";

export default function Home() {
  return (
    <main
      aria-description="This is Reetta's portfolio homepage"
      className="min-h-dvh max-w-container mx-auto p-2 md:p-5"
    >
      <section className="h-full relative">
        <div className="relative w-full h-full rounded-xl">
          <HomeHeroImage />

          <div className="md:absolute md:bottom-0 md:left-0 md:right-0 w-full bg-background flex flex-row justify-between items-center">
            <h1 className="font-barbra-bold uppercase text-title text-popColor whitespace-nowrap">
              Aidosti raikasta.
            </h1>
            <FlowerSvg
              spinning
              colors={{
                gradientStart: "#9ebc8a",
                gradientEnd: "#6e8c5a",
              }}
              className="hidden md:block size-[clamp(2.125rem,3.036vw+1.518rem,4.25rem)]"
            />
          </div>
        </div>
        <HomeParagraph />
      </section>
    </main>
  );
}
