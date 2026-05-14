import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { offerList } from '../data/offers';
import { offerFamilies } from '../data/siteContent';

export function OffersCatalog() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line/40">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow mb-6">Offres</p>
          <h1 className="display-xl">Des accompagnements pensés selon votre moment de marque.</h1>
          <p className="mt-8 max-w-3xl text-lg font-light leading-9 text-brand-ink/60">
            Chaque marque n'a pas besoin de la même chose au même moment. Les offres répondent à ces différents moments avec méthode et exigence.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-4">
            {offerFamilies.map((family) => (
              <article key={family.title}>
                <h2 className="font-serif text-2xl font-normal text-brand-black">{family.title}</h2>
                <ul className="mt-6 space-y-3">
                  {family.items.map((item) => (
                    <li key={item} className="text-sm font-light leading-7 text-brand-ink/60">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-brand-line/40">
        <div className="page-shell">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-4">Détail des offres</p>
              <h2 className="display-md">Choisir par objectif et maturité.</h2>
            </div>
            <NavLink to="/par-ou-commencer" className="btn-secondary">
              Par où commencer ?
            </NavLink>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {offerList.map((offer) => (
              <NavLink
                key={offer.slug}
                to={offer.url}
                className="group border border-brand-line/50 bg-white p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <p className="eyebrow">{offer.category}</p>
                <h3 className="mt-4 font-serif text-2xl font-normal text-brand-black">{offer.title}</h3>
                <p className="mt-4 min-h-14 text-sm font-light leading-7 text-brand-ink/55">{offer.enClair}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition-colors group-hover:text-brand-green">
                  En savoir plus
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-black text-white">
        <div className="page-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow mb-4 text-brand-gold/60">Qualification</p>
            <h2 className="display-md max-w-2xl text-white">Un brief avant toute recommandation.</h2>
          </div>
          <NavLink to="/brief-cadrage-strategique" className="btn-primary bg-white text-brand-black hover:bg-brand-accent hover:text-white">
            Remplir le brief stratégique
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
