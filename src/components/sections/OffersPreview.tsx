import Link from "next/link";
import Image from "next/image";
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
                <span className="font-normal italic text-brand-gray">
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
          {offers.slice(0, 6).map((offer, i) => (
            <StaggerItem
              key={offer.slug}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              {i === 0 ? (
                /* ─── Featured card — dark green, spans 2 columns ─── */
                <div className="group relative flex h-full flex-col justify-between overflow-hidden bg-brand-green p-8 transition-all lg:flex-row lg:items-center lg:gap-12 lg:p-12">
                  {/* Monogram watermark */}
                  <Image
                    src="/brand/haby-tall-monogram-white.png"
                    alt=""
                    width={120}
                    height={120}
                    className="pointer-events-none absolute right-8 top-1/2 h-28 w-28 -translate-y-1/2 select-none opacity-[0.06]"
                    aria-hidden="true"
                  />

                  <div className="relative flex-1">
                    {offer.tag && (
                      <span className="mb-5 inline-block rounded-sm bg-brand-offwhite/15 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-brand-offwhite">
                        {offer.tag}
                      </span>
                    )}
                    <h3 className="font-heading text-[1.6rem] font-semibold leading-snug text-brand-offwhite lg:text-[1.85rem]">
                      {offer.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.75] text-brand-offwhite/60">
                      {offer.promise}
                    </p>
                  </div>

                  <div className="relative mt-8 flex shrink-0 flex-col items-start gap-4 border-t border-brand-offwhite/10 pt-6 lg:mt-0 lg:items-end lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                    <span className="text-[17px] font-bold text-brand-offwhite">
                      {offer.price}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-sm bg-brand-offwhite px-7 py-3 text-[13px] font-bold text-brand-green transition-all hover:bg-brand-cream hover:scale-[1.02]"
                    >
                      En savoir plus
                      <ArrowRight size={13} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              ) : (
                /* ─── Regular card ─── */
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
                    <p className="mt-3 text-[15px] leading-[1.75] text-brand-gray">
                      {offer.promise}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-brand-border/40 pt-5">
                    <span className="text-[15px] font-bold text-brand-anthracite">
                      {offer.price}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-green transition-colors group-hover:text-brand-green-light"
                    >
                      En savoir plus
                      <ArrowRight size={13} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
