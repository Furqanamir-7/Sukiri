import DaisySVG from './DaisySVG'

const positions = [
  { top: '8%', left: '5%', size: 32, color: 'light', delay: 0 },
  { top: '15%', right: '8%', size: 28, color: 'dark', delay: 0.5 },
  { top: '45%', left: '3%', size: 24, color: 'light', delay: 1 },
  { top: '60%', right: '5%', size: 36, color: 'light', delay: 1.5 },
  { top: '80%', left: '10%', size: 20, color: 'dark', delay: 2 },
  { top: '25%', left: '85%', size: 22, color: 'light', delay: 0.8 },
  { top: '70%', right: '15%', size: 26, color: 'dark', delay: 1.2 },
  { top: '90%', right: '25%', size: 18, color: 'light', delay: 2.5 },
]

export default function FlowerField({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute opacity-40"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
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
