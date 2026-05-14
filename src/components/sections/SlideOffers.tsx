"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

const featured = {
  title: "Session de cadrage",
  note: "60 min pour clarifier le besoin.",
  price: "100 000 FCFA",
};

const menu = [
  { title: "Diagnostic 360", price: "À partir de 650 000 FCFA" },
  { title: "Fondation de marque", price: "À partir de 1 000 000 FCFA" },
  { title: "Social Media Growth", price: "À partir de 500 000 FCFA" },
  { title: "Brand-to-Demand Sprint", price: "À partir de 3 000 000 FCFA" },
  { title: "Pilotage mensuel", price: "À partir de 650 000 FCFA/mois" },
];

export function SlideOffers() {
  return (
    <section className="flex min-h-svh snap-start items-center">
      <div className="container-editorial w-full py-20">
        <Reveal>
          <p className="mb-16 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted/50">
            Offres
          </p>
        </Reveal>

        {/* Featured */}
        <Reveal delay={0.08}>
          <div className="mb-14 border border-green/10 bg-green/[0.03] px-8 py-10 sm:px-12">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-green/40">
              Point de départ
            </span>
            <h3 className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight text-ink">
              {featured.title}
            </h3>
            <p className="mt-2 text-[14px] text-muted">{featured.note}</p>
            <p className="mt-4 text-[15px] font-semibold text-green">
              {featured.price}
            </p>
          </div>
        </Reveal>

        {/* Menu list */}
        <div>
          {menu.map((item, i) => (
            <Reveal key={item.title} delay={0.12 + i * 0.06}>
              <div className="flex items-baseline justify-between border-b border-rule/60 py-4">
                <span className="text-[15px] font-medium text-ink">
                  {item.title}
                </span>
                <span className="text-[13px] text-muted">{item.price}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-10">
            <Link
              href="/offres"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-green transition-colors hover:text-green-dark"
            >
              Voir toutes les offres
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
