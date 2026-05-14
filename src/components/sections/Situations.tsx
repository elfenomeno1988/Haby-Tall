import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { personas } from "@/data/personas";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Situations() {
  return (
    <section className="border-t border-rule py-20 lg:py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="section-label">01</span>
            <span className="h-px flex-1 bg-rule" />
          </div>
          <h2 className="mt-6 max-w-[600px] font-heading text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.08]">
            Chaque situation
            <br />
            a sa réponse stratégique
          </h2>
        </Reveal>

        <Stagger className="mt-12 lg:mt-16" stagger={0.06}>
          {personas.map((p, i) => (
            <StaggerItem key={i}>
              <div className="group grid items-center gap-4 border-b border-rule py-6 transition-colors hover:bg-surface sm:grid-cols-[1fr_auto] lg:gap-8 lg:py-8">
                <div className="sm:pr-8">
                  <p className="text-[16px] font-semibold leading-snug text-ink lg:text-[17px]">
                    {p.situation}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    &ldquo;{p.insight}&rdquo;
                  </p>
                </div>
                <Link
                  href={p.href}
                  className="inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-green transition-colors hover:text-green-light"
                >
                  {p.cta}
                  <ArrowRight
                    size={13}
                    strokeWidth={2.5}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
