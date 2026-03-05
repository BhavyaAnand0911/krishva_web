import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// EmailJS – https://www.emailjs.com/
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
// Template for inquiry email (to your company). In EmailJS set this template's "To" to {{to_email}}.
const EMAILJS_QUERY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_QUERY_TEMPLATE_ID';
// Company email – used as recipient for the query email (must match "To" in query template, e.g. {{to_email}}).
const EMAILJS_TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL || '';
// Template for auto-reply to user. In EmailJS set "To" to {{email}} so it sends to the person who submitted the form.
const EMAILJS_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID || 'template_3vmyuod';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    product: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // 1. Send inquiry to your company (recipient must be set via to_email in template)
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_QUERY_TEMPLATE_ID,
        {
          to_email: EMAILJS_TO_EMAIL,
          from_name: formData.name,
          from_company: formData.company,
          from_country: formData.country,
          from_email: formData.email,
          product_requirement: formData.product,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      // 2. Send auto-reply to the user (format: name, email – template To should be {{email}})
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_REPLY_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', company: '', country: '', email: '', product: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-semibold text-white md:text-4xl"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-white/85"
        >
          Interested in sourcing products from India? Send us your requirements
          and our team will respond promptly.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/90">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white/90">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-white/90">
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="product" className="block text-sm font-medium text-white/90">
              Product Requirement
            </label>
            <input
              id="product"
              name="product"
              type="text"
              value={formData.product}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/90">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {status === 'success' && (
            <p className="rounded-lg bg-green-500/20 p-3 text-sm text-green-200">
              Thank you. Your inquiry has been sent. We will respond promptly.
            </p>
          )}
          {status === 'error' && (
            <p className="rounded-lg bg-red-500/20 p-3 text-sm text-red-200">
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            aria-label="Send inquiry"
            className="w-full rounded-lg bg-gold px-6 py-3 font-medium text-dark transition hover:bg-gold-light disabled:opacity-70 sm:w-auto"
          >
            {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
