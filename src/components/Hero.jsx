import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Global Trade. Trusted Partnerships.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-lg text-white/90 sm:text-xl"
        >
          Krishva Global Exim Pvt Ltd connects high-quality Indian products with
          international markets through reliable sourcing, transparent
          communication, and efficient logistics.
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
            className="inline-flex items-center rounded-lg bg-gold px-6 py-3 font-medium text-dark transition hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-primary"
          >
            Explore Our Exports
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="inline-flex items-center rounded-lg border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
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
