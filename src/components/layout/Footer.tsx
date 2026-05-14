import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { assetPath } from "@/lib/utils";

const resourceLinks = [
  { label: "Brief stratégique", href: "/brief-cadrage-strategique" },
  { label: "Par où commencer ?", href: "/par-ou-commencer" },
  { label: "FAQ", href: "/faq" },
  { label: "Lexique", href: "/lexique-marketing-digital-branding" },
  { label: "Écosystème & Partenaires", href: "/ecosysteme-partenaires" },
  { label: "Actualités", href: "/actualites" },
  { label: "Médias & Presse", href: "/medias-presse" },
  { label: "Partenariats prestataires", href: "/partenariats-prestataires" },
  { label: "Affiliations", href: "/affiliations" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "Cookies", href: "/cookies" },
  { label: "CGV", href: "/cgv" },
];

export function Footer() {
  return (
    <footer className="relative bg-brand-green text-brand-offwhite overflow-hidden">
      {/* Signature watermark — large, rotated, background accent */}
      <Image
        src={assetPath("/brand/haby-tall-signature-white.png")}
        alt=""
        width={700}
        height={240}
        className="pointer-events-none absolute right-0 top-1/2 w-[550px] -translate-y-1/2 translate-x-1/4 rotate-[-10deg] select-none opacity-[0.02]"
        aria-hidden="true"
      />

      {/* Top bar */}
      <div className="border-b border-brand-offwhite/8">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center lg:px-16">
          <div className="flex items-center gap-4">
            <Image
              src={assetPath("/brand/haby-tall-monogram-white.png")}
              alt="HT"
              width={44}
              height={44}
              className="h-11 w-11 opacity-80"
            />
            <p className="font-heading text-2xl font-semibold">
              {siteConfig.name}
            </p>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-brand-offwhite/40">
            {siteConfig.tagline}
          </p>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative mx-auto max-w-[1400px] px-6 py-16 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-offwhite/30">
              Navigation
            </p>
            <nav className="mt-6 flex flex-col gap-3">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[15px] text-brand-offwhite/50 transition-colors hover:text-brand-offwhite"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-offwhite/30">
              Ressources
            </p>
            <nav className="mt-6 flex flex-col gap-3">
              {resourceLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-[15px] text-brand-offwhite/50 transition-colors hover:text-brand-offwhite">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-offwhite/30">
              Contact
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-[15px] text-brand-offwhite/50 transition-colors hover:text-brand-offwhite"
              >
                <Mail size={16} className="shrink-0" />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-3 text-[15px] text-brand-offwhite/50">
                <MapPin size={16} className="shrink-0" />
                {siteConfig.location}
              </p>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[15px] text-brand-offwhite/50 transition-colors hover:text-brand-offwhite"
              >
                LinkedIn <ArrowUpRight size={13} />
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[15px] text-brand-offwhite/50 transition-colors hover:text-brand-offwhite"
              >
                Instagram <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-offwhite/30">
              Légal
            </p>
            <nav className="mt-6 flex flex-col gap-3">
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-[15px] text-brand-offwhite/50 transition-colors hover:text-brand-offwhite">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-offwhite/8">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-16">
          <p className="text-xs text-brand-offwhite/25">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits
            réservés.
          </p>
          <p className="text-xs text-brand-offwhite/25">
            {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
