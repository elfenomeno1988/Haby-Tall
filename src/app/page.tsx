import { SlideTitle } from "@/components/sections/SlideTitle";
import { SlideStatement } from "@/components/sections/SlideStatement";
import { SlideStats } from "@/components/sections/SlideStats";
import { SlideMethod } from "@/components/sections/SlideMethod";
import { SlideOffers } from "@/components/sections/SlideOffers";
import { SlideCta } from "@/components/sections/SlideCta";
import { SnapContainer } from "@/components/sections/SnapContainer";

export default function Home() {
  return (
    <SnapContainer>
      <SlideTitle />
      <SlideStatement />
      <SlideStats />
      <SlideMethod />
      <SlideOffers />
      <SlideCta />
    </SnapContainer>
  );
}
