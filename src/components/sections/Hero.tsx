"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = Date.now();
    const step = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      setDisplay(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center pt-16">
      {/* Signature watermark — massive, faint */}
      <Image
        src="/brand/haby-tall-signature-green.png"
        alt=""
        width={900}
        height={300}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[70vw] max-w-[800px] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.03]"
        aria-hidden="true"
      />

      <div className="container-editorial relative py-16 lg:py-24">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          Brand, Marketing &amp; Digital Growth Strategy
        </motion.p>

        {/* Name as hero element */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="mt-6 font-heading text-[clamp(4rem,12vw,9rem)] font-700 leading-[0.95] tracking-[-0.04em]"
        >
          Haby
          <br />
          Tall<span className="text-green">.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="mt-8 max-w-[480px] text-[17px] leading-[1.7] text-muted"
        >
          De la clarté stratégique à la croissance digitale.
          J&apos;aide les marques à clarifier ce qu&apos;elles portent,
          structurer ce qu&apos;elles doivent dire et activer les bons leviers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-green px-7 py-3.5 text-[14px] font-semibold text-paper transition-colors hover:bg-green-light"
          >
            Réserver un cadrage
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
          <Link
            href="/offres"
            className="inline-flex items-center gap-2 border border-rule px-7 py-3.5 text-[14px] font-medium text-ink transition-colors hover:border-green hover:text-green"
          >
            Découvrir les offres
          </Link>
        </motion.div>
      </div>

      {/* Stats bar at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-auto border-t border-rule"
      >
        <div className="container-editorial grid grid-cols-3 divide-x divide-rule py-6 lg:py-8">
          {[
            { value: 15, suffix: "+", label: "Années d’expérience" },
            { value: 50, suffix: "+", label: "Marques accompagnées" },
            { value: 360, suffix: "°", label: "Approche intégrée" },
          ].map((s) => (
            <div key={s.label} className="px-4 first:pl-0 last:pr-0 lg:px-8">
              <p className="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-semibold tracking-tight text-ink">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[12px] font-medium text-faint lg:text-[13px]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
