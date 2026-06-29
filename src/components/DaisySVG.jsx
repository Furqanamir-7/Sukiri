import { motion } from 'framer-motion'

const colors = {
  dark: '#2B3F5C',
  light: '#F5F0E8',
}

export default function DaisySVG({
  size = 40,
  color = 'light',
  className = '',
  animationDelay = 0,
  animate = true,
}) {
  const fill = colors[color] || color
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const Component = animate && !prefersReducedMotion ? motion.svg : 'svg'
  const motionProps =
    animate && !prefersReducedMotion
      ? {
          animate: { y: [0, -8, 0], rotate: [0, 5, 0] },
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: animationDelay,
          },
        }
      : {}

  return (
    <Component
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
      {...motionProps}
    >
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="24"
          cy="12"
          rx="7"
          ry="10"
          fill={fill}
          opacity="0.9"
          transform={`rotate(${angle} 24 24)`}
        />
      ))}
      <path
        d="M24 22c-1.5 0-2.7 1.2-2.7 2.7 0 2 2.7 4.8 2.7 4.8s2.7-2.8 2.7-4.8c0-1.5-1.2-2.7-2.7-2.7z"
        fill={color === 'light' ? '#2B3F5C' : '#F5F0E8'}
      />
    </Component>
  )
}
