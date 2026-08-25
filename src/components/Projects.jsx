import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { staggerContainer, badgeStagger, fadeUp, scrollFadeUp } from '../lib/motion';
import { projects } from '../data/projects';
import Counter from './Counter';
import CaseStudyDrawer from './CaseStudyDrawer';

function Corner({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M1 8V1h7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <motion.div variants={scrollFadeUp} className="group relative rounded-2xl">
      {/* Rotating conic-gradient "border" — a fixed rotating layer sitting
          behind a padded inner panel, revealed only on hover via opacity.
          Rotation uses `transform`, so it stays off the paint/layout path. */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-1/2 -top-1/2 h-[200%] w-[200%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,theme(colors.accent)_10%,transparent_26%)]" />
      </div>

      {/* Soft lifted shadow, faded in on hover via opacity only */}
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl opacity-0 shadow-[0_30px_60px_-20px_rgba(10,10,11,0.25)] transition-opacity duration-500 group-hover:opacity-100" />

      {/* Viewfinder corner marks */}
      <div className="absolute top-2 left-2 z-10 h-4 w-4 scale-75 text-accent opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        <Corner className="h-full w-full" />
      </div>
      <div className="absolute bottom-2 right-2 z-10 h-4 w-4 rotate-180 scale-75 text-accent opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        <Corner className="h-full w-full" />
      </div>

      <div className="relative rounded-2xl border border-line bg-paper overflow-hidden">
          {/* Screenshot slot */}
          <div className="aspect-[16/10] w-full bg-accent-soft border-b border-line flex items-center justify-center overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            ) : (
              <span className="font-mono text-xs uppercase tracking-wide text-accent/70">
                Add screenshot — {project.title}
              </span>
            )}
          </div>

          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.tagline}</p>
              </div>
              <span className="shrink-0 pt-2 font-mono text-xs text-muted">{project.year}</span>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-sm leading-relaxed">
                <span className="mr-2 font-mono text-[11px] uppercase tracking-wide text-accent">
                  Problem
                </span>
                <span className="text-muted">{project.problem}</span>
              </p>
              <p className="text-sm leading-relaxed">
                <span className="mr-2 font-mono text-[11px] uppercase tracking-wide text-accent">
                  Solution
                </span>
                <span className="text-muted">{project.solution}</span>
              </p>
            </div>

            {/* Tech stack — staggered badge entrance on scroll */}
            <motion.div
              variants={badgeStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {project.stack.map((tag) => (
                <motion.span
                  key={tag}
                  variants={fadeUp}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-muted"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <ul className="mt-6 space-y-2">
              {project.role.map((line) => (
                <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-ink/90">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>

            {/* Measurable results — staggered, count up when scrolled into view */}
            <motion.div
              variants={badgeStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6"
            >
              {project.results.map((r) => (
                <motion.div key={r.label} variants={fadeUp}>
                  <div className="text-xl md:text-2xl font-black tracking-tight text-ink">
                    <Counter value={r.value} />
                  </div>
                  <div className="mt-1 text-[11px] leading-tight text-muted">{r.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={project.liveHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                Live demo
                <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M1 8h14M9 2l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              {project.repoHref && (
                <a
                  href={project.repoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  Source code
                </a>
              )}
              {project.caseStudy && (
                <button
                  type="button"
                  onClick={() => onOpenCaseStudy(project)}
                  className="text-sm font-medium text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  View case study
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
  );
}

export default function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const targetRef = useRef(null);
  const scrollRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const updateTranslation = () => {
      if (!scrollRef.current) return;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      const maxTranslate = scrollWidth - clientWidth;
      setTranslateX(maxTranslate > 0 ? -maxTranslate : 0);
    };

    // Delay calculation slightly to ensure CSS layouts/images are computed
    const timer = setTimeout(updateTranslation, 100);
    window.addEventListener('resize', updateTranslation);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateTranslation);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, translateX]);

  return (
    <section ref={targetRef} id="work" className="relative h-[300vh] bg-paper">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-12">
        <div className="mx-auto max-w-content w-full px-6 md:px-10 mb-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Featured work
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tightest text-ink">
            Things I've shipped
          </h2>
        </div>

        <div className="relative">
          <motion.div
            ref={scrollRef}
            style={{ x }}
            className="flex gap-8 px-6 md:px-16 w-fit"
          >
            {projects.map((project) => (
              <div
                key={project.slug}
                className="shrink-0 w-[85vw] sm:w-[400px] md:w-[440px] lg:w-[480px]"
              >
                <ProjectCard
                  project={project}
                  onOpenCaseStudy={setActiveCaseStudy}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <CaseStudyDrawer project={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
    </section>
  );
}
