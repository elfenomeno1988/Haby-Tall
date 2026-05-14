import { Hero } from "@/components/sections/Hero";
import { Situations } from "@/components/sections/Situations";
import { Method } from "@/components/sections/Method";
import { Offers } from "@/components/sections/Offers";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Situations />
      <Method />
      <Offers />
      <Cta />
    </>
  );
}
