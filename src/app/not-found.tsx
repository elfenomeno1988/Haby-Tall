import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-heading text-[6rem] font-semibold leading-none tracking-tight text-ink/10">
        404
      </p>
      <h1 className="mt-4 font-heading text-2xl font-semibold">
        Page introuvable
      </h1>
      <p className="mt-3 text-[15px] text-muted">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 bg-green px-6 py-3 text-[14px] font-semibold text-paper transition-colors hover:bg-green-light"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
