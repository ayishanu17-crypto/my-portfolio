import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../lib/motion';
import StatusPulse from './StatusPulse';
import MagneticButton from './MagneticButton';
import Terminal from './Terminal';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-16 overflow-hidden"
    >
      {/* Subtle static grid — pure CSS, no animation cost */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />

      <div className="relative mx-auto max-w-content w-full grid lg:grid-cols-[1.25fr_1fr] gap-14 items-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-accent">
              CSE Undergrad — Full-Stack &amp; AI/ML
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="mb-6">
            <StatusPulse label="Available for internships" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display uppercase text-[clamp(3.5rem,13vw,9.5rem)] leading-[0.85] tracking-tight text-ink"
          >
            Ayisha Shaik
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-4">
            <Typewriter />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg md:text-xl text-muted font-light leading-relaxed"
          >
            Third-year CSE student building production-ready web apps and
            ML models under hackathon deadlines — React and TypeScript on
            the frontend, Python and TensorFlow when the problem calls for it.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper"
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
            </MagneticButton>

            <MagneticButton
              href="mailto:ayishashaik1979@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
            >
              Get in touch
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Interactive terminal — hidden on the smallest screens to avoid
            competing with the headline on a phone-sized viewport */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden sm:flex justify-center lg:justify-end"
        >
          <Terminal />
        </motion.div>
      </div>

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
          className="h-9 w-[1px] bg-white/40"
        />
      </motion.div>
    </section>
  );
}
