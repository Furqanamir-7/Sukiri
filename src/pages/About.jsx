import { motion } from 'framer-motion'
import DaisySVG from '../components/DaisySVG'
import WhatsAppButton from '../components/WhatsAppButton'
import { INSTAGRAM_URL } from '../config'

const steps = [
  { emoji: '💡', title: 'Idea', desc: 'you share your vision or pick from our drops' },
  { emoji: '🪝', title: 'Hook', desc: 'we crochet it by hand with love & intention' },
  { emoji: '📦', title: 'Ship', desc: 'your piece arrives ready to slay' },
]

const values = [
  'slow fashion',
  'handmade',
  'limited drops',
  'made with love',
]

export default function About() {
  return (
    <div>
      <section className="bg-navy-deep px-4 py-20 text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-accent text-3xl text-rose-light md:text-5xl"
        >
          "every stitch is made with intention ✿"
        </motion.p>
      </section>

      <section className="bg-blush-deep px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl text-ink">our story</h2>
            <p className="mt-4 leading-relaxed text-ink/90">
              sukiri started as a late-night crochet obsession — loops of yarn,
              playlists on repeat, and the dream of making pieces that feel lucky
              to wear. "your lucky loop" isn't just a tagline — it's the vibe.
            </p>
            <p className="mt-4 leading-relaxed text-ink/90">
              we&apos;re a gen z brand that believes in slow fashion, limited drops,
              and pieces made to order just for you. no mass production, no
              corporate energy — just handmade crochet with heart-shaped details
              and daisy energy everywhere.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex h-72 items-center justify-center rounded-2xl bg-navy-deep"
          >
            <DaisySVG size={120} color="light" />
          </motion.div>
        </div>
      </section>

      <section className="bg-pink-panel px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-display text-3xl text-rose-light">
            the process ✿
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <span className="text-4xl">{step.emoji}</span>
                <h3 className="mt-3 font-semibold text-rose-light">{step.title}</h3>
                <p className="mt-2 text-sm text-rose-light/85">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-16 md:px-6">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {values.map((val, i) => (
            <motion.span
              key={val}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-full border border-magenta/25 bg-blush-deep/60 px-5 py-2 text-sm text-ink"
            >
              {val}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="bg-navy-deep px-4 py-16 text-center">
        <h2 className="font-display text-2xl text-rose-light">follow the loop ✿</h2>
        <p className="mt-2 text-rose-light/85">
          see our latest drops & behind-the-scenes on instagram
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-semibold text-ink transition hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-ink">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @sukiri.co
          </a>
          <WhatsAppButton variant="outline" className="px-6 py-3">
            DM on WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </div>
  )
}
