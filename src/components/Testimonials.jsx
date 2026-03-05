import { motion } from 'framer-motion';

const placeholders = [
  'Coming Soon – Your success story with us could be here.',
  'Coming Soon – Your success story with us could be here.',
  'Coming Soon – Your success story with us could be here.',
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-semibold text-white md:text-4xl"
        >
          Client Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-2xl text-white/85"
        >
          We are building trusted relationships across global markets.
          Testimonials from our partners will appear here.
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {placeholders.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-white/20 bg-secondary p-6 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
            >
              <p className="text-white/85 italic">&ldquo;{text}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
