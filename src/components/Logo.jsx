import { motion } from 'framer-motion'

export default function Logo({ className = '', size = 'md' }) {
  const sizes = {
    sm: { text: 'text-xl', flower: 20 },
    md: { text: 'text-2xl', flower: 26 },
    lg: { text: 'text-4xl', flower: 36 },
    xl: { text: 'text-6xl', flower: 48 },
  }
  const s = sizes[size] || sizes.md

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.svg
        width={s.flower}
        height={s.flower}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        whileHover={{ rotate: 15 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <circle cx="24" cy="24" r="22" fill="#2B3F5C" opacity="0.15" />
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx="24"
            cy="11"
            rx="6.5"
            ry="9.5"
            fill="#F5F0E8"
            transform={`rotate(${angle} 24 24)`}
          />
        ))}
        <path
          d="M24 21.5c-1.4 0-2.5 1.1-2.5 2.5 0 1.8 2.5 4.5 2.5 4.5s2.5-2.7 2.5-4.5c0-1.4-1.1-2.5-2.5-2.5z"
          fill="#7B9EC4"
        />
        <circle cx="24" cy="24" r="3" fill="#3D5A80" />
      </motion.svg>
      <span className={`font-display ${s.text} text-cream drop-shadow-sm`}>
        sukiri
      </span>
    </div>
  )
}
