import { reassuranceItems } from "@/data/site-content";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/ui/ScrollReveal";

export function ReassuranceSection() {
  return (
    <section className="bg-brand-cream/50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl">
            <div className="mb-5 h-[2px] w-12 bg-brand-green" />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray-light">
              Réassurance
            </p>
            <h2 className="mt-4 font-heading text-[clamp(2.1rem,4vw,3.4rem)] font-bold leading-[1.1]">
              Un cadre clair pour décider et avancer.
            </h2>
          </div>
        </ScrollReveal>
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
          {reassuranceItems.map(([title, text]) => (
            <StaggerItem key={title}>
              <article className="h-full rounded-sm bg-brand-offwhite p-7">
                <h3 className="font-heading text-[1.1rem] font-bold text-brand-green">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-brand-gray">{text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
