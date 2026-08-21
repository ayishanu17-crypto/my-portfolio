import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../lib/motion';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-16 overflow-hidden"
    >
      {/* Subtle static grid — pure CSS, no animation cost */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0A0A0B 1px, transparent 1px), linear-gradient(to bottom, #0A0A0B 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-content w-full"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-accent mb-6"
        >
          CSE Undergrad — Full-Stack &amp; AI/ML
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-[13vw] md:text-[7.5vw] leading-[0.95] font-black tracking-tightest text-ink"
        >
          Ayisha Shaik
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg md:text-xl text-muted font-light leading-relaxed"
        >
          Third-year CSE student building production-ready web apps and
          ML models under hackathon deadlines — React and TypeScript on
          the frontend, Python and TensorFlow when the problem calls for it.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-0.5"
          >
            View my work
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1 8h14M9 2l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="mailto:ayishashaik1979@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue — transform/opacity only, respects reduced motion via Tailwind */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 motion-reduce:hidden"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-9 w-[1px] bg-line"
        />
      </motion.div>
    </section>
  );
}
