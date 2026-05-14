import { HeroHome } from "@/components/sections/HeroHome";
import { PersonasSection } from "@/components/sections/PersonasSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { OffersPreview } from "@/components/sections/OffersPreview";
import { StatsMobile } from "@/components/sections/StatsMobile";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <HeroHome />
      <PersonasSection />
      <MethodSection />
      <OffersPreview />
      <StatsMobile />
      <CtaFinal />
    </>
  );
}
