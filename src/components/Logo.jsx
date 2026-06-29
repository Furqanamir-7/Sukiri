import { motion } from 'framer-motion'

export default function Logo({ className = '', size = 'md' }) {
  const heights = {
    sm: 'h-9',
    md: 'h-11',
    lg: 'h-14',
    xl: 'h-20',
  }
  const h = heights[size] || heights.md

  return (
    <motion.div
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img
        src="/sukiri-logo.png"
        alt="sukiri — your lucky loop"
        className={`${h} w-auto object-contain drop-shadow-sm`}
      />
    </motion.div>
  )
}
