import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { methodSteps } from "@/data/method-steps";
import {
  allOfferPages,
  faqItems,
  lexiconItems,
  reassuranceItems,
  startRows,
} from "@/data/site-content";

const simplePages = {
  methode: {
    title: "Clarifier. Structurer. Activer. Piloter.",
    intro:
      "Chaque accompagnement commence par une question simple : quel est le vrai problème derrière la demande exprimée ? Une demande de visibilité peut cacher un problème de positionnement. Une demande de contenu peut révéler une absence de territoire éditorial. Une baisse de performance peut venir d’un parcours client mal structuré.",
  },
  "ecosysteme-partenaires": {
    title: "Écosystème & Partenaires",
    intro:
      "Certains projets nécessitent plusieurs expertises pour être correctement pensés, produits, déployés ou protégés. Haby TALL intervient comme point d’entrée stratégique : clarifier le besoin, structurer le périmètre et mobiliser les partenaires spécialisés lorsque c’est pertinent.",
    blocks: [
      ["The Mad Ones", "Branding & identité de marque. Transformer une plateforme stratégique en expression visuelle forte, cohérente et différenciante."],
      ["Cabinet 86", "Réputation, e-réputation & communication de crise. Accompagner les sujets sensibles de perception, confiance et maîtrise du discours."],
      ["Formateurs & experts associés", "Prise de parole, media training, négociation, business game et posture professionnelle."],
      ["Prestataires sélectionnés", "Web, vidéo, design, paid media, SEO et production. Les profils sont mobilisés selon le périmètre validé, jamais comme une addition automatique."],
      ["Rôle de Haby TALL", "Clarifier le besoin, cadrer les priorités, coordonner les expertises et garder la cohérence stratégique de la mission."],
      ["Quand mobiliser l’écosystème ?", "Lorsqu’un sujet demande une spécialité précise : identité visuelle, réputation, film, site web, campagne média, formation ou production."],
    ],
  },
  actualites: {
    title: "Actualités",
    intro:
      "Retrouvez ici les dernières nouvelles liées aux accompagnements, collaborations, interventions, formations, prises de parole, publications et projets en cours.",
    blocks: [
      ["Interventions & ateliers", "Cette section pourra annoncer les workshops, panels, masterclass et prises de parole autour de la marque, du digital growth et de la communication."],
      ["Collaborations", "Les nouvelles collaborations avec partenaires, agences, équipes internes ou prestataires spécialisés seront présentées ici."],
      ["Publications", "Les nouveaux articles, ressources, guides et contenus d’analyse pourront être relayés pour renforcer la visibilité organique."],
      ["Projets en cours", "Un espace pour montrer que l’activité est vivante sans divulguer d’informations confidentielles sur les missions."],
    ],
  },
  "medias-presse": {
    title: "Médias & Presse",
    intro:
      "Cette page rassemble les interviews, prises de parole, publications, apparitions médias et ressources presse liées à l’activité de Haby TALL.",
    blocks: [
      ["Kit média", "Haby TALL est consultante en stratégie marketing, marque, communication 360 et digital growth. Elle accompagne les marques, PME, agences et dirigeants dans leurs enjeux de positionnement, croissance digitale, social media, activation, réputation et pilotage stratégique."],
      ["Bio courte", "Haby TALL aide les marques à clarifier leur positionnement, structurer leur communication et activer les leviers digitaux nécessaires à leur croissance."],
      ["Sujets d’intervention", "Stratégie de marque, communication 360, social media growth, acquisition, conversion, réputation, leadership communication et pilotage stratégique."],
      ["Demandes médias", "Pour une interview, une citation, une intervention ou une prise de parole, utilisez la page contact afin de préciser le sujet, le média, le format et le délai."],
    ],
  },
  temoignages: {
    title: "Témoignages",
    intro:
      "Une sélection de retours clients viendra renforcer la preuve sociale autour des accompagnements, ateliers, diagnostics et dispositifs de croissance.",
    blocks: [
      ["Diagnostic & clarté", "“Le diagnostic nous a permis d’identifier le vrai blocage : notre offre était claire pour nous, mais pas pour nos prospects.”"],
      ["Social media & conversion", "“Nous sommes passés d’une logique de publication à une logique de preuve, de demande et de suivi commercial.”"],
      ["Repositionnement", "“Le travail de repositionnement a réaligné notre discours avec le niveau réel de notre marque.”"],
      ["Pilotage", "“Le pilotage mensuel nous a aidés à arbitrer plus vite et à garder une cohérence dans nos actions.”"],
    ],
  },
  "partenariats-prestataires": {
    title: "Partenariats prestataires",
    intro:
      "Vous souhaitez rejoindre un réseau de prestataires mobilisables sur des projets de stratégie, communication, digital growth ou production ? Présentez votre expertise, vos références et votre disponibilité.",
    blocks: [
      ["Profils recherchés", "Développement web, design, branding, production vidéo, motion design, shooting, paid media, SEO/SEA, CRM, social media et support commercial."],
      ["Informations à préparer", "Métier, spécialité, portfolio, références, modalités de collaboration, disponibilité, pays d’intervention et contact professionnel."],
      ["Mode de collaboration", "Les prestataires sont mobilisés selon le besoin, le périmètre validé, le niveau d’exigence et la compatibilité avec le projet."],
      ["Prochaine étape", "Envoyez une présentation courte avec vos références et votre disponibilité via la page contact."],
    ],
  },
  affiliations: {
    title: "Affiliations",
    intro:
      "Vous représentez un outil, une solution, une plateforme ou un service pouvant servir les marques accompagnées ? Présentez votre proposition afin qu’elle soit étudiée.",
    blocks: [
      ["Types de collaborations", "Outils marketing, CRM, analytics, social media, production, automatisation, hébergement, formation ou solutions métier."],
      ["Informations attendues", "Entreprise, type de collaboration, outil ou service, marché ciblé, proposition de valeur, conditions de partenariat et contact."],
      ["Critères de sélection", "Utilité réelle pour les marques accompagnées, fiabilité, qualité de l’expérience, clarté des conditions et cohérence avec l’éthique de recommandation."],
      ["Cadre", "Toute affiliation ou recommandation commerciale doit rester transparente, pertinente et utile pour les clients."],
    ],
  },
  "mentions-legales": {
    title: "Mentions légales",
    intro:
      "Le présent site est édité par Haby TALL, Brand, Marketing & Digital Growth Strategist, Abidjan, Côte d’Ivoire. Email, statut juridique, numéro d’immatriculation, numéro fiscal et hébergeur à compléter. L’ensemble des contenus présents sur ce site est protégé par les règles relatives à la propriété intellectuelle.",
    blocks: [
      ["Éditeur du site", "Haby TALL, Brand, Marketing & Digital Growth Strategist. Abidjan, Côte d’Ivoire. Les informations administratives complètes devront être ajoutées avant publication définitive."],
      ["Hébergement", "Hébergeur, adresse, contact technique et informations légales à compléter selon la solution retenue pour la mise en ligne finale."],
      ["Propriété intellectuelle", "Les textes, contenus, visuels, marques, éléments graphiques et ressources présents sur ce site sont protégés. Toute reproduction non autorisée est interdite."],
      ["Responsabilité", "Les informations du site sont fournies à titre professionnel et peuvent évoluer. Les textes juridiques devront être relus par un professionnel du droit avant publication finale."],
    ],
  },
  confidentialite: {
    title: "Politique de confidentialité",
    intro:
      "Les données collectées via les formulaires sont utilisées pour répondre aux demandes, analyser les briefs, proposer un accompagnement adapté, gérer la relation commerciale et améliorer le site. Les données ne sont pas vendues à des tiers.",
    blocks: [
      ["Données collectées", "Nom, entreprise, email, WhatsApp, pays, objet de la demande, message, informations de brief, contexte de projet et préférences de contact."],
      ["Finalités", "Répondre aux demandes, analyser les briefs, orienter vers la bonne offre, préparer une proposition, gérer la relation commerciale et améliorer l’expérience du site."],
      ["Confidentialité", "Les informations sensibles partagées dans un brief, un diagnostic ou une mission sont traitées avec discrétion et ne sont pas vendues à des tiers."],
      ["Droits des utilisateurs", "Les utilisateurs peuvent demander l’accès, la rectification ou la suppression de leurs données en écrivant via le contact du site."],
      ["Sous-traitance", "Certains partenaires peuvent être mobilisés dans le cadre d’une mission, uniquement lorsque cela sert le périmètre validé."],
    ],
  },
  cookies: {
    title: "Politique de cookies",
    intro:
      "Le site peut utiliser des cookies nécessaires au fonctionnement, de mesure d’audience, de performance ou marketing si activés. Un bandeau cookies doit permettre d’accepter, refuser ou paramétrer les cookies non essentiels.",
    blocks: [
      ["Cookies nécessaires", "Ils permettent le bon fonctionnement du site, la navigation, la sécurité et l’accès aux fonctionnalités essentielles."],
      ["Mesure d’audience", "Des outils d’analyse peuvent être activés pour comprendre les pages consultées, les parcours, les clics CTA et les conversions."],
      ["Cookies marketing", "Ils peuvent être utilisés si des campagnes ou pixels publicitaires sont configurés. Ils doivent rester paramétrables par l’utilisateur."],
      ["Gestion du consentement", "Un bandeau cookies devra permettre d’accepter, refuser ou personnaliser les cookies non essentiels avant publication finale."],
    ],
  },
  cgv: {
    title: "Conditions générales de vente",
    intro:
      "Les CGV encadrent les prestations de conseil, stratégie marketing, communication, digital growth, social media, production, sites web, films, workshops et accompagnements. Les textes devront être relus par un professionnel du droit avant publication.",
    blocks: [
      ["Cadre", "Toute mission est encadrée par une proposition ou un devis précisant le périmètre, les livrables, les délais, les responsabilités et les conditions de validation."],
      ["Prestations", "Conseil, stratégie marketing, communication, digital growth, social media, sites web, production, films, workshops, formations et accompagnements."],
      ["Validation", "Toute validation de devis vaut acceptation du cadre de mission. Les éléments non mentionnés ne sont pas inclus automatiquement et peuvent faire l’objet d’un complément."],
      ["Retours & livrables", "Les retours, allers-retours, formats de livraison, fichiers sources, droits tiers et éléments non retenus doivent être précisés dans le cadre de mission."],
      ["Confidentialité", "Les informations partagées dans un brief, diagnostic ou une mission sont traitées avec confidentialité."],
      ["Sous-traitance", "Des partenaires ou prestataires peuvent être mobilisés selon les besoins, dans un cadre défini et au service de la mission validée."],
      ["Important", "Cette page constitue un modèle de travail. Elle devra être relue, adaptée et validée par un professionnel du droit avant publication définitive."],
    ],
  },
} as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...allOfferPages.map((page) => ({ slug: page.slug })),
    ...Object.keys(simplePages).map((slug) => ({ slug })),
    { slug: "par-ou-commencer" },
    { slug: "faq" },
    { slug: "lexique-marketing-digital-branding" },
  ];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const offerPage = allOfferPages.find((page) => page.slug === params.slug);
  const simplePage = simplePages[params.slug as keyof typeof simplePages];

  return {
    title: offerPage?.title ?? simplePage?.title ?? "Haby TALL",
    description: offerPage?.enClair ?? simplePage?.intro ?? "Brand, Marketing & Digital Growth Strategist",
  };
}

function PageHero({ label, title, intro }: { label: string; title: string; intro: string }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="max-w-4xl">
          <div className="mb-5 h-[2px] w-12 bg-brand-green" />
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray-light">
            {label}
          </p>
          <h1 className="mt-4 font-heading text-[clamp(2.6rem,5vw,4.6rem)] font-bold leading-[1.08]">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-[18px] leading-[1.6] text-brand-gray">
            {intro}
          </p>
        </div>
      </div>
    </section>
  );
}

function ListBlock({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="rounded-sm bg-brand-cream/50 p-7">
      <h2 className="font-heading text-[1.35rem] font-bold">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-brand-gray">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function OfferPage({ slug }: { slug: string }) {
  const page = allOfferPages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <>
      <PageHero label="Offre" title={page.title} intro={page.hero} />
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 lg:grid-cols-[1fr_360px] lg:px-16">
          <div className="space-y-8">
            <div className="border-l-[3px] border-brand-green bg-brand-cream/50 p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-green">
                En clair
              </p>
              <p className="mt-3 text-[20px] font-semibold leading-snug text-brand-anthracite">
                {page.enClair}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <ListBlock title="Cette offre est faite pour vous si..." items={page.forWhom} />
              <ListBlock title="Ce que nous travaillons" items={page.work} />
              <ListBlock title="Inclus" items={page.included} />
              <ListBlock title="Non inclus par défaut" items={page.excluded} />
            </div>
            <div className="rounded-sm border border-brand-border/60 p-8">
              <h2 className="font-heading text-[1.5rem] font-bold">FAQ</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {page.faq.map(([question, answer]) => (
                  <div key={question}>
                    <h3 className="text-[15px] font-bold text-brand-anthracite">{question}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-brand-gray">{answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="h-fit rounded-sm bg-brand-green p-8 text-brand-offwhite lg:sticky lg:top-24">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-offwhite/45">
              Format
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-offwhite/70">{page.format}</p>
            <div className="mt-8 border-t border-brand-offwhite/10 pt-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-offwhite/45">
                Vous pourriez aussi avoir besoin de
              </p>
              <ul className="mt-4 space-y-2 text-[14px] text-brand-offwhite/65">
                {page.related.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand-offwhite px-6 py-4 text-[14px] font-bold text-brand-green"
            >
              {page.cta}
              <ArrowRight size={15} />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}

function StartPage() {
  return (
    <>
      <PageHero
        label="Par où commencer ?"
        title="Vous ne savez pas quelle offre choisir ?"
        intro="Chaque marque n’a pas besoin du même accompagnement au même moment. Cette page vous aide à identifier le bon point de départ."
      />
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <div className="overflow-hidden rounded-sm border border-brand-border/60">
            {startRows.map(([situation, offer, cta, href]) => (
              <div key={situation} className="grid gap-4 border-b border-brand-border/60 p-6 last:border-b-0 md:grid-cols-[1.2fr_1fr_auto] md:items-center">
                <p className="font-semibold text-brand-anthracite">{situation}</p>
                <p className="text-brand-gray">{offer}</p>
                <Link href={href} className="inline-flex items-center gap-2 text-[14px] font-bold text-brand-green">
                  {cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MethodPage() {
  return (
    <>
      <PageHero label="Méthode" title={simplePages.methode.title} intro={simplePages.methode.intro} />
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-6 md:grid-cols-2 lg:px-16">
          {methodSteps.map((step) => (
            <article key={step.number} className="rounded-sm border border-brand-border/60 bg-brand-offwhite p-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand-green">
                {step.number}
              </p>
              <h2 className="mt-4 font-heading text-[2rem] font-bold">{step.title}</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-brand-gray">{step.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function FaqPage() {
  return (
    <>
      <PageHero label="FAQ" title="Questions fréquentes" intro="Les réponses aux questions les plus courantes sur l’approche, les offres, les budgets et le cadre de collaboration." />
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-6 md:grid-cols-2 lg:px-16">
          {faqItems.map(([question, answer]) => (
            <div key={question} className="rounded-sm bg-brand-cream/50 p-7">
              <h2 className="text-[17px] font-bold">{question}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-gray">{answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function LexiconPage() {
  return (
    <>
      <PageHero label="Lexique" title="Lexique marketing, branding & digital growth" intro="Ce lexique rassemble les principaux termes utilisés en stratégie de marque, marketing digital, communication, social media, conversion, réputation et croissance." />
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-[1400px] gap-5 px-6 md:grid-cols-2 lg:px-16">
          {lexiconItems.map(([term, definition]) => (
            <div key={term} className="rounded-sm border-l-[3px] border-brand-green bg-brand-cream/40 p-7">
              <h2 className="font-heading text-[1.25rem] font-bold">{term}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-gray">{definition}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function SimplePage({ slug }: { slug: keyof typeof simplePages }) {
  const page = simplePages[slug];
  return (
    <>
      <PageHero label="Ressource" title={page.title} intro={page.intro} />
      {"blocks" in page && (
        <section className="pb-20 lg:pb-28">
          <div className="mx-auto grid max-w-[1200px] gap-6 px-6 md:grid-cols-2 lg:px-16">
            {page.blocks.map(([title, text]) => (
              <article key={title} className="rounded-sm bg-brand-cream/50 p-8">
                <h2 className="font-heading text-[1.5rem] font-bold">{title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-brand-gray">{text}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
  if (allOfferPages.some((page) => page.slug === params.slug)) return <OfferPage slug={params.slug} />;
  if (params.slug === "par-ou-commencer") return <StartPage />;
  if (params.slug === "methode") return <MethodPage />;
  if (params.slug === "faq") return <FaqPage />;
  if (params.slug === "lexique-marketing-digital-branding") return <LexiconPage />;
  if (params.slug in simplePages) return <SimplePage slug={params.slug as keyof typeof simplePages} />;
  notFound();
}
