import { useState } from 'react'
import { motion } from 'framer-motion'
import ScallopedCard from '../components/ScallopedCard'
import WhatsAppButton from '../components/WhatsAppButton'
import ProductMedia from '../components/ProductMedia'
import { portfolioItems, portfolioCategories } from '../data/portfolioItems'

export default function Portfolio() {
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h1 className="font-display text-4xl text-cream md:text-5xl">
          the lookbook ✿
        </h1>
        <p className="mt-2 text-cream/70">
          past drops & handmade pieces — each one unique
        </p>
      </motion.div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === cat
                ? 'bg-cream text-navy-deep'
                : 'bg-navy-deep text-cream/80 hover:bg-navy-deep/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="mb-4 break-inside-avoid"
          >
            <ScallopedCard className="group cursor-pointer p-0">
              <div className="relative flex items-center justify-center rounded-t-xl bg-navy-deep/40 p-3">
                <ProductMedia item={item} />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-t-xl bg-navy-deep/60 opacity-0 transition group-hover:opacity-100">
                  <span className="font-accent text-2xl text-cream">✿ view</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-cream">{item.name}</h3>
                <p className="mt-1 text-sm text-steel">{item.price}</p>
                <span className="mt-2 inline-block rounded-full bg-navy px-3 py-0.5 text-xs text-steel">
                  {item.category}
                </span>
              </div>
            </ScallopedCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="scalloped-border mt-16 rounded-2xl bg-navy p-8 text-center md:p-12"
      >
        <h2 className="font-display text-2xl text-cream md:text-3xl">
          want something just like this?
        </h2>
        <p className="mt-2 text-cream/70">DM us and we'll make it happen ✿</p>
        <div className="mt-6">
          <WhatsAppButton className="px-8 py-3">Order Now</WhatsAppButton>
        </div>
      </motion.div>
    </div>
  )
}
