import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { assetPath } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";

export function CtaFinal() {
  const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");

  return (
    <section className="relative overflow-hidden bg-brand-cream/50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(27,67,50,0.05),transparent_65%)]" />
      {/* Signature accent — bottom right */}
      <Image
        src={assetPath("/brand/haby-tall-signature-green.png")}
        alt=""
        width={400}
        height={140}
        className="pointer-events-none absolute -right-8 bottom-8 w-[320px] rotate-[-8deg] select-none opacity-[0.04]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-16 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal variant="slide-left">
            <div>
              <div className="mb-5 h-[2px] w-12 bg-brand-green" />
              <h2 className="font-heading text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold leading-[1.08]">
                Clarifier le bon
                <br />
                point de départ.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" delay={0.15}>
            <div className="lg:pl-16 lg:border-l lg:border-brand-border/40">
              <p className="text-[18px] leading-[1.6] text-brand-gray">
                Une session de 60 minutes pour cadrer le besoin, prioriser et
                choisir le bon format.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-sm bg-brand-green px-9 py-[18px] text-[15px] font-bold text-brand-offwhite transition-all hover:bg-brand-green-light hover:scale-[1.02]"
                >
                  Réserver un cadrage
                  <ArrowRight size={17} strokeWidth={2.5} />
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour, je souhaite en savoir plus sur vos accompagnements.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-sm border-2 border-brand-border px-9 py-[18px] text-[15px] font-medium text-brand-anthracite transition-all hover:border-brand-green/30 hover:text-brand-green"
                >
                  <MessageCircle size={17} />
                  Écrire sur WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
