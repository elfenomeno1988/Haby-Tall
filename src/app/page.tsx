import { HeroHome } from "@/components/sections/HeroHome";
import { HeroOverlap } from "@/components/sections/HeroOverlap";
import { ConvictionSection } from "@/components/sections/ConvictionSection";
import { PersonasSection } from "@/components/sections/PersonasSection";
import { PullQuote } from "@/components/sections/PullQuote";
import { MethodSection } from "@/components/sections/MethodSection";
import { OffersPreview } from "@/components/sections/OffersPreview";
import { ReassuranceSection } from "@/components/sections/ReassuranceSection";
import { StatsMobile } from "@/components/sections/StatsMobile";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <HeroHome />
      <HeroOverlap />
      <ConvictionSection />
      <MethodSection />
      <PersonasSection />
      <PullQuote />
      <OffersPreview />
      <ReassuranceSection />
      <StatsMobile />
      <CtaFinal />
    </>
  );
}
