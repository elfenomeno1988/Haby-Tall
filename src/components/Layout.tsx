import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ArrowRight, Mail, Menu, Smartphone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { brandAssets, navLinks } from '../data/siteContent';
import { cn } from '../lib/utils';

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink">
      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-all duration-500',
          scrolled
            ? 'border-brand-line/60 bg-brand-cream/95 backdrop-blur-md'
            : 'border-transparent bg-brand-cream/80'
        )}
      >
        <div className="page-shell">
          <div className="flex h-20 items-center justify-between gap-8">
            <NavLink to="/" onClick={() => setMobileOpen(false)}>
              <img
                src={brandAssets.signatureBlack}
                alt="Haby Tall"
                className={cn(
                  'object-contain object-left transition-all duration-500',
                  scrolled ? 'h-10 w-32' : 'h-12 w-40'
                )}
              />
            </NavLink>

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    cn('nav-link', isActive && 'nav-link-active')
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center lg:flex">
              <NavLink to="/contact" className="btn-primary py-3">
                Prendre rendez-vous
              </NavLink>
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center text-brand-black lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-brand-cream lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <NavLink
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block py-3 font-serif text-3xl font-light text-brand-ink/70 transition-colors',
                        isActive && 'text-brand-black'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <NavLink
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary"
                >
                  Prendre rendez-vous
                  <ArrowRight size={16} />
                </NavLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-brand-line/40 bg-brand-black text-white">
        <div className="page-shell py-24">
          <div className="flex flex-col items-start gap-16 lg:flex-row lg:justify-between">
            <div className="max-w-md">
              <img
                src={brandAssets.signatureWhite}
                alt="Haby Tall"
                className="mb-8 h-16 w-48 object-contain object-left"
              />
              <p className="font-serif text-xl font-light italic leading-relaxed text-white/60">
                De la clarté stratégique à la croissance digitale.
              </p>
              <p className="mt-6 text-sm font-light text-white/40">
                Abidjan, Côte d'Ivoire &middot; Afrique francophone &middot; France
              </p>
            </div>

            <div className="flex flex-col gap-12 sm:flex-row sm:gap-20">
              <div>
                <h3 className="eyebrow mb-6 text-white/50">Navigation</h3>
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <NavLink
                        to={link.href}
                        className="text-sm font-light text-white/55 transition hover:text-white"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="eyebrow mb-6 text-white/50">Ressources</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Par où commencer', href: '/par-ou-commencer' },
                    { label: 'FAQ', href: '/faq' },
                    { label: 'Lexique', href: '/lexique-marketing-digital-branding' },
                    { label: 'Écosystème', href: '/ecosysteme-partenaires' },
                  ].map((link) => (
                    <li key={link.href}>
                      <NavLink
                        to={link.href}
                        className="text-sm font-light text-white/55 transition hover:text-white"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="eyebrow mb-6 text-white/50">Contact</h3>
                <div className="flex gap-3">
                  <a
                    href="mailto:contact@habytall.com"
                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/50 transition hover:border-brand-accent hover:text-brand-accent"
                    aria-label="Email"
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href="https://wa.me/2250767130349"
                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/50 transition hover:border-brand-accent hover:text-brand-accent"
                    aria-label="WhatsApp"
                  >
                    <Smartphone size={16} />
                  </a>
                </div>
                <NavLink
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition hover:text-white"
                >
                  Prendre rendez-vous
                  <ArrowRight size={14} />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/8 pt-8 text-[11px] font-light text-white/35 md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} Haby Tall. Tous droits réservés.</p>
            <div className="flex flex-wrap gap-6">
              <NavLink to="/mentions-legales" className="transition hover:text-white/60">Mentions légales</NavLink>
              <NavLink to="/politique-confidentialite" className="transition hover:text-white/60">Confidentialité</NavLink>
              <NavLink to="/politique-cookies" className="transition hover:text-white/60">Cookies</NavLink>
              <NavLink to="/conditions-generales-de-vente" className="transition hover:text-white/60">CGV</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
