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
    hero: 'Vous sentez qu’il faut agir, mais vous ne savez pas encore par où commencer ?',
    enClair: 'En 60 minutes, nous transformons une demande floue en prochaine étape claire.',
    fit: [
      'Vous avez plusieurs idées, mais pas encore de direction claire.',
      'Vous hésitez entre stratégie de marque, communication, social media ou digital growth.',
      'Vous ne savez pas quel budget prévoir.',
      'Vous voulez éviter de lancer une mission mal cadrée.'
    ],
    work: [
      'Contexte actuel',
      'Problématique principale',
      'Objectifs prioritaires',
      'Niveau de maturité',
      'Périmètre adapté',
      'Prochaine étape utile'
    ],
    format: 'Visio / Google Meet. Durée : 60 minutes. Investissement : 100 000 FCFA. Montant déductible si collaboration engagée dans les 30 jours.',
    inclusions: ['Échange stratégique', 'Clarification du besoin', 'Orientation vers l’offre adaptée', 'Premières priorités'],
    exclusions: ['Diagnostic complet', 'Livrable stratégique complet', 'Production', 'Gestion opérationnelle'],
    crossSell: ['Diagnostic 360', 'Fondation de marque', 'Pilotage mensuel'],
    faq: [
      { q: 'La session est-elle obligatoire ?', a: 'Non, mais elle est recommandée si votre besoin est encore flou.' },
      { q: 'Est-elle remboursable ?', a: 'Elle est déductible si une mission est engagée dans les 30 jours.' },
      { q: 'Est-ce suffisant pour avoir une stratégie complète ?', a: 'Non. Elle permet de cadrer la prochaine étape.' },
      { q: 'Puis-je venir avec mon équipe ?', a: 'Oui, si cela aide à clarifier le projet.' },
      { q: 'Que se passe-t-il après ?', a: 'Vous recevez une orientation vers l’offre ou la mission pertinente.' }
    ],
    cta: 'Réserver ma session de cadrage'
  },
  'brief-cadrage-strategique': {
    slug: 'brief-cadrage-strategique',
    url: '/brief-cadrage-strategique',
    title: 'Brief de cadrage stratégique',
    category: 'Qualification',
    hero: 'Avant toute recommandation sérieuse, il faut comprendre le contexte.',
    enClair: 'Le brief est le point d’entrée qui permet de qualifier votre besoin et de préparer une recommandation adaptée.',
    fit: [
      'Vous souhaitez être accompagné sur un enjeu de marque, marketing, communication, digital growth, production ou réputation.',
      'Vous voulez gagner du temps avant l’échange.',
      'Vous souhaitez être orienté vers la bonne offre.'
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
    format: 'Temps estimé : 8 à 12 minutes. Après réception, les réponses sont analysées afin d’identifier la prochaine étape.',
    inclusions: ['Formulaire structuré', 'Analyse de la demande', 'Orientation vers session, diagnostic ou proposition'],
    exclusions: ['Diagnostic complet', 'Conseil personnalisé sans analyse préalable', 'Devis automatique'],
    crossSell: ['Session de cadrage', 'Diagnostic 360', 'Offre adaptée selon besoin'],
    faq: [
      { q: 'Le brief est-il payant ?', a: 'Non, il sert à qualifier la demande.' },
      { q: 'Est-ce un diagnostic ?', a: 'Non, il prépare l’analyse mais ne remplace pas un diagnostic.' },
      { q: 'Combien de temps faut-il ?', a: 'Environ 8 à 12 minutes.' },
      { q: 'Mes informations sont-elles confidentielles ?', a: 'Oui, elles servent uniquement à analyser votre demande.' },
      { q: 'Puis-je remplir le brief même si mon projet est encore flou ?', a: 'Oui, c’est justement utile.' }
    ],
    cta: 'Commencer le brief stratégique'
  },
  'diagnostic-360-brand-marketing-digital-growth': {
    slug: 'diagnostic-360-brand-marketing-digital-growth',
    url: '/diagnostic-360-brand-marketing-digital-growth',
    title: 'Diagnostic 360 Brand, Marketing & Digital Growth',
    category: 'Cadrage stratégique',
    hero: 'Avant d’investir plus, comprenez ce qui bloque vraiment.',
    enClair: 'Le Diagnostic 360 analyse votre marque comme un système : positionnement, messages, contenus, canaux, parcours client, performance digitale et indicateurs.',
    fit: [
      'Vous communiquez déjà, mais sans résultats clairs.',
      'Vous ne savez pas si le problème vient du contenu, du ciblage, du message ou du canal.',
      'Vos actions marketing semblent dispersées.',
      'Vous voulez prioriser avant d’investir davantage.'
    ],
    work: ['Brand & positionnement', 'Cibles et segments', 'Messages', 'Social media', 'Paid media si applicable', 'SEO/SEA selon maturité', 'Funnel et conversion', 'WhatsApp / DM-to-sale', 'Data et KPIs', 'Benchmark'],
    format: 'À partir de 650 000 FCFA. Délai : 2 à 4 semaines. Livrable : deck de diagnostic + roadmap.',
    inclusions: ['Scorecard 360', 'Diagnostic forces/faiblesses', 'Benchmark', 'Quick wins', 'Roadmap 30/60/90 jours', 'Recommandations KPI'],
    exclusions: ['Exécution complète', 'Budget média', 'Production créative', 'Gestion quotidienne'],
    crossSell: ['Pilotage mensuel', 'Brand-to-Demand Sprint', 'Social Media Growth'],
    faq: [
      { q: 'Combien de temps dure un diagnostic ?', a: 'En général 2 à 4 semaines selon la profondeur.' },
      { q: 'Que reçoit-on à la fin ?', a: 'Un diagnostic structuré, des quick wins et une roadmap.' },
      { q: 'Est-ce adapté à une petite marque ?', a: 'Oui, si elle veut prioriser avant d’investir.' },
      { q: 'Le budget publicitaire est-il inclus ?', a: 'Non.' },
      { q: 'Que se passe-t-il après ?', a: 'Vous pouvez activer une offre de pilotage, social media ou sprint.' }
    ],
    cta: 'Demander un Diagnostic 360'
  },
  'lancement-marque-strategie': {
    slug: 'lancement-marque-strategie',
    url: '/lancement-marque-strategie',
    title: 'Fondation de marque & entrée en marché',
    category: 'Cadrage stratégique',
    hero: 'Un logo ne suffit pas à lancer une marque.',
    enClair: 'Cette offre transforme une idée ou une activité encore intuitive en marque claire, crédible et prête à entrer en marché.',
    fit: [
      'Vous lancez une marque, une offre ou un projet.',
      'Vous avez déjà un nom ou un logo, mais pas encore de stratégie claire.',
      'Vous hésitez sur votre cible, votre promesse ou vos messages.',
      'Vous voulez arriver sur le marché avec plus de crédibilité.'
    ],
    work: ['Vision et ambition', 'Positionnement', 'Proposition de valeur', 'Cibles prioritaires', 'Architecture d’offre', 'Messages clés', 'Canaux de lancement', 'Parcours client initial', 'Plan 30/60/90 jours'],
    format: 'À partir de 1 000 000 FCFA. Délai : 4 à 5 semaines. Paiement : en 2 fois.',
    inclusions: ['Plateforme stratégique', 'Messages', 'Architecture d’offre', 'Roadmap de lancement'],
    exclusions: ['Identité visuelle complète', 'Site web', 'Production', 'Budget média', 'Gestion de pages'],
    crossSell: ['Site web & landing pages', 'Social Media Growth', 'Films de lancement'],
    faq: [
      { q: 'Faut-il déjà avoir un logo ?', a: 'Non, l’offre peut intervenir avant ou après le logo.' },
      { q: 'Est-ce seulement pour les nouvelles marques ?', a: 'Principalement, mais elle peut aider une marque très peu structurée.' },
      { q: 'La création graphique est-elle incluse ?', a: 'Non, sauf mention contraire ou partenaire mobilisé.' },
      { q: 'Puis-je ajouter un site web ?', a: 'Oui, via une offre complémentaire.' },
      { q: 'Est-ce adapté à une marque premium accessible ?', a: 'Oui, notamment pour clarifier valeur, posture et codes.' }
    ],
    cta: 'Structurer mon lancement'
  },
  'strategie-social-media-growth': {
    slug: 'strategie-social-media-growth',
    url: '/strategie-social-media-growth',
    title: 'Social Media Growth & Brand Leadership',
    category: 'Activation & croissance digitale',
    hero: 'Publier ne suffit pas.',
    enClair: 'Cette offre aide à passer d’une présence sociale intuitive à un système éditorial et commercial structuré.',
    fit: [
      'Vous publiez, mais les demandes ne suivent pas.',
      'Vos contenus manquent de direction.',
      'Vous recevez des messages, mais peu de ventes.',
      'Vous voulez mieux structurer Instagram, TikTok, Facebook, LinkedIn ou WhatsApp.'
    ],
    work: ['Positionnement social', 'Ligne éditoriale', 'Piliers de contenus', 'Formats réplicables', 'Scripts Reels/TikTok/Stories/LinkedIn', 'Optimisation profils', 'DM-to-sale', 'Social care', 'Reporting'],
    format: 'Audit Social Media 360 dès 500 000 FCFA. Pilotage social stratégique dès 650 000 FCFA/mois. Social Media Management avec équipe dès 1 200 000 FCFA/mois.',
    inclusions: ['Audit ou stratégie', 'Ligne éditoriale', 'Plan de contenus', 'Scripts et recommandations', 'KPI'],
    exclusions: ['Budget média', 'Production lourde', 'Shooting', 'Community management quotidien sauf devis', 'Influence'],
    crossSell: ['WhatsApp / DM-to-Sale', 'Shooting ou vidéos social media', 'Paid media'],
    faq: [
      { q: 'La création de contenus est-elle incluse ?', a: 'Selon le niveau choisi.' },
      { q: 'Gérez-vous les publications ?', a: 'Possible dans une offre avec équipe.' },
      { q: 'Est-ce adapté à TikTok ?', a: 'Oui, selon la cible et la stratégie.' },
      { q: 'Peut-on commencer par un audit ?', a: 'Oui.' },
      { q: 'Le paid media est-il inclus ?', a: 'Non, sauf devis spécifique.' }
    ],
    cta: 'Améliorer ma présence social media'
  },
  'pilotage-strategique-mensuel': {
    slug: 'pilotage-strategique-mensuel',
    url: '/pilotage-strategique-mensuel',
    title: 'Pilotage stratégique mensuel',
    category: 'Activation & croissance digitale',
    hero: 'Garder le cap quand tout semble urgent.',
    enClair: 'Le pilotage stratégique mensuel aide votre marque à rester cohérente, active et mieux pilotée dans la durée.',
    fit: [
      'Vous avez besoin d’un regard stratégique régulier.',
      'Vous avez une équipe ou des prestataires, mais manquez de recul.',
      'Vous voulez améliorer vos contenus et campagnes mois après mois.',
      'Vous souhaitez transformer vos actions en apprentissages.'
    ],
    work: ['Priorités marketing et communication', 'Cohérence de marque', 'Angles éditoriaux', 'Campagnes', 'Parcours client', 'Recommandations publicitaires', 'Lecture des performances', 'Coordination selon périmètre'],
    format: 'À partir de 650 000 FCFA/mois. Engagement recommandé : 3 mois. Cadence : 1 session stratégique par semaine.',
    inclusions: ['Sessions hebdomadaires', 'Recommandations', 'Suivi des priorités', 'Analyse synthétique', 'Ajustements'],
    exclusions: ['Production de contenus', 'Community management', 'Budget média', 'Création graphique', 'Production vidéo'],
    crossSell: ['Diagnostic 360', 'Social Media Growth', 'Brand-to-Demand Sprint'],
    faq: [
      { q: 'Combien de temps dure l’accompagnement ?', a: '3 mois sont recommandés.' },
      { q: 'Produisez-vous les contenus ?', a: 'Non par défaut.' },
      { q: 'Est-ce adapté à une petite marque ?', a: 'Oui si elle a besoin de cap.' },
      { q: 'Puis-je commencer par un mois ?', a: 'Possible selon contexte.' },
      { q: 'Le reporting est-il inclus ?', a: 'Analyse synthétique incluse selon données disponibles.' }
    ],
    cta: 'Mettre en place un pilotage mensuel'
  },
  'brand-to-demand-sprint': {
    slug: 'brand-to-demand-sprint',
    url: '/brand-to-demand-sprint',
    title: 'Brand-to-Demand Sprint',
    category: 'Activation & croissance digitale',
    hero: 'Passez d’une présence digitale dispersée à un système qui génère de la demande.',
    enClair: 'Le sprint transforme les leviers digitaux en système cohérent pour créer préférence, demande et premiers cycles de performance.',
    fit: [
      'Vous avez déjà des canaux digitaux actifs.',
      'Vos publicités, contenus et influenceurs ne travaillent pas ensemble.',
      'Vous voulez créer plus de demande qualifiée.',
      'Vous avez besoin d’un dispositif structuré sur 3 mois.'
    ],
    work: ['Brand & messaging', 'Content engine', 'Calendrier 12 semaines', 'Paid media', 'Influence / UGC pilote', 'Tracking minimal viable', 'Reporting', 'Ajustements'],
    format: 'Durée : 3 mois. À partir de 3 000 000 FCFA. Budgets média, influence et production externe non inclus sauf mention contraire.',
    inclusions: ['Architecture de messages', 'Calendrier éditorial', 'Plan campagnes', 'Reporting', 'Optimisations'],
    exclusions: ['Achat média', 'Rémunération influenceurs', 'Production lourde', 'CRM avancé'],
    crossSell: ['Scale Program', 'Site web & landing pages', 'Films publicitaires'],
    faq: [
      { q: 'Est-ce une campagne publicitaire ?', a: 'Non, c’est un système complet marque + demande.' },
      { q: 'Le budget média est-il inclus ?', a: 'Non.' },
      { q: 'Faut-il déjà avoir une marque structurée ?', a: 'C’est préférable, sinon un cadrage est nécessaire.' },
      { q: 'Combien de temps dure le sprint ?', a: '3 mois.' },
      { q: 'Peut-on prolonger ?', a: 'Oui via Scale Program ou pilotage mensuel.' }
    ],
    cta: 'Lancer un Brand-to-Demand Sprint'
  },
  'repositionnement-marque-montee-en-gamme': {
    slug: 'repositionnement-marque-montee-en-gamme',
    url: '/repositionnement-marque-montee-en-gamme',
    title: 'Repositionnement & montée en gamme',
    category: 'Cadrage stratégique',
    hero: 'Votre marque a évolué. Votre image doit suivre.',
    enClair: 'Cette offre réaligne votre image, votre discours, vos supports et vos actions avec votre niveau réel d’ambition.',
    fit: [
      'Votre image actuelle ne reflète plus votre valeur.',
      'Vous souhaitez toucher une cible plus exigeante.',
      'Vous voulez justifier un positionnement plus premium.',
      'Vous préparez une expansion ou un nouveau marché.'
    ],
    work: ['Audit stratégique avancé', 'Diagnostic de perception', 'Écarts image/ambition', 'Stratégie de repositionnement', 'Proposition de valeur', 'Messages clés', 'Plan de visibilité'],
    format: 'À partir de 2 000 000 FCFA. Délai : 6 à 8 semaines. Paiement : en 2 ou 3 fois.',
    inclusions: ['Audit', 'Positionnement', 'Messages', 'Roadmap', 'Recommandations éditoriales'],
    exclusions: ['Rebranding graphique complet', 'Production', 'Relations presse', 'Média'],
    crossSell: ['The Mad Ones pour branding', 'Cabinet 86 pour réputation', 'Site web & landing pages'],
    faq: [
      { q: 'Est-ce un rebranding ?', a: 'Pas forcément. Le repositionnement peut précéder un rebranding.' },
      { q: 'Peut-on garder l’identité existante ?', a: 'Oui si elle est cohérente avec l’ambition.' },
      { q: 'Est-ce adapté aux marques premium ?', a: 'Oui.' },
      { q: 'La production est-elle incluse ?', a: 'Non par défaut.' },
      { q: 'Combien de temps prévoir ?', a: '6 à 8 semaines en moyenne.' }
    ],
    cta: 'Repositionner ma marque'
  },
  'site-web-landing-pages': {
    slug: 'site-web-landing-pages',
    url: '/site-web-landing-pages',
    title: 'Site web & landing pages',
    category: 'Production & déploiement digital',
    hero: 'Un site web ne doit pas seulement exister.',
    enClair: 'Cette offre transforme votre stratégie en dispositif digital clair, structuré et optimisé pour la visibilité, l’expérience utilisateur et la conversion.',
    fit: [
      'Vous avez besoin d’un site vitrine professionnel.',
      'Votre site actuel ne reflète plus votre niveau.',
      'Vous voulez mieux présenter vos offres.',
      'Vous avez besoin de landing pages pour vos campagnes.',
      'Vous souhaitez collecter des leads qualifiés.'
    ],
    work: ['Architecture du site', 'Arborescence', 'Textes SEO/GEO', 'UX/SXO', 'Développement WordPress', 'Formulaires', 'SEO technique', 'Analytics', 'CTA', 'Page merci'],
    format: 'Sur devis selon complexité. Possibilité de site vitrine, landing page, blog, FAQ, lexique et tunnel de conversion.',
    inclusions: ['Architecture', 'Rédaction selon devis', 'Intégration WordPress', 'Optimisation mobile', 'SEO de base'],
    exclusions: ['Hébergement', 'Nom de domaine', 'Licences premium', 'Maintenance', 'Shooting', 'Vidéo', 'Publicité'],
    crossSell: ['Diagnostic 360', 'SEO & contenu', 'WhatsApp / DM-to-Sale', 'Landing pages de campagne'],
    faq: [
      { q: 'Développez-vous le site ?', a: 'Oui, avec partenaires web selon périmètre.' },
      { q: 'Les textes sont-ils inclus ?', a: 'Selon le devis.' },
      { q: 'Le SEO est-il inclus ?', a: 'SEO de base possible.' },
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
    enClair: 'Cette offre transforme une stratégie ou une campagne en contenu audiovisuel capable de porter votre message, votre univers et vos preuves.',
    fit: [
      'Vous lancez une campagne.',
      'Vous préparez une nouvelle offre ou collection.',
      'Vous avez besoin d’un film publicitaire.',
      'Vous voulez produire des vidéos pour les réseaux sociaux.',
      'Vous voulez aligner production vidéo et stratégie globale.'
    ],
    work: ['Concept créatif', 'Script', 'Storyboard', 'Direction artistique', 'Coordination production', 'Adaptations social media', 'Prompts créatifs IA si pertinent'],
    format: 'Sur devis selon format, complexité, droits, équipes et niveau de production.',
    inclusions: ['Cadrage du message', 'Concept', 'Script', 'Storyboard', 'Direction créative', 'Suivi de production'],
    exclusions: ['Lieu', 'Casting', 'Musique', 'Tournage', 'Matériel', 'Postproduction avancée', 'Talents', 'Diffusion média'],
    crossSell: ['Brand-to-Demand Sprint', 'Paid media', 'Landing page de campagne', 'Social Media Growth'],
    faq: [
      { q: 'Réalisez-vous le tournage ?', a: 'Possible avec partenaires spécialisés.' },
      { q: 'Peut-on demander seulement un script ?', a: 'Oui.' },
      { q: 'Est-ce adapté aux réseaux sociaux ?', a: 'Oui.' },
      { q: 'Les droits musicaux sont-ils inclus ?', a: 'Non sauf mention contraire.' },
      { q: 'Peut-on utiliser l’IA ?', a: 'Oui si c’est pertinent et cadré.' }
    ],
    cta: 'Préparer mon film ou contenu vidéo'
  },
  'whatsapp-dm-to-sale': {
    slug: 'whatsapp-dm-to-sale',
    url: '/whatsapp-dm-to-sale',
    title: 'WhatsApp / DM-to-Sale',
    category: 'Activation & croissance digitale',
    hero: 'Vous avez de l’intérêt, mais pas assez de conversion ?',
    enClair: 'Cette offre structure le parcours entre contenu, message privé, WhatsApp, relance et décision d’achat.',
    fit: [
      'Vous recevez des DM, mais peu de ventes.',
      'Vos réponses changent selon la personne qui répond.',
      'Vous oubliez de relancer.',
      'Vous voulez mieux suivre les demandes entrantes.'
    ],
    work: ['Scripts de réponse', 'FAQ commerciale', 'Relances', 'Qualification', 'Tags WhatsApp Business', 'Parcours client', 'Objections', 'Suivi des demandes', 'Indicateurs'],
    format: 'Sur devis ou intégré dans Social Media Growth / Diagnostic 360.',
    inclusions: ['Analyse du parcours', 'Scripts', 'FAQ', 'Relances', 'Recommandations WhatsApp Business'],
    exclusions: ['Gestion quotidienne des messages', 'CRM payant', 'Automatisation avancée', 'Service client permanent'],
    crossSell: ['Social Media Growth', 'Landing page', 'CRM / nurturing', 'Paid media'],
    faq: [
      { q: 'Répondez-vous aux messages à notre place ?', a: 'Non sauf mission spécifique.' },
      { q: 'Est-ce adapté aux petites marques ?', a: 'Oui.' },
      { q: 'Peut-on automatiser WhatsApp ?', a: 'Oui selon outils et budget.' },
      { q: 'Est-ce un CRM ?', a: 'Non, mais cela peut préparer un CRM.' },
      { q: 'Est-ce utile pour Instagram ?', a: 'Oui si Instagram génère des DM.' }
    ],
    cta: 'Optimiser mon parcours WhatsApp'
  },
  'strategie-linkedin-dirigeant': {
    slug: 'strategie-linkedin-dirigeant',
    url: '/strategie-linkedin-dirigeant',
    title: 'Stratégie LinkedIn dirigeant',
    category: 'Réputation, formation & leadership',
    hero: 'Votre expertise existe. Votre prise de parole doit la rendre visible.',
    enClair: 'Cette offre transforme votre expertise en prise de parole structurée, crédible et utile pour votre réputation professionnelle.',
    fit: [
      'Vous êtes dirigeant, consultant, expert ou entrepreneur.',
      'Vous voulez mieux prendre la parole sur LinkedIn.',
      'Vous avez des idées, mais peu de structure éditoriale.',
      'Vous voulez attirer prospects, partenaires ou opportunités.'
    ],
    work: ['Positionnement personnel', 'Optimisation profil', 'Piliers éditoriaux', 'Angles', 'Ton de voix', 'Calendrier 30 jours', 'Idées de posts', 'Storytelling', 'Ghostwriting optionnel'],
    format: 'Sur devis selon périmètre. Peut être ponctuel ou mensuel.',
    inclusions: ['Audit profil', 'Positionnement', 'Piliers', 'Calendrier', 'Structures de posts'],
    exclusions: ['Publication quotidienne', 'Gestion commentaires', 'Prospection LinkedIn', 'Design visuels', 'Ghostwriting long terme'],
    crossSell: ['Media training', 'Formation prise de parole', 'Réputation sensible', 'Accompagnement mensuel'],
    faq: [
      { q: 'Est-ce réservé aux dirigeants ?', a: 'Non.' },
      { q: 'Écrivez-vous les posts ?', a: 'Possible en option.' },
      { q: 'Quand voit-on des résultats ?', a: 'L’autorité se construit dans la durée.' },
      { q: 'Optimisez-vous le profil ?', a: 'Oui.' },
      { q: 'Est-ce compatible avec une marque d’entreprise ?', a: 'Oui.' }
    ],
    cta: 'Structurer ma prise de parole LinkedIn'
  },
  'reputation-communication-sensible': {
    slug: 'reputation-communication-sensible',
    url: '/reputation-communication-sensible',
    title: 'Réputation & communication sensible',
    category: 'Réputation, formation & leadership',
    hero: 'La confiance se construit lentement. Elle peut se fragiliser très vite.',
    enClair: 'Cette offre aide les marques, dirigeants et organisations à anticiper, structurer ou gérer les situations sensibles qui peuvent impacter leur image et leur crédibilité.',
    fit: [
      'Votre marque fait face à une situation sensible.',
      'Vous voulez anticiper un risque de réputation.',
      'Vous devez répondre à une critique, crise ou controverse.',
      'Votre dirigeant doit prendre la parole.',
      'Vous souhaitez auditer votre perception en ligne.'
    ],
    work: ['Audit de perception', 'Cartographie des risques', 'Analyse e-réputation', 'Messages sensibles', 'Q&A de crise', 'Éléments de langage', 'Préparation porte-parole', 'Protocole de réponse', 'Coordination avec Cabinet 86'],
    format: 'Sur devis selon niveau de sensibilité, urgence, périmètre et partenaires mobilisés.',
    inclusions: ['Analyse contexte', 'Messages clés', 'Q&A', 'Posture', 'Plan d’action', 'Coordination expert réputation'],
    exclusions: ['Veille 24/7', 'Relations presse opérationnelles', 'Juridique', 'Social listening payant', 'Gestion temps réel sauf devis'],
    crossSell: ['Media training', 'Stratégie LinkedIn dirigeant', 'Diagnostic 360', 'Cabinet 86'],
    faq: [
      { q: 'Gérez-vous les crises en temps réel ?', a: 'Possible selon périmètre avec partenaires.' },
      { q: 'Cabinet 86 intervient-il ?', a: 'Selon besoin et devis.' },
      { q: 'Peut-on anticiper une crise ?', a: 'Oui, c’est recommandé.' },
      { q: 'Est-ce adapté aux dirigeants ?', a: 'Oui.' },
      { q: 'Est-ce confidentiel ?', a: 'Oui.' }
    ],
    cta: 'Protéger ma réputation'
  },
  'formation-communication-leadership': {
    slug: 'formation-communication-leadership',
    url: '/formation-communication-leadership',
    title: 'Formation & leadership communication',
    category: 'Réputation, formation & leadership',
    hero: 'Certaines stratégies échouent parce qu’elles sont mal portées.',
    enClair: 'Cette offre aide les dirigeants, équipes et porte-paroles à clarifier, incarner et défendre leurs messages dans des contextes professionnels exigeants.',
    fit: [
      'Vous devez prendre la parole en public.',
      'Vous préparez une interview ou une présentation client.',
      'Vous devez négocier ou défendre une proposition.',
      'Votre équipe a besoin d’un cadre de formation.',
      'Vous voulez renforcer la posture de vos dirigeants ou managers.'
    ],
    work: ['Prise de parole', 'Media training', 'Pitch', 'Négociation', 'Business game', 'Posture professionnelle', 'Communication de crise', 'Thought leadership'],
    format: 'À partir de 300 000 FCFA selon format. Modules sur devis avec formateurs spécialisés.',
    inclusions: ['Cadrage pédagogique', 'Support', 'Session', 'Recommandations', 'Debrief selon format'],
    exclusions: ['Location salle', 'Déplacement', 'Captation vidéo', 'Supports avancés', 'Coaching long terme sauf devis'],
    crossSell: ['Stratégie LinkedIn dirigeant', 'Réputation sensible', 'Workshop équipe', 'Pilotage mensuel'],
    faq: [
      { q: 'Qui anime la formation ?', a: 'Selon sujet, Haby et/ou formateurs spécialisés.' },
      { q: 'Est-ce individuel ou collectif ?', a: 'Les deux sont possibles.' },
      { q: 'Peut-on adapter au secteur ?', a: 'Oui.' },
      { q: 'Faites-vous du media training ?', a: 'Oui avec experts si nécessaire.' },
      { q: 'Le business game est-il personnalisé ?', a: 'Possible sur devis.' }
    ],
    cta: 'Organiser une formation'
  }
};

export const offerList = Object.values(offers);
