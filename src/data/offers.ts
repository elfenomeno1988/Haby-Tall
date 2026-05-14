export interface Offer {
  slug: string;
  title: string;
  promise: string;
  price: string;
  tag?: string;
  family: string;
}

export const offers: Offer[] = [
  {
    slug: "session-cadrage-strategique",
    title: "Session de cadrage stratégique",
    promise: "Clarifier le besoin en 60 minutes.",
    price: "100 000 FCFA",
    tag: "Point de départ",
    family: "cadrage",
  },
  {
    slug: "brief-cadrage-strategique",
    title: "Brief de cadrage stratégique",
    promise: "Qualifier le besoin et préparer une recommandation adaptée.",
    price: "Gratuit",
    family: "cadrage",
  },
  {
    slug: "diagnostic-360-brand-marketing-digital-growth",
    title: "Diagnostic 360",
    promise: "Identifier ce qui bloque entre marque, contenus, canaux et conversion.",
    price: "À partir de 650 000 FCFA",
    family: "cadrage",
  },
  {
    slug: "lancement-marque-strategie",
    title: "Fondation de marque & entrée en marché",
    promise: "Transformer une idée en marque claire, crédible et prête au marché.",
    price: "À partir de 1 000 000 FCFA",
    family: "cadrage",
  },
  {
    slug: "repositionnement-marque-montee-en-gamme",
    title: "Repositionnement & montée en gamme",
    promise: "Réaligner image, discours et supports avec l'ambition de la marque.",
    price: "À partir de 2 000 000 FCFA",
    family: "cadrage",
  },
  {
    slug: "workshop-equipe-marketing-communication",
    title: "Workshop équipe / alignement marque",
    promise: "Aligner l'équipe sur les messages, la stratégie et les priorités.",
    price: "À partir de 300 000 FCFA",
    family: "cadrage",
  },
  {
    slug: "brand-to-demand-sprint",
    title: "Brand-to-Demand Sprint",
    promise: "Relier marque, contenus, acquisition, conversion et reporting.",
    price: "À partir de 3 000 000 FCFA",
    tag: "Sprint 3 mois",
    family: "activation",
  },
  {
    slug: "strategie-social-media-growth",
    title: "Social Media Growth",
    promise: "Faire des réseaux un canal de preuve, de demande et de conversion.",
    price: "Audit dès 500 000 FCFA",
    family: "activation",
  },
  {
    slug: "pilotage-strategique-mensuel",
    title: "Pilotage stratégique mensuel",
    promise: "Garder le cap, arbitrer les priorités et faire progresser les actions.",
    price: "À partir de 650 000 FCFA/mois",
    family: "activation",
  },
  {
    slug: "whatsapp-dm-to-sale",
    title: "WhatsApp / DM-to-Sale",
    promise: "Structurer le parcours entre contenu, DM, WhatsApp, relance et décision.",
    price: "Sur devis",
    family: "activation",
  },
  {
    slug: "strategie-linkedin-dirigeant",
    title: "Stratégie LinkedIn dirigeant",
    promise: "Transformer l'expertise en prise de parole claire et crédible.",
    price: "Sur devis",
    family: "activation",
  },
  {
    slug: "site-web-landing-pages",
    title: "Sites web & landing pages",
    promise: "Créer des dispositifs web qui clarifient, rassurent et convertissent.",
    price: "Sur devis",
    family: "production",
  },
  {
    slug: "films-publicitaires-brand-content",
    title: "Films publicitaires & brand content",
    promise: "Raconter la marque avec impact à partir d'un message clair.",
    price: "Sur devis",
    family: "production",
  },
  {
    slug: "reputation-communication-sensible",
    title: "Réputation & communication sensible",
    promise: "Anticiper, cadrer ou protéger la perception d'une marque ou d'un dirigeant.",
    price: "Sur devis",
    family: "leadership",
  },
  {
    slug: "formation-communication-leadership",
    title: "Formation & leadership communication",
    promise: "Prise de parole, media training, négociation, business game et posture.",
    price: "À partir de 300 000 FCFA",
    family: "leadership",
  },
];

export const offerFamilies = [
  {
    id: "cadrage",
    title: "Cadrage stratégique",
    description: "Comprendre, diagnostiquer et poser les bonnes bases.",
  },
  {
    id: "activation",
    title: "Activation & croissance digitale",
    description: "Relier les leviers digitaux à la demande, la conversion et au pilotage.",
  },
  {
    id: "production",
    title: "Production & déploiement digital",
    description: "Matérialiser la stratégie en site, landing pages, contenus et supports.",
  },
  {
    id: "leadership",
    title: "Réputation, formation & leadership",
    description: "Protéger la perception et renforcer la prise de parole.",
  },
] as const;
