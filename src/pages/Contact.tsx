import { ArrowRight, Mail, MessageCircle, Smartphone } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { contactOptions } from '../data/siteContent';

export function Contact() {
  return (
    <div>
      <section className="section-pad border-b border-brand-line bg-brand-offwhite">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5">Contact</p>
            <h1 className="display-xl">Parlons de votre projet.</h1>
          </div>
          <p className="text-lg font-medium leading-8 text-brand-ink/72">
            Vous avez une question, une demande d’accompagnement, un besoin de clarification ou un projet à structurer ? Choisissez le bon point d’entrée.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell grid gap-4 md:grid-cols-3">
          {contactOptions.map((option) => (
            <NavLink key={option.title} to={option.href} className="group border border-brand-line bg-brand-offwhite p-6 transition hover:border-brand-accent hover:bg-brand-black">
              <MessageCircle className="mb-8 text-brand-accent" size={24} />
              <h2 className="text-2xl font-black text-brand-black transition group-hover:text-white">{option.title}</h2>
              <p className="mt-4 min-h-20 text-sm leading-7 text-brand-ink/68 transition group-hover:text-white/68">{option.use}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-brand-accent">
                {option.cta}
                <ArrowRight size={16} />
              </span>
            </NavLink>
          ))}
        </div>
      </section>

      <section id="contact-form" className="section-pad bg-brand-offwhite">
        <div className="page-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="panel p-6 md:p-8" onSubmit={(event) => event.preventDefault()}>
            <p className="eyebrow mb-4">Formulaire contact simple</p>
            <h2 className="mb-8 text-3xl font-black text-brand-black">Envoyer un message</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Nom" name="name" />
              <Field label="Entreprise" name="company" />
              <Field label="Email" name="email" type="email" />
              <Field label="WhatsApp" name="whatsapp" />
              <Field label="Pays" name="country" />
              <Field label="Objet" name="subject" />
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold text-brand-black">Message</span>
              <textarea className="min-h-40 w-full border border-brand-line bg-white p-4 outline-none focus:border-brand-accent" />
            </label>
            <label className="mt-5 flex gap-3 text-sm leading-6 text-brand-ink/70">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-brand-accent" />
              J’accepte que mes informations soient utilisées pour répondre à ma demande.
            </label>
            <button type="submit" className="btn-primary mt-7 w-full md:w-auto">
              Envoyer le message
              <ArrowRight size={18} />
            </button>
          </form>

          <aside className="space-y-6">
            <div className="bg-brand-black p-8 text-white">
              <h2 className="text-3xl font-black">Haby TALL</h2>
              <p className="mt-4 text-base leading-7 text-white/70">Brand, Marketing & Digital Growth Strategist. Abidjan, Côte d’Ivoire.</p>
              <div className="mt-8 space-y-4">
                <a href="https://wa.me/2250767130349" className="flex items-center gap-4 text-lg font-bold text-white">
                  <Smartphone className="text-brand-accent" size={22} />
                  +225 07 67 13 03 49
                </a>
                <a href="mailto:contact@habytall.com" className="flex items-center gap-4 text-lg font-bold text-white">
                  <Mail className="text-brand-accent" size={22} />
                  contact@habytall.com
                </a>
              </div>
            </div>
            <div className="border border-brand-line bg-white p-8">
              <p className="eyebrow mb-3">Territoires</p>
              <p className="text-base font-semibold leading-7 text-brand-ink/72">Afrique francophone, France, marchés hybrides.</p>
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
      <span className="mb-2 block text-sm font-bold text-brand-black">{label}</span>
      <input name={name} type={type} className="h-12 w-full border border-brand-line bg-white px-4 outline-none focus:border-brand-accent" />
    </label>
  );
}
