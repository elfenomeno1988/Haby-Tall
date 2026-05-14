import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { methodSteps } from '../data/siteContent';

export function Method() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line/40">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow mb-6">Méthode</p>
          <h1 className="display-xl">Clarifier. Structurer. Activer. Piloter.</h1>
          <p className="mt-8 max-w-3xl text-lg font-light leading-9 text-brand-ink/60">
            Chaque accompagnement commence par une question simple : quel est le vrai problème derrière la demande exprimée ?
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell max-w-4xl">
          <div className="space-y-8 font-serif text-xl font-light italic leading-relaxed text-brand-ink/70">
            <p>Une demande de visibilité peut cacher un problème de positionnement.</p>
            <p>Une demande de contenu peut révéler une absence de territoire éditorial.</p>
            <p>Une baisse de performance peut venir d'un parcours client mal structuré.</p>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-brand-line/40">
        <div className="page-shell">
          <div className="divide-y divide-brand-line/50">
            {methodSteps.map((step, i) => (
              <div key={step.title} className="grid gap-6 py-12 md:grid-cols-[auto_1fr_2fr] md:items-baseline md:gap-12">
                <span className="step-number">0{i + 1}</span>
                <h2 className="font-serif text-4xl font-normal text-brand-black">{step.title}</h2>
                <p className="text-base font-light leading-9 text-brand-ink/60 md:max-w-lg">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-brand-line/40 bg-brand-black text-white">
        <div className="page-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="display-md max-w-2xl text-white">Le bon point de départ dépend de votre niveau de clarté.</h2>
          <NavLink to="/par-ou-commencer" className="btn-primary bg-white text-brand-black hover:bg-brand-accent hover:text-white">
            Trouver mon point d'entrée
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
