import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Wraps a CTA in a "magnetic" effect: the element offsets toward the
 * cursor on hover, snapping back on mouse-leave. Only ever touches
 * `transform` (x/y via a spring), so it's GPU-composited throughout.
 */
export default function MagneticButton({
  children,
  className = '',
  as = 'a',
  strength = 0.35,
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.15 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const MotionTag = motion[as] ?? motion.a;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
