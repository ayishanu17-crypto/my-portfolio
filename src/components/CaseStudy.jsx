import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../data/projects';
import { EASE } from '../lib/motion';

const FIELDS = [
  { key: 'challenge', label: 'The challenge' },
  { key: 'decisions', label: 'Engineering decisions' },
  { key: 'tradeoffs', label: 'Trade-offs' },
];

export default function CaseStudy() {
  const [openIndex, setOpenIndex] = useState(0);
  const featured = projects.filter((p) => p.caseStudy);

  if (featured.length === 0) return null;

  return (
    <section className="px-6 md:px-10 pb-28 md:pb-36">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 max-w-xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white mb-4">
            Case study
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tightest text-ink">
            A closer look at {featured[0].title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="rounded-2xl border border-line divide-y divide-line"
        >
          {FIELDS.map((field, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={field.key}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-6 text-left"
                >
                  <span className="text-base md:text-lg font-medium text-ink">
                    {field.label}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="text-2xl text-white leading-none shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 md:px-8 pb-6 text-muted leading-relaxed max-w-2xl">
                        {featured[0].caseStudy[field.key]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
