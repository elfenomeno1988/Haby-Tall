import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles et réflexions sur la stratégie de marque et le marketing digital.",
};

export default function InsightsPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="container-editorial pb-16 lg:pb-24">
        <Reveal>
          <span className="section-label">Insights</span>
          <h1 className="mt-6 max-w-[700px] font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05]">
            Réflexions sur
            <br />
            la stratégie et la croissance
          </h1>
        </Reveal>
      </section>

      <div className="border-t border-rule" />

      {/* Posts */}
      <section className="container-editorial py-14 lg:py-20">
        <Stagger stagger={0.1}>
          {blogPosts.map((post, i) => (
            <StaggerItem key={i}>
              <article className="grid gap-6 border-b border-rule py-10 lg:grid-cols-[120px_1fr] lg:py-12">
                <div>
                  <span className="section-label">{post.date}</span>
                  <p className="mt-1 text-[11px] text-faint">{post.readTime}</p>
                </div>
                <div>
                  <span className="mb-3 inline-block border border-rule px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted">
                    {post.category}
                  </span>
                  <h2 className="font-heading text-[1.3rem] font-semibold leading-snug lg:text-[1.5rem]">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-[600px] text-[14px] leading-[1.7] text-muted">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-green hover:text-green-light"
                  >
                    Lire la suite <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
