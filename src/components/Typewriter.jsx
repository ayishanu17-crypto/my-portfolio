import { useEffect, useState } from 'react';

const PHRASES = ['Full-Stack Developer', 'AI/ML Enthusiast'];
const TYPE_SPEED = 80; // ms per character while typing
const DELETE_SPEED = 40; // ms per character while deleting
const HOLD_TIME = 1900; // ms to pause on a fully-typed phrase

// Rotating typewriter: types phrase-by-phrase (character by character) in the
// SAME spot — "Full-Stack Developer" types out, pauses, is erased, then
// "AI/ML Enthusiast" types out in its place. Alternates forever.
export default function Typewriter() {
  const [reduced, setReduced] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Respect "reduced motion": show both phrases statically instead of typing.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setReduced(mq.matches);
    setReduced(mq.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reduced) return; // static fallback below

    const current = PHRASES[phraseIndex % PHRASES.length];
    let timer;

    if (!deleting && text === current) {
      // Fully typed — hold, then begin erasing.
      timer = setTimeout(() => setDeleting(true), HOLD_TIME);
    } else if (deleting && text === '') {
      // Fully erased — advance to the next phrase.
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    } else {
      timer = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1),
          );
        },
        deleting ? DELETE_SPEED : TYPE_SPEED,
      );
    }

    return () => clearTimeout(timer);
  }, [text, deleting, phraseIndex, reduced]);

  if (reduced) {
    return (
      <span className="font-mono text-xl md:text-3xl tracking-tight font-medium text-accent">
        Full-Stack Developer <span className="text-muted">|</span> AI/ML Enthusiast
      </span>
    );
  }

  return (
    <span
      role="text"
      aria-label="Full-Stack Developer, AI/ML Enthusiast"
      className="inline-flex items-center font-mono text-xl md:text-3xl tracking-tight font-medium text-accent"
    >
      <span aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1em] w-[2px] translate-y-[0.08em] bg-accent"
        style={{ animation: 'blink 1.1s step-end infinite' }}
      />
    </span>
  );
}