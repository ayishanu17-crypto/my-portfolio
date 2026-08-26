import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../lib/motion';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/ayishanu17-crypto' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ayisha-shaik-60018a354' },
];

const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`;

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-40 border-t border-line">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="mx-auto max-w-content text-center"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6"
        >
          Get in touch
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-display uppercase text-[clamp(2.75rem,9vw,6rem)] leading-[0.9] tracking-tight text-ink"
        >
          Let's build
          <br />
          something together
        </motion.h2>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            variants={fadeUp}
            href="mailto:ayishashaik1979@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-medium text-paper transition-transform duration-300 hover:-translate-y-0.5"
          >
            ayishashaik1979@gmail.com
          </motion.a>

          <motion.a
            variants={fadeUp}
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-medium text-ink transition-colors duration-300 hover:bg-white hover:text-black hover:border-white"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 1v10m0 0 4-4M8 11 4 7M2 15h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download résumé
          </motion.a>
        </div>

        <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted hover:text-ink transition-colors underline underline-offset-4 decoration-line"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
