import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from '../lib/motion';
import { getRoute, navigateToSection } from '../lib/router';

// These menu items are separate pages (hash routes); the rest are in-page
// anchors that scroll the home page.
const PAGE_HASHES = new Set(['#/about', '#/skills']);

const LINKS = [
  { label: 'About', href: '#/about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#/skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// Points at the resume file in /public — drop your own PDF over it.
const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Page links use the hash router. Section links scroll on home; from a
  // separate page (about/skills) they switch back home first, then scroll.
  const handleNavClick = (e, href) => {
    if (!PAGE_HASHES.has(href) && getRoute() !== 'home') {
      e.preventDefault();
      navigateToSection(href);
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      {/* Floating circular hamburger — top right */}
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto absolute top-5 right-5 md:top-7 md:right-8 z-[75] flex h-14 w-14 flex-col items-center justify-center gap-[5px] rounded-full border border-line bg-paper/80 backdrop-blur-md text-ink transition-colors duration-300 hover:border-accent/60 hover:bg-paper"
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

      {/* Slide-in menu panel — same open animation as the case study */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="pointer-events-auto fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />
            <motion.nav
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: EASE }}
              className="pointer-events-auto fixed top-0 right-0 z-[70] h-full w-[85vw] sm:w-[340px] bg-[#000000] border-l border-white/10 overflow-y-auto"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white">
                    Menu
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="h-9 w-9 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-white transition-colors hover:bg-white hover:text-black"
                  >
                    ✕
                  </button>
                </div>
                <ul className="flex flex-col">
                  {LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="group flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-muted transition-colors duration-200 hover:bg-white/[0.04] hover:text-ink"
                      >
                        {link.label}
                        <span
                          aria-hidden="true"
                          className="text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
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
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                      className="inline-flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-white transition-colors duration-200 hover:bg-white/[0.04]"
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
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:ayishashaik1979@gmail.com"
                      onClick={() => setOpen(false)}
                      className="inline-flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-ink transition-colors duration-200 hover:bg-white/[0.04]"
                    >
                      <svg
                        className="h-4 w-4 text-white"
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
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
