import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoNav1 from '../assets/logo_nav1.png';
import logoNav2 from '../assets/logo_nav2.png';

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPORT', href: '#exports' },
  { label: 'CONTACT', href: '#contact' },
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
      className="navbar-gradient fixed top-0 left-0 right-0 z-50 h-20 shadow-md"
    >
      <nav
        className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 md:px-[60px]"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, '#hero')}
          className="flex items-center"
          aria-label="Krishva Global - Home"
        >
          <img
            src={logoNav1}
            alt=""
            className="h-28 w-auto md:h-42"
          />
          <img
            src={logoNav2}
            alt="Krishva Global"
            className="h-34 w-auto md:h-66"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex md:gap-10">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className="font-heading text-base font-medium tracking-[0.5px] text-white transition-colors duration-300 hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="navbar-gradient overflow-hidden border-t border-white/20 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => scrollTo(e, href)}
                    className="block rounded-lg px-3 py-2 font-heading text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-accent"
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
