import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { offerList } from '../data/offers';
import { offerFamilies } from '../data/siteContent';

export function OffersCatalog() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line bg-brand-offwhite">
        <div className="page-shell max-w-6xl">
          <div>
            <p className="eyebrow mb-5">Offres</p>
            <h1 className="display-xl">Des accompagnements pensés selon votre moment de marque.</h1>
          </div>
          <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-brand-ink/72">
            Chaque marque n’a pas besoin de la même chose au même moment. Les offres sont construites pour répondre à ces différents moments avec méthode, clarté et exigence.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid gap-4 lg:grid-cols-4">
            {offerFamilies.map((family) => (
              <article key={family.title} className="panel p-6">
                <h2 className="text-2xl font-black text-brand-black">{family.title}</h2>
                <ul className="mt-7 space-y-4">
                  {family.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-brand-ink/72">
                      <CheckCircle2 size={17} className="mt-1 shrink-0 text-brand-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-offwhite">
        <div className="page-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-4">Landing pages offres</p>
              <h2 className="display-lg">Choisir par objectif, maturité et niveau d’urgence.</h2>
            </div>
            <NavLink to="/par-ou-commencer" className="btn-secondary">
              Par où commencer ?
            </NavLink>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {offerList.map((offer) => (
              <NavLink key={offer.slug} to={offer.url} className="group border border-brand-line bg-white p-6 transition hover:border-brand-accent hover:bg-brand-black">
                <p className="text-xs font-black uppercase text-brand-accent">{offer.category}</p>
                <h3 className="mt-4 text-2xl font-black text-brand-black transition group-hover:text-white">{offer.title}</h3>
                <p className="mt-4 min-h-14 text-sm leading-7 text-brand-ink/65 transition group-hover:text-white/68">{offer.enClair}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-brand-black transition group-hover:text-brand-accent">
                  Voir l’offre
                  <ArrowRight size={16} />
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-black text-white">
        <div className="page-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-sm font-black uppercase text-brand-accent">Qualification</p>
            <h2 className="display-lg max-w-3xl text-white">Un brief avant toute recommandation sérieuse.</h2>
          </div>
          <NavLink to="/brief-cadrage-strategique" className="inline-flex items-center justify-center gap-3 bg-white px-7 py-5 text-sm font-black text-brand-black transition hover:bg-brand-accent hover:text-white">
            Remplir le brief stratégique
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
