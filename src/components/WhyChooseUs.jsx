import { motion } from 'framer-motion';

const points = [
  'Transparent Communication',
  'Reliable Supplier Network',
  'Competitive Pricing',
  'Strict Quality Standards',
  'Efficient Logistics Coordination',
];

const icon = (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-semibold text-white md:text-4xl"
        >
          Why Choose Krishva Global Exim
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-xl border border-white/20 bg-primary/80 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold text-white">
                {icon}
              </div>
              <span className="font-medium text-white">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
