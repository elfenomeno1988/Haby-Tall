import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Megaphone,
  Lightbulb,
  GraduationCap,
} from "lucide-react";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/ui/ScrollReveal";
import { territories } from "@/data/site-content";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "À propos",
  description: "15+ ans d'expérience en stratégie de marque, marketing et croissance digitale.",
};

const parcours = [
  { icon: Building2, title: "Agence", description: "Campagnes 360, branding et pilotage de projets stratégiques." },
  { icon: Megaphone, title: "Annonceur", description: "Vision terrain, contraintes business et exigence de résultats." },
  { icon: Lightbulb, title: "Entrepreneuriat & Conseil", description: "Structuration de marques, dirigeants et stratégies de croissance." },
  { icon: GraduationCap, title: "Formation", description: "MSc Marketing Digital, workshops et pédagogie orientée action." },
];

const convictions = [
  "Une marque qui ne sait pas ce qu'elle porte ne peut pas communiquer avec clarté.",
  "Le contenu sans stratégie n'est que du bruit. La stratégie sans contenu n'est qu'une intention.",
  "La croissance durable passe par la cohérence, pas par la quantité.",
  "Chaque levier activé doit servir un objectif business mesurable.",
];

export default function APropos() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <ScrollReveal>
            <div className="max-w-4xl">
              <div className="mb-5 h-[2px] w-12 bg-brand-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray-light">
                À propos
              </p>
              <h1 className="mt-4 font-heading text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.06]">
                Brand, Marketing
                <br />& Digital Growth{" "}
                <span className="font-semibold text-brand-gray">Strategist</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[18px] leading-[1.6] text-brand-gray">
                Clarifier la marque, structurer les messages et relier les
                leviers digitaux à des objectifs business lisibles.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ PARCOURS ═══ */}
      <section className="bg-brand-cream/50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <ScrollReveal>
            <div className="mb-12">
              <div className="mb-5 h-[2px] w-12 bg-brand-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray-light">Parcours</p>
              <h2 className="mt-4 font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.1]">
                15+ ans entre agence,
                <br />annonceur{" "}
                <span className="font-semibold text-brand-gray">et conseil.</span>
              </h2>
            </div>
          </ScrollReveal>
          <Stagger className="grid gap-6 md:grid-cols-2">
            {parcours.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="relative overflow-hidden rounded-sm bg-brand-offwhite p-10 lg:p-12">
                  <span className="pointer-events-none absolute -right-2 -top-4 select-none font-heading text-[8rem] font-bold leading-none text-brand-green/[0.03]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative flex gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-brand-green/[0.06]">
                      <item.icon size={24} className="text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-heading text-[1.5rem] font-semibold">{item.title}</h3>
                      <p className="mt-3 text-[15px] leading-[1.6] text-brand-gray">{item.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[380px_1fr] lg:px-16">
          <ScrollReveal>
            <div>
              <div className="mb-5 h-[2px] w-12 bg-brand-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray-light">
                Territoires d’intervention
              </p>
              <h2 className="mt-4 font-heading text-[clamp(2.1rem,4vw,3.2rem)] font-bold leading-[1.1]">
                Marque, marketing, digital et réputation.
              </h2>
            </div>
          </ScrollReveal>
          <div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {territories.map((item) => (
                <p key={item} className="rounded-sm bg-brand-cream/50 px-4 py-3 text-[14px] font-semibold text-brand-anthracite">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-8 text-[16px] leading-relaxed text-brand-gray">
              J’accompagne des marques et des projets en Côte d’Ivoire, en Afrique francophone, en France et sur des marchés hybrides.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CONVICTIONS ═══ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[380px_1fr] xl:grid-cols-[440px_1fr]">
            <ScrollReveal>
              <div>
                <div className="mb-5 h-[2px] w-12 bg-brand-green" />
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray-light">Convictions</p>
                <h2 className="mt-4 font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.1]">
                  Ce que{" "}
                  <span className="font-semibold text-brand-gray">je crois.</span>
                </h2>
              </div>
            </ScrollReveal>
            <Stagger className="space-y-10">
              {convictions.map((text, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-8 border-l-[3px] border-brand-green/12 pl-8">
                    <span className="shrink-0 font-heading text-[3.5rem] font-semibold leading-none text-brand-green/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[18px] leading-[1.7] text-brand-anthracite lg:text-[20px]">
                      {text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ═══ APPROCHE ═══ */}
      <section className="relative overflow-hidden bg-brand-green py-20 lg:py-28">
        <Image
          src={assetPath("/brand/haby-tall-monogram-white.png")}
          alt=""
          width={500}
          height={700}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 w-[500px] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.015]"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <div className="mb-5 h-[2px] w-12 bg-brand-offwhite/25" />
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-offwhite/35">Approche</p>
                <h2 className="mt-4 font-heading text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold text-brand-offwhite leading-[1.08]">
                  Stratégie d&apos;abord.
                  <br />
                  <span className="font-semibold text-brand-offwhite/40">Toujours.</span>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="space-y-6 text-[17px] leading-[1.6] text-brand-offwhite/50 lg:pt-4 lg:text-[18px]">
                <p>Mon rôle : remettre de l&apos;ordre dans la marque, les messages, les canaux et les décisions.</p>
                <p>Quand c&apos;est nécessaire, j&apos;active un écosystème de partenaires : branding, web, production, paid media et réputation.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <Image
          src={assetPath("/brand/haby-tall-signature-green.png")}
          alt=""
          width={400}
          height={400}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-[400px] select-none opacity-[0.04]"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <div className="mb-5 h-[2px] w-12 bg-brand-green" />
                <h2 className="font-heading text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold leading-[1.08]">
                  Envie d&apos;en{" "}
                  <span className="font-semibold text-brand-gray">discuter ?</span>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="lg:pl-16 lg:border-l lg:border-brand-border/40">
                <p className="text-[18px] leading-[1.6] text-brand-gray">
                  Une session de cadrage pour clarifier le besoin et choisir le bon format.
                </p>
                <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-sm bg-brand-green px-9 py-[18px] text-[15px] font-bold text-brand-offwhite transition-colors hover:bg-brand-green-light">
                  Réserver un cadrage
                  <ArrowRight size={17} strokeWidth={2.5} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
