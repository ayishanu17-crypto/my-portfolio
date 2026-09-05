import { useEffect, useState } from 'react';

export const ABOUT_HASH = '#/about';
export const SKILLS_HASH = '#/skills';
export const CASE_STUDY_PREFIX = '#/case-study/';

// Hash router supporting:
//   home        -> any URL that isn't a dedicated page hash (the one-page scroll layout)
//   about       -> #/about (the separate About page)
//   skills      -> #/skills (the separate Skills & Technologies page)
//   case-study  -> #/case-study/:slug (the dedicated project case study page)
// Hash-based so it works cleanly on GitHub Pages without server-side rewrites.

let pendingSection = null;

export function getRoute() {
  const hash = window.location.hash;
  if (hash === ABOUT_HASH) return 'about';
  if (hash === SKILLS_HASH) return 'skills';
  if (hash.startsWith(CASE_STUDY_PREFIX)) return 'case-study';
  return 'home';
}

export function getCaseStudySlug() {
  const hash = window.location.hash;
  if (hash.startsWith(CASE_STUDY_PREFIX)) {
    const raw = hash.slice(CASE_STUDY_PREFIX.length);
    return raw.split('?')[0].split('/')[0] || null;
  }
  return null;
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

export function useCaseStudySlug() {
  const [slug, setSlug] = useState(getCaseStudySlug);

  useEffect(() => {
    const handleHash = () => setSlug(getCaseStudySlug());
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return slug;
}

// Jump to a section on the home page. If on a separate page (about, skills,
// or case-study), switch back to home and queue the scroll.
export function navigateToSection(section) {
  pendingSection = section;
  window.location.hash = section;
}

export function navigateToCaseStudy(slug) {
  window.location.hash = `${CASE_STUDY_PREFIX}${slug}`;
  window.scrollTo(0, 0);
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

export function goToProjects() {
  navigateToSection('#work');
}