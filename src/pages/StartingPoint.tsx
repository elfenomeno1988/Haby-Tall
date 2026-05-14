import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { momentRows } from '../data/siteContent';

export function StartingPoint() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line bg-brand-offwhite">
        <div className="page-shell max-w-5xl">
          <p className="eyebrow mb-5">Par où commencer ?</p>
          <h1 className="display-xl">Vous ne savez pas quelle offre choisir ?</h1>
          <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-brand-ink/72">
            Chaque marque n’a pas besoin du même accompagnement au même moment. Cette page vous aide à identifier le bon point de départ.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="overflow-hidden border border-brand-line">
            <div className="hidden grid-cols-[1.1fr_0.8fr_0.7fr] bg-brand-black px-6 py-4 text-sm font-black uppercase text-white md:grid">
              <span>Votre situation</span>
              <span>Offre recommandée</span>
              <span>CTA</span>
            </div>
            <div className="divide-y divide-brand-line">
              {momentRows.map((row) => (
                <NavLink key={row.situation} to={row.href} className="grid gap-4 bg-brand-offwhite px-6 py-5 transition hover:bg-white md:grid-cols-[1.1fr_0.8fr_0.7fr] md:items-center">
                  <p className="text-base font-bold text-brand-black">{row.situation}</p>
                  <p className="text-base font-black text-brand-accent">{row.offer}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-black text-brand-black">
                    {row.cta}
                    <ArrowRight size={16} />
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
