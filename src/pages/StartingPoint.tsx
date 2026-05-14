import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { momentRows } from '../data/siteContent';

export function StartingPoint() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line/40">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow mb-6">Par où commencer</p>
          <h1 className="display-xl">Le bon accompagnement dépend de votre situation.</h1>
          <p className="mt-8 max-w-2xl text-lg font-light leading-9 text-brand-ink/55">
            Chaque marque n'a pas besoin de la même chose au même moment. Identifiez votre point de départ.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="divide-y divide-brand-line/40">
            {momentRows.map((row) => (
              <NavLink
                key={row.situation}
                to={row.href}
                className="group grid gap-4 py-8 transition-colors md:grid-cols-[1.2fr_0.8fr_auto] md:items-center"
              >
                <p className="text-base font-light text-brand-ink/65 transition-colors group-hover:text-brand-black">{row.situation}</p>
                <p className="font-serif text-lg font-normal text-brand-accent">{row.offer}</p>
                <span className="flex items-center gap-2 text-sm font-medium text-brand-ink/40 transition-colors group-hover:text-brand-accent">
                  {row.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
