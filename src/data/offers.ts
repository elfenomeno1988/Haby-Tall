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
    slug: "diagnostic-360-brand-marketing-digital-growth",
    title: "Diagnostic 360",
    promise:
      "Identifier les vrais freins entre marque, contenus, canaux, parcours client et objectifs business.",
    price: "À partir de 650 000 FCFA",
    family: "cadrage",
  },
  {
    slug: "lancement-marque-strategie",
    title: "Fondation de marque & entrée en marché",
    promise:
      "Transformer une idée ou une activité intuitive en marque claire, crédible et prête au marché.",
    price: "À partir de 1 000 000 FCFA",
    family: "cadrage",
  },
  {
    slug: "strategie-social-media-growth",
    title: "Social Media Growth & Brand Leadership",
    promise:
      "Transformer les réseaux sociaux en canal de marque, de preuve, de demande et de conversion.",
    price: "À partir de 500 000 FCFA",
    family: "social",
  },
  {
    slug: "accompagnement-strategique-mensuel",
    title: "Pilotage stratégique mensuel",
    promise:
      "Garder le cap, arbitrer les priorités et faire progresser les actions dans la durée.",
    price: "À partir de 650 000 FCFA/mois",
    family: "pilotage",
  },
  {
    slug: "brand-to-demand-sprint",
    title: "Brand-to-Demand Sprint",
    promise:
      "Relier marque, contenu, paid media, influence, conversion et reporting en 3 mois.",
    price: "À partir de 3 000 000 FCFA",
    family: "activation",
  },
  {
    slug: "repositionnement-marque-montee-en-gamme",
    title: "Repositionnement & montée en gamme",
    promise:
      "Réaligner image, discours, supports et actions avec le niveau réel de la marque.",
    price: "À partir de 2 000 000 FCFA",
    family: "activation",
  },
  {
    slug: "optimisation-whatsapp-dm-to-sale",
    title: "WhatsApp / DM-to-Sale",
    promise:
      "Structurer le parcours entre contenu, DM, WhatsApp, relance et décision d'achat.",
    price: "Sur devis",
    family: "activation",
  },
  {
    slug: "strategie-linkedin-dirigeant",
    title: "Stratégie LinkedIn dirigeant",
    promise:
      "Transformer une expertise en prise de parole claire, crédible et régulière.",
    price: "Sur devis",
    family: "social",
  },
  {
    slug: "workshop-equipe-marketing-communication",
    title: "Workshop équipe",
    promise:
      "Aligner l'équipe sur les messages, la stratégie et les priorités de communication.",
    price: "À partir de 300 000 FCFA",
    family: "social",
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
    description:
      "Déployer les leviers de croissance et générer de la demande.",
  },
  {
    id: "social",
    title: "Social Media & Leadership",
    description:
      "Construire une présence sociale qui crée de la préférence et des résultats.",
  },
  {
    id: "pilotage",
    title: "Pilotage & accompagnement",
    description:
      "Un suivi stratégique continu pour maintenir le cap et scaler.",
  },
] as const;
