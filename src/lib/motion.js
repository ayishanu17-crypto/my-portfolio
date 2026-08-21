// Centralized motion tokens. Keeping these in one place means every section
// shares the same "feel" instead of each component inventing its own easing.

// A confident, slightly decelerated "expo-out" curve — reads as premium
// rather than the default ease-in-out most UI libraries ship with.
export const EASE = [0.16, 1, 0.3, 1];

// Parent wrapper: staggers its children's entrance. No visual properties
// of its own, so it never triggers layout/paint on its own account.
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Child entrance: only opacity + transform (translateY) — both are
// GPU-composited and never trigger layout or paint on their own.
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Scroll-triggered reveal for elements below the fold (e.g. project cards).
// Slightly larger travel distance since it's a bigger "arrival" moment.
export const scrollFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};
