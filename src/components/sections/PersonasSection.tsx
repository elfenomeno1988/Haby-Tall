import Link from "next/link";
import { ArrowRight, Compass, Target, TrendingUp, Briefcase, Layers } from "lucide-react";
import { personas } from "@/data/personas";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/ui/ScrollReveal";

const icons = [Compass, Target, TrendingUp, Briefcase, Layers];

export function PersonasSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[380px_1fr] xl:grid-cols-[440px_1fr]">
          {/* ─── Sticky left heading ─── */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ScrollReveal variant="slide-left">
              <div className="mb-5 h-[2px] w-12 bg-brand-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray-light">
                Vous vous reconnaissez ?
              </p>
              <h2 className="mt-4 font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.1]">
                Chaque situation
                <br />
                a sa réponse{" "}
                <span className="font-normal italic text-brand-gray">
                  stratégique.
                </span>
              </h2>
              <p className="mt-4 text-[17px] leading-[1.75] text-brand-gray">
                Identifiez votre enjeu. Trouvez l&apos;accompagnement
                qui y répond.
              </p>
            </ScrollReveal>
          </div>

          {/* ─── Cards stack ─── */}
          <Stagger className="space-y-4" stagger={0.1}>
            {personas.map((p, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem key={i}>
                  <div className="group grid items-center gap-6 rounded-sm border border-brand-border/50 px-8 py-7 transition-all hover:border-brand-green/20 hover:bg-brand-cream/30 sm:grid-cols-[56px_1fr_auto] lg:px-10 lg:py-8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-brand-green/[0.06]">
                      <Icon size={24} className="text-brand-green" />
                    </div>
                    <div>
                      <p className="text-[17px] font-semibold leading-snug text-brand-anthracite">
                        {p.situation}
                      </p>
                      <p className="mt-2 text-[15px] leading-relaxed text-brand-gray italic">
                        &ldquo;{p.insight}&rdquo;
                      </p>
                    </div>
                    <Link
                      href={p.href}
                      className="inline-flex shrink-0 items-center gap-2 self-center rounded-sm bg-brand-green/[0.06] px-6 py-3 text-[13px] font-bold text-brand-green transition-all hover:bg-brand-green hover:text-brand-offwhite"
                    >
                      {p.cta}
                      <ArrowRight size={14} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
