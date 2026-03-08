import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Textile Products',
    description:
      'High-quality cotton garments and textile materials sourced from trusted Indian manufacturers.',
  },
  {
    title: 'Automobile Parts',
    description:
      'Quality automobile parts and components sourced from trusted Indian manufacturers.',
  },
  {
    title: 'Customized Bulk Orders',
    description:
      'We support customized sourcing and bulk export based on client requirements.',
  },
];

export default function Exports() {
  return (
    <section id="exports" className="flex min-h-screen min-h-[100vh] items-center bg-secondary py-20 md:py-[80px]">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-semibold text-accent md:text-[32px]"
        >
          What We Export
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base leading-[1.7] text-white/90"
        >
          Categories of products we export to international markets.
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {categories.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="export-card-bg rounded-[14px] border-2 border-accent p-8 transition-shadow hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-base leading-[1.7] text-white/85">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
