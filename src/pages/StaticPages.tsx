import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { globalFaq, lexicon, partners } from '../data/siteContent';

type StaticPageKind = 'ecosystem' | 'faq' | 'lexique' | 'legal' | 'privacy' | 'cookies' | 'terms';

export function StaticPage({ kind }: { kind: StaticPageKind }) {
  if (kind === 'faq') return <FAQPage />;
  if (kind === 'lexique') return <LexiconPage />;
  if (kind === 'ecosystem') return <EcosystemPage />;
  return <LegalPage kind={kind as 'legal' | 'privacy' | 'cookies' | 'terms'} />;
}

function EcosystemPage() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line/40">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow mb-6">Écosystème & Partenaires</p>
          <h1 className="display-xl">Le bon écosystème autour du bon enjeu.</h1>
          <p className="mt-8 max-w-2xl text-lg font-light leading-9 text-brand-ink/55">
            Certains projets nécessitent plusieurs expertises. J'interviens comme point d'entrée stratégique et mobilise les partenaires pertinents.
          </p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="page-shell grid gap-8 md:grid-cols-3">
          {partners.map((partner) => (
            <article key={partner.name}>
              <p className="eyebrow mb-3">{partner.expertise}</p>
              <h2 className="font-serif text-2xl font-normal text-brand-black">{partner.name}</h2>
              <p className="mt-4 text-sm font-light leading-7 text-brand-ink/55">{partner.role}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad border-t border-brand-line/40 bg-brand-black text-white">
        <div className="page-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="display-md max-w-xl text-white">Construire un projet avec le bon écosystème.</h2>
          <NavLink to="/contact" className="btn-primary bg-white text-brand-black hover:bg-brand-accent hover:text-white">
            Prendre rendez-vous
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}

function FAQPage() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line/40">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow mb-6">FAQ</p>
          <h1 className="display-xl">Questions fréquentes.</h1>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="page-shell mx-auto max-w-3xl divide-y divide-brand-line/40">
          {globalFaq.map((item) => (
            <article key={item.q} className="py-8">
              <h2 className="font-serif text-xl font-normal text-brand-black">{item.q}</h2>
              <p className="mt-3 text-base font-light leading-8 text-brand-ink/55">{item.a}</p>
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
      <section className="section-pad border-b border-brand-line/40">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow mb-6">Lexique</p>
          <h1 className="display-xl">Marketing, branding & digital growth.</h1>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="page-shell grid gap-8 md:grid-cols-2">
          {lexicon.map((item) => (
            <article key={item.term}>
              <h2 className="font-serif text-xl font-normal text-brand-black">{item.term}</h2>
              <p className="mt-3 text-sm font-light leading-7 text-brand-ink/55">{item.definition}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function LegalPage({ kind }: { kind: 'legal' | 'privacy' | 'cookies' | 'terms' }) {
  const pages = {
    legal: {
      title: 'Mentions légales',
      text: 'Le présent site est édité par Haby TALL, Brand, Marketing & Digital Growth Strategist, Abidjan, Côte d’Ivoire. Email, statut juridique, numéro d’immatriculation, numéro fiscal et hébergeur à compléter.'
    },
    privacy: {
      title: 'Politique de confidentialité',
      text: 'Les données collectées via les formulaires sont utilisées pour répondre aux demandes, analyser les briefs, proposer un accompagnement adapté, gérer la relation commerciale et améliorer le site. Les données ne sont pas vendues à des tiers.'
    },
    cookies: {
      title: 'Politique de cookies',
      text: 'Le site peut utiliser des cookies nécessaires au fonctionnement, de mesure d’audience, de performance ou marketing si activés. Un bandeau cookies permet d’accepter, refuser ou paramétrer les cookies non essentiels.'
    },
    terms: {
      title: 'Conditions générales de vente',
      text: 'Les CGV encadrent les prestations de conseil, stratégie marketing, communication, digital growth, social media, production, sites web, films, workshops et accompagnements. Toute validation de devis vaut acceptation des CGV.'
    }
  }[kind];

  return (
    <section className="section-pad">
      <div className="page-shell mx-auto max-w-3xl">
        <p className="eyebrow mb-6">Légal</p>
        <h1 className="display-lg">{pages.title}</h1>
        <div className="mt-10 bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <p className="text-base font-light leading-8 text-brand-ink/60">{pages.text}</p>
          <p className="mt-6 text-sm font-light italic text-brand-ink/35">Modèle à faire relire par un professionnel du droit avant publication.</p>
        </div>
      </div>
    </section>
  );
}
