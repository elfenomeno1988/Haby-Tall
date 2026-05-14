"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const t0 = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - t0) / dur, 1);
      setN(Math.round((1 - (1 - p) ** 3) * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Années",
    sub: "de stratégie de marque",
  },
  {
    value: 50,
    suffix: "+",
    label: "Marques",
    sub: "accompagnées",
  },
  {
    value: 360,
    suffix: "°",
    label: "Approche",
    sub: "clarté à activation",
  },
];

export function SlideStats() {
  return (
    <section className="flex min-h-svh snap-start items-center">
      <div className="container-editorial w-full">
        <Reveal>
          <div className="mb-10 h-px w-full bg-green/15" />
        </Reveal>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-rule">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12}>
              <div className="flex flex-col items-center px-6 text-center">
                <span className="font-display text-[clamp(4rem,10vw,8rem)] font-semibold leading-none tracking-tight text-ink">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
                  {s.label}
                </span>
                <span className="mt-2 max-w-[200px] text-[13px] leading-relaxed text-muted">
                  {s.sub}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-10 h-px w-full bg-green/15" />
        </Reveal>
      </div>
    </section>
  );
}
