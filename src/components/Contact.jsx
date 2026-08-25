import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../lib/motion';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/ayishanu17-crypto' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ayisha-shaik-60018a354' },
];

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
          className="text-[10vw] md:text-6xl font-black tracking-tightest text-ink leading-[1.05]"
        >
          Let's build
          <br />
          something together
        </motion.h2>

        <motion.a
          variants={fadeUp}
          href="mailto:ayishashaik1979@gmail.com"
          className="inline-flex mt-10 items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-medium text-paper transition-transform duration-300 hover:-translate-y-0.5"
        >
          ayishashaik1979@gmail.com
        </motion.a>

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
