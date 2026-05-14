import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ConvictionSection() {
  return (
    <section className="bg-brand-offwhite py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[420px_1fr] lg:px-16">
        <ScrollReveal>
          <div>
            <div className="mb-5 h-[2px] w-12 bg-brand-green" />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray-light">
              Conviction
            </p>
            <h2 className="mt-4 font-heading text-[clamp(2.1rem,4vw,3.4rem)] font-bold leading-[1.1]">
              Une marque ne manque pas toujours de visibilité.
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="space-y-5 text-[17px] leading-[1.65] text-brand-gray">
            <p>
              Souvent, elle manque de clarté. De cohérence. D’un discours
              aligné avec sa vraie valeur. D’un système capable de relier la
              marque, les contenus, les canaux, les messages et les indicateurs.
            </p>
            <p>
              La visibilité est utile. Mais sans clarté, elle devient du bruit.
            </p>
            <div className="mt-8 border-l-[3px] border-brand-green bg-brand-cream/50 p-7">
              <p className="text-[18px] font-semibold leading-[1.55] text-brand-anthracite">
                Stratégie pour clarifier. Digital pour activer. Production
                pour matérialiser. Réputation pour protéger. Formation pour
                incarner. Pilotage pour faire grandir.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
