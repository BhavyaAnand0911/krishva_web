import { motion } from 'framer-motion';
import footerLogo from '../assets/footer_logo.png';

// Add your company Instagram URL here
const INSTAGRAM_URL = 'https://www.instagram.com/krishvaglobal/';

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-visible bg-primary py-1.5"
    >
      <div className="mx-auto max-w-6xl px-3 md:px-4">
        <div className=" flex justify-center">
          <img
            src={footerLogo}
            alt="Krishva Global Exim"
            className="h-28 w-auto object-contain md:h-48"
          />
        </div>
        <div className="mt-1 flex flex-col items-center gap-0.5 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="md:max-w-sm">
            <p className="font-heading text-xs font-semibold text-white">
              Krishva Global Exim Pvt Ltd
            </p>
            <p className="text-[11px] text-white/90 pb-2">
              India-based export company connecting Indian products to global
              markets.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              onClick={(e) => scrollTo(e, '#about')}
              className="text-[11px] font-medium text-white/90 transition hover:text-white"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="text-[11px] font-medium text-white/90 transition hover:text-white"
            >
              Contact
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/90 transition hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <p className="mt-1 border-t border-white/20 pb-4 pt-4 text-center text-[11px] text-white/80">
          © 2026 Krishva Global Exim Pvt Ltd. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
