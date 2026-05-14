import { ArrowRight, BarChart3, Compass, Layers3, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { methodSteps } from '../data/siteContent';

const icons = [Compass, Layers3, Zap, BarChart3];
const deeper = [
  'Une demande de visibilité peut cacher un problème de positionnement.',
  'Une demande de contenu peut révéler une absence de territoire éditorial.',
  'Une baisse de performance peut venir d’un parcours client mal structuré.'
];

export function Method() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line bg-brand-offwhite">
        <div className="page-shell max-w-5xl">
          <p className="eyebrow mb-5">Méthode</p>
          <h1 className="display-xl">Clarifier. Structurer. Activer. Piloter.</h1>
          <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-brand-ink/72">
            Chaque accompagnement commence par une question simple : quel est le vrai problème derrière la demande exprimée ?
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell grid gap-6 md:grid-cols-3">
          {deeper.map((item) => (
            <div key={item} className="border-l-4 border-brand-accent bg-brand-offwhite p-6 text-lg font-bold leading-8 text-brand-black">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-brand-black text-white">
        <div className="page-shell">
          <div className="grid gap-6">
            {methodSteps.map((step, index) => {
              const Icon = icons[index];
              return (
                <article key={step.title} className="grid gap-6 border border-white/12 p-6 md:grid-cols-[180px_1fr_1.3fr] md:items-center">
                  <div className="flex items-center gap-5">
                    <span className="text-4xl font-black text-white/18">0{index + 1}</span>
                    <Icon size={28} className="text-brand-accent" />
                  </div>
                  <h2 className="text-3xl font-black text-white">{step.title}</h2>
                  <p className="text-base leading-7 text-white/68">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-offwhite">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4">Activation responsable</p>
            <h2 className="display-lg">La production n’est activée que lorsqu’elle sert une stratégie validée.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Social media', 'Paid media', 'Influence', 'SEO / SEA', 'CRM', 'WhatsApp', 'Site web', 'Film & production'].map((lever) => (
              <div key={lever} className="panel p-5 text-base font-bold text-brand-black">{lever}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-accent text-white">
        <div className="page-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="display-lg max-w-3xl text-white">Le bon point de départ dépend de votre niveau de clarté.</h2>
          <NavLink to="/par-ou-commencer" className="inline-flex items-center justify-center gap-3 bg-white px-7 py-5 text-sm font-black text-brand-black transition hover:bg-brand-black hover:text-white">
            Trouver mon point d’entrée
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
