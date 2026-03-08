import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary"
    >
      {/* Ship image – between background and text, reduced opacity */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{
          opacity: 1,
          scale: 1.25,
          y: [0, -6, 0],
        }}
        transition={{
          opacity: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
          scale: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover object-center opacity-30"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/55 to-primary/92"
          aria-hidden
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-4xl font-bold tracking-[1px] text-white md:text-5xl"
          style={{ fontSize: 'clamp(2rem, 5vw, 48px)' }}
        >
          KRISHVA GLOBAL EXIM PVT LTD
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-lg text-white/90 md:text-xl"
        >
          Connecting Indian products to global markets through reliable
          sourcing, transparent communication, and efficient logistics.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#exports"
            onClick={(e) => scrollTo(e, '#exports')}
            className="inline-flex items-center rounded-lg bg-accent px-6 py-3 font-heading text-base font-medium text-white transition duration-300 hover:-translate-y-px hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            style={{ padding: '12px 26px' }}
          >
            Explore Our Exports
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="inline-flex items-center rounded-lg border-2 border-white bg-transparent px-6 py-3 font-heading text-base font-medium text-white transition duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            style={{ padding: '12px 26px' }}
          >
            Contact Us
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 text-sm text-white/70"
        >
          Based in India | Global Export Network
        </motion.p>
      </div>
    </section>
  );
}
