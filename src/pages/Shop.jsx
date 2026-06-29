import { useState } from 'react'
import { motion } from 'framer-motion'
import ScallopedCard from '../components/ScallopedCard'
import WhatsAppButton from '../components/WhatsAppButton'
import ProductMedia from '../components/ProductMedia'
import { shopItems, categories } from '../data/shopItems'

export default function Shop() {
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All'
      ? shopItems
      : shopItems.filter((item) => item.category === filter)

  const regularItems = filtered.filter((item) => item.category !== 'Custom')
  const customItem = shopItems.find((item) => item.category === 'Custom')

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h1 className="font-display text-4xl text-cream md:text-5xl">
          place your order ✿
        </h1>
        <p className="mt-2 text-cream/70">
          browse our pieces — tap order to DM us on whatsapp
        </p>
      </motion.div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {regularItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <ScallopedCard>
              <div className="mb-4 flex min-h-[240px] items-center justify-center rounded-xl bg-navy-deep/40 p-3">
                <ProductMedia item={item} />
              </div>
              <h3 className="text-lg font-semibold text-cream">{item.name}</h3>
              <p className="mt-1 font-medium text-steel">{item.price}</p>
              <p className="mt-2 text-sm text-cream/60">
                ✿ handmade with love
              </p>
              <p className="mt-1 text-xs text-cream/50">{item.description}</p>
              <div className="mt-4">
                <WhatsAppButton itemName={item.name} className="w-full">
                  Order on WhatsApp ↗
                </WhatsAppButton>
              </div>
            </ScallopedCard>
          </motion.div>
        ))}
      </div>

      {(filter === 'All' || filter === 'Custom') && customItem && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <ScallopedCard variant="cream" className="p-8 text-center md:p-12">
            <span className="text-3xl">✨</span>
            <h2 className="mt-2 font-display text-3xl text-navy-deep">
              custom order
            </h2>
            <p className="mx-auto mt-3 max-w-md text-navy-deep/70">
              {customItem.description} Send us your inspo, color palette, or
              dream piece — we'll crochet it just for you.
            </p>
            <p className="mt-2 font-semibold text-navy">{customItem.price}</p>
            <div className="mt-6">
              <WhatsAppButton
                itemName="Custom Order"
                variant="cream"
                className="px-8 py-3"
              >
                Start a Custom Order ✿
              </WhatsAppButton>
            </div>
          </ScallopedCard>
        </motion.div>
      )}
    </div>
  )
}
