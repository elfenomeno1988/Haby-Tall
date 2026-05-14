export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  categoryLabel: string;
  readTime: string;
}

const topics = [
  "Pourquoi une marque visible ne devient pas toujours une marque choisie",
  "Comment savoir si votre marque a besoin d’un diagnostic 360 ?",
  "Un logo ne suffit pas à lancer une marque",
  "Pourquoi vos réseaux sociaux ne génèrent pas assez de demandes",
  "Comment transformer WhatsApp en canal de conversion",
  "Quelle différence entre stratégie de marque, stratégie marketing et stratégie de communication ?",
  "Comment repositionner une marque sans perdre son identité ?",
  "Comment construire une stratégie social media orientée business ?",
  "Pourquoi le paid media ne suffit pas si votre marque est floue ?",
  "Comment structurer une landing page qui convertit ?",
  "E-réputation : pourquoi anticiper avant la crise ?",
];

export const blogPosts: BlogPost[] = topics.map((title, index) => ({
  slug: title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""),
  title,
  excerpt:
    "Analyse courte pour mieux relier marque, communication, acquisition et conversion.",
  date: `${5 + index} mai 2026`,
  category: index % 3 === 0 ? "strategie-de-marque" : index % 3 === 1 ? "digital-growth" : "conversion",
  categoryLabel: index % 3 === 0 ? "Stratégie de marque" : index % 3 === 1 ? "Digital growth" : "Conversion",
  readTime: `${5 + (index % 4)} min`,
}));
