import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Reliable Supply Network',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Competitive Global Pricing',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Quality Assurance',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="flex min-h-screen items-center bg-secondary py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-semibold text-white md:text-4xl"
        >
          About Krishva
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-3xl space-y-4 text-white/85"
        >
          <p>
            Krishva Global Exim Pvt Ltd was founded by Bhavya Anand and Aditya Tyagi—two ambitious entrepreneurs who started the company with a simple belief: Indian products deserve stronger representation on the world stage. Based in India, we exist to connect trusted Indian manufacturers with international buyers and to build lasting relationships in global trade.
          </p>
          <p>
            We work closely with vetted manufacturers and suppliers across the country to deliver consistent quality, competitive pricing, and reliable supply chains. Transparency, professionalism, and dependable logistics are at the heart of everything we do. Whether it is textiles, automobile parts, or custom bulk orders, we bring a modern, energetic approach to international trade—backed by strict quality standards and a commitment to doing business the right way.
          </p>
          <p>
            We may be young in age, but our vision is global. Krishva Global Exim is here to grow with you, one shipment and one partnership at a time.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-white/20 bg-primary/80 p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="text-gold">{item.icon}</div>
              <h3 className="mt-4 font-heading font-semibold text-white">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
