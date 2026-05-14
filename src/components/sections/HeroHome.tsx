import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { assetPath } from "@/lib/utils";

/**
 * HeroHome — Full-bleed green hero with split layout.
 * Uses viewport-height sizing, scroll reveals, animated counters,
 * and brand signature as a premium decorative accent.
 */
export function HeroHome() {
  return (
    <section className="relative flex min-h-[calc(100svh-72px)] items-center bg-brand-green overflow-hidden">
      {/* Decorative right panel wash */}
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full lg:block"
        style={{ width: "38%", background: "rgba(45,106,79,0.08)" }}
      />
      {/* Decorative vertical rule */}
      <div
        className="pointer-events-none absolute top-0 hidden h-full lg:block"
        style={{ left: "62%", width: "1px", background: "rgba(250,249,246,0.06)" }}
      />
      {/* Signature watermark — large, rotated, subtle */}
      <Image
        src={assetPath("/brand/haby-tall-signature-white.png")}
        alt=""
        width={600}
        height={200}
        className="pointer-events-none absolute -right-16 bottom-12 hidden w-[500px] -rotate-12 select-none opacity-[0.025] lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-16 lg:px-16 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px]">
          {/* ─── Left: Headline ─── */}
          <div className="min-w-0">
            <ScrollReveal delay={0.1}>
              <div className="mb-6 h-[2px] w-12 bg-brand-offwhite/25" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-offwhite/35">
                Brand, Marketing & Digital Growth Strategy
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <h1 className="mt-5 font-heading text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.06] text-brand-offwhite">
                Stratégie de marque,
                <br />
                communication 360
                <br />
                <span className="font-semibold text-brand-offwhite/50">
                  & croissance digitale
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="mt-6 max-w-[520px] text-[17px] leading-[1.6] text-brand-offwhite/55">
                J’aide les marques, PME, agences et porteurs de projets à
                clarifier leur positionnement, structurer leur communication
                et activer les bons leviers digitaux pour créer de la demande.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.55}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-sm bg-brand-offwhite px-9 py-[18px] text-[15px] font-bold text-brand-green transition-all hover:bg-brand-cream hover:scale-[1.02]"
                >
                  Réserver une session de cadrage
                  <ArrowRight size={17} strokeWidth={2.5} />
                </Link>
                <Link
                  href="/offres"
                  className="inline-flex items-center justify-center rounded-sm border border-brand-offwhite/20 px-9 py-[18px] text-[15px] font-medium text-brand-offwhite/80 transition-all hover:border-brand-offwhite/40 hover:bg-brand-offwhite/5"
                >
                  Découvrir les offres
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* ─── Right: Stats column with animated counters ─── */}
          <div className="hidden lg:flex lg:flex-col lg:justify-center lg:gap-10 lg:border-l lg:border-brand-offwhite/10 lg:pl-16">
            {[
              { value: 15, suffix: "+", label: "Années d'expérience" },
              { value: 50, suffix: "+", label: "Marques accompagnées" },
              { value: 360, suffix: "°", label: "Approche intégrée" },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={0.3 + i * 0.15}>
                <div>
                  <p className="font-heading text-[4.5rem] font-semibold leading-none text-brand-offwhite xl:text-[5.5rem]">
                    <AnimatedCounter value={s.value} suffix={s.suffix} duration={2.2} />
                  </p>
                  <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.15em] text-brand-offwhite/50">
                    {s.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
