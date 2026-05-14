import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function SlideStatement() {
  return (
    <section className="relative flex min-h-svh snap-start items-center justify-center overflow-hidden">
      {/* Signature — large, centered, ghost */}
      <Image
        src="/brand/haby-tall-signature-green.png"
        alt=""
        width={600}
        height={200}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[50vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.04]"
        aria-hidden="true"
      />

      <Reveal className="relative max-w-[720px] px-6 text-center">
        <div className="mx-auto mb-6 h-12 w-px bg-green/20" />

        <blockquote className="font-display text-[clamp(1.6rem,3.8vw,2.8rem)] font-normal italic leading-[1.3] text-ink/80">
          &ldquo;Rendre visible ce qui rend
          une marque irremplaçable.&rdquo;
        </blockquote>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Image
            src="/brand/haby-tall-monogram-green.png"
            alt="HT"
            width={20}
            height={20}
            className="h-5 w-5 opacity-30"
          />
          <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-muted">
            Haby Tall
          </span>
        </div>
      </Reveal>
    </section>
  );
}
