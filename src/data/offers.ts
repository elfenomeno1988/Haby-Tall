export interface OfferData {
  slug: string;
  url: string;
  title: string;
  category: string;
  hero: string;
  enClair: string;
  fit: string[];
  work: string[];
  format: string;
  inclusions: string[];
  exclusions: string[];
  crossSell: string[];
  faq: { q: string; a: string }[];
  cta: string;
}

export const offers: Record<string, OfferData> = {
  'session-cadrage-strategique': {
    slug: 'session-cadrage-strategique',
    url: '/session-cadrage-strategique',
    title: 'Session de cadrage stratégique',
    category: 'Cadrage stratégique',
    hero: '60 minutes pour transformer le flou en direction.',
    enClair: 'Un échange structuré pour clarifier votre besoin et définir la prochaine étape.',
    fit: [
      'Plusieurs idées, pas encore de direction claire.',
      'Hésitation entre marque, communication, social media ou digital growth.',
      'Budget et périmètre encore incertains.',
      'Besoin de cadrer avant de lancer.'
    ],
    work: [
      'Contexte actuel',
      'Problématique principale',
      'Objectifs prioritaires',
      'Niveau de maturité',
      'Périmètre adapté',
      'Prochaine étape utile'
    ],
    format: 'Visio / Google Meet. 60 minutes. 100 000 FCFA, déductible si mission engagée sous 30 jours.',
    inclusions: ['Échange stratégique', 'Clarification du besoin', 'Orientation vers l’offre adaptée', 'Premières priorités'],
    exclusions: ['Diagnostic complet', 'Livrable stratégique', 'Production', 'Gestion opérationnelle'],
    crossSell: ['Diagnostic 360', 'Fondation de marque', 'Pilotage mensuel'],
    faq: [
      { q: 'La session est-elle obligatoire ?', a: 'Non, mais recommandée si votre besoin est encore flou.' },
      { q: 'Est-elle remboursable ?', a: 'Déductible si une mission est engagée sous 30 jours.' },
      { q: 'Est-ce suffisant pour une stratégie complète ?', a: 'Non. Elle cadre la prochaine étape.' },
      { q: 'Puis-je venir avec mon équipe ?', a: 'Oui, si cela aide à clarifier.' },
      { q: 'Que se passe-t-il après ?', a: 'Orientation vers l’offre ou la mission pertinente.' }
    ],
    cta: 'Réserver ma session'
  },
  'brief-cadrage-strategique': {
    slug: 'brief-cadrage-strategique',
    url: '/brief-cadrage-strategique',
    title: 'Brief de cadrage stratégique',
    category: 'Qualification',
    hero: 'Comprendre avant de recommander.',
    enClair: 'Un formulaire structuré pour qualifier votre besoin et préparer une recommandation juste.',
    fit: [
      'Un enjeu de marque, marketing, communication ou digital growth à adresser.',
      'Envie de gagner du temps avant le premier échange.',
      'Besoin d’être orienté vers la bonne offre.'
    ],
    work: [
      'Informations générales',
      'Présentation de l’entreprise',
      'Contexte et besoin',
      'Objectifs',
      'Cibles',
      'Marque et communication',
      'Périmètre',
      'Timing et budget',
      'Gouvernance'
    ],
    format: '8 à 12 minutes. Réponses analysées pour identifier la prochaine étape.',
    inclusions: ['Formulaire structuré', 'Analyse de la demande', 'Orientation vers session, diagnostic ou proposition'],
    exclusions: ['Diagnostic complet', 'Conseil sans analyse préalable', 'Devis automatique'],
    crossSell: ['Session de cadrage', 'Diagnostic 360', 'Offre adaptée selon besoin'],
    faq: [
      { q: 'Le brief est-il payant ?', a: 'Non, il qualifie la demande.' },
      { q: 'Est-ce un diagnostic ?', a: 'Non, il prépare l’analyse.' },
      { q: 'Combien de temps faut-il ?', a: '8 à 12 minutes.' },
      { q: 'Mes informations sont-elles confidentielles ?', a: 'Oui, usage exclusif pour l’analyse.' },
      { q: 'Mon projet est encore flou, puis-je le remplir ?', a: 'Oui, c’est justement utile.' }
    ],
    cta: 'Commencer le brief'
  },
  'diagnostic-360-brand-marketing-digital-growth': {
    slug: 'diagnostic-360-brand-marketing-digital-growth',
    url: '/diagnostic-360-brand-marketing-digital-growth',
    title: 'Diagnostic 360',
    category: 'Cadrage stratégique',
    hero: 'Comprendre ce qui bloque avant d’investir plus.',
    enClair: 'Une analyse complète de votre marque comme système : positionnement, messages, canaux, parcours client et performance.',
    fit: [
      'Des actions de communication sans résultats clairs.',
      'Doute sur l’origine du problème : contenu, ciblage, message ou canal.',
      'Des actions marketing dispersées.',
      'Besoin de prioriser avant d’investir davantage.'
    ],
    work: ['Brand & positionnement', 'Cibles et segments', 'Messages', 'Social media', 'Paid media', 'SEO/SEA', 'Funnel et conversion', 'WhatsApp / DM-to-sale', 'Data et KPIs', 'Benchmark'],
    format: 'Dès 650 000 FCFA. 2 à 4 semaines. Livrable : deck de diagnostic + roadmap.',
    inclusions: ['Scorecard 360', 'Diagnostic forces/faiblesses', 'Benchmark', 'Quick wins', 'Roadmap 30/60/90 jours', 'Recommandations KPI'],
    exclusions: ['Exécution complète', 'Budget média', 'Production créative', 'Gestion quotidienne'],
    crossSell: ['Pilotage mensuel', 'Brand-to-Demand Sprint', 'Social Media Growth'],
    faq: [
      { q: 'Combien de temps dure un diagnostic ?', a: '2 à 4 semaines selon la profondeur.' },
      { q: 'Que reçoit-on à la fin ?', a: 'Diagnostic structuré, quick wins et roadmap.' },
      { q: 'Adapté aux petites marques ?', a: 'Oui, pour prioriser avant d’investir.' },
      { q: 'Le budget publicitaire est-il inclus ?', a: 'Non.' },
      { q: 'Que se passe-t-il après ?', a: 'Activation d’un pilotage, social media ou sprint.' }
    ],
    cta: 'Demander un Diagnostic 360'
  },
  'lancement-marque-strategie': {
    slug: 'lancement-marque-strategie',
    url: '/lancement-marque-strategie',
    title: 'Fondation de marque & entrée en marché',
    category: 'Cadrage stratégique',
    hero: 'Un logo ne fait pas une marque.',
    enClair: 'Transformer une idée en marque claire, crédible et prête à entrer en marché.',
    fit: [
      'Lancement d’une marque, offre ou projet.',
      'Un nom ou logo existe, mais pas de stratégie claire.',
      'Hésitation sur la cible, la promesse ou les messages.',
      'Besoin de crédibilité dès l’entrée en marché.'
    ],
    work: ['Vision et ambition', 'Positionnement', 'Proposition de valeur', 'Cibles prioritaires', 'Architecture d’offre', 'Messages clés', 'Canaux de lancement', 'Parcours client initial', 'Plan 30/60/90 jours'],
    format: 'Dès 1 000 000 FCFA. 4 à 5 semaines. Paiement en 2 fois.',
    inclusions: ['Plateforme stratégique', 'Messages', 'Architecture d’offre', 'Roadmap de lancement'],
    exclusions: ['Identité visuelle complète', 'Site web', 'Production', 'Budget média', 'Gestion de pages'],
    crossSell: ['Site web & landing pages', 'Social Media Growth', 'Films de lancement'],
    faq: [
      { q: 'Faut-il déjà avoir un logo ?', a: 'Non, l’offre intervient avant ou après.' },
      { q: 'Seulement pour les nouvelles marques ?', a: 'Surtout, mais aussi pour les marques peu structurées.' },
      { q: 'La création graphique est-elle incluse ?', a: 'Non, sauf partenaire mobilisé.' },
      { q: 'Puis-je ajouter un site web ?', a: 'Oui, via une offre complémentaire.' },
      { q: 'Adapté aux marques premium ?', a: 'Oui, pour clarifier valeur, posture et codes.' }
    ],
    cta: 'Structurer mon lancement'
  },
  'strategie-social-media-growth': {
    slug: 'strategie-social-media-growth',
    url: '/strategie-social-media-growth',
    title: 'Social Media Growth',
    category: 'Activation & croissance digitale',
    hero: 'Publier ne suffit pas.',
    enClair: 'Passer d’une présence intuitive à un système éditorial et commercial structuré.',
    fit: [
      'Des publications sans demandes entrantes.',
      'Des contenus sans direction claire.',
      'Des messages reçus, peu de ventes.',
      'Instagram, TikTok, LinkedIn ou WhatsApp à structurer.'
    ],
    work: ['Positionnement social', 'Ligne éditoriale', 'Piliers de contenus', 'Formats réplicables', 'Scripts Reels/TikTok/Stories/LinkedIn', 'Optimisation profils', 'DM-to-sale', 'Social care', 'Reporting'],
    format: 'Audit dès 500 000 FCFA. Pilotage stratégique dès 650 000 FCFA/mois. Management avec équipe dès 1 200 000 FCFA/mois.',
    inclusions: ['Audit ou stratégie', 'Ligne éditoriale', 'Plan de contenus', 'Scripts et recommandations', 'KPI'],
    exclusions: ['Budget média', 'Production lourde', 'Shooting', 'Community management quotidien', 'Influence'],
    crossSell: ['WhatsApp / DM-to-Sale', 'Vidéos social media', 'Paid media'],
    faq: [
      { q: 'La création de contenus est-elle incluse ?', a: 'Selon le niveau choisi.' },
      { q: 'Gérez-vous les publications ?', a: 'Possible avec l’offre équipe.' },
      { q: 'Adapté à TikTok ?', a: 'Oui, selon cible et stratégie.' },
      { q: 'Peut-on commencer par un audit ?', a: 'Oui.' },
      { q: 'Le paid media est-il inclus ?', a: 'Non, sauf devis spécifique.' }
    ],
    cta: 'Structurer ma présence social media'
  },
  'pilotage-strategique-mensuel': {
    slug: 'pilotage-strategique-mensuel',
    url: '/pilotage-strategique-mensuel',
    title: 'Pilotage stratégique mensuel',
    category: 'Activation & croissance digitale',
    hero: 'Garder le cap quand tout semble urgent.',
    enClair: 'Un regard stratégique régulier pour rester cohérent, actif et mieux piloté.',
    fit: [
      'Besoin d’un regard stratégique régulier.',
      'Une équipe ou des prestataires, mais pas de recul.',
      'Des contenus et campagnes à améliorer mois après mois.',
      'Envie de transformer les actions en apprentissages.'
    ],
    work: ['Priorités marketing', 'Cohérence de marque', 'Angles éditoriaux', 'Campagnes', 'Parcours client', 'Recommandations publicitaires', 'Lecture des performances', 'Coordination'],
    format: 'Dès 650 000 FCFA/mois. 3 mois recommandés. 1 session stratégique par semaine.',
    inclusions: ['Sessions hebdomadaires', 'Recommandations', 'Suivi des priorités', 'Analyse synthétique', 'Ajustements'],
    exclusions: ['Production de contenus', 'Community management', 'Budget média', 'Création graphique', 'Production vidéo'],
    crossSell: ['Diagnostic 360', 'Social Media Growth', 'Brand-to-Demand Sprint'],
    faq: [
      { q: 'Durée de l’accompagnement ?', a: '3 mois recommandés.' },
      { q: 'Produisez-vous les contenus ?', a: 'Non par défaut.' },
      { q: 'Adapté aux petites marques ?', a: 'Oui, si besoin de cap.' },
      { q: 'Possible de commencer par un mois ?', a: 'Selon contexte.' },
      { q: 'Le reporting est-il inclus ?', a: 'Analyse synthétique incluse.' }
    ],
    cta: 'Lancer un pilotage mensuel'
  },
  'brand-to-demand-sprint': {
    slug: 'brand-to-demand-sprint',
    url: '/brand-to-demand-sprint',
    title: 'Brand-to-Demand Sprint',
    category: 'Activation & croissance digitale',
    hero: 'De la présence dispersée au système de demande.',
    enClair: 'Transformer vos leviers digitaux en système cohérent qui crée préférence et demande qualifiée.',
    fit: [
      'Des canaux digitaux actifs mais déconnectés.',
      'Publicités, contenus et influenceurs qui ne travaillent pas ensemble.',
      'Besoin de plus de demande qualifiée.',
      'Un dispositif structuré sur 3 mois à mettre en place.'
    ],
    work: ['Brand & messaging', 'Content engine', 'Calendrier 12 semaines', 'Paid media', 'Influence / UGC pilote', 'Tracking minimal viable', 'Reporting', 'Ajustements'],
    format: '3 mois. Dès 3 000 000 FCFA. Budgets média, influence et production non inclus.',
    inclusions: ['Architecture de messages', 'Calendrier éditorial', 'Plan campagnes', 'Reporting', 'Optimisations'],
    exclusions: ['Achat média', 'Rémunération influenceurs', 'Production lourde', 'CRM avancé'],
    crossSell: ['Scale Program', 'Site web & landing pages', 'Films publicitaires'],
    faq: [
      { q: 'Est-ce une campagne publicitaire ?', a: 'Non, un système complet marque + demande.' },
      { q: 'Le budget média est-il inclus ?', a: 'Non.' },
      { q: 'Faut-il une marque déjà structurée ?', a: 'Préférable, sinon un cadrage s’impose.' },
      { q: 'Durée du sprint ?', a: '3 mois.' },
      { q: 'Peut-on prolonger ?', a: 'Oui, via Scale Program ou pilotage mensuel.' }
    ],
    cta: 'Lancer un Sprint'
  },
  'repositionnement-marque-montee-en-gamme': {
    slug: 'repositionnement-marque-montee-en-gamme',
    url: '/repositionnement-marque-montee-en-gamme',
    title: 'Repositionnement & montée en gamme',
    category: 'Cadrage stratégique',
    hero: 'Votre marque a évolué. Votre image doit suivre.',
    enClair: 'Réaligner image, discours et actions avec votre niveau réel d’ambition.',
    fit: [
      'Une image qui ne reflète plus la valeur réelle.',
      'Une cible plus exigeante à atteindre.',
      'Un positionnement premium à justifier.',
      'Une expansion ou un nouveau marché en préparation.'
    ],
    work: ['Audit stratégique avancé', 'Diagnostic de perception', 'Écarts image/ambition', 'Stratégie de repositionnement', 'Proposition de valeur', 'Messages clés', 'Plan de visibilité'],
    format: 'Dès 2 000 000 FCFA. 6 à 8 semaines. Paiement en 2 ou 3 fois.',
    inclusions: ['Audit', 'Positionnement', 'Messages', 'Roadmap', 'Recommandations éditoriales'],
    exclusions: ['Rebranding graphique complet', 'Production', 'Relations presse', 'Média'],
    crossSell: ['The Mad Ones pour branding', 'Cabinet 86 pour réputation', 'Site web & landing pages'],
    faq: [
      { q: 'Est-ce un rebranding ?', a: 'Pas forcément. Le repositionnement peut le précéder.' },
      { q: 'Peut-on garder l’identité existante ?', a: 'Oui, si cohérente avec l’ambition.' },
      { q: 'Adapté aux marques premium ?', a: 'Oui.' },
      { q: 'La production est-elle incluse ?', a: 'Non par défaut.' },
      { q: 'Combien de temps prévoir ?', a: '6 à 8 semaines.' }
    ],
    cta: 'Repositionner ma marque'
  },
  'site-web-landing-pages': {
    slug: 'site-web-landing-pages',
    url: '/site-web-landing-pages',
    title: 'Site web & landing pages',
    category: 'Production & déploiement digital',
    hero: 'Un site doit convertir, pas seulement exister.',
    enClair: 'Votre stratégie traduite en dispositif digital clair, optimisé pour la visibilité et la conversion.',
    fit: [
      'Besoin d’un site vitrine professionnel.',
      'Un site actuel qui ne reflète plus le niveau.',
      'Des offres à mieux présenter.',
      'Des landing pages à créer pour les campagnes.'
    ],
    work: ['Architecture du site', 'Arborescence', 'Textes SEO/GEO', 'UX/SXO', 'Développement WordPress', 'Formulaires', 'SEO technique', 'Analytics', 'CTA', 'Page merci'],
    format: 'Sur devis. Site vitrine, landing page, blog, FAQ, lexique ou tunnel de conversion.',
    inclusions: ['Architecture', 'Rédaction selon devis', 'Intégration WordPress', 'Optimisation mobile', 'SEO de base'],
    exclusions: ['Hébergement', 'Nom de domaine', 'Licences premium', 'Maintenance', 'Shooting', 'Vidéo', 'Publicité'],
    crossSell: ['Diagnostic 360', 'SEO & contenu', 'WhatsApp / DM-to-Sale'],
    faq: [
      { q: 'Développez-vous le site ?', a: 'Oui, avec partenaires web.' },
      { q: 'Les textes sont-ils inclus ?', a: 'Selon le devis.' },
      { q: 'Le SEO est-il inclus ?', a: 'SEO de base inclus.' },
      { q: 'Le site est-il administrable ?', a: 'Oui, via WordPress.' },
      { q: 'L’hébergement est-il inclus ?', a: 'Non sauf mention contraire.' }
    ],
    cta: 'Créer mon site web'
  },
  'films-publicitaires-brand-content': {
    slug: 'films-publicitaires-brand-content',
    url: '/films-publicitaires-brand-content',
    title: 'Films publicitaires & brand content',
    category: 'Production & déploiement digital',
    hero: 'Raconter votre marque avec plus d’impact.',
    enClair: 'Votre stratégie traduite en contenu audiovisuel qui porte message, univers et preuves.',
    fit: [
      'Une campagne à lancer.',
      'Une nouvelle offre ou collection à présenter.',
      'Un film publicitaire à produire.',
      'Des vidéos social media alignées avec la stratégie.'
    ],
    work: ['Concept créatif', 'Script', 'Storyboard', 'Direction artistique', 'Coordination production', 'Adaptations social media', 'Prompts créatifs IA'],
    format: 'Sur devis selon format, complexité, droits et niveau de production.',
    inclusions: ['Cadrage du message', 'Concept', 'Script', 'Storyboard', 'Direction créative', 'Suivi de production'],
    exclusions: ['Lieu', 'Casting', 'Musique', 'Tournage', 'Matériel', 'Postproduction avancée', 'Talents', 'Diffusion média'],
    crossSell: ['Brand-to-Demand Sprint', 'Paid media', 'Social Media Growth'],
    faq: [
      { q: 'Réalisez-vous le tournage ?', a: 'Possible avec partenaires spécialisés.' },
      { q: 'Seulement un script ?', a: 'Oui, c’est possible.' },
      { q: 'Adapté aux réseaux sociaux ?', a: 'Oui.' },
      { q: 'Droits musicaux inclus ?', a: 'Non sauf mention contraire.' },
      { q: 'Peut-on utiliser l’IA ?', a: 'Oui, si pertinent et cadré.' }
    ],
    cta: 'Préparer mon contenu vidéo'
  },
  'whatsapp-dm-to-sale': {
    slug: 'whatsapp-dm-to-sale',
    url: '/whatsapp-dm-to-sale',
    title: 'WhatsApp / DM-to-Sale',
    category: 'Activation & croissance digitale',
    hero: 'De l’intérêt à la conversion.',
    enClair: 'Structurer le parcours entre contenu, message privé, relance et décision d’achat.',
    fit: [
      'Des DM reçus, peu de ventes concrètes.',
      'Des réponses qui changent selon la personne.',
      'Des relances oubliées.',
      'Un suivi des demandes entrantes à structurer.'
    ],
    work: ['Scripts de réponse', 'FAQ commerciale', 'Relances', 'Qualification', 'Tags WhatsApp Business', 'Parcours client', 'Objections', 'Suivi des demandes', 'Indicateurs'],
    format: 'Sur devis ou intégré dans Social Media Growth / Diagnostic 360.',
    inclusions: ['Analyse du parcours', 'Scripts', 'FAQ', 'Relances', 'Recommandations WhatsApp Business'],
    exclusions: ['Gestion quotidienne des messages', 'CRM payant', 'Automatisation avancée', 'Service client permanent'],
    crossSell: ['Social Media Growth', 'Landing page', 'Paid media'],
    faq: [
      { q: 'Répondez-vous aux messages ?', a: 'Non sauf mission spécifique.' },
      { q: 'Adapté aux petites marques ?', a: 'Oui.' },
      { q: 'Peut-on automatiser WhatsApp ?', a: 'Oui, selon outils et budget.' },
      { q: 'Est-ce un CRM ?', a: 'Non, mais cela peut y préparer.' },
      { q: 'Utile pour Instagram ?', a: 'Oui, si Instagram génère des DM.' }
    ],
    cta: 'Optimiser mon parcours WhatsApp'
  },
  'strategie-linkedin-dirigeant': {
    slug: 'strategie-linkedin-dirigeant',
    url: '/strategie-linkedin-dirigeant',
    title: 'Stratégie LinkedIn dirigeant',
    category: 'Réputation, formation & leadership',
    hero: 'L’expertise existe. La visibilité se construit.',
    enClair: 'Transformer votre expertise en prise de parole structurée et crédible sur LinkedIn.',
    fit: [
      'Dirigeant, consultant ou entrepreneur.',
      'Des idées, mais peu de structure éditoriale.',
      'Une prise de parole LinkedIn à affirmer.',
      'Prospects, partenaires ou opportunités à attirer.'
    ],
    work: ['Positionnement personnel', 'Optimisation profil', 'Piliers éditoriaux', 'Angles', 'Ton de voix', 'Calendrier 30 jours', 'Idées de posts', 'Storytelling', 'Ghostwriting optionnel'],
    format: 'Sur devis. Ponctuel ou mensuel.',
    inclusions: ['Audit profil', 'Positionnement', 'Piliers', 'Calendrier', 'Structures de posts'],
    exclusions: ['Publication quotidienne', 'Gestion commentaires', 'Prospection LinkedIn', 'Design visuels', 'Ghostwriting long terme'],
    crossSell: ['Media training', 'Formation prise de parole', 'Réputation sensible'],
    faq: [
      { q: 'Réservé aux dirigeants ?', a: 'Non.' },
      { q: 'Écrivez-vous les posts ?', a: 'Possible en option.' },
      { q: 'Quand voit-on des résultats ?', a: 'L’autorité se construit dans la durée.' },
      { q: 'Optimisez-vous le profil ?', a: 'Oui.' },
      { q: 'Compatible avec une marque d’entreprise ?', a: 'Oui.' }
    ],
    cta: 'Structurer ma présence LinkedIn'
  },
  'reputation-communication-sensible': {
    slug: 'reputation-communication-sensible',
    url: '/reputation-communication-sensible',
    title: 'Réputation & communication sensible',
    category: 'Réputation, formation & leadership',
    hero: 'La confiance se construit lentement. Elle se fragilise vite.',
    enClair: 'Anticiper, structurer ou gérer les situations sensibles qui impactent image et crédibilité.',
    fit: [
      'Une situation sensible à gérer.',
      'Un risque de réputation à anticiper.',
      'Une critique, crise ou controverse à adresser.',
      'Un dirigeant qui doit prendre la parole.'
    ],
    work: ['Audit de perception', 'Cartographie des risques', 'Analyse e-réputation', 'Messages sensibles', 'Q&A de crise', 'Éléments de langage', 'Préparation porte-parole', 'Protocole de réponse', 'Coordination Cabinet 86'],
    format: 'Sur devis selon sensibilité, urgence et périmètre.',
    inclusions: ['Analyse contexte', 'Messages clés', 'Q&A', 'Posture', 'Plan d’action', 'Coordination expert réputation'],
    exclusions: ['Veille 24/7', 'Relations presse opérationnelles', 'Juridique', 'Social listening payant', 'Gestion temps réel'],
    crossSell: ['Media training', 'Stratégie LinkedIn dirigeant', 'Diagnostic 360'],
    faq: [
      { q: 'Gestion de crise en temps réel ?', a: 'Possible avec partenaires.' },
      { q: 'Cabinet 86 intervient-il ?', a: 'Selon besoin et devis.' },
      { q: 'Peut-on anticiper une crise ?', a: 'Oui, c’est recommandé.' },
      { q: 'Adapté aux dirigeants ?', a: 'Oui.' },
      { q: 'Confidentiel ?', a: 'Oui.' }
    ],
    cta: 'Protéger ma réputation'
  },
  'formation-communication-leadership': {
    slug: 'formation-communication-leadership',
    url: '/formation-communication-leadership',
    title: 'Formation & leadership communication',
    category: 'Réputation, formation & leadership',
    hero: 'Une stratégie mal portée est une stratégie perdue.',
    enClair: 'Aider dirigeants, équipes et porte-paroles à clarifier, incarner et défendre leurs messages.',
    fit: [
      'Prise de parole en public à préparer.',
      'Interview ou présentation client en vue.',
      'Négociation ou proposition à défendre.',
      'Posture des dirigeants ou managers à renforcer.'
    ],
    work: ['Prise de parole', 'Media training', 'Pitch', 'Négociation', 'Business game', 'Posture professionnelle', 'Communication de crise', 'Thought leadership'],
    format: 'Dès 300 000 FCFA. Modules sur devis avec formateurs spécialisés.',
    inclusions: ['Cadrage pédagogique', 'Support', 'Session', 'Recommandations', 'Debrief'],
    exclusions: ['Location salle', 'Déplacement', 'Captation vidéo', 'Supports avancés', 'Coaching long terme'],
    crossSell: ['Stratégie LinkedIn dirigeant', 'Réputation sensible', 'Pilotage mensuel'],
    faq: [
      { q: 'Qui anime la formation ?', a: 'Haby et/ou formateurs spécialisés.' },
      { q: 'Individuel ou collectif ?', a: 'Les deux.' },
      { q: 'Adaptable au secteur ?', a: 'Oui.' },
      { q: 'Media training disponible ?', a: 'Oui, avec experts.' },
      { q: 'Business game personnalisé ?', a: 'Possible sur devis.' }
    ],
    cta: 'Organiser une formation'
  }
};

export const offerList = Object.values(offers);
