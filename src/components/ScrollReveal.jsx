import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * ScrollReveal — Reusable scroll-triggered animation wrapper
 * Wraps any section/element and animates it into view when it enters the viewport.
 *
 * @param {string} direction - 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'
 * @param {number} delay - Delay in seconds before animation starts
 * @param {number} distance - Pixel distance to travel during reveal
 * @param {number} duration - Animation duration in seconds
 * @param {string} className - Optional className to pass through
 * @param {boolean} once - Whether animation should only trigger once (default true)
 * @param {number} threshold - How much of the element must be visible (0-1)
 */
function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  distance = 60,
  duration = 0.7,
  className = '',
  once = true,
  threshold = 0.15,
  style = {},
  as = 'div',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const directionMap = {
    up: { y: distance, x: 0, scale: 1 },
    down: { y: -distance, x: 0, scale: 1 },
    left: { y: 0, x: distance, scale: 1 },
    right: { y: 0, x: -distance, scale: 1 },
    scale: { y: 0, x: 0, scale: 0.9 },
    none: { y: 0, x: 0, scale: 1 },
  };

  const dir = directionMap[direction] || directionMap.up;

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: dir.y, x: dir.x, scale: dir.scale }}
      animate={isInView
        ? { opacity: 1, y: 0, x: 0, scale: 1 }
        : { opacity: 0, y: dir.y, x: dir.x, scale: dir.scale }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth ease-out-quad
      }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * StaggerChildren — Animates children one by one with staggered delay
 */
function StaggerChildren({
  children,
  stagger = 0.1,
  direction = 'up',
  distance = 40,
  duration = 0.6,
  className = '',
  once = true,
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const dirMap = {
    up: { y: distance, x: 0 },
    left: { y: 0, x: distance },
    right: { y: 0, x: -distance },
    scale: { y: 0, x: 0 },
  };
  const dir = dirMap[direction] || dirMap.up;

  return (
    <motion.div ref={ref} className={className}>
      {Array.isArray(children) ? children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: dir.y, x: dir.x, scale: direction === 'scale' ? 0.9 : 1 }}
          animate={isInView
            ? { opacity: 1, y: 0, x: 0, scale: 1 }
            : { opacity: 0, y: dir.y, x: dir.x, scale: direction === 'scale' ? 0.9 : 1 }
          }
          transition={{
            duration,
            delay: i * stagger,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {child}
        </motion.div>
      )) : children}
    </motion.div>
  );
}

export { ScrollReveal, StaggerChildren };
export default ScrollReveal;
