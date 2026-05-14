import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { references } from "@/data/references";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Références",
  description: "Projets et marques accompagnées par Haby TALL.",
};

export default function ReferencesPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="container-editorial pb-16 lg:pb-24">
        <Reveal>
          <span className="section-label">Références</span>
          <h1 className="mt-6 max-w-[700px] font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05]">
            Marques et projets
            <br />
            accompagnés
          </h1>
        </Reveal>
      </section>

      <div className="border-t border-rule" />

      {/* Cases */}
      <section className="container-editorial py-14 lg:py-20">
        <Stagger stagger={0.08}>
          {references.map((ref, i) => (
            <StaggerItem key={i}>
              <div className="grid gap-6 border-b border-rule py-10 lg:grid-cols-[200px_1fr_200px] lg:items-start lg:py-12">
                <div>
                  <span className="section-label">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-heading text-[1.2rem] font-semibold">
                    {ref.title}
                  </h3>
                  <p className="mt-1 text-[12px] text-faint">
                    {ref.sector}
                  </p>
                </div>
                <div>
                  <p className="text-[15px] leading-[1.75] text-muted">
                    {ref.context}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 lg:justify-end">
                  {ref.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-rule px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="border-t border-rule bg-surface py-16 lg:py-20">
        <div className="container-editorial flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[400px] text-[16px] leading-relaxed text-muted">
            Envie de voir ce qu&apos;on pourrait construire ensemble ?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-green px-7 py-3.5 text-[14px] font-semibold text-paper hover:bg-green-light"
          >
            Discutons <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
