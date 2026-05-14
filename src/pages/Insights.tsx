import { ArrowRight, BookOpen, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { insights, lexicon } from '../data/siteContent';

export function Insights() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line bg-brand-offwhite">
        <div className="page-shell max-w-5xl">
          <p className="eyebrow mb-5">Insights</p>
          <h1 className="display-xl">Analyses, ressources et décryptages pour créer de la préférence.</h1>
          <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-brand-ink/72">
            Une bibliothèque d’autorité sur les enjeux de marque, communication, marketing digital, social media, conversion, réputation et croissance.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-4">Blog / SEO / GEO</p>
              <h2 className="display-lg">Sujets prêts à publier.</h2>
            </div>
            <NavLink to="/lexique-marketing-digital-branding" className="btn-secondary">
              Voir le lexique
            </NavLink>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {insights.map((title, index) => (
              <article key={title} className="panel p-6">
                <div className="mb-8 flex items-center justify-between">
                  <BookOpen size={22} className="text-brand-accent" />
                  <span className="text-sm font-black text-brand-line">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-black leading-tight text-brand-black">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-brand-ink/65">Article à développer avec définition autonome, bloc “En clair”, FAQ courte et maillage vers une offre.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-offwhite">
        <div className="page-shell">
          <div className="mb-10">
            <p className="eyebrow mb-4">Lexique rapide</p>
            <h2 className="display-lg">Termes structurants pour la recherche conversationnelle.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {lexicon.slice(0, 6).map((item) => (
              <div key={item.term} className="bg-white p-6">
                <Search className="mb-6 text-brand-accent" size={22} />
                <h3 className="text-xl font-black text-brand-black">{item.term}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-ink/68">{item.definition}</p>
              </div>
            ))}
          </div>
          <NavLink to="/lexique-marketing-digital-branding" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-brand-accent">
            Consulter tout le lexique
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
