import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from '../lib/motion';

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// Points at the resume file in /public — drop your own PDF over it.
const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      {/* Floating circular hamburger — top right */}
      <div className="absolute top-5 right-5 md:top-7 md:right-8 flex flex-col items-end gap-3">
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="pointer-events-auto relative flex h-14 w-14 flex-col items-center justify-center gap-[5px] rounded-full border border-line bg-paper/80 backdrop-blur-md text-ink transition-colors duration-300 hover:border-accent/60 hover:bg-paper"
        >
          <motion.span
            className="block h-[1.5px] w-6 bg-current"
            animate={{ rotate: open ? 45 : 0, y: open ? 6.5 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
          <motion.span
            className="block h-[1.5px] w-6 bg-current"
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.2, ease: EASE }}
          />
          <motion.span
            className="block h-[1.5px] w-6 bg-current"
            animate={{ rotate: open ? -45 : 0, y: open ? -6.5 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
        </button>

        {/* Dropdown panel with all sections */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="pointer-events-auto w-56 rounded-2xl border border-line bg-paper/90 backdrop-blur-xl p-2 shadow-2xl shadow-black/40"
            >
              <ul className="flex flex-col">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-muted transition-colors duration-200 hover:bg-white/[0.04] hover:text-ink"
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className="text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="my-1 border-t border-line" />

              <ul className="flex flex-col gap-1">
                <li>
                  <a
                    href={RESUME_URL}
                    download
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-accent transition-colors duration-200 hover:bg-white/[0.04]"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 1v10m0 0 4-4M8 11 4 7M2 15h12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Résumé
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ayishashaik1979@gmail.com"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-ink transition-colors duration-200 hover:bg-white/[0.04]"
                  >
                    <svg
                      className="h-4 w-4 text-accent"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 4.5h12v7H2zM2 5l6 4 6-4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Let&#39;s talk
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
