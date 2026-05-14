import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail, Menu, Smartphone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { brandAssets, navLinks } from '../data/siteContent';
import { cn } from '../lib/utils';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-ink quiet-noise">
      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-colors duration-300',
          scrolled ? 'border-brand-line bg-brand-offwhite/95 backdrop-blur' : 'border-transparent bg-brand-offwhite/75'
        )}
      >
        <div className="page-shell">
          <div className="flex min-h-20 items-center justify-between gap-6">
            <NavLink to="/" className="group flex items-center gap-4" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="flex h-12 w-12 items-center justify-center bg-brand-black p-2">
                <img src={brandAssets.monogramWhite} alt="" className="h-full w-full object-contain" />
              </span>
              <span className="flex flex-col">
                <span className="text-xl font-black uppercase leading-none text-brand-black">Haby Tall</span>
                <span className="mt-1 text-xs font-semibold text-brand-accent">Brand, Marketing & Digital Growth Strategist</span>
              </span>
            </NavLink>

            <nav className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-bold text-brand-ink/65 transition hover:text-brand-accent',
                      isActive && 'text-brand-black'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <NavLink to="/brief-cadrage-strategique" className="btn-primary py-3">
                Brief stratégique
                <ArrowRight size={16} />
              </NavLink>
            </div>

            <button
              className="inline-flex h-11 w-11 items-center justify-center border border-brand-black text-brand-black lg:hidden"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              aria-label="Ouvrir le menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-0 top-20 z-40 border-b border-brand-line bg-brand-offwhite lg:hidden"
          >
            <nav className="page-shell flex flex-col gap-1 py-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn('px-2 py-3 text-lg font-bold', isActive ? 'text-brand-accent' : 'text-brand-black')
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/brief-cadrage-strategique"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary mt-4 w-full"
              >
                Remplir le brief stratégique
                <ArrowRight size={16} />
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-brand-line bg-brand-black text-white">
        <div className="page-shell py-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div>
              <img src={brandAssets.signatureWhite} alt="Signature Haby Tall" className="mb-6 h-16 w-44 object-contain object-left" />
              <p className="max-w-sm text-sm leading-7 text-white/70">
                Haby TALL - Brand, Marketing & Digital Growth Strategist. De la clarté stratégique à la croissance digitale.
              </p>
              <p className="mt-5 text-sm text-white/55">Abidjan, Côte d’Ivoire. Afrique francophone, France, marchés hybrides.</p>
            </div>

            <FooterList title="Navigation" items={navLinks} />
            <FooterList
              title="Ressources"
              items={[
                { label: 'Brief stratégique', href: '/brief-cadrage-strategique' },
                { label: 'Par où commencer ?', href: '/par-ou-commencer' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Lexique', href: '/lexique-marketing-digital-branding' },
                { label: 'Écosystème & Partenaires', href: '/ecosysteme-partenaires' },
                { label: 'Médias & Presse', href: '/medias-presse' }
              ]}
            />
            <div>
              <h3 className="mb-5 text-sm font-black uppercase text-white">Contact</h3>
              <div className="flex gap-3">
                <a href="mailto:contact@habytall.com" className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition hover:border-brand-accent hover:text-brand-accent" aria-label="Email">
                  <Mail size={18} />
                </a>
                <a href="https://wa.me/2250767130349" className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition hover:border-brand-accent hover:text-brand-accent" aria-label="WhatsApp">
                  <Smartphone size={18} />
                </a>
                <a href="#" className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition hover:border-brand-accent hover:text-brand-accent" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
              <NavLink to="/session-cadrage-strategique" className="mt-7 inline-flex items-center gap-3 text-sm font-extrabold text-brand-accent">
                Réserver une session
                <ArrowRight size={16} />
              </NavLink>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Haby Tall. Tous droits réservés.</p>
            <div className="flex flex-wrap gap-5">
              <NavLink to="/mentions-legales" className="hover:text-white">Mentions légales</NavLink>
              <NavLink to="/politique-confidentialite" className="hover:text-white">Confidentialité</NavLink>
              <NavLink to="/politique-cookies" className="hover:text-white">Cookies</NavLink>
              <NavLink to="/conditions-generales-de-vente" className="hover:text-white">CGV</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-black uppercase text-white">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <NavLink to={item.href} className="text-sm text-white/65 transition hover:text-white">
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
