import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "A propos",
  description: "Haby TALL — Brand, Marketing & Digital Growth Strategist.",
};

export default function AProposPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="container-editorial pb-16 lg:pb-24">
        <Reveal>
          <span className="section-label">A propos</span>
          <h1 className="mt-6 max-w-[700px] font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05]">
            Stratégie, clarté
            <br />
            et exécution
          </h1>
        </Reveal>
      </section>

      <div className="border-t border-rule" />

      {/* Story */}
      <section className="container-editorial py-16 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1px_1fr]">
          <Reveal>
            <div className="relative">
              <Image
                src="/brand/haby-tall-monogram-green.png"
                alt="Haby TALL"
                width={120}
                height={120}
                className="h-28 w-28 opacity-10"
              />
              <p className="mt-8 text-[16px] leading-[1.8] text-muted">
                Avec plus de 15 ans d&apos;expérience en stratégie de marque,
                marketing et croissance digitale, j&apos;accompagne les
                entreprises et les dirigeants dans la structuration de leur
                positionnement, la clarification de leur discours et
                l&apos;activation des bons leviers de croissance.
              </p>
              <p className="mt-6 text-[16px] leading-[1.8] text-muted">
                Mon approche est à la fois stratégique et opérationnelle :
                je ne me contente pas de recommander, je structure, je cadre
                et j&apos;accompagne la mise en oeuvre.
              </p>
            </div>
          </Reveal>

          <div className="hidden bg-rule lg:block" />

          <Reveal delay={0.15}>
            <div>
              <h2 className="font-heading text-[1.5rem] font-semibold">
                Expertise
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  "Stratégie de marque & positionnement",
                  "Communication 360 & brand content",
                  "Stratégie digitale & social media",
                  "Paid media & performance marketing",
                  "Pilotage marketing & accompagnement dirigeant",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-b border-rule pb-4 text-[15px] text-ink"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rule bg-surface py-16 lg:py-20">
        <div className="container-editorial flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[400px] text-[16px] leading-relaxed text-muted">
            Prêt(e) à clarifier votre stratégie ? Commencez par une session
            de cadrage de 60 minutes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-green px-7 py-3.5 text-[14px] font-semibold text-paper hover:bg-green-light"
          >
            Réserver <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
