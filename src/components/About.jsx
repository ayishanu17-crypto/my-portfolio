import { motion } from 'framer-motion';
import { EASE } from '../lib/motion';

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-36">
      <div className="mx-auto max-w-content grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tightest text-ink">
            A little about how I work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-lg text-muted leading-relaxed">
            I'm a Third-year Computer Science and Engineering student at PBR
            Visvodaya Institute of Technology and Science, specializing in
            full-stack web development and AI/ML applications. Most of what
            I've learned has come from building under pressure — hackathon
            weekends where an idea has to go from sketch to working demo in
            48 hours.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            That environment shaped how I work: I'd rather ship something
            small and functional than something ambitious and half-built.
            I care about interfaces that feel considered, and about the
            unglamorous parts underneath them — sync latency, model
            accuracy, responsive edge cases — actually holding up.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Outside of coursework in Data Structures, AI, and Database
            Management Systems, I'm usually in a hackathon Discord or
            picking apart how a product I like is actually built.
          </p>

          <div className="pt-6 border-t border-line">
            <p className="font-mono text-[11px] uppercase tracking-wide text-muted mb-1">
              Education
            </p>
            <p className="text-ink font-medium">
              B.Tech in Computer Science and Engineering
            </p>
            <p className="text-sm text-muted">
              PBR Visvodaya Institute of Technology and Science — Kavali, AP · July 2024 – Present
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
