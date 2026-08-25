import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

// Splits "~3,000", "<100ms", "92%", "10+" into a numeric core plus the
// surrounding prefix/suffix, so we can count the number up while keeping
// the symbol dressing static.
function parseValue(raw) {
  const match = String(raw).match(/^([^\d]*)([\d,]+\.?\d*)([^\d]*)$/);
  if (!match) return { prefix: '', number: null, suffix: raw, decimals: 0, hasComma: false };
  const [, prefix, numStr, suffix] = match;
  return {
    prefix,
    suffix,
    number: parseFloat(numStr.replace(/,/g, '')),
    decimals: numStr.includes('.') ? numStr.split('.')[1].length : 0,
    hasComma: numStr.includes(','),
  };
}

export default function Counter({ value, duration = 1.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [display, setDisplay] = useState('0');
  const parsed = parseValue(value);

  useEffect(() => {
    if (!isInView || parsed.number === null) return;
    const controls = animate(0, parsed.number, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        const formatted =
          parsed.decimals > 0 ? v.toFixed(parsed.decimals) : Math.round(v).toString();
        setDisplay(parsed.hasComma ? Number(formatted).toLocaleString() : formatted);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  if (parsed.number === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
