import { motion } from 'framer-motion';
import { SiGit, SiGithub, SiVscodium, SiReact, SiNodedotjs, SiMongodb, SiFirebase, SiTailwindcss, SiVite } from 'react-icons/si';

// The tools actually in use — shown as a moving marquee line below the
// technologies grid. Only these are kept.
const TOOLS = [
  { name: 'Git',      Icon: SiGit },
  { name: 'GitHub',   Icon: SiGithub },
  { name: 'VS Code',  Icon: SiVscodium },
  { name: 'React',    Icon: SiReact },
  { name: 'Node.js',  Icon: SiNodedotjs },
  { name: 'MongoDB',  Icon: SiMongodb },
  { name: 'Firebase', Icon: SiFirebase },
  { name: 'Tailwind', Icon: SiTailwindcss },
  { name: 'Vite',     Icon: SiVite },
];

// Brand colour per tool so the marks read like the real logos on the dark
// theme (GitHub uses a neutral since its brand black would vanish).
const BRAND_COLORS = {
  Git: '#F05032',
  GitHub: '#F6F8FA',
  'VS Code': '#007ACC',
  React: '#61DAFB',
  'Node.js': '#339933',
  MongoDB: '#47A248',
  Firebase: '#FFCA28',
  Tailwind: '#38BDF8',
  Vite: '#646CFF',
};

// An infinitely scrolling marquee of the tool marks. The list is rendered
// twice (200% width) and translated by exactly -50%, so the loop is seamless.
export default function ToolsGrid() {
  const doubled = [...TOOLS, ...TOOLS];
  return (
    <div className="mt-16 md:mt-20 relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-3">
      {/* Fade masks at either edge */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#070709] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#070709] to-transparent" />

      <motion.div
        className="flex w-max items-center gap-3 px-3"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((tool, i) => (
          <span
            key={`${tool.name}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5"
          >
            <tool.Icon aria-hidden="true" className="h-3.5 w-3.5" style={{ color: BRAND_COLORS[tool.name] }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              {tool.name}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}