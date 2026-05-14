"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_var(--color-rule)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-editorial flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/brand/haby-tall-monogram-green.png"
              alt="HT"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="font-heading text-[15px] font-semibold tracking-tight text-ink">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {mainNav.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-green px-5 py-2 text-[13px] font-semibold text-paper transition-colors hover:bg-green-light"
            >
              Cadrage &rarr;
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                  open ? "translate-y-[3.25px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                  open ? "-translate-y-[3.25px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-paper px-6 lg:hidden"
          >
            <nav className="flex flex-col">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-rule py-5 font-heading text-2xl font-semibold tracking-tight"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
