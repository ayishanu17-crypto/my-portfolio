import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const RESPONSES = {
  help: "Commands: help, about, skills, projects, contact, clear",
  about: 'CSE undergrad · full-stack + AI/ML · builds fast under hackathon deadlines.',
  skills: 'Languages: Python, Java, C, JS/TS, SQL — Frameworks: React, Tailwind, Firebase, Node',
  projects: 'Kvantum Room — real-time study platform. Crop Care — plant disease CNN. Scroll to see both ↓',
  contact: 'ayishashaik1979@gmail.com · github.com/ayishanu17-crypto',
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: "Type 'help' to see what this does." },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [history]);

  function handleSubmit(e) {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const response = RESPONSES[cmd] ?? `command not found: "${cmd}" — try "help"`;
    setHistory((h) => [...h, { type: 'command', text: cmd }, { type: 'output', text: response }]);
    setInput('');
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-md rounded-xl border border-line bg-[#0f0f13] overflow-hidden shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 font-mono text-[11px] text-white/40">guest@ayisha — try it</span>
      </div>

      <div
        ref={scrollRef}
        className="h-40 overflow-y-auto px-4 py-3 font-mono text-[13px] leading-relaxed"
      >
        {history.map((line, i) => (
          <div key={i} className={line.type === 'command' ? 'text-white' : 'text-white/55'}>
            {line.type === 'command' ? `> ${line.text}` : line.text}
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 px-4 py-3 border-t border-white/10"
      >
        <span className="font-mono text-sm text-accent">{'›'}</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="help, skills, projects, contact"
          className="flex-1 bg-transparent font-mono text-[13px] text-white placeholder-white/30 outline-none"
          autoComplete="off"
          spellCheck="false"
          aria-label="Terminal command input"
        />
      </form>
    </motion.div>
  );
}
