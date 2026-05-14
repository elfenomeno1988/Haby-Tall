import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles et réflexions sur la stratégie de marque et la croissance digitale.",
};

export default function Insights() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <ScrollReveal>
            <div className="max-w-4xl">
              <div className="mb-5 h-[2px] w-12 bg-brand-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray-light">Insights</p>
              <h1 className="mt-4 font-heading text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.06]">
                Réflexions sur la marque,
                <br />le marketing{" "}
                <span className="font-semibold text-brand-gray">et la croissance.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[18px] leading-[1.6] text-brand-gray">
                Des articles pour clarifier les enjeux stratégiques, décoder les tendances et partager des méthodes actionnables.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ ARTICLE LIST ═══ */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <div className="divide-y divide-brand-border/50">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <article className="group grid items-start gap-8 py-14 first:pt-0 lg:grid-cols-[220px_1fr_auto] lg:items-center lg:gap-14">
                  {/* Meta */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-green">{post.categoryLabel}</span>
                    <div className="mt-2 flex items-center gap-3 text-[13px] text-brand-gray-light">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-brand-border" />
                      <span className="flex items-center gap-1.5"><Clock size={12} />{post.readTime}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div>
                    <h2 className="font-heading text-[1.5rem] font-semibold leading-snug lg:text-[1.8rem]">{post.title}</h2>
                    <p className="mt-3 text-[16px] leading-[1.6] text-brand-gray">{post.excerpt}</p>
                  </div>
                  {/* CTA */}
                  <span className="inline-flex shrink-0 items-center gap-2 text-[13px] font-bold text-brand-green group-hover:text-brand-green-light">
                    Lire l&apos;article
                    <ArrowRight size={15} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
