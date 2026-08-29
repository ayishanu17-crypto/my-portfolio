import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../lib/motion';
import { goHome } from '../lib/router';

// The story so far — written as chapters, because that's how it happened.
const CHAPTERS = [
  {
    index: '01',
    title: 'It started with a question',
    body: "Most people learn to code in a classroom. I learned at 2 AM in a hackathon — 48 hours, one rough idea, zero margin for error. Somewhere between a whiteboard sketch and a working demo I could show real people, I was hooked. That urgency never really left me; it just got quieter.",
  },
  {
    index: '02',
    title: 'Pressure taught me what matters',
    body: "When the clock is running out, you find out fast what's essential. I'd rather ship something small and functional than something ambitious and half-built. Every deadline since has only confirmed it — the thing that works beats the thing that almost works, every single time.",
  },
  {
    index: '03',
    title: 'The details are the story',
    body: "I care about interfaces that feel considered — and about the unglamorous parts underneath: sync latency, model accuracy, the responsive edge case nobody screenshots. That's the difference between something that works and something that feels inevitable.",
  },
  {
    index: '04',
    title: "The story isn't finished",
    body: "This chapter? Still being written. Most days you'll find me in a hackathon Discord, or taking apart a product I admire to see how it ticks — and building the next thing that keeps me up past midnight.",
  },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 md:px-10 pt-40 md:pt-44 pb-28 md:pb-40">
      <div className="mx-auto max-w-3xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* About me — who I am */}
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.25em] text-white/40"
          >
            A little context
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-3 font-display uppercase text-[clamp(3rem,8vw,6rem)] leading-[0.85] tracking-tight text-ink"
          >
            About me
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 font-hand text-xl md:text-2xl text-muted leading-relaxed"
          >
            Every good project starts with a story. Mine begins in a university
            corridor, with one question that wouldn't let go.
          </motion.p>

          <div className="mt-12 space-y-6">
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-muted leading-relaxed"
            >
              I'm a third-year Computer Science and Engineering student at PBR
              Visvodaya Institute of Technology and Science, specializing in
              full-stack web development and AI/ML applications. Most of what
              I've learned has come from building under pressure — hackathon
              weekends where an idea has to go from sketch to working demo in
              48 hours.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-muted leading-relaxed"
            >
              Outside of coursework in Data Structures, AI, and Database
              Management Systems, I'm usually in a hackathon Discord or picking
              apart how a product I like is actually built.
            </motion.p>
          </div>

          {/* How I work — the story so far */}
          <motion.h2
            variants={fadeUp}
            className="mt-20 font-display uppercase text-[clamp(2.5rem,6vw,4rem)] leading-[0.9] tracking-tight text-ink"
          >
            How I work
          </motion.h2>

          <div className="mt-12 space-y-12">
            {CHAPTERS.map((chapter) => (
              <motion.article
                key={chapter.index}
                variants={fadeUp}
                className="relative border-l border-white/10 pl-6 md:pl-8"
              >
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                  Chapter {chapter.index}
                </p>
                <h3 className="mt-1 font-display uppercase text-2xl md:text-3xl leading-[0.95] tracking-tight text-white">
                  {chapter.title}
                </h3>
                <p className="mt-3 text-base md:text-lg text-muted leading-relaxed">
                  {chapter.body}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Sign-off + back home */}
          <motion.p
            variants={fadeUp}
            className="mt-16 font-hand text-2xl md:text-3xl text-white"
          >
            — Ayisha
          </motion.p>

          <motion.button
            variants={fadeUp}
            type="button"
            onClick={goHome}
            className="mt-14 inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white hover:text-black hover:border-white"
          >
            <span aria-hidden="true">←</span>
            Back to home
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}