import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { offers, offerFamilies } from "@/data/offers";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Offres",
  description: "Découvrez les accompagnements stratégiques de Haby TALL.",
};

export default function OffresPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="container-editorial pb-16 lg:pb-24">
        <Reveal>
          <span className="section-label">Offres</span>
          <h1 className="mt-6 max-w-[700px] font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05]">
            Des offres pensées
            <br />
            pour chaque étape
          </h1>
          <p className="mt-6 max-w-[500px] text-[16px] leading-[1.75] text-muted">
            Du diagnostic initial au pilotage stratégique continu, chaque
            accompagnement est conçu pour répondre à un enjeu précis.
          </p>
        </Reveal>
      </section>

      <div className="border-t border-rule" />

      {/* Offers by family */}
      {offerFamilies.map((family, fi) => {
        const familyOffers = offers.filter((o) => o.family === family.id);
        if (familyOffers.length === 0) return null;
        return (
          <section key={family.id} className="border-b border-rule py-14 lg:py-20">
            <div className="container-editorial">
              <Reveal>
                <div className="flex items-baseline gap-4">
                  <span className="section-label">
                    {String(fi + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-rule" />
                </div>
                <h2 className="mt-4 font-heading text-[1.5rem] font-semibold lg:text-[1.75rem]">
                  {family.title}
                </h2>
                <p className="mt-2 text-[14px] text-muted">
                  {family.description}
                </p>
              </Reveal>

              <Stagger className="mt-8" stagger={0.06}>
                {familyOffers.map((offer) => (
                  <StaggerItem key={offer.slug}>
                    <div className="group grid items-center gap-3 border-b border-rule/50 py-5 sm:grid-cols-[1fr_auto] lg:py-6">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-[15px] font-semibold text-ink lg:text-[16px]">
                            {offer.title}
                          </h3>
                          {offer.tag && (
                            <span className="bg-green px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-paper">
                              {offer.tag}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[13px] text-muted">
                          {offer.promise}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[14px] font-semibold text-ink">
                          {offer.price}
                        </span>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-[12px] font-semibold text-green"
                        >
                          Détails <ArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="container-editorial flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[400px] text-[16px] leading-relaxed text-muted">
            Besoin d&apos;aide pour choisir ? Commencez par une session
            de cadrage.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-green px-7 py-3.5 text-[14px] font-semibold text-paper hover:bg-green-light"
          >
            Réserver un cadrage <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
