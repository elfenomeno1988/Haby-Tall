import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { offers } from "@/data/offers";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Offers() {
  return (
    <section className="border-t border-rule py-20 lg:py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="section-label">03</span>
            <span className="h-px flex-1 bg-rule" />
          </div>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-[500px] font-heading text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.08]">
              Des offres pensées pour chaque étape
            </h2>
            <Link
              href="/offres"
              className="inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-green transition-colors hover:text-green-light"
            >
              Toutes les offres
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </Reveal>

        {/* Featured offer */}
        <Reveal delay={0.15} className="mt-12">
          <div className="relative overflow-hidden bg-green p-8 lg:p-12">
            <Image
              src="/brand/haby-tall-signature-white.png"
              alt=""
              width={400}
              height={140}
              className="pointer-events-none absolute right-0 top-1/2 w-[300px] -translate-y-1/2 translate-x-1/4 select-none opacity-[0.04]"
              aria-hidden="true"
            />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                {offers[0].tag && (
                  <span className="mb-4 inline-block border border-paper/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-paper/70">
                    {offers[0].tag}
                  </span>
                )}
                <h3 className="font-heading text-[1.5rem] font-semibold text-paper lg:text-[1.75rem]">
                  {offers[0].title}
                </h3>
                <p className="mt-2 max-w-[500px] text-[15px] leading-[1.7] text-paper/55">
                  {offers[0].promise}
                </p>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-heading text-[1.1rem] font-semibold text-paper">
                  {offers[0].price}
                </span>
                <Link
                  href="/contact"
                  className="bg-paper px-6 py-2.5 text-[13px] font-semibold text-green transition-colors hover:bg-surface"
                >
                  En savoir plus &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Offer list — menu style */}
        <Stagger className="mt-1" stagger={0.05}>
          {offers.slice(1, 7).map((offer) => (
            <StaggerItem key={offer.slug}>
              <div className="group grid items-center gap-3 border-b border-rule py-5 transition-colors hover:bg-surface sm:grid-cols-[1fr_auto_auto] lg:py-6">
                <div>
                  <h3 className="text-[15px] font-semibold text-ink lg:text-[16px]">
                    {offer.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-muted">
                    {offer.promise}
                  </p>
                </div>
                <span className="text-[14px] font-semibold text-ink sm:text-right">
                  {offer.price}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-green opacity-0 transition-all group-hover:opacity-100"
                >
                  Détails <ArrowRight size={11} strokeWidth={2.5} />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
