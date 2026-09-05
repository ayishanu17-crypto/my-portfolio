import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import CaseStudyPage from './pages/CaseStudyPage';
import { useRoute, useCaseStudySlug, takePendingSection } from './lib/router';

export default function App() {
  const route = useRoute();
  const caseStudySlug = useCaseStudySlug();

  // If a nav click queued a section scroll (e.g. from the About page), run it
  // once the home layout has actually rendered.
  useEffect(() => {
    if (route === 'home') {
      const section = takePendingSection();
      if (section) {
        requestAnimationFrame(() => {
          document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }, [route]);

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        {route === 'about' ? (
          <AboutPage />
        ) : route === 'skills' ? (
          <SkillsPage />
        ) : route === 'case-study' ? (
          <CaseStudyPage slug={caseStudySlug} />
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </>
        )}
      </main>
    </div>
  );
}

