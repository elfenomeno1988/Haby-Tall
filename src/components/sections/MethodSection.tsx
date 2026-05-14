import Image from "next/image";
import { Search, Layers, Zap, BarChart3 } from "lucide-react";
import { methodSteps } from "@/data/method-steps";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/ui/ScrollReveal";
import { assetPath } from "@/lib/utils";

const icons = [Search, Layers, Zap, BarChart3];

export function MethodSection() {
  return (
    <section className="relative bg-brand-green py-20 lg:py-28 overflow-hidden">
      {/* Monogram watermark — large, centered, ghosted */}
      <Image
        src={assetPath("/brand/haby-tall-monogram-white.png")}
        alt=""
        width={800}
        height={800}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[600px] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.015]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-16">
        {/* ─── Section heading ─── */}
        <ScrollReveal>
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 h-[2px] w-12 bg-brand-offwhite/25" />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-offwhite/35">
              Méthode
            </p>
            <h2 className="mt-4 font-heading text-[clamp(2.5rem,5vw,4.2rem)] font-semibold leading-[1.08] text-brand-offwhite">
              Clarifier. Structurer.
              <br />
              Activer.{" "}
              <span className="font-semibold text-brand-offwhite/40">
                Piloter.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.6] text-brand-offwhite/45">
              Une approche structurée en 4 étapes pour transformer la vision en
              croissance mesurable.
            </p>
          </div>
        </ScrollReveal>

        {/* ─── 2×2 grid ─── */}
        <Stagger className="grid gap-6 md:grid-cols-2" stagger={0.15}>
          {methodSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={step.number}>
                <article className="group relative overflow-hidden rounded-sm border border-brand-offwhite/[0.07] bg-brand-offwhite/[0.025] p-10 transition-all hover:bg-brand-offwhite/[0.05] lg:p-14">
                  {/* Ghost number */}
                  <span className="pointer-events-none absolute -right-2 -top-6 select-none font-heading text-[10rem] font-bold leading-none text-brand-offwhite/[0.03] lg:text-[12rem]">
                    {step.number}
                  </span>
                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-brand-offwhite/[0.12] bg-brand-offwhite/[0.04]">
                        <Icon size={20} className="text-brand-offwhite/60" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-offwhite/25">
                        Étape {step.number}
                      </span>
                    </div>
                    <h3 className="mt-8 font-heading text-[2rem] font-semibold text-brand-offwhite lg:text-[2.4rem]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] font-medium text-brand-offwhite/35">
                      {step.tagline}
                    </p>
                    <p className="mt-6 text-[15px] leading-[1.6] text-brand-offwhite/45">
                      {step.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
