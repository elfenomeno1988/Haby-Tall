import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { references } from "@/data/references";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/ui/ScrollReveal";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Études de cas et résultats obtenus avec des marques en Afrique francophone.",
};

export default function Realisations() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <ScrollReveal>
            <div className="max-w-4xl">
              <div className="mb-5 h-[2px] w-12 bg-brand-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray-light">Réalisations</p>
              <h1 className="mt-4 font-heading text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.06]">
                Des résultats concrets,
                <br />des marques{" "}
                <span className="font-semibold text-brand-gray">transformées.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[18px] leading-[1.6] text-brand-gray">
                Chaque projet raconte une situation de marque : lancement, repositionnement, relance, structuration, visibilité, conversion ou montée en gamme.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══ */}
      {references.map((ref, i) => (
        <section key={i} className={`py-16 lg:py-24 ${i % 2 === 1 ? "bg-brand-cream/40" : ""}`}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
            {/* Header row */}
            <ScrollReveal>
              <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-green">{ref.sector}</span>
                    <span className="h-1 w-1 rounded-full bg-brand-border" />
                    <span className="font-heading text-[13px] text-brand-gray-light">Cas {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="font-heading text-[1.8rem] font-semibold lg:text-[2.4rem]">{ref.title}</h2>
                </div>
                <div className="flex gap-2">
                  {ref.tags.map((tag) => (
                    <span key={tag} className="rounded-sm border border-brand-green/15 px-3.5 py-1.5 text-[11px] font-bold text-brand-green">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* 4-column detail grid */}
            <Stagger className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Contexte", content: ref.context, accent: false },
                { label: "Enjeu", content: ref.challenge, accent: false },
                { label: "Intervention", content: ref.intervention, accent: false },
              ].map((col) => (
                <StaggerItem key={col.label}>
                  <div className="border-l-[3px] border-brand-green/10 pl-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-gray-light">{col.label}</p>
                    <p className="mt-4 text-[15px] leading-[1.6] text-brand-gray">{col.content}</p>
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem>
                <div className="border-l-[3px] border-brand-green pl-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-green">Résultats</p>
                  <ul className="mt-4 space-y-3">
                    {ref.results.map((result, j) => (
                      <li key={j} className="flex items-start gap-3 text-[15px] leading-[1.7] text-brand-anthracite">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-green" />
                        <span className="font-semibold">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>
      ))}

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden bg-brand-green py-20 lg:py-28">
        <Image
          src={assetPath("/brand/haby-tall-monogram-white.png")}
          alt=""
          width={500}
          height={700}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 w-[500px] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.015]"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <div className="mb-5 h-[2px] w-12 bg-brand-offwhite/25" />
                <h2 className="font-heading text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold text-brand-offwhite leading-[1.08]">
                  Votre marque pourrait{" "}
                  <span className="font-semibold text-brand-offwhite/40">être la prochaine.</span>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="lg:pl-16 lg:border-l lg:border-brand-offwhite/10">
                <p className="text-[18px] leading-[1.6] text-brand-offwhite/50">Discutons de votre enjeu lors d&apos;une session de cadrage.</p>
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
