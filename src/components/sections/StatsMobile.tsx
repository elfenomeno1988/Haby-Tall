import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Stagger, StaggerItem } from "@/components/ui/ScrollReveal";

export function StatsMobile() {
  return (
    <section className="bg-brand-cream/60 py-16 lg:hidden">
      <div className="mx-auto max-w-[1400px] px-6">
        <Stagger className="grid gap-12 sm:grid-cols-3" stagger={0.15}>
          {[
            { value: 15, suffix: "+", label: "Années d'expérience", sub: "en stratégie de marque, marketing et croissance digitale" },
            { value: 50, suffix: "+", label: "Marques accompagnées", sub: "en Afrique francophone et au-delà" },
            { value: 360, suffix: "°", label: "Approche intégrée", sub: "de la clarté stratégique à l'activation des leviers" },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <div>
                <p className="font-heading text-[4rem] font-semibold leading-none tracking-tight text-brand-green sm:text-[5rem]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                </p>
                <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.15em] text-brand-anthracite">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-brand-gray">
                  {stat.sub}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
