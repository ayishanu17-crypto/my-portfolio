import { useEffect, useState } from 'react';

export const ABOUT_HASH = '#/about';
export const SKILLS_HASH = '#/skills';

// A tiny dependency-free hash router. Three routes:
//   home   -> any URL that isn't a page hash (the one-page scroll layout)
//   about  -> #/about (the separate About page)
//   skills -> #/skills (the separate Skills & Technologies page)
// Hash-based on purpose so it works on GitHub Pages without extra config,
// and plays nicely with the in-page anchors (#work, #experience, ...).

let pendingSection = null;

export function getRoute() {
  if (window.location.hash === ABOUT_HASH) return 'about';
  if (window.location.hash === SKILLS_HASH) return 'skills';
  return 'home';
}

export function useRoute() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHash = () => setRoute(getRoute());
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return route;
}

// Jump to a section on the home page. If we're already home the plain anchor
// handles it (via CSS smooth-scroll); if we're on a separate page (about or
// skills), switch back to home and queue the scroll so it runs once the
// sections have rendered.
export function navigateToSection(section) {
  pendingSection = section;
  window.location.hash = section;
}

export function takePendingSection() {
  const section = pendingSection;
  pendingSection = null;
  return section;
}

export function goHome() {
  window.location.hash = '';
  window.scrollTo(0, 0);
}