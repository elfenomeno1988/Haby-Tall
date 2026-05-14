export const siteConfig = {
  name: "Haby TALL",
  title: "Haby TALL — Brand, Marketing & Digital Growth Strategist",
  description:
    "Stratégie de marque, communication 360 et croissance digitale. De la clarté stratégique à la croissance digitale.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://habytall.com",
  email: "contact@habytall.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "+2250767130349",
  linkedin: "https://www.linkedin.com/in/habytall",
  instagram: "https://www.instagram.com/habytall",
  tagline: "De la clarté stratégique à la croissance digitale.",
  location: "Abidjan, Côte d’Ivoire",
} as const;
