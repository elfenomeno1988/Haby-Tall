import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { insights, lexicon } from '../data/siteContent';

export function Insights() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line/40">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow mb-6">Insights</p>
          <h1 className="display-xl">Analyses et décryptages pour créer de la préférence.</h1>
          <p className="mt-8 max-w-2xl text-lg font-light leading-9 text-brand-ink/55">
            Marque, communication, marketing digital, social media, conversion, réputation et croissance.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="display-md">Sujets éditoriaux</h2>
            <NavLink to="/lexique-marketing-digital-branding" className="btn-secondary py-3">
              Voir le lexique
            </NavLink>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {insights.map((title, i) => (
              <article key={title} className="group border border-brand-line/40 bg-brand-cream/30 p-8 transition-all duration-300 hover:border-brand-accent/30 hover:bg-white">
                <span className="step-number text-4xl">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-xl font-normal leading-tight text-brand-black">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-brand-line/40">
        <div className="page-shell">
          <div className="mb-12">
            <p className="eyebrow mb-4">Lexique</p>
            <h2 className="display-md">Définitions clés</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {lexicon.slice(0, 6).map((item) => (
              <div key={item.term}>
                <h3 className="font-serif text-lg font-normal text-brand-black">{item.term}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-brand-ink/55">{item.definition}</p>
              </div>
            ))}
          </div>
          <NavLink to="/lexique-marketing-digital-branding" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-brand-accent">
            Consulter tout le lexique
            <ArrowRight size={14} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
