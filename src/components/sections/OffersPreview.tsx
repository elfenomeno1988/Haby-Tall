import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { offers } from "@/data/offers";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/ui/ScrollReveal";

export function OffersPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        {/* ─── Heading row ─── */}
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 h-[2px] w-12 bg-brand-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray-light">
                Accompagnements
              </p>
              <h2 className="mt-4 font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.1]">
                Des offres pensées
                <br />
                <span className="font-semibold text-brand-gray">
                  pour chaque étape.
                </span>
              </h2>
            </div>
            <Link
              href="/offres"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-sm border-2 border-brand-anthracite/10 px-7 py-3.5 text-[13px] font-bold text-brand-anthracite transition-all hover:border-brand-green hover:text-brand-green"
            >
              Voir toutes les offres
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>
        </ScrollReveal>

        {/* ─── Offer cards grid ─── */}
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {offers.slice(0, 4).map((offer) => (
            <StaggerItem key={offer.slug}>
              <div className="group flex h-full flex-col justify-between border-l-[3px] border-brand-green/15 bg-brand-cream/40 p-8 transition-all hover:border-brand-green hover:bg-brand-cream/70 lg:p-10">
                <div>
                  {offer.tag && (
                    <span className="mb-5 inline-block rounded-sm bg-brand-green px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-brand-offwhite">
                      {offer.tag}
                    </span>
                  )}
                  <h3 className="font-heading text-[1.35rem] font-semibold leading-snug lg:text-[1.5rem]">
                    {offer.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-brand-gray">
                    {offer.promise}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-end border-t border-brand-border/40 pt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-green transition-colors group-hover:text-brand-green-light"
                  >
                    En savoir plus
                    <ArrowRight size={13} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
