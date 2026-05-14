import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Réservez une session de cadrage avec Haby TALL.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="container-editorial pb-16 lg:pb-24">
        <Reveal>
          <span className="section-label">Contact</span>
          <h1 className="mt-6 max-w-[700px] font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05]">
            Commençons par
            <br />
            une conversation
          </h1>
          <p className="mt-6 max-w-[480px] text-[16px] leading-[1.75] text-muted">
            60 minutes pour clarifier votre besoin, vos priorités et
            identifier le bon format d&apos;accompagnement.
          </p>
        </Reveal>
      </section>

      <div className="border-t border-rule" />

      {/* Contact info */}
      <section className="container-editorial py-16 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-8">
              <div>
                <p className="section-label">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 flex items-center gap-2 text-[16px] font-medium text-ink hover:text-green"
                >
                  <Mail size={16} className="text-faint" />
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="section-label">Localisation</p>
                <p className="mt-2 flex items-center gap-2 text-[16px] text-ink">
                  <MapPin size={16} className="text-faint" />
                  {siteConfig.location}
                </p>
              </div>
              <div>
                <p className="section-label">Social</p>
                <div className="mt-2 flex gap-6">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[14px] font-medium text-ink hover:text-green"
                  >
                    LinkedIn <ArrowUpRight size={12} />
                  </a>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[14px] font-medium text-ink hover:text-green"
                  >
                    Instagram <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative border border-rule p-8 lg:p-10">
              <Image
                src="/brand/haby-tall-signature-green.png"
                alt=""
                width={200}
                height={70}
                className="pointer-events-none absolute right-6 top-6 w-[140px] select-none opacity-[0.04]"
                aria-hidden="true"
              />
              <h2 className="font-heading text-[1.3rem] font-semibold">
                Session de cadrage
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-muted">
                Un rendez-vous de 60 minutes pour faire le point sur votre
                situation, identifier les priorités et définir le bon
                format d&apos;accompagnement.
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-rule pt-6">
                <span className="font-heading text-[1.1rem] font-semibold">
                  100 000 FCFA
                </span>
                <a
                  href={`mailto:${siteConfig.email}?subject=Session de cadrage`}
                  className="bg-green px-6 py-2.5 text-[13px] font-semibold text-paper hover:bg-green-light"
                >
                  Réserver &rarr;
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
