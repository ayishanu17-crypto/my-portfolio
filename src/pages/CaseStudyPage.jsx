import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { staggerContainer, fadeUp } from '../lib/motion';
import { goToProjects, navigateToCaseStudy, goHome } from '../lib/router';


export default function CaseStudyPage({ slug }) {
  // Find the active project by slug, or fallback to the first project
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = currentIndex !== -1 ? projects[currentIndex] : projects[0];

  const prevProject =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : projects[projects.length - 1];

  const nextProject =
    currentIndex !== -1 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : projects[0];

  // Scroll to top whenever slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (project) {
      document.title = `${project.title} | Case Study — Ayisha Shaik`;
    }
    return () => {
      document.title = 'Ayisha Shaik | Full-Stack Developer';
    };
  }, [slug, project]);

  if (!project) return null;

  return (
    <article className="min-h-screen bg-paper text-ink selection:bg-white selection:text-black">
      {/* Top Floating Context Bar */}
      <nav
        aria-label="Case study navigation"
        className="fixed top-5 left-5 md:top-7 md:left-8 z-40 flex items-center gap-3"
      >
        <button
          type="button"
          onClick={goToProjects}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/85 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black"
        >
          <span aria-hidden="true">←</span>
          <span>All Projects</span>
        </button>
      </nav>

      {/* Main Container */}
      <div className="mx-auto max-w-[1240px] px-6 md:px-12 pt-36 md:pt-44 pb-28 md:pb-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-20 md:space-y-28"
        >
          {/* Header & Meta */}
          <header className="space-y-6">
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 md:gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FFFF00]">
                Case Study {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/70">
                {project.category || 'Featured Work'}
              </span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {project.timeline || project.year}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display uppercase text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.85] tracking-tight text-white"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-3xl text-xl md:text-2xl text-muted font-normal leading-relaxed"
            >
              {project.tagline}
            </motion.p>

            {/* Quick Action CTAs & Stack */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-line"
            >
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-white/40 mr-2">
                  Stack:
                </span>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 font-mono text-xs text-white/85"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4">
                {project.liveHref && (
                  <a
                    href={project.liveHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-black transition-transform duration-300 hover:scale-[1.03] hover:bg-[#FFFF00]"
                  >
                    <span>Launch Live App</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.repoHref && (
                  <a
                    href={project.repoHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-mono text-xs uppercase tracking-wider text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
                  >
                    <span>Source Code</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </motion.div>
          </header>

          {/* Key Impact & Results Grid */}
          {project.results && (
            <motion.section variants={fadeUp} aria-label="Key project metrics">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {project.results.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/25"
                  >
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                      Metric 0{i + 1}
                    </div>
                    <div className="font-display text-4xl md:text-5xl text-[#FFFF00] tracking-tight mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-muted font-medium">
                      {stat.label}
                    </div>
                    <div className="pointer-events-none absolute -right-4 -bottom-4 font-mono text-6xl font-black text-white/[0.02]">
                      0{i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Pictures + The Context split — screens on one side, matter on the other */}
          {project.screenshots && project.screenshots.length > 0 && (
            <motion.section variants={fadeUp} aria-label="Project screenshots and context">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 lg:items-center">
                {/* Layered floating screenshots — one side of the page */}
                <div
                  className="relative mx-auto w-full max-w-[560px] px-2 py-8 [perspective:1300px]"
                  aria-label={`${project.title} interface screenshots, layered composition`}
                >
                  {(() => {
                    const ss = project.screenshots;
                    const front = ss[0];
                    const backLeft =
                      ss.length > 2 ? ss[2] : ss.length === 2 ? ss[1] : null;
                    return (
                      <>
                        {/* back-left — smaller, tilted behind the primary */}
                        {backLeft && (
                          <div className="absolute left-0 top-[2%] z-[1] aspect-[16/10] w-[56%] -rotate-[10deg] overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[0_18px_36px_-12px_rgba(0,0,0,0.55)]">
                            <img
                              src={backLeft.file}
                              alt={`${project.title} — ${backLeft.caption}`}
                              loading="lazy"
                              className="h-full w-full object-cover object-top"
                            />
                          </div>
                        )}

                        {/* front primary — the visual focus */}
                        <a
                          href={project.liveHref}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open live site: ${project.title}`}
                          className="group relative z-[3] mx-auto block aspect-[16/10] w-[80%] rotate-[1.5deg] overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.65)] transition-transform duration-500 hover:-translate-y-1"
                        >
                          <img
                            src={front.file}
                            alt={`${project.title} — ${front.caption}`}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                        </a>
                      </>
                    );
                  })()}
                </div>

                {/* The Context — matter on the other side */}
                <div className="space-y-6 md:space-y-8">
                  <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                    The Context
                  </h2>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-9 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-red-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      The Problem
                    </div>
                    <h3 className="font-display uppercase text-2xl tracking-tight text-white">
                      Why this needed to be built
                    </h3>
                    <p className="text-base md:text-lg text-muted leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-9 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      The Solution
                    </div>
                    <h3 className="font-display uppercase text-2xl tracking-tight text-white">
                      How the system solves it
                    </h3>
                    <p className="text-base md:text-lg text-muted leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {project.liveHref && (
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FFFF00] transition-colors hover:text-white"
                    >
                      Launch live app <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.section>
          )}

          {/* Core Feature Highlights */}
          {project.features && (
            <motion.section variants={fadeUp} className="space-y-8">
              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                  Core Capabilities
                </h2>
                <h3 className="mt-2 font-display uppercase text-3xl md:text-4xl tracking-tight text-white">
                  Engineered Feature Breakdown
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {project.features.map((feature, idx) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 space-y-3 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.04]"
                  >
                    <div className="font-mono text-xs text-[#FFFF00] uppercase tracking-widest">
                      0{idx + 1} // Feature
                    </div>
                    <h4 className="font-display uppercase text-xl md:text-2xl tracking-tight text-white">
                      {feature.title}
                    </h4>
                    <p className="text-sm md:text-base text-muted leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Deep-Dive Technical Chapters */}
          {project.caseStudy && (
            <motion.section variants={fadeUp} className="space-y-12">
              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                  Under the Hood
                </h2>
                <h3 className="mt-2 font-display uppercase text-3xl md:text-4xl tracking-tight text-white">
                  Technical Deep Dive &amp; Architecture
                </h3>
              </div>

              <div className="space-y-8">
                {/* 01 Challenge */}
                {project.caseStudy.challenge && (
                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#FFFF00]">
                        Phase 01
                      </span>
                      <span className="h-px w-8 bg-white/20" />
                      <h4 className="font-display uppercase text-2xl md:text-3xl tracking-tight text-white">
                        The Core Engineering Challenge
                      </h4>
                    </div>
                    <p className="text-base md:text-lg text-muted leading-relaxed max-w-4xl">
                      {project.caseStudy.challenge}
                    </p>
                  </div>
                )}

                {/* 02 Architecture */}
                {project.caseStudy.architecture && (
                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#FFFF00]">
                        Phase 02
                      </span>
                      <span className="h-px w-8 bg-white/20" />
                      <h4 className="font-display uppercase text-2xl md:text-3xl tracking-tight text-white">
                        System Architecture &amp; Topography
                      </h4>
                    </div>
                    <p className="text-base md:text-lg text-muted leading-relaxed max-w-4xl">
                      {project.caseStudy.architecture}
                    </p>
                  </div>
                )}

                {/* 03 Data Flow */}
                {project.caseStudy.dataFlow && (
                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#FFFF00]">
                        Phase 03
                      </span>
                      <span className="h-px w-8 bg-white/20" />
                      <h4 className="font-display uppercase text-2xl md:text-3xl tracking-tight text-white">
                        Data Flow &amp; Execution Pipeline
                      </h4>
                    </div>
                    <p className="text-base md:text-lg text-muted leading-relaxed max-w-4xl">
                      {project.caseStudy.dataFlow}
                    </p>
                  </div>
                )}

                {/* 04 Decisions */}
                {project.caseStudy.decisions && (
                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#FFFF00]">
                        Phase 04
                      </span>
                      <span className="h-px w-8 bg-white/20" />
                      <h4 className="font-display uppercase text-2xl md:text-3xl tracking-tight text-white">
                        Key Architectural Decisions
                      </h4>
                    </div>
                    <p className="text-base md:text-lg text-muted leading-relaxed max-w-4xl">
                      {project.caseStudy.decisions}
                    </p>
                  </div>
                )}

                {/* 05 Tradeoffs & v2 */}
                {project.caseStudy.tradeoffs && (
                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#FFFF00]">
                        Phase 05
                      </span>
                      <span className="h-px w-8 bg-white/20" />
                      <h4 className="font-display uppercase text-2xl md:text-3xl tracking-tight text-white">
                        Trade-offs &amp; Future Iteration Roadmap (v2)
                      </h4>
                    </div>
                    <p className="text-base md:text-lg text-muted leading-relaxed max-w-4xl">
                      {project.caseStudy.tradeoffs}
                    </p>
                  </div>
                )}
              </div>
            </motion.section>
          )}

          {/* Hands-on Ownership / Role */}
          {project.role && project.role.length > 0 && (
            <motion.section variants={fadeUp} className="space-y-6">
              <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                My Role &amp; Responsibilities
              </h2>
              <h3 className="font-display uppercase text-3xl md:text-4xl tracking-tight text-white">
                What I Built &amp; Owned
              </h3>
              <ul className="space-y-4 pt-2">
                {project.role.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.01] p-5 text-base md:text-lg text-muted leading-relaxed transition-colors hover:border-white/15"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#FFFF00]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Project Navigation Footer (Next / Prev) */}
          <motion.section
            variants={fadeUp}
            className="border-t border-line pt-16 space-y-12"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                type="button"
                onClick={() => navigateToCaseStudy(prevProject.slug)}
                className="group flex w-full sm:w-auto items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-left transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05]"
              >
                <span className="font-mono text-xl text-white/40 transition-transform group-hover:-translate-x-1">
                  ←
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    Previous Case Study
                  </div>
                  <div className="font-display uppercase text-lg text-white">
                    {prevProject.title}
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={goToProjects}
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-white"
              >
                View All Projects
              </button>

              <button
                type="button"
                onClick={() => navigateToCaseStudy(nextProject.slug)}
                className="group flex w-full sm:w-auto items-center justify-end gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-right transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05]"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    Next Case Study
                  </div>
                  <div className="font-display uppercase text-lg text-white">
                    {nextProject.title}
                  </div>
                </div>
                <span className="font-mono text-xl text-white/40 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* Conversation CTA */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-10 md:p-14 text-center space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FFFF00]">
                Let&#39;s collaborate
              </p>
              <h3 className="font-display uppercase text-3xl md:text-5xl tracking-tight text-white">
                Interested in talking through this project?
              </h3>
              <p className="mx-auto max-w-xl text-muted text-base md:text-lg leading-relaxed">
                I am always excited to discuss software design, real-time architectures, or machine learning pipelines.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:ayishashaik1979@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-black transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#FFFF00]"
                >
                  <span>Start a Conversation</span>
                  <span aria-hidden="true">→</span>
                </a>
                <button
                  type="button"
                  onClick={goHome}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-mono text-xs uppercase tracking-wider text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
                >
                  <span>Back to Homepage</span>
                </button>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </article>
  );
}
