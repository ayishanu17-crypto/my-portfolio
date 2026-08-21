import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from '../lib/motion';

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <nav className="mx-auto max-w-content px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          A. Shaik
          <span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:ayishashaik1979@gmail.com"
          className="hidden md:inline-flex items-center rounded-full border border-ink px-5 py-2 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors duration-200"
        >
          Let's talk
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative h-8 w-8 flex flex-col items-center justify-center gap-[5px]"
        >
          <motion.span
            className="block h-[1.5px] w-6 bg-ink"
            animate={{ rotate: open ? 45 : 0, y: open ? 6.5 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
          <motion.span
            className="block h-[1.5px] w-6 bg-ink"
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.2, ease: EASE }}
          />
          <motion.span
            className="block h-[1.5px] w-6 bg-ink"
            animate={{ rotate: open ? -45 : 0, y: open ? -6.5 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="md:hidden border-t border-line bg-paper px-6 pb-6 pt-4"
          >
            <ul className="flex flex-col gap-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-base text-ink py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
