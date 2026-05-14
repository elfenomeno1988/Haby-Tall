import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { assetPath } from "@/lib/utils";

/**
 * HeroOverlap — A floating card that bridges the hero section
 * and the personas section below, creating a visual "break"
 * from the green hero into the white content area.
 * Uses negative margin to overlap both sections.
 * Desktop only (hidden on mobile).
 */
export function HeroOverlap() {
  return (
    <div className="relative z-10 -mt-10 hidden lg:block">
      <ScrollReveal delay={0.6}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <div className="relative overflow-hidden rounded-sm border border-brand-border/50 bg-brand-offwhite px-10 py-8 shadow-[0_8px_40px_rgba(0,0,0,0.08)] lg:px-14 lg:py-9">
            {/* Monogram watermark — subtle background accent */}
            <Image
              src={assetPath("/brand/haby-tall-monogram-green.png")}
              alt=""
              width={80}
              height={80}
              className="pointer-events-none absolute right-10 top-1/2 h-20 w-20 -translate-y-1/2 select-none opacity-[0.05]"
              aria-hidden="true"
            />

            <div className="flex items-center gap-8">
              {/* Monogram badge */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-brand-green">
                <Image
                  src={assetPath("/brand/haby-tall-monogram-white.png")}
                  alt="HT"
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </div>

              <div>
                <p className="font-heading text-[clamp(1.15rem,1.8vw,1.45rem)] font-semibold leading-snug text-brand-anthracite">
                  De la clarté stratégique à l&apos;activation des leviers
                  de croissance
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-brand-gray">
                  Un accompagnement sur mesure &mdash; du diagnostic
                  à l&apos;exécution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
