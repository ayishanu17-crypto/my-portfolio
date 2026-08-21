import { motion } from 'framer-motion';
import { staggerContainer, scrollFadeUp } from '../lib/motion';
import { projects } from '../data/projects';

function Corner({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M1 8V1h7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={scrollFadeUp}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative rounded-2xl border border-line bg-paper overflow-hidden"
    >
      <motion.div
        variants={{ rest: { y: 0 }, hover: { y: -6 } }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <motion.span
          aria-hidden="true"
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl shadow-[0_30px_60px_-20px_rgba(10,10,11,0.25)]"
        />
        <motion.div
          variants={{ rest: { opacity: 0, scale: 0.85 }, hover: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-2 left-2 h-4 w-4 text-accent z-10"
        >
          <Corner className="h-full w-full" />
        </motion.div>
        <motion.div
          variants={{ rest: { opacity: 0, scale: 0.85 }, hover: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-2 right-2 h-4 w-4 rotate-180 text-accent z-10"
        >
          <Corner className="h-full w-full" />
        </motion.div>

        {/* Screenshot slot — replace this block with an <img src="/shots/kvantum.png" ... /> */}
        <div className="aspect-[16/10] w-full bg-accent-soft border-b border-line flex items-center justify-center">
          <span className="font-mono text-xs text-accent/70 uppercase tracking-wide">
            Add screenshot — {project.title}
          </span>
        </div>

        <div className="p-8 md:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
                {project.title}
              </h3>
              <p className="text-sm text-muted mt-1">{project.tagline}</p>
            </div>
            <span className="font-mono text-xs text-muted pt-2 shrink-0">{project.year}</span>
          </div>

          {/* Problem / Solution */}
          <div className="mt-6 space-y-3">
            <p className="text-sm leading-relaxed">
              <span className="font-mono text-[11px] uppercase tracking-wide text-accent mr-2">
                Problem
              </span>
              <span className="text-muted">{project.problem}</span>
            </p>
            <p className="text-sm leading-relaxed">
              <span className="font-mono text-[11px] uppercase tracking-wide text-accent mr-2">
                Solution
              </span>
              <span className="text-muted">{project.solution}</span>
            </p>
          </div>

          {/* Tech stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] uppercase tracking-wide text-muted border border-line rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Role / key features */}
          <ul className="mt-6 space-y-2">
            {project.role.map((line) => (
              <li key={line} className="flex gap-2.5 text-sm text-ink/90 leading-relaxed">
                <span className="mt-[7px] h-1 w-1 rounded-full bg-accent shrink-0" />
                {line}
              </li>
            ))}
          </ul>

          {/* Measurable results */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {project.results.map((r) => (
              <div key={r.label}>
                <div className="text-xl md:text-2xl font-black tracking-tight text-ink">
                  {r.value}
                </div>
                <div className="text-[11px] text-muted mt-1 leading-tight">{r.label}</div>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href={project.liveHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors"
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
                className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors"
              >
                Source code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-36">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Featured work
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tightest text-ink">
            Things I've shipped
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
