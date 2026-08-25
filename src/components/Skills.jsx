import { motion } from 'framer-motion';
import { staggerContainer, badgeStagger, scrollFadeUp, fadeUp } from '../lib/motion';

const CATEGORIES = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'Frameworks & Platforms',
    items: ['React', 'Tailwind CSS', 'Vite', 'Firebase', 'MongoDB', 'Node.js'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Google Cloud Platform'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-10 py-28 md:py-36 bg-accent-soft/40">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Toolkit
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tightest text-ink">
            Skills &amp; technologies
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
        >
          {CATEGORIES.map((cat) => (
            <motion.div key={cat.label} variants={scrollFadeUp}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-muted mb-5 pb-3 border-b border-line">
                {cat.label}
              </h3>

              {/* Badges stagger in one-by-one, a beat faster than the
                  category itself, once it's in view */}
              <motion.div
                variants={badgeStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {cat.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={fadeUp}
                    className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] text-ink"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
