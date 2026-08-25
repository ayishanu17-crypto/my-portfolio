import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from '../lib/motion';

const FIELDS = [
  { key: 'challenge', label: 'The challenge' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'dataFlow', label: 'Data flow' },
  { key: 'decisions', label: 'Engineering decisions' },
  { key: 'tradeoffs', label: 'Trade-offs' },
];

export default function CaseStudyDrawer({ project, onClose }) {
  // Close on Escape, and lock background scroll while the drawer is open.
  useEffect(() => {
    if (!project) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
          />
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed top-0 right-0 z-[70] h-full w-full sm:w-[520px] bg-paper border-l border-line overflow-y-auto"
          >
            <div className="p-8 md:p-10">
              <div className="flex items-start justify-between gap-4 mb-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-2">
                    Case study
                  </p>
                  <h3 className="text-3xl font-black tracking-tightest text-ink">
                    {project.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close case study"
                  className="h-9 w-9 shrink-0 rounded-full border border-line flex items-center justify-center text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-8">
                {FIELDS.map(
                  (f) =>
                    project.caseStudy[f.key] && (
                      <div key={f.key}>
                        <h4 className="font-mono text-[11px] uppercase tracking-wide text-muted mb-2">
                          {f.label}
                        </h4>
                        <p className="text-ink/90 leading-relaxed">
                          {project.caseStudy[f.key]}
                        </p>
                      </div>
                    )
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
