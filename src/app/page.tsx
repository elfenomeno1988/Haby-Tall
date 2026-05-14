import { HeroHome } from "@/components/sections/HeroHome";
import { ConvictionSection } from "@/components/sections/ConvictionSection";
import { PersonasSection } from "@/components/sections/PersonasSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { OffersPreview } from "@/components/sections/OffersPreview";
import { ReassuranceSection } from "@/components/sections/ReassuranceSection";
import { StatsMobile } from "@/components/sections/StatsMobile";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <HeroHome />
      <ConvictionSection />
      <MethodSection />
      <PersonasSection />
      <OffersPreview />
      <ReassuranceSection />
      <StatsMobile />
      <CtaFinal />
    </>
  );
}
