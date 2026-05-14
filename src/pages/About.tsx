import { ArrowRight, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { brandAssets } from '../data/siteContent';

const territories = [
  'Stratégie de marque',
  'Positionnement',
  'Marketing digital',
  'Communication 360',
  'Digital growth',
  'Social media',
  'Brand content',
  'Acquisition & conversion',
  'CRM / nurturing',
  'Sites web & landing pages',
  'Production de contenus',
  'Réputation / e-réputation',
  'Formation / media training',
  'Pilotage & reporting'
];

export function About() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line bg-brand-offwhite">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="bg-brand-black p-8 text-white">
            <img src={brandAssets.monogramWhite} alt="" className="h-32 w-32 object-contain" />
            <img src={brandAssets.signatureWhite} alt="Signature Haby Tall" className="mt-24 h-20 w-64 object-contain object-left" />
          </div>
          <div>
            <p className="eyebrow mb-5">À propos</p>
            <h1 className="display-xl">Bienvenue. Faisons connaissance.</h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-brand-ink/72">
              Je suis Haby TALL, consultante en stratégie marketing, marque, communication 360 et croissance digitale. Mon parcours s’est construit entre agence, annonceur, entrepreneuriat et conseil.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-4">Posture</p>
            <h2 className="text-4xl font-black leading-tight text-brand-black">Stratégie qui donne le cap. Terrain qui oblige à rester concret.</h2>
          </aside>
          <div className="space-y-7 text-lg leading-9 text-brand-ink/72">
            <p>Cette trajectoire me permet d’aborder les marques avec une double lecture : celle de la stratégie qui donne le cap, et celle du terrain qui oblige à rester concret.</p>
            <p>J’interviens sur des enjeux de positionnement, intelligence marché, communication 360, contenus, performance digitale, acquisition, conversion, CRM, développement commercial et pilotage opérationnel.</p>
            <p>Avec mon équipe et mes partenaires, j’active les leviers nécessaires lorsque ceux-ci servent la stratégie globale : social media, contenu, paid media, influence, SEO/SEA, tracking, conversion, production audiovisuelle, sites web, réputation et formation.</p>
            <p className="font-bold text-brand-black">Avant de chercher à être plus visible, une marque doit souvent redevenir plus lisible. Mais une fois la direction clarifiée, elle doit aussi savoir s’activer, se mesurer et progresser.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-offwhite">
        <div className="page-shell">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-4">Territoires d’intervention</p>
              <h2 className="display-lg">Un périmètre pensé pour relier marque, contenus, canaux et conversion.</h2>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-brand-ink/65">
              <MapPin size={18} className="text-brand-accent" />
              Côte d’Ivoire, Afrique francophone, France, marchés hybrides
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {territories.map((territory) => (
              <div key={territory} className="border border-brand-line bg-white px-5 py-4 text-sm font-bold text-brand-black">
                {territory}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-black text-white">
        <div className="page-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-sm font-black uppercase text-brand-accent">Prochaine étape</p>
            <h2 className="display-lg max-w-3xl text-white">Clarifier votre besoin avant de recommander une mission.</h2>
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
