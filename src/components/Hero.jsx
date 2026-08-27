import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../lib/motion';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-content w-full text-center"
      >
        {/* Quote on top */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mb-10 max-w-2xl font-hand text-lg md:text-2xl text-muted leading-relaxed"
        >
          “First, solve the problem. Then, write the code.”
        </motion.p>

        {/* Name centered */}
        <motion.h1
          variants={fadeUp}
          className="gradient-name font-display uppercase text-[clamp(5.5rem,20vw,20rem)] leading-[0.82] tracking-tight"
        >
          Ayisha Shaik
        </motion.h1>
      </motion.div>
    </section>
  );
}
