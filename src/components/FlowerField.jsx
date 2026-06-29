import DaisySVG from './DaisySVG'

const positions = [
  { top: '8%', left: '5%', size: 32, color: 'light', delay: 0, opacity: 0.35 },
  { top: '15%', right: '8%', size: 28, color: 'dark', delay: 0.5, opacity: 0.22 },
  { top: '45%', left: '3%', size: 24, color: 'light', delay: 1, opacity: 0.28 },
  { top: '60%', right: '5%', size: 36, color: 'light', delay: 1.5, opacity: 0.32 },
  { top: '80%', left: '10%', size: 20, color: 'dark', delay: 2, opacity: 0.2 },
  { top: '25%', left: '85%', size: 22, color: 'light', delay: 0.8, opacity: 0.25 },
  { top: '70%', right: '15%', size: 26, color: 'dark', delay: 1.2, opacity: 0.22 },
  { top: '90%', right: '25%', size: 18, color: 'light', delay: 2.5, opacity: 0.18 },
]

export default function FlowerField({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            opacity: pos.opacity,
          }}
        >
          <DaisySVG
            size={pos.size}
            color={pos.color}
            animationDelay={pos.delay}
          />
        </div>
      ))}
    </div>
  )
}
