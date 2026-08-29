import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../lib/motion';

// Teaser on the home page — the full story lives on its own page (#/about).
export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display uppercase text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.9] tracking-tight text-ink"
          >
            About me
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg text-muted leading-relaxed"
          >
            I'm Ayisha — a Full-Stack Developer with a growing passion for AI/ML. I love turning ideas into functional, meaningful digital experiences and learning whatever it takes to make them better.I build fast, ship clean, and
            care about the details most people never notice.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#/about"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white hover:text-black hover:border-white"
          >
            Read my story
            <span aria-hidden="true">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
