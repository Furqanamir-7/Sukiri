import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WhatsAppButton from '../components/WhatsAppButton'

const faqs = [
  {
    q: 'How long does an order take?',
    a: "Most pieces take 5–10 business days depending on complexity. Custom orders may take 2–3 weeks — we'll always give you a timeline when you DM us!",
  },
  {
    q: 'Can I request custom colors?',
    a: "Absolutely! Send us your color inspo (hex codes, Pinterest boards, whatever) and we'll match it as closely as possible with our yarn selection.",
  },
  {
    q: 'Do you ship internationally?',
    a: "Yes! We ship worldwide from Pakistan. Shipping costs and times vary by location — DM us with your country and we'll sort it out.",
  },
  {
    q: 'How do I place an order?',
    a: "Tap any \"Order on WhatsApp\" button on the site, or DM us directly. Tell us what you want, your size/color preferences, and we'll confirm availability & price.",
  },
  {
    q: "What's your return policy?",
    a: "Since everything is handmade to order, we don't accept returns — but if something arrives damaged or not as described, DM us within 48 hours and we'll make it right.",
  },
]

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-cream">
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-3 px-5 py-4 text-left"
      >
        <span className="text-magenta/70">✿</span>
        <span className="flex-1 font-semibold text-ink">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-xl text-magenta/50"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 pl-10 text-sm leading-relaxed text-ink/75">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          got questions? ✿
        </h1>
        <p className="mt-2 text-ink/75">we've got answers</p>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <AccordionItem
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 rounded-2xl bg-navy-deep p-8 text-center"
      >
        <h2 className="font-display text-xl text-rose-light">still confused?</h2>
        <p className="mt-2 text-sm text-rose-light/70">
          no worries — just DM us directly
        </p>
        <div className="mt-4">
          <WhatsAppButton className="px-6 py-3">Order Now</WhatsAppButton>
        </div>
      </motion.div>
    </div>
  )
}
