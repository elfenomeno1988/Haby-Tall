"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export function SlideCta() {
  return (
    <section className="relative flex min-h-svh snap-start items-center justify-center overflow-hidden bg-green">
      {/* Signature watermark */}
      <Image
        src="/brand/haby-tall-signature-white.png"
        alt=""
        width={700}
        height={230}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[65vw] max-w-[700px] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.02]"
        aria-hidden="true"
      />

      <div className="relative px-6 text-center">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-paper/25">
            Commencer
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-8 max-w-[680px] font-display text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[1.15] text-paper">
            De l&apos;intuition
            <br />
            à la stratégie.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-[400px] text-[15px] leading-[1.7] text-paper/40">
            Un premier échange pour clarifier votre besoin et définir la bonne
            direction.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-paper px-8 py-4 text-[14px] font-semibold text-green transition-all hover:scale-[1.02]"
            >
              Réserver un cadrage
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <a
              href="https://wa.me/221000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-paper/40 transition-colors hover:text-paper/70"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
