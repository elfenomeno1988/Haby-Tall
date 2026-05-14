import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { ContactForm } from "@/components/ui/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Réservez une session de cadrage stratégique ou envoyez un message.",
};

export default function Contact() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <ScrollReveal>
            <div className="max-w-4xl">
              <div className="mb-5 h-[2px] w-12 bg-brand-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray-light">Contact</p>
              <h1 className="mt-4 font-heading text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.06]">
                Parlons de{" "}
                <span className="font-normal italic text-brand-gray">votre projet.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[18px] leading-[1.8] text-brand-gray">
                Vous avez un besoin en stratégie de marque, marketing ou croissance digitale ? Commencez par un message ou réservez directement une session de cadrage.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FORM + SIDEBAR ═══ */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
            {/* Form column */}
            <ScrollReveal variant="slide-left">
              <div>
                <h2 className="font-heading text-[1.8rem] font-semibold lg:text-[2.2rem]">Envoyer un message</h2>
                <p className="mt-3 text-[16px] leading-relaxed text-brand-gray">Je reviens vers vous sous 24 à 48 heures.</p>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Sidebar */}
            <ScrollReveal variant="slide-right" delay={0.15}>
              <div className="lg:pt-2">
                <div className="relative overflow-hidden rounded-sm border-l-[3px] border-brand-green bg-brand-cream/50 p-10 lg:p-12">
                  <Image
                    src={assetPath("/brand/haby-tall-monogram-green.png")}
                    alt=""
                    width={200}
                    height={280}
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-6 -right-6 w-[200px] select-none opacity-[0.04]"
                  />
                  <div className="relative">
                    <h3 className="font-heading text-[1.3rem] font-semibold">Coordonnées</h3>
                    <div className="mt-8 space-y-7">
                      <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 text-[15px] text-brand-gray transition-colors hover:text-brand-anthracite">
                        <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-brand-green/[0.06]">
                          <Mail size={18} className="text-brand-green" />
                        </div>
                        {siteConfig.email}
                      </a>
                      <p className="flex items-center gap-4 text-[15px] text-brand-gray">
                        <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-brand-green/[0.06]">
                          <MapPin size={18} className="text-brand-green" />
                        </span>
                        {siteConfig.location}
                      </p>
                      <a href={`https://wa.me/221000000000?text=${encodeURIComponent("Bonjour, je souhaite en savoir plus sur vos accompagnements.")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[15px] text-brand-gray transition-colors hover:text-brand-anthracite">
                        <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-brand-green/[0.06]">
                          <MessageCircle size={18} className="text-brand-green" />
                        </span>
                        WhatsApp
                      </a>
                    </div>

                    <div className="mt-10 border-t border-brand-border/40 pt-8">
                      <h3 className="font-heading text-[1.3rem] font-semibold">Réseaux</h3>
                      <div className="mt-5 space-y-3">
                        <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[15px] text-brand-gray hover:text-brand-anthracite">LinkedIn <ArrowUpRight size={13} /></a>
                        <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[15px] text-brand-gray hover:text-brand-anthracite">Instagram <ArrowUpRight size={13} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
