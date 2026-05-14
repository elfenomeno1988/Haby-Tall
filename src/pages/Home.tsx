import { motion } from 'motion/react';
import { ArrowRight, BarChart3, CheckCircle2, Compass, Layers3, Sparkles, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { brandAssets, methodSteps, momentRows, reassuranceItems } from '../data/siteContent';

const methodIcons = [Compass, Layers3, Zap, BarChart3];

export function Home() {
  return (
    <div>
      <section className="brand-grid border-b border-brand-line bg-brand-offwhite">
        <div className="page-shell grid min-h-[calc(100vh-5rem)] gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <p className="eyebrow mb-6">Haby TALL | Brand, Marketing & Digital Growth Strategist</p>
            <h1 className="display-xl">
              Stratégie de marque, communication 360 & croissance digitale
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-brand-ink/72">
              J’aide les marques, PME, agences et porteurs de projets à clarifier leur positionnement, structurer leur communication et activer les bons leviers digitaux pour créer de la préférence, générer de la demande et piloter leur croissance.
            </p>
            <p className="mt-5 text-2xl font-black text-brand-accent">De la clarté stratégique à la croissance digitale.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <NavLink to="/session-cadrage-strategique" className="btn-primary">
                Réserver une session de cadrage
                <ArrowRight size={18} />
              </NavLink>
              <NavLink to="/offres" className="btn-secondary">
                Découvrir les accompagnements
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative min-h-[500px] overflow-hidden bg-brand-black text-white"
          >
            <img src={brandAssets.monogramWhite} alt="" className="absolute -right-14 -top-10 h-72 w-72 object-contain opacity-10" />
            <div className="relative flex min-h-[500px] flex-col justify-between p-8 md:p-10">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="text-sm font-black uppercase text-brand-accent">01</p>
                  <p className="mt-2 max-w-52 text-sm font-semibold leading-6 text-white/62">Brand strategy, communication 360 et digital growth.</p>
                </div>
                <img src={brandAssets.monogramWhite} alt="" className="h-20 w-20 object-contain" />
              </div>

              <div className="max-w-md">
                <p className="text-4xl font-black leading-tight md:text-5xl">De la clarté stratégique à la croissance digitale.</p>
                <div className="mt-8 grid grid-cols-2 gap-px bg-white/15">
                  {[
                    ['Clarifier', 'Positionnement, marché, cibles'],
                    ['Structurer', 'Offres, messages, parcours'],
                    ['Activer', 'Social, contenu, paid, web'],
                    ['Piloter', 'KPI, arbitrage, optimisation']
                  ].map(([title, text]) => (
                    <div key={title} className="bg-brand-black/90 p-4">
                      <p className="text-base font-black text-white">{title}</p>
                      <p className="mt-2 text-xs font-medium leading-5 text-white/52">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 border-t border-white/12 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase text-white/48">Abidjan • Afrique francophone • France</p>
                  <p className="mt-2 text-sm font-semibold text-white/70">Brief, cadrage, diagnostic, activation.</p>
                </div>
                <img src={brandAssets.signatureWhite} alt="Signature Haby Tall" className="h-16 w-40 object-contain object-right" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-brand-black text-white">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="eyebrow mb-5">Conviction</p>
            <h2 className="display-lg text-white">Une marque ne manque pas toujours de visibilité.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-white/72">
            <p>Souvent, elle manque de clarté. De cohérence. D’un discours aligné avec sa vraie valeur. D’un système capable de relier la marque, les contenus, les canaux, les messages et les indicateurs de performance.</p>
            <p>Une marque peut publier souvent et rester floue. Elle peut investir en publicité sans transformer. Elle peut être présente partout sans être réellement choisie. La visibilité est utile. Mais sans clarté, elle devient du bruit.</p>
            <p className="font-bold text-white">Je n’accompagne pas les marques pour faire plus de communication. Je les aide à clarifier ce qu’elles portent, structurer ce qu’elles doivent dire, activer les bons leviers, mobiliser les bonnes expertises et piloter leur croissance avec cohérence.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-offwhite">
        <div className="page-shell">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">Méthode</p>
              <h2 className="display-lg">Clarifier. Structurer. Activer. Piloter.</h2>
            </div>
            <p className="max-w-md text-base font-medium leading-7 text-brand-ink/65">
              Stratégie pour clarifier. Digital pour activer. Production pour matérialiser. Réputation pour protéger. Formation pour incarner.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {methodSteps.map((step, index) => {
              const Icon = methodIcons[index];
              return (
                <article key={step.title} className="panel p-6">
                  <Icon className="mb-8 text-brand-accent" size={26} />
                  <span className="text-sm font-black text-brand-line">0{index + 1}</span>
                  <h3 className="mt-3 text-2xl font-black text-brand-black">{step.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-brand-ink/68">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow mb-4">À quel moment êtes-vous ?</p>
            <h2 className="display-lg">La bonne offre dépend du moment de marque.</h2>
          </div>
          <div className="divide-y divide-brand-line border-y border-brand-line">
            {momentRows.slice(0, 8).map((row) => (
              <NavLink key={row.situation} to={row.href} className="grid gap-5 py-6 transition hover:bg-brand-offwhite md:grid-cols-[1.2fr_0.8fr_auto] md:items-center">
                <p className="text-lg font-semibold text-brand-black">{row.situation}</p>
                <p className="text-base font-bold text-brand-accent">{row.offer}</p>
                <span className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-black">
                  {row.cta}
                  <ArrowRight size={16} />
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-offwhite">
        <div className="page-shell">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end">
            <div>
              <p className="eyebrow mb-4">Réassurance</p>
              <h2 className="display-lg">Un cadre premium, lisible et activable.</h2>
            </div>
            <p className="text-base font-medium leading-7 text-brand-ink/65">
              Le site doit faire comprendre la posture de Haby : stratège orchestratrice, point d’entrée clair, capable de cadrer, mobiliser les bonnes expertises et piloter la croissance.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {reassuranceItems.map((item) => (
              <article key={item.title} className="bg-brand-black p-6 text-white">
                <CheckCircle2 className="mb-8 text-brand-accent" size={24} />
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/68">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-accent text-white">
        <div className="page-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase text-white/70">Point d’entrée recommandé</p>
            <h2 className="display-lg max-w-4xl text-white">Vous ne savez pas par où commencer ?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              La session de cadrage permet de clarifier votre vrai besoin, votre niveau de maturité et le format d’accompagnement le plus pertinent.
            </p>
          </div>
          <NavLink to="/session-cadrage-strategique" className="inline-flex items-center justify-center gap-3 bg-white px-7 py-5 text-sm font-black text-brand-black transition hover:bg-brand-black hover:text-white">
            Réserver une session
            <Sparkles size={18} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
