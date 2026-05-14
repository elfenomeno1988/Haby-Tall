import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="mx-auto max-w-md px-6 py-32 text-center">
        <p className="font-heading text-6xl font-semibold text-brand-green">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl font-semibold">
          Page introuvable
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-brand-gray">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-sm bg-brand-green px-6 py-3 text-sm font-medium text-brand-offwhite transition-colors hover:bg-brand-green-light"
          >
            <ArrowLeft size={16} />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm border border-brand-border px-6 py-3 text-sm font-medium text-brand-anthracite transition-colors hover:border-brand-green/30"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
