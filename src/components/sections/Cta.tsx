import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Cta() {
  return (
    <section className="border-t border-rule py-20 lg:py-28">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-[1fr_1px_1fr] lg:items-center">
          {/* Left — statement */}
          <Reveal>
            <span className="section-label">04</span>
            <h2 className="mt-6 font-heading text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold leading-[1.05]">
              Prêt(e) à passer
              <br />
              de l&apos;intuition
              <br />
              à la stratégie ?
            </h2>
          </Reveal>

          {/* Divider */}
          <div className="hidden h-full bg-rule lg:block" />

          {/* Right — CTA */}
          <Reveal delay={0.15}>
            <div className="relative">
              <Image
                src="/brand/haby-tall-monogram-green.png"
                alt=""
                width={60}
                height={60}
                className="pointer-events-none absolute -right-2 -top-2 h-14 w-14 select-none opacity-[0.05]"
                aria-hidden="true"
              />
              <p className="text-[16px] leading-[1.75] text-muted">
                Commencez par une session de cadrage de 60 minutes pour
                clarifier votre besoin, vos priorités et le bon format
                d&apos;accompagnement.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-green px-7 py-3.5 text-[14px] font-semibold text-paper transition-colors hover:bg-green-light"
                >
                  Réserver un cadrage
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
                <a
                  href={`https://wa.me/221000000000?text=${encodeURIComponent("Bonjour, je souhaite en savoir plus sur vos accompagnements.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-rule px-7 py-3.5 text-[14px] font-medium text-ink transition-colors hover:border-green hover:text-green"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
