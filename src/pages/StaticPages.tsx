import { ArrowRight, BriefcaseBusiness, FileText, Handshake, Newspaper, ShieldCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { globalFaq, lexicon, partners } from '../data/siteContent';

type StaticPageKind =
  | 'realisations'
  | 'ecosystem'
  | 'actualites'
  | 'medias'
  | 'faq'
  | 'lexique'
  | 'partenariats'
  | 'affiliations'
  | 'legal'
  | 'privacy'
  | 'cookies'
  | 'terms';

export function StaticPage({ kind }: { kind: StaticPageKind }) {
  if (kind === 'faq') return <FAQPage />;
  if (kind === 'lexique') return <LexiconPage />;
  if (kind === 'ecosystem') return <EcosystemPage />;
  if (['legal', 'privacy', 'cookies', 'terms'].includes(kind)) return <LegalPage kind={kind} />;

  const content = {
    realisations: {
      eyebrow: 'Réalisations',
      title: 'Prouver l’expertise par situations, secteurs et résultats.',
      body: 'Chaque projet raconte une situation de marque : lancement, repositionnement, relance, structuration, visibilité, conversion ou montée en gamme.',
      icon: BriefcaseBusiness,
      cards: ['Lancement', 'Repositionnement', 'Social Media Growth', 'Site web & landing pages', 'Réputation', 'Brand-to-Demand']
    },
    actualites: {
      eyebrow: 'Actualités',
      title: 'Une activité vivante, visible et partageable.',
      body: 'Retrouvez ici les dernières nouvelles liées aux accompagnements, collaborations, interventions, formations, prises de parole, publications et projets en cours.',
      icon: Newspaper,
      cards: ['Interventions', 'Partenariats', 'Formations', 'Publications', 'Projets en cours', 'Nouveautés']
    },
    medias: {
      eyebrow: 'Médias & Presse',
      title: 'Centraliser les ressources presse et prises de parole.',
      body: 'Cette page rassemble les interviews, prises de parole, publications, apparitions médias et ressources presse liées à l’activité.',
      icon: FileText,
      cards: ['Bio courte', 'Interviews', 'Tribunes', 'Podcasts', 'Kit média', 'Photos presse']
    },
    partenariats: {
      eyebrow: 'Partenariats prestataires',
      title: 'Collecter les profils de partenaires potentiels.',
      body: 'Les prestataires peuvent présenter leur métier, spécialité, portfolio, références, tarifs, disponibilité, pays et contact.',
      icon: Handshake,
      cards: ['Web', 'Vidéo', 'Design', 'Paid media', 'SEO', 'Production']
    },
    affiliations: {
      eyebrow: 'Affiliations',
      title: 'Cadrer les collaborations commerciales et outils recommandés.',
      body: 'Les entreprises peuvent présenter leur type de collaboration, outil ou service, marché, proposition et contact.',
      icon: ShieldCheck,
      cards: ['Outils', 'Plateformes', 'Services', 'Collaboration', 'Marché', 'Proposition']
    }
  }[kind];

  const Icon = content.icon;

  return (
    <div>
      <section className="section-pad border-b border-brand-line bg-brand-offwhite">
        <div className="page-shell max-w-5xl">
          <p className="eyebrow mb-5">{content.eyebrow}</p>
          <h1 className="display-xl">{content.title}</h1>
          <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-brand-ink/72">{content.body}</p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="page-shell grid gap-4 md:grid-cols-3">
          {content.cards.map((card) => (
            <article key={card} className="panel p-6">
              <Icon className="mb-8 text-brand-accent" size={24} />
              <h2 className="text-2xl font-black text-brand-black">{card}</h2>
              <p className="mt-4 text-sm leading-7 text-brand-ink/65">Bloc prêt à alimenter avec contenu, preuve, lien interne et appel à l’action.</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </div>
  );
}

function EcosystemPage() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line bg-brand-offwhite">
        <div className="page-shell max-w-5xl">
          <p className="eyebrow mb-5">Écosystème & Partenaires</p>
          <h1 className="display-xl">Le bon écosystème autour du bon enjeu.</h1>
          <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-brand-ink/72">
            Certains projets nécessitent plusieurs expertises pour être correctement pensés, produits, déployés ou protégés. Haby intervient comme point d’entrée stratégique.
          </p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="page-shell grid gap-4 md:grid-cols-2">
          {partners.map((partner) => (
            <article key={partner.name} className="panel p-6">
              <p className="eyebrow mb-4">{partner.expertise}</p>
              <h2 className="text-3xl font-black text-brand-black">{partner.name}</h2>
              <p className="mt-5 text-base leading-8 text-brand-ink/70">{partner.role}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA label="Construire un projet avec le bon écosystème" />
    </div>
  );
}

function FAQPage() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line bg-brand-offwhite">
        <div className="page-shell max-w-5xl">
          <p className="eyebrow mb-5">FAQ globale</p>
          <h1 className="display-xl">Lever les objections avant le premier échange.</h1>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="page-shell max-w-4xl space-y-3">
          {globalFaq.map((item) => (
            <article key={item.q} className="panel p-6">
              <h2 className="text-xl font-black text-brand-black">{item.q}</h2>
              <p className="mt-4 text-base leading-7 text-brand-ink/70">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function LexiconPage() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line bg-brand-offwhite">
        <div className="page-shell max-w-5xl">
          <p className="eyebrow mb-5">Lexique marketing, branding & digital growth</p>
          <h1 className="display-xl">Définitions claires pour SEO, GEO et pédagogie commerciale.</h1>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="page-shell grid gap-4 md:grid-cols-2">
          {lexicon.map((item) => (
            <article key={item.term} className="panel p-6">
              <h2 className="text-2xl font-black text-brand-black">{item.term}</h2>
              <p className="mt-4 text-base leading-7 text-brand-ink/70">{item.definition}</p>
              <p className="mt-5 text-sm font-bold text-brand-accent">À relier à une offre ou un article associé.</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function LegalPage({ kind }: { kind: StaticPageKind }) {
  const pages = {
    legal: {
      title: 'Mentions légales',
      text: 'Le présent site est édité par Haby TALL, Brand, Marketing & Digital Growth Strategist, Abidjan, Côte d’Ivoire. Email, statut juridique, numéro d’immatriculation, numéro fiscal et hébergeur à compléter.'
    },
    privacy: {
      title: 'Politique de confidentialité',
      text: 'Les données collectées via les formulaires sont utilisées pour répondre aux demandes, analyser les briefs, proposer un accompagnement adapté, gérer la relation commerciale et améliorer le site.'
    },
    cookies: {
      title: 'Politique de cookies',
      text: 'Le site peut utiliser des cookies nécessaires au fonctionnement, de mesure d’audience, de performance ou marketing si activés. Un bandeau cookies doit permettre d’accepter, refuser ou paramétrer les cookies non essentiels.'
    },
    terms: {
      title: 'Conditions générales de vente',
      text: 'Les CGV encadrent les prestations de conseil, stratégie marketing, communication, digital growth, social media, production, sites web, films, workshops et accompagnements. Toute validation de devis vaut acceptation des CGV.'
    }
  }[kind as 'legal' | 'privacy' | 'cookies' | 'terms'];

  return (
    <section className="section-pad bg-brand-offwhite">
      <div className="page-shell max-w-4xl">
        <p className="eyebrow mb-5">Légal</p>
        <h1 className="display-xl">{pages.title}</h1>
        <div className="panel mt-10 p-6">
          <p className="text-lg leading-8 text-brand-ink/72">{pages.text}</p>
          <p className="mt-6 text-sm font-bold text-brand-accent">Modèle à faire relire par un professionnel du droit avant publication.</p>
        </div>
      </div>
    </section>
  );
}

function CTA({ label = 'Remplir le brief stratégique' }: { label?: string }) {
  return (
    <section className="section-pad bg-brand-accent text-white">
      <div className="page-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <h2 className="display-lg max-w-3xl text-white">Transformer cette page en point de conversion.</h2>
        <NavLink to="/brief-cadrage-strategique" className="inline-flex items-center justify-center gap-3 bg-white px-7 py-5 text-sm font-black text-brand-black transition hover:bg-brand-black hover:text-white">
          {label}
          <ArrowRight size={18} />
        </NavLink>
      </div>
    </section>
  );
}
