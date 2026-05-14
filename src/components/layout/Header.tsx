"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav } from "@/data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ─── Inner pages: standard top bar ─── */}
      {!isHome && (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-paper/90 backdrop-blur-sm">
          <div className="container-editorial flex h-14 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/brand/haby-tall-monogram-green.png"
                alt="HT"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="font-body text-[14px] font-semibold tracking-tight">
                Haby TALL
              </span>
            </Link>
            <nav className="hidden gap-6 lg:flex">
              {mainNav.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium text-ink/40 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <button
              onClick={() => setOpen(true)}
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/40 hover:text-ink lg:hidden"
            >
              Menu
            </button>
          </div>
        </header>
      )}

      {/* ─── Homepage: floating monogram + menu only ─── */}
      {isHome && !open && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="pointer-events-auto">
            <Image
              src="/brand/haby-tall-monogram-white.png"
              alt="HT"
              width={28}
              height={28}
              className="h-7 w-7"
            />
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="pointer-events-auto text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/60 transition-colors hover:text-paper"
          >
            Menu
          </button>
        </div>
      )}

      {/* ─── Fullscreen nav overlay (all pages) ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-green"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/60 transition-colors hover:text-paper lg:right-10"
            >
              Fermer
            </button>

            <Image
              src="/brand/haby-tall-signature-white.png"
              alt=""
              width={500}
              height={170}
              className="pointer-events-none absolute left-1/2 top-1/2 w-[60vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.03]"
              aria-hidden="true"
            />

            <nav className="relative flex flex-col items-center gap-3">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-1 font-display text-[clamp(1.6rem,4vw,2.8rem)] font-medium text-paper/60 transition-colors hover:text-paper"
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
