export default function Marquee() {
  const text =
    'orders are open ✿ your lucky loop ✿ DM to order ✿ handmade with love ✿ slow fashion ✿ '

  return (
    <div className="overflow-hidden bg-navy-deep py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="px-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream">
          {text}
        </span>
        <span className="px-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream">
          {text}
        </span>
      </div>
    </div>
  )
}
