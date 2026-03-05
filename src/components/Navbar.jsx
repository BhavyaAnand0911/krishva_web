import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Exports', href: '#exports' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 overflow-visible bg-primary shadow-md"
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between overflow-visible px-4 md:px-6">
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, '#hero')}
          className="flex items-center"
        >
          <img src={logo} alt="Krishva Global Exim" className="h-28 w-auto object-contain object-left md:h-28" />
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              mobileOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              mobileOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/20 bg-primary md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => scrollTo(e, href)}
                    className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
