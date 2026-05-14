"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { assetPath } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  /* Morph values driven by scroll */
  const headerHeight = useTransform(scrollY, [0, 120], [72, 64]);
  const bgOpacity = useTransform(scrollY, [0, 120], [0.95, 0.98]);
  const shadowOpacity = useTransform(scrollY, [0, 120], [0, 0.08]);
  const borderOpacity = useTransform(scrollY, [0, 120], [0.15, 0.06]);

  return (
    <motion.header
      style={{
        height: headerHeight,
        backgroundColor: `rgba(250,249,246,${bgOpacity.get()})`,
        boxShadow: `0 1px 12px rgba(0,0,0,${shadowOpacity.get()})`,
      }}
      className="sticky top-0 z-50 border-b border-brand-border/15 bg-brand-offwhite/95 backdrop-blur-lg"
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 lg:px-16">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={assetPath("/brand/haby-tall-signature-green.png")}
            alt="Haby Tall"
            width={176}
            height={72}
            className="h-10 w-auto"
            priority
          />
          <span className="sr-only">
            Haby TALL
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-gray transition-colors hover:text-brand-anthracite"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-sm bg-brand-green px-6 py-2.5 text-[13px] font-semibold text-brand-offwhite transition-colors hover:bg-brand-green-light md:inline-flex"
        >
          Réserver un cadrage
          <ArrowRight size={14} />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-brand-anthracite"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-brand-border/40 bg-brand-offwhite px-6 pb-8 pt-6 md:hidden"
        >
          <nav className="flex flex-col gap-5">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-brand-anthracite"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-green px-6 py-3.5 text-[15px] font-semibold text-brand-offwhite"
            >
              Réserver un cadrage
              <ArrowRight size={15} />
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
