import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../lib/motion';
import ToolsGrid from './ToolsGrid';

// Teaser on the home page — the full, categorized stack lives on its own
// page (#/skills).
export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36">
      <div className="mx-auto max-w-content px-6 md:px-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display uppercase text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tight text-ink"
          >
            Skills &amp; technologies
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg text-muted leading-relaxed"
          >
            The languages I think in, the frameworks I ship with, and the tools
            I reach for every day — all in one place, neatly divided.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#/skills"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white hover:text-black hover:border-white"
          >
            Explore my stack
            <span aria-hidden="true">→</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Tools marquee stays on home as a full-bleed yellow ribbon */}
      <ToolsGrid />
    </section>
  );
}
