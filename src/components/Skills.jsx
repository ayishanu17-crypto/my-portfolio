import { motion } from 'framer-motion';
import { badgeStagger, fadeUp, EASE } from '../lib/motion';
import ToolsGrid from './ToolsGrid';
import { SiPython, SiOpenjdk, SiC, SiJavascript, SiTypescript, SiMysql, SiHtml5 } from 'react-icons/si';
import { SiReact, SiTailwindcss, SiVite, SiFirebase, SiMongodb, SiNodedotjs } from 'react-icons/si';

// Languages, frameworks & platforms shown as a single merged grid of tile
// boxes, each paired with its brand icon (no category sub-headings).
const TECH = [
  { name: 'Python',       Icon: SiPython,       color: '#3776AB' },
  { name: 'Java',         Icon: SiOpenjdk,      color: '#F4F4F6' },
  { name: 'C',            Icon: SiC,            color: '#A8B9CC' },
  { name: 'JavaScript',   Icon: SiJavascript,   color: '#F7DF1E' },
  { name: 'TypeScript',   Icon: SiTypescript,   color: '#3178C6' },
  { name: 'SQL',          Icon: SiMysql,        color: '#4479A1' },
  { name: 'HTML/CSS',     Icon: SiHtml5,        color: '#E34F26' },
  { name: 'React',        Icon: SiReact,        color: '#61DAFB' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss,  color: '#38BDF8' },
  { name: 'Vite',         Icon: SiVite,         color: '#646CFF' },
  { name: 'Firebase',     Icon: SiFirebase,     color: '#FFCA28' },
  { name: 'MongoDB',      Icon: SiMongodb,      color: '#47A248' },
  { name: 'Node.js',      Icon: SiNodedotjs,    color: '#339933' },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-10 py-28 md:py-36 bg-white/[0.03]">
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
          <h2 className="font-display uppercase text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tight text-ink">
            Skills &amp; technologies
          </h2>
        </motion.div>

        {/* Merged grid of languages + frameworks — no sub-headings */}
        <motion.div
          variants={badgeStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {TECH.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="group relative flex flex-col items-start rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.05]"
            >
              <motion.div
                whileHover={{ scale: 1.12, rotate: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-accent-soft"
              >
                <item.Icon aria-hidden="true" className="h-5 w-5" style={{ color: item.color }} />
              </motion.div>
              <span className="truncate text-sm font-medium text-ink">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools — moving marquee line of the tools in use */}
        <ToolsGrid />
      </div>
    </section>
  );
}
