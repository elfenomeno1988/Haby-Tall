import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { offers, offerFamilies } from "@/data/offers";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/ui/ScrollReveal";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Offres",
  description: "Accompagnements en stratégie de marque, marketing digital et croissance.",
};

export default function Offres() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <ScrollReveal>
            <div className="max-w-4xl">
              <div className="mb-5 h-[2px] w-12 bg-brand-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray-light">Accompagnements</p>
              <h1 className="mt-4 font-heading text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.06]">
                Des offres structurées
                <br />pour chaque étape{" "}
                <span className="font-semibold text-brand-gray">de votre croissance.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[18px] leading-[1.6] text-brand-gray">
                Choisissez le bon point d&apos;entrée selon votre niveau de maturité.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ OFFER FAMILIES ═══ */}
      {offerFamilies.map((family, fi) => {
        const familyOffers = offers.filter((o) => o.family === family.id);
        const isAlt = fi % 2 === 1;
        return (
          <section key={family.id} className={`py-16 lg:py-24 ${isAlt ? "bg-brand-cream/40" : ""}`}>
            <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
              <ScrollReveal>
                <div className="mb-10 flex items-end gap-6">
                  <span className="font-heading text-[5rem] font-semibold leading-none text-brand-green/[0.06] lg:text-[6rem]">
                    {String(fi + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-heading text-[1.8rem] font-semibold leading-snug lg:text-[2.2rem]">{family.title}</h2>
                    <p className="mt-2 text-[16px] leading-relaxed text-brand-gray">{family.description}</p>
                  </div>
                </div>
              </ScrollReveal>
              <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {familyOffers.map((offer) => (
                  <StaggerItem key={offer.slug}>
                    <div className="group flex flex-col justify-between border-l-[3px] border-brand-green/15 bg-brand-offwhite p-8 transition-all hover:border-brand-green lg:p-10">
                      <div>
                        {offer.tag && (
                          <span className="mb-5 inline-block rounded-sm bg-brand-green px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-brand-offwhite">{offer.tag}</span>
                        )}
                        <h3 className="font-heading text-[1.35rem] font-semibold leading-snug lg:text-[1.5rem]">{offer.title}</h3>
                        <p className="mt-3 text-[15px] leading-[1.6] text-brand-gray">{offer.promise}</p>
                      </div>
                      <div className="mt-8 flex items-center justify-end border-t border-brand-border/40 pt-5">
                        <Link href="/contact" className="inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-green group-hover:text-brand-green-light">
                          Demander <ArrowRight size={13} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
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

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden bg-brand-green py-20 lg:py-28">
        <Image
          src={assetPath("/brand/haby-tall-signature-white.png")}
          alt=""
          width={400}
          height={400}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-[400px] rotate-12 select-none opacity-[0.025]"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <div className="mb-5 h-[2px] w-12 bg-brand-offwhite/25" />
                <h2 className="font-heading text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold text-brand-offwhite leading-[1.08]">
                  Vous ne savez pas{" "}
                  <span className="font-semibold text-brand-offwhite/40">par où commencer ?</span>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="lg:pl-16 lg:border-l lg:border-brand-offwhite/10">
                <p className="text-[18px] leading-[1.6] text-brand-offwhite/50">
                  Commencez par une session de cadrage de 60 minutes.
                </p>
                <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-sm bg-brand-offwhite px-9 py-[18px] text-[15px] font-bold text-brand-green transition-colors hover:bg-brand-cream">
                  Réserver un cadrage <ArrowRight size={17} strokeWidth={2.5} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
