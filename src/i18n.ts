import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fr: {
        translation: {
          nav: {
            home: 'Accueil',
            about: 'À propos',
            method: 'Méthode',
            offers: 'Offres',
            references: 'Références',
            insights: 'Insights',
            contact: 'Contact',
          },
          hero: {
            badge: 'Haby TALL — Growth Strategist',
            title: 'De la <1>clarté</1> stratégique à la croissance digitale.',
            desc: 'Transformer votre vision en système commercial. Nous ne créons pas seulement de la visibilité ; nous bâtissons la préférence de marque et le moteur de conversion.',
            cta: 'Réserver une session de cadrage',
          },
          conviction: {
            title: 'Une marque ne manque pas toujours de visibilité.',
            desc: 'Souvent, elle manque de clarté. Elle publie, elle dépense, elle occupe l\'espace, mais elle ne convertit pas parce que le message, l\'offre ou le système de capture de la demande sont défaillants. L\'enjeu n\'est plus seulement d\'être vu, mais d\'être choisi.',
          },
          offers: {
            title: 'Solutions & Architectures de Croissance',
            subtitle: 'Des interventions ciblées pour structurer votre présence et maximiser votre impact commercial.',
            viewDetails: 'Détails de l\'offre',
          },
          method: {
            title: 'La Méthode Haby Tall',
            subtitle: 'Une approche systématique du marketing de marque et de la croissance digitale.',
          },
          footer: {
            tagline: 'Brand, Marketing & Digital Growth Strategist.',
            subtitle: 'De la clarté stratégique à la croissance digitale.',
            rights: 'Tous droits réservés.',
          }
        },
      },
      en: {
        translation: {
          nav: {
            home: 'Home',
            about: 'About',
            method: 'Method',
            offers: 'Offers',
            references: 'References',
            insights: 'Insights',
            contact: 'Contact',
          },
          hero: {
            badge: 'Haby TALL — Growth Strategist',
            title: 'From strategic <1>clarity</1> to digital growth.',
            desc: 'Transform your vision into a commercial system. We don’t just create visibility; we build brand preference and a conversion engine.',
            cta: 'Book a discovery session',
          },
          conviction: {
            title: 'A brand doesn’t always lack visibility.',
            desc: 'Often, it lacks clarity. It publishes, it spends, it occupies space, but it doesn’t convert because the message, the offer, or the demand capture system is flawed. The challenge is no longer just being seen, but being chosen.',
          },
          offers: {
            title: 'Solutions & Growth Architectures',
            subtitle: 'Targeted interventions to structure your presence and maximize your commercial impact.',
            viewDetails: 'Offer Details',
          },
          method: {
            title: 'The Haby Tall Method',
            subtitle: 'A systematic approach to brand marketing and digital growth.',
          },
          footer: {
            tagline: 'Brand, Marketing & Digital Growth Strategist.',
            subtitle: 'From strategic clarity to digital growth.',
            rights: 'All rights reserved.',
          }
        },
      },
    },
  });

export default i18n;
