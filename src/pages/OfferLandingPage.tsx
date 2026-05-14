import { useState } from 'react';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Check, ChevronDown, X as XIcon } from 'lucide-react';
import { offers } from '../data/offers';
import { brandAssets } from '../data/siteContent';
import { cn } from '../lib/utils';

export function OfferLandingPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !offers[slug]) {
    return <Navigate to="/offres" replace />;
  }

  const offer = offers[slug];

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-black text-white">
        <div className="page-shell grid gap-12 py-24 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:py-36">
          <div>
            <p className="eyebrow mb-6 text-brand-gold/60">{offer.category}</p>
            <h1 className="display-xl text-white">{offer.hero}</h1>
            <p className="mt-8 font-serif text-2xl font-normal text-brand-accent">{offer.title}</p>
          </div>
          <div className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <img src={brandAssets.signatureWhite} alt="" className="mb-6 h-12 w-40 object-contain object-left opacity-40" />
            <p className="text-base font-light leading-8 text-white/60">{offer.enClair}</p>
            <NavLink to="/contact" className="mt-8 inline-flex items-center gap-3 bg-white px-6 py-4 text-[13px] font-medium uppercase tracking-[0.1em] text-brand-black transition-all duration-300 hover:bg-brand-accent hover:text-white">
              {offer.cta}
              <ArrowRight size={14} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* For Who + Scope */}
      <section className="section-pad">
        <div className="page-shell grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-6">Pour vous si...</p>
            <div className="space-y-4">
              {offer.fit.map((item) => (
                <div key={item} className="flex gap-4">
                  <Check className="mt-1 shrink-0 text-brand-accent" size={16} />
                  <p className="text-base font-light leading-8 text-brand-ink/65">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-6">Ce que nous travaillons</p>
            <div className="flex flex-wrap gap-2">
              {offer.work.map((item) => (
                <span key={item} className="border border-brand-line/50 bg-white px-4 py-2.5 text-sm font-light text-brand-ink/70">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Format & Inclusions */}
      <section className="section-pad border-t border-brand-line/40 bg-brand-black text-white">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow mb-6 text-brand-gold/60">Format</p>
            <h2 className="display-md text-white">Conditions et livrables.</h2>
            <p className="mt-6 text-base font-light leading-8 text-white/55">{offer.format}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-white/10 p-6">
              <h3 className="mb-6 font-serif text-xl font-normal text-white">Inclus</h3>
              <ul className="space-y-3">
                {offer.inclusions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-light leading-6 text-white/60">
                    <Check className="mt-0.5 shrink-0 text-brand-accent" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="mb-6 font-serif text-xl font-normal text-white/60">Non inclus par défaut</h3>
              <ul className="space-y-3">
                {offer.exclusions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-light leading-6 text-white/40">
                    <XIcon className="mt-0.5 shrink-0 text-white/25" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {offer.faq.length > 0 && (
        <section className="section-pad bg-white">
          <div className="page-shell mx-auto max-w-3xl">
            <p className="eyebrow mb-6">Questions fréquentes</p>
            <div className="divide-y divide-brand-line/40">
              {offer.faq.map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {offer.crossSell.length > 0 && (
        <section className="border-t border-brand-line/40 py-12">
          <div className="page-shell">
            <p className="text-sm font-light text-brand-ink/40">
              Offres liées : {offer.crossSell.join(' · ')}
            </p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-pad bg-brand-cream">
        <div className="page-shell text-center">
          <h2 className="display-md mx-auto max-w-xl">{offer.cta}</h2>
          <NavLink to="/contact" className="btn-primary mt-10">
            Parler de mon projet
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="flex w-full items-center justify-between gap-8 py-6 text-left" onClick={() => setOpen((v) => !v)}>
        <span className="font-serif text-lg font-normal text-brand-black">{question}</span>
        <ChevronDown className={cn('shrink-0 text-brand-gold transition-transform duration-300', open && 'rotate-180')} size={18} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <p className="pb-6 text-base font-light leading-8 text-brand-ink/60">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
