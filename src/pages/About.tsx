import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { brandAssets } from '../data/siteContent';

const territories = [
  'Stratégie de marque', 'Positionnement', 'Marketing digital', 'Communication 360',
  'Digital growth', 'Social media', 'Brand content', 'Acquisition & conversion',
  'CRM & nurturing', 'Sites web', 'Production de contenus', 'Réputation',
  'Formation', 'Pilotage & reporting'
];

export function About() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line/40">
        <div className="page-shell grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="flex flex-col items-start gap-8">
            <img
              src={brandAssets.signatureBlack}
              alt="Haby Tall"
              className="h-20 w-64 object-contain object-left"
            />
            <img
              src={brandAssets.monogramBlack}
              alt=""
              className="h-32 w-32 object-contain opacity-10"
            />
          </div>
          <div>
            <p className="eyebrow mb-6">À propos</p>
            <h1 className="display-xl">Faisons connaissance.</h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-9 text-brand-ink/60">
              Consultante en stratégie marketing, marque, communication 360 et croissance digitale. Mon parcours entre agence, annonceur, entrepreneuriat et conseil me permet d'aborder les marques avec une double lecture : la stratégie qui donne le cap et le terrain qui oblige à rester concret.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <RevealOnScroll className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-4">Posture</p>
            <h2 className="display-md">La clarté avant la visibilité.</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15} className="space-y-8 text-base font-light leading-9 text-brand-ink/60">
            <p>J'interviens sur des enjeux de positionnement, intelligence marché, communication 360, contenus, performance digitale, acquisition, conversion, CRM et pilotage opérationnel.</p>
            <p>Avec mon équipe et mes partenaires, j'active les leviers qui servent la stratégie globale : social media, contenu, paid media, influence, SEO/SEA, production audiovisuelle, sites web, réputation et formation.</p>
            <p className="font-serif text-xl font-normal italic text-brand-ink/80">
              Avant de chercher à être plus visible, une marque doit souvent redevenir plus lisible. Une fois la direction clarifiée, elle doit aussi savoir s'activer, se mesurer et progresser.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-pad">
        <RevealOnScroll className="page-shell">
          <p className="eyebrow mb-6">Territoires d'intervention</p>
          <h2 className="display-md mb-12 max-w-3xl">Un périmètre pensé pour relier marque, contenus, canaux et conversion.</h2>
          <p className="flex flex-wrap gap-x-2 gap-y-1 font-serif text-xl font-light leading-relaxed text-brand-ink/50">
            {territories.map((t, i) => (
              <span key={t}>
                <span className="text-brand-ink/70">{t}</span>
                {i < territories.length - 1 && <span className="text-brand-line"> &middot;</span>}
              </span>
            ))}
          </p>
          <p className="mt-8 text-sm font-light text-brand-ink/40">
            Côte d'Ivoire &middot; Afrique francophone &middot; France &middot; Marchés hybrides
          </p>
        </RevealOnScroll>
      </section>

      <section className="section-pad border-t border-brand-line/40 bg-brand-black text-white">
        <div className="page-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow mb-4 text-brand-gold/60">Prochaine étape</p>
            <h2 className="display-md max-w-2xl text-white">Clarifier votre besoin avant toute recommandation.</h2>
          </div>
          <NavLink to="/contact" className="btn-primary bg-white text-brand-black hover:bg-brand-accent hover:text-white">
            Prendre rendez-vous
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
