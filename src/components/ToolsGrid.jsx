import { motion } from 'framer-motion';

// The tools actually in use — shown as a moving marquee line below the
// technologies grid. Only these are kept.
const TOOLS = [
  'Git',
  'GitHub',
  'VS Code',
  'Antigravity',
  'React',
  'Node.js',
  'MongoDB',
  'Firebase',
  'Tailwind',
  'Vite',
];

// A decorative symbol shown between each tool word.
const SEPARATOR = '✦';

// An infinitely scrolling marquee of the tool names, in the same yellow as the
// hero name (#FFFF00). Plain words only — no chips, no borders — with a small
// symbol between them. The list is rendered twice (200% width) and translated
// by exactly -50%, so the loop is seamless.
export default function ToolsGrid() {
  const doubled = [...TOOLS, ...TOOLS];
  return (
    <div className="relative mt-16 md:mt-20 overflow-hidden py-5">
      {/* Fade masks at either edge */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#000000] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#000000] to-transparent" />

      <motion.div
        className="flex w-max items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((tool, i) => (
          <div
            key={`${tool}-${i}`}
            className="flex shrink-0 items-center"
          >
            {/* The tool word — plain yellow text, no shapes */}
            <span className="font-mono text-sm md:text-base uppercase tracking-[0.25em] text-[#FFFF00]">
              {tool}
            </span>
            {/* Symbol between the words */}
            <span aria-hidden="true" className="mx-5 md:mx-7 text-[#FFFF00]">
              {SEPARATOR}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}