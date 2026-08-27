import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { scrollFadeUp } from '../lib/motion';
import { projects } from '../data/projects';
import CaseStudyDrawer from './CaseStudyDrawer';

// Editorial index label: 01, 02, 03...
const indexLabel = (n) => String(n + 1).padStart(2, '0');

function ProjectCard({ project, index, onOpenCase }) {
  return (
    <motion.div variants={scrollFadeUp} className="group relative h-full w-full">
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-black/20 transition-colors duration-500 group-hover:border-white/25">
        {/* Full-bleed screenshot, scales gently on hover */}
        {project.image && (
          <a
            href={project.liveHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open live site: ${project.title}`}
            className="absolute inset-0 block"
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
            />
          </a>
        )}

        {/* Legibility scrim from the bottom for the overlaid content */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050506ee] via-[#0a0a0b55] to-transparent" />

        {/* Hairline ring inside the frame, brightens on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 transition duration-500 group-hover:ring-white/25" />

        {/* Top meta rails */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.25em] text-white/70">
              {indexLabel(index)}
            </span>
            <span className="h-px w-8 bg-white/30" />
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
            {project.year}
          </span>
        </div>

        {/* Bottom content: big display title, tagline, tags, actions */}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <h3 className="font-display text-[2.6rem] leading-[0.92] tracking-tight text-white uppercase md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-2 max-w-[28ch] text-sm text-white/60">{project.tagline}</p>

          {project.stack?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex items-center gap-5 border-t border-white/10 pt-4">
            <a
              href={project.liveHref}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:text-white/80"
            >
              Live site
              <span className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                ↗
              </span>
            </a>
            {project.caseStudy && (
              <button
                type="button"
                onClick={() => onOpenCase(project)}
                className="font-mono text-xs uppercase tracking-widest text-white/50 transition-colors hover:text-white"
              >
                Case study
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
      // The card row is `w-fit`, so it never scrolls internally, its
      // clientWidth is identical to its scrollWidth. To know how far the row
      // must travel, compare its full content width against the viewport width.
      const scrollWidth = scrollRef.current.scrollWidth;
      const viewportWidth = targetRef.current?.clientWidth ?? window.innerWidth;
      const maxTranslate = scrollWidth - viewportWidth;
      setTranslateX(maxTranslate > 0 ? -maxTranslate : 0);
    };

    // Delay calculation slightly so CSS layouts/images are computed first
    const timer = setTimeout(updateTranslation, 100);
    window.addEventListener('resize', updateTranslation);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateTranslation);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, translateX]);

  return (
    <section ref={targetRef} id="work" className="relative h-[300vh] bg-[#0C0C0C] text-white">
      <div className="sticky top-0 flex h-screen flex-col overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <div className="mx-auto flex w-full max-w-[1500px] shrink-0 flex-wrap items-end justify-between gap-x-6 gap-y-2 px-6 pt-7 pb-3 md:px-14 md:pt-10">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-[#10B981]">
              Selected work
            </p>
            <h2 className="font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.85] text-white uppercase">
              Projects
            </h2>
            <p className="mt-1 font-hand text-xl text-white/40">things I&apos;ve shipped</p>
          </div>
          <p className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.25em] text-white/40 lg:block">
            Keep scrolling →
          </p>
        </div>

        {/* Horizontally travelling card row (driven by vertical scroll) */}
        <div className="relative min-h-0 flex-1">
          <motion.div
            ref={scrollRef}
            style={{ x }}
            className="flex h-full gap-6 px-6 pt-2 pb-8 md:gap-10 md:px-14"
          >
            {projects.map((project, i) => (
              <div
                key={project.slug}
                className="h-full shrink-0 w-[88vw] sm:w-[360px] md:w-[420px] lg:w-[480px]"
              >
                <ProjectCard
                  project={project}
                  index={i}
                  onOpenCase={setActiveCaseStudy}
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
