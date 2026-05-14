"use client";

import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { word: "Clarifier", note: "Diagnostic. Positionnement. Vérité." },
  { word: "Structurer", note: "Fondations. Messages. Architecture." },
  { word: "Activer", note: "Contenus. Canaux. Conversion." },
  { word: "Piloter", note: "Mesure. Itération. Croissance." },
];

export function SlideMethod() {
  return (
    <section className="flex min-h-svh snap-start items-center bg-ink">
      <div className="container-editorial w-full py-20">
        <Reveal>
          <p className="mb-16 text-[11px] font-semibold uppercase tracking-[0.3em] text-paper/25">
            Méthode
          </p>
        </Reveal>

        <div className="space-y-0">
          {steps.map((s, i) => (
            <Reveal key={s.word} delay={i * 0.1}>
              <div className="group flex items-baseline justify-between border-b border-paper/[0.06] py-6 sm:py-8">
                <span className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-semibold leading-none tracking-tight text-paper/90">
                  {s.word}
                  <span className="text-paper/15">.</span>
                </span>
                <span className="hidden text-right text-[13px] leading-relaxed text-paper/25 sm:block">
                  {s.note}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
