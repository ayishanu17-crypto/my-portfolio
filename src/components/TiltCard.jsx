import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Wraps children in a card that tilts in 3D toward the cursor.
 * Only ever animates `transform` (rotateX/rotateY via CSS) — never
 * layout-affecting properties — so it stays on the compositor thread.
 */
export default function TiltCard({ children, className = '', max = 8 }) {
  const ref = useRef(null);

  // Raw cursor position, normalized 0–1 across the card's bounds.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  // Springs smooth out mouse jitter so the tilt feels fluid, not snappy.
  const springX = useSpring(px, { stiffness: 200, damping: 20, mass: 0.5 });
  const springY = useSpring(py, { stiffness: 200, damping: 20, mass: 0.5 });

  const rotateX = useTransform(springY, [0, 1], [max, -max]);
  const rotateY = useTransform(springX, [0, 1], [-max, max]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={`group ${className}`}
    >
      {children}
    </motion.div>
  );
}
