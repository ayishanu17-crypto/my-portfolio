import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, EASE } from '../lib/motion';
import { goHome } from '../lib/router';
import { SiPython, SiOpenjdk, SiC, SiJavascript, SiTypescript, SiMysql, SiHtml5 } from 'react-icons/si';
import { SiReact, SiTailwindcss, SiVite, SiFirebase, SiMongodb, SiNodedotjs } from 'react-icons/si';
import { SiGit, SiGithub, SiVscodium } from 'react-icons/si';
import { LuRocket } from 'react-icons/lu';

// The full toolbox — divided into categories.
const LANGUAGES = [
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'SQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'HTML/CSS', Icon: SiHtml5, color: '#E34F26' },
];

const FRAMEWORKS = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Vite', Icon: SiVite, color: '#646CFF' },
];

const TOOLS = [
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub, color: '#F4F4F6' },
  { name: 'VS Code', Icon: SiVscodium, color: '#007ACC' },
  { name: 'Antigravity', Icon: LuRocket, color: '#FF6A00' },
];

// Small helper — one tile in the languages/frameworks grid.
function TechTile({ item }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="group flex flex-col items-start rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.05]"
    >
      <motion.div
        whileHover={{ scale: 1.12, rotate: -4 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]"
      >
        <item.Icon aria-hidden="true" className="h-5 w-5" style={{ color: item.color }} />
      </motion.div>
      <span className="truncate text-sm font-medium text-ink">{item.name}</span>
    </motion.div>
  );
}

// Small helper — one tool tile in the tools group (same normal styling as the
// languages and frameworks tiles above).
function ToolTile({ tool }) {
  return <TechTile item={tool} />;
}

export default function SkillsPage() {
  return (
    <section className="min-h-screen px-6 md:px-10 pt-40 md:pt-44 pb-28 md:pb-40">
      <div className="mx-auto max-w-5xl">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.25em] text-white/40"
          >
            The toolbox
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-3 font-display uppercase text-[clamp(3rem,8vw,6rem)] leading-[0.85] tracking-tight text-ink"
          >
            Skills &amp; technologies
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-muted leading-relaxed"
          >
            Everything I build with — grouped into the languages I think in,
            the frameworks and platforms I ship on, and the tools I reach for
            every day.
          </motion.p>

          {/* Languages */}
          <motion.div variants={fadeUp} className="mt-16">
            <h2 className="font-display uppercase text-2xl md:text-3xl leading-[0.95] tracking-tight text-white">
              Languages
            </h2>
            <p className="mt-1 text-sm text-muted">The languages I write first.</p>
            <motion.div
              variants={staggerContainer}
              className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {LANGUAGES.map((item) => (
                <TechTile key={item.name} item={item} />
              ))}
            </motion.div>
          </motion.div>

          {/* Frameworks & platforms */}
          <motion.div variants={fadeUp} className="mt-16">
            <h2 className="font-display uppercase text-2xl md:text-3xl leading-[0.95] tracking-tight text-white">
              Frameworks &amp; platforms
            </h2>
            <p className="mt-1 text-sm text-muted">What I build and ship with.</p>
            <motion.div
              variants={staggerContainer}
              className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {FRAMEWORKS.map((item) => (
                <TechTile key={item.name} item={item} />
              ))}
            </motion.div>
          </motion.div>

          {/* Tools */}
          <motion.div variants={fadeUp} className="mt-16">
            <h2 className="font-display uppercase text-2xl md:text-3xl leading-[0.95] tracking-tight text-white">
              Tools
            </h2>
            <p className="mt-1 text-sm text-muted">The daily drivers.</p>
            <motion.div
              variants={staggerContainer}
              className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {TOOLS.map((tool) => (
                <ToolTile key={tool.name} tool={tool} />
              ))}
            </motion.div>
          </motion.div>

          {/* Back home */}
          <motion.button
            variants={fadeUp}
            type="button"
            onClick={goHome}
            className="mt-16 inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white hover:text-black hover:border-white"
          >
            <span aria-hidden="true">←</span>
            Back to home
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}