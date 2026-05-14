import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { brandAssets, methodSteps, momentRows } from '../data/siteContent';

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="flex min-h-[calc(100dvh-5rem)] items-center justify-center border-b border-brand-line/40">
        <div className="page-shell py-24 text-center">
          <motion.img
            src={brandAssets.signatureBlack}
            alt="Haby Tall"
            className="mx-auto mb-12 h-20 w-64 object-contain sm:h-24 sm:w-80 signature-reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.h1
            className="display-xl mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Stratégie de marque, communication&nbsp;360 & croissance digitale
          </motion.h1>

          <motion.p
            className="mx-auto mt-8 max-w-2xl text-lg font-light leading-8 text-brand-ink/60"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            J'aide les marques à clarifier leur positionnement, structurer leur communication et activer les leviers qui créent préférence, demande et croissance.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <NavLink to="/session-cadrage-strategique" className="btn-primary">
              Réserver une session
              <ArrowRight size={16} />
            </NavLink>
            <NavLink to="/offres" className="btn-secondary">
              Découvrir les offres
            </NavLink>
          </motion.div>

          <motion.p
            className="eyebrow mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Brand, Marketing & Digital Growth Strategist — Abidjan
          </motion.p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-pad bg-brand-black text-white">
        <RevealOnScroll className="page-shell mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-10 text-brand-gold/60">Conviction</p>
          <p className="pull-quote text-white/80">
            Une marque ne manque pas toujours de visibilité. Souvent, elle manque de clarté — un discours aligné avec sa vraie valeur, un système qui relie marque, contenus, canaux et indicateurs. La visibilité sans clarté n'est que du bruit.
          </p>
          <div className="mx-auto mt-16 h-px w-16 bg-brand-gold/30" />
          <p className="mx-auto mt-10 max-w-2xl text-base font-light leading-8 text-white/50">
            Je n'accompagne pas les marques pour communiquer davantage. Je les aide à clarifier ce qu'elles portent, structurer ce qu'elles doivent dire, et piloter leur croissance avec cohérence.
          </p>
        </RevealOnScroll>
      </section>

      {/* Method */}
      <section className="section-pad">
        <div className="page-shell">
          <RevealOnScroll className="mb-16 max-w-2xl">
            <p className="eyebrow mb-6">Méthode</p>
            <h2 className="display-lg">Quatre étapes.<br />Un cadre clair.</h2>
          </RevealOnScroll>

          <div className="divide-y divide-brand-line/50">
            {methodSteps.map((step, i) => (
              <RevealOnScroll key={step.title} delay={i * 0.1}>
                <div className="grid gap-6 py-10 md:grid-cols-[auto_1fr_2fr] md:items-baseline md:gap-12">
                  <span className="step-number">0{i + 1}</span>
                  <h3 className="font-serif text-3xl font-normal text-brand-black">{step.title}</h3>
                  <p className="text-base font-light leading-8 text-brand-ink/60 md:max-w-lg">{step.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="section-pad border-t border-brand-line/40 bg-white">
        <div className="page-shell">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow mb-6">Point d'entrée</p>
              <h2 className="display-lg">Votre situation détermine votre accompagnement.</h2>
            </div>
            <p className="max-w-md text-base font-light leading-8 text-brand-ink/50 lg:text-right">
              Chaque marque n'a pas besoin de la même chose au même moment. Trouvez votre point de départ.
            </p>
          </div>

          <div className="divide-y divide-brand-line/40">
            {momentRows.map((row) => (
              <NavLink
                key={row.situation}
                to={row.href}
                className="group grid gap-4 py-6 transition-colors hover:bg-brand-cream/60 md:grid-cols-[1.2fr_0.8fr_auto] md:items-center md:px-4"
              >
                <p className="text-base font-light text-brand-ink/70 transition-colors group-hover:text-brand-black">{row.situation}</p>
                <p className="font-serif text-lg font-normal text-brand-accent">{row.offer}</p>
                <span className="flex items-center gap-2 text-sm font-medium text-brand-ink/40 transition-colors group-hover:text-brand-accent">
                  {row.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-brand-cream">
        <RevealOnScroll className="page-shell text-center">
          <img
            src={brandAssets.monogramBlack}
            alt=""
            className="mx-auto mb-10 h-16 w-16 object-contain opacity-15"
          />
          <h2 className="display-md mx-auto max-w-2xl">
            Vous ne savez pas par où commencer ?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light leading-8 text-brand-ink/55">
            La session de cadrage permet de clarifier votre besoin, votre maturité et le bon format d'accompagnement.
          </p>
          <NavLink to="/session-cadrage-strategique" className="btn-primary mt-10">
            Réserver une session de cadrage
            <ArrowRight size={16} />
          </NavLink>
        </RevealOnScroll>
      </section>
    </div>
  );
}
