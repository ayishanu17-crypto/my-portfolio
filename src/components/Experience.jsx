import { motion } from 'framer-motion';
import { staggerContainer, scrollFadeUp } from '../lib/motion';

// Customize freely — this drives the Experience section.
const EXPERIENCE = [
  {
    role: 'Cloud Junction Ambassador',
    org: 'Cloud Junction',
    kind: 'Ambassador',
    period: 'Jul 2026 – Present',
    location: 'Remote',
    points: [
      'Promoted technical programs and community events within the university network',
      'Engaged with students to increase awareness and participation in cloud-focused technical initiatives',
      'Collaborated with the organizing team to support campus-wide technical workshops and events',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-28 md:py-36 bg-white/[0.02]">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Career &amp; experience
          </p>
          <h2 className="font-display uppercase text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tight text-ink">
            Experience
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative"
        >
          {/* Timeline spine */}
          <div
            aria-hidden="true"
            className="absolute left-[7px] md:left-[9px] top-1 bottom-1 w-px bg-white/10"
          />

          {EXPERIENCE.map((exp, i) => (
            <motion.article
              key={`${exp.org}-${i}`}
              variants={scrollFadeUp}
              className="relative mb-10 last:mb-0 pl-10 md:pl-16"
            >
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className="absolute left-0 md:left-0.5 top-1.5 h-3.5 w-3.5 md:h-4 md:w-4 rounded-full border-2 border-accent bg-paper transition-colors duration-300 group-hover:bg-accent"
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display uppercase text-2xl md:text-3xl tracking-tight text-ink">
                    {exp.role}
                  </h3>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {exp.kind}
                  </span>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {exp.period}
                </p>
              </div>

              <p className="mt-2 font-mono text-sm text-accent">{exp.org}</p>
              <p className="mt-0.5 font-mono text-xs text-muted">{exp.location}</p>

              <ul className="mt-4 space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] text-muted leading-relaxed">
                    <span aria-hidden="true" className="mt-[9px] h-px w-4 shrink-0 bg-accent/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}