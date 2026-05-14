"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { offers } from "@/data/offers";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mt-10 rounded-sm border-l-[3px] border-brand-green bg-brand-green/5 p-10">
        <CheckCircle2 size={36} className="text-brand-green" />
        <p className="mt-5 font-heading text-2xl font-semibold">
          Message envoyé avec succès
        </p>
        <p className="mt-2 text-base leading-relaxed text-brand-gray">
          Je reviendrai vers vous dans les 24 à 48 heures.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mt-10 space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-brand-anthracite">
            Nom complet
          </label>
          <input
            type="text"
            required
            className="mt-2 w-full border-b-2 border-brand-border/60 bg-transparent px-0 py-3 text-base text-brand-anthracite outline-none transition-colors placeholder:text-brand-gray-light focus:border-brand-green"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-brand-anthracite">
            Email
          </label>
          <input
            type="email"
            required
            className="mt-2 w-full border-b-2 border-brand-border/60 bg-transparent px-0 py-3 text-base text-brand-anthracite outline-none transition-colors placeholder:text-brand-gray-light focus:border-brand-green"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-brand-anthracite">
            Entreprise / Marque
          </label>
          <input
            type="text"
            className="mt-2 w-full border-b-2 border-brand-border/60 bg-transparent px-0 py-3 text-base text-brand-anthracite outline-none transition-colors placeholder:text-brand-gray-light focus:border-brand-green"
            placeholder="Nom de votre marque"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-brand-anthracite">
            Offre qui vous intéresse
          </label>
          <select className="mt-2 w-full border-b-2 border-brand-border/60 bg-transparent px-0 py-3 text-base text-brand-anthracite outline-none transition-colors focus:border-brand-green">
            <option value="">Sélectionner une offre</option>
            {offers.map((o) => (
              <option key={o.slug} value={o.slug}>
                {o.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-brand-anthracite">
          Votre enjeu principal
        </label>
        <textarea
          rows={5}
          required
          className="mt-2 w-full border-b-2 border-brand-border/60 bg-transparent px-0 py-3 text-base text-brand-anthracite outline-none transition-colors placeholder:text-brand-gray-light focus:border-brand-green resize-none"
          placeholder="Décrivez brièvement votre besoin ou votre situation..."
        />
      </div>

      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label>
          Ne pas remplir
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2.5 rounded-sm bg-brand-green px-8 py-4 text-[15px] font-semibold text-brand-offwhite transition-colors hover:bg-brand-green-light"
      >
        <Send size={16} />
        Envoyer le message
      </button>
    </form>
  );
}
