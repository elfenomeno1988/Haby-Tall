export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  categoryLabel: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "marque-visible-vs-marque-choisie",
    title:
      "Pourquoi une marque visible ne devient pas toujours une marque choisie",
    excerpt:
      "La visibilité ne suffit pas. Clarté du positionnement, promesse et cohérence sont les 3 piliers de la préférence de marque.",
    date: "5 mai 2026",
    category: "strategie-de-marque",
    categoryLabel: "Stratégie de marque",
    readTime: "6 min",
  },
  {
    slug: "diagnostic-360-identifier-blocages-marketing",
    title:
      "Diagnostic 360 : identifier ce qui bloque vraiment dans votre marketing digital",
    excerpt:
      "Une analyse systémique du positionnement, de la stratégie de contenu, des canaux digitaux et des indicateurs de performance.",
    date: "28 avril 2026",
    category: "marketing-digital",
    categoryLabel: "Marketing digital",
    readTime: "7 min",
  },
  {
    slug: "strategie-social-media-business-afrique-francophone",
    title:
      "Construire une stratégie social media orientée business en Afrique francophone",
    excerpt:
      "L'Afrique francophone a ses propres codes. WhatsApp et DM-to-Sale sont de vrais canaux de conversion. Mesurez les KPIs business, pas les vanity metrics.",
    date: "15 avril 2026",
    category: "social-media",
    categoryLabel: "Social Media",
    readTime: "8 min",
  },
];
