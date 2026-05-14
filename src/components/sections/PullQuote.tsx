import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * PullQuote — Full-width italic quote band that acts as
 * a visual divider between the Personas and Method sections.
 * Large Playfair italic, centered, with signature accent.
 */
export function PullQuote() {
  return (
    <section className="relative overflow-hidden border-y border-brand-border/40 bg-brand-cream/60 py-16 lg:py-20">
      {/* Signature accent — centered, very subtle */}
      <Image
        src="/brand/haby-tall-signature-green.png"
        alt=""
        width={320}
        height={110}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.03]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[900px] px-6 text-center lg:px-16">
        <ScrollReveal>
          <div className="mx-auto mb-5 h-[2px] w-10 bg-brand-green/30" />

          <blockquote className="font-heading text-[clamp(1.5rem,3.2vw,2.4rem)] font-normal italic leading-[1.35] text-brand-anthracite">
            &ldquo;La stratégie, c&apos;est l&apos;art de rendre visible ce
            qui rend une marque irremplaçable.&rdquo;
          </blockquote>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Image
              src="/brand/haby-tall-monogram-green.png"
              alt="HT"
              width={24}
              height={24}
              className="h-6 w-6 opacity-40"
            />
            <p className="text-[13px] font-semibold tracking-wide text-brand-gray">
              Haby TALL
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
