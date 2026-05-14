import { useState } from 'react';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronDown, XCircle } from 'lucide-react';
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
      <section className="border-b border-white/10 bg-brand-black text-white">
        <div className="page-shell grid gap-10 py-20 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase text-brand-accent">{offer.category}</p>
            <h1 className="display-xl text-white">{offer.hero}</h1>
            <p className="mt-7 max-w-3xl text-xl font-bold leading-8 text-brand-accent">{offer.title}</p>
          </div>
          <div className="border border-white/12 p-6">
            <img src={brandAssets.signatureWhite} alt="Signature Haby Tall" className="mb-8 h-16 w-56 object-contain object-left" />
            <p className="text-lg font-medium leading-8 text-white/70">{offer.enClair}</p>
            <NavLink to="/contact" className="mt-8 inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-black text-brand-black transition hover:bg-brand-accent hover:text-white">
              {offer.cta}
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-offwhite">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow mb-4">Pour qui ?</p>
            <h2 className="text-4xl font-black leading-tight text-brand-black">Cette offre est faite pour vous si...</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {offer.fit.map((item) => (
              <div key={item} className="panel p-5">
                <CheckCircle2 className="mb-5 text-brand-accent" size={22} />
                <p className="text-base font-semibold leading-7 text-brand-ink/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow mb-4">Ce que nous travaillons</p>
            <h2 className="display-lg">Le périmètre de travail reste lisible.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {offer.work.map((item) => (
              <span key={item} className="border border-brand-line bg-brand-offwhite px-4 py-3 text-sm font-bold text-brand-black">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-black text-white">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-black uppercase text-brand-accent">Format</p>
            <h2 className="display-lg text-white">Conditions, livrables et limites par défaut.</h2>
            <p className="mt-6 text-lg leading-8 text-white/70">{offer.format}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <ListBlock title="Inclus" items={offer.inclusions} positive />
            <ListBlock title="Non inclus par défaut" items={offer.exclusions} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-offwhite">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow mb-4">Cross-selling utile</p>
            <h2 className="display-lg">Vous pourriez aussi avoir besoin de...</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {offer.crossSell.map((item) => (
              <div key={item} className="bg-white p-5 text-base font-black text-brand-black">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {offer.faq.length > 0 && (
        <section className="section-pad bg-white">
          <div className="page-shell max-w-4xl">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="display-lg mb-10">Questions fréquentes</h2>
            <div className="space-y-3">
              {offer.faq.map((item) => (
                <FAQItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad bg-brand-accent text-white">
        <div className="page-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-sm font-black uppercase text-white/70">Prochaine étape</p>
            <h2 className="display-lg max-w-3xl text-white">{offer.cta}</h2>
          </div>
          <NavLink to="/contact" className="inline-flex items-center justify-center gap-3 bg-white px-7 py-5 text-sm font-black text-brand-black transition hover:bg-brand-black hover:text-white">
            Parler de mon projet
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}

function ListBlock({ title, items, positive = false }: { title: string; items: string[]; positive?: boolean }) {
  return (
    <div className="border border-white/12 p-6">
      <h3 className="mb-6 text-2xl font-black text-white">{title}</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-white/72">
            {positive ? <CheckCircle2 className="mt-0.5 shrink-0 text-brand-accent" size={18} /> : <XCircle className="mt-0.5 shrink-0 text-white/35" size={18} />}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string; key?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn('border border-brand-line bg-brand-offwhite', open && 'border-brand-accent bg-white')}>
      <button className="flex w-full items-center justify-between gap-6 p-5 text-left" onClick={() => setOpen((value) => !value)}>
        <span className="text-base font-black text-brand-black">{question}</span>
        <ChevronDown className={cn('shrink-0 text-brand-accent transition', open && 'rotate-180')} size={20} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <p className="border-t border-brand-line px-5 py-5 text-base leading-7 text-brand-ink/70">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
