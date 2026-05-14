"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function SlideTitle() {
  return (
    <section className="relative flex min-h-svh snap-start items-center justify-center overflow-hidden bg-green">
      {/* Signature watermark — massive, centered, ghost */}
      <Image
        src="/brand/haby-tall-signature-white.png"
        alt=""
        width={900}
        height={300}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[80vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.025]"
        aria-hidden="true"
      />

      <div className="relative px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] font-semibold uppercase tracking-[0.3em] text-paper/20"
        >
          Stratégie &amp; croissance
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-[clamp(5rem,16vw,14rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-paper"
        >
          Haby
          <br />
          Tall<span className="text-paper/25">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-8 max-w-[380px] text-[15px] leading-[1.7] text-paper/30"
        >
          Marque, positionnement, croissance digitale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-paper px-8 py-4 text-[14px] font-semibold text-green transition-all hover:scale-[1.02]"
          >
            Réserver un cadrage
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-paper/25">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-8 w-px bg-paper/20"
        />
      </motion.div>
    </section>
  );
}
