import { ArrowRight, Mail, Smartphone } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { contactOptions } from '../data/siteContent';

export function Contact() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line/40">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-6">Contact</p>
            <h1 className="display-xl">Parlons de votre projet.</h1>
          </div>
          <p className="max-w-md text-base font-light leading-8 text-brand-ink/55 lg:text-right">
            Question, demande d'accompagnement ou projet à structurer — choisissez le bon point d'entrée.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell grid gap-6 md:grid-cols-3">
          {contactOptions.map((option) => (
            <NavLink
              key={option.title}
              to={option.href}
              className="group border border-brand-line/40 p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
            >
              <h2 className="font-serif text-2xl font-normal text-brand-black">{option.title}</h2>
              <p className="mt-4 min-h-16 text-sm font-light leading-7 text-brand-ink/55">{option.use}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-accent">
                {option.cta}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </NavLink>
          ))}
        </div>
      </section>

      <section id="contact-form" className="section-pad border-t border-brand-line/40">
        <div className="page-shell grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] md:p-10" onSubmit={(e) => e.preventDefault()}>
            <p className="eyebrow mb-4">Formulaire</p>
            <h2 className="font-serif text-3xl font-normal text-brand-black">Envoyer un message</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field label="Nom" name="name" />
              <Field label="Entreprise" name="company" />
              <Field label="Email" name="email" type="email" />
              <Field label="WhatsApp" name="whatsapp" />
              <Field label="Pays" name="country" />
              <Field label="Objet" name="subject" />
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-light text-brand-ink/70">Message</span>
              <textarea className="min-h-36 w-full border border-brand-line/50 bg-brand-cream/30 p-4 text-sm font-light outline-none transition focus:border-brand-accent" />
            </label>
            <label className="mt-5 flex gap-3 text-sm font-light leading-6 text-brand-ink/50">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-brand-accent" />
              J'accepte que mes informations soient utilisées pour répondre à ma demande.
            </label>
            <button type="submit" className="btn-primary mt-8">
              Envoyer
              <ArrowRight size={14} />
            </button>
          </form>

          <aside className="flex flex-col gap-8">
            <div className="bg-brand-black p-10 text-white">
              <h2 className="font-serif text-3xl font-normal">Haby Tall</h2>
              <p className="mt-4 text-sm font-light leading-7 text-white/50">Brand, Marketing & Digital Growth Strategist</p>
              <div className="mt-10 space-y-5">
                <a href="https://wa.me/2250767130349" className="flex items-center gap-4 text-base font-light text-white/70 transition hover:text-white">
                  <Smartphone className="text-brand-accent" size={18} />
                  +225 07 67 13 03 49
                </a>
                <a href="mailto:contact@habytall.com" className="flex items-center gap-4 text-base font-light text-white/70 transition hover:text-white">
                  <Mail className="text-brand-accent" size={18} />
                  contact@habytall.com
                </a>
              </div>
              <p className="mt-10 text-sm font-light text-white/30">Abidjan, Côte d'Ivoire &middot; Afrique francophone &middot; France</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = 'text' }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-light text-brand-ink/70">{label}</span>
      <input
        name={name}
        type={type}
        className="h-12 w-full border border-brand-line/50 bg-brand-cream/30 px-4 text-sm font-light outline-none transition focus:border-brand-accent"
      />
    </label>
  );
}
