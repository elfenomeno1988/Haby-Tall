import Image from "next/image";
import { methodSteps } from "@/data/method-steps";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Method() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper lg:py-28">
      {/* Monogram watermark */}
      <Image
        src="/brand/haby-tall-monogram-white.png"
        alt=""
        width={200}
        height={200}
        className="pointer-events-none absolute -right-8 top-1/2 w-[180px] -translate-y-1/2 select-none opacity-[0.03] lg:w-[240px]"
        aria-hidden="true"
      />

      <div className="container-editorial relative">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="section-label text-paper/30">02</span>
            <span className="h-px flex-1 bg-paper/10" />
          </div>
          <h2 className="mt-6 font-heading text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.08] text-paper">
            Clarifier. Structurer.
            <br />
            Activer. Piloter.
          </h2>
          <p className="mt-4 max-w-[500px] text-[15px] leading-[1.7] text-paper/50">
            Une approche structurée en 4 étapes pour transformer
            la vision en croissance mesurable.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-px bg-paper/10 sm:grid-cols-2" stagger={0.1}>
          {methodSteps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="bg-ink p-8 lg:p-10">
                <span className="font-heading text-[3.5rem] font-semibold leading-none text-paper/[0.06] lg:text-[4.5rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-heading text-[1.2rem] font-semibold text-paper">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-paper/45">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
