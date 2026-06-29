import { motion } from 'framer-motion'

export default function ScallopedCard({
  children,
  className = '',
  variant = 'navy',
  hover = true,
}) {
  const variants = {
    navy: 'bg-navy-deep border-navy-deep/50',
    cream: 'bg-cream text-ink border-cream/50',
    light: 'bg-navy border-steel/30',
  }

  const Component = hover ? motion.div : 'div'
  const hoverProps = hover
    ? {
        whileHover: { y: -4, scale: 1.02 },
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }
    : {}

  return (
    <Component
      className={`scalloped-border scalloped-border-bottom relative overflow-hidden rounded-2xl border-2 p-5 ${variants[variant]} ${className}`}
      {...hoverProps}
    >
      {children}
    </Component>
  )
}
