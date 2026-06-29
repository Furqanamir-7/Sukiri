import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FlowerField from '../components/FlowerField'
import Marquee from '../components/Marquee'
import ScallopedCard from '../components/ScallopedCard'
import WhatsAppButton from '../components/WhatsAppButton'
import ProductMedia from '../components/ProductMedia'
import { shopItems } from '../data/shopItems'

const featured = shopItems.filter((item) => item.category !== 'Custom').slice(0, 3)

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
}

export default function Home() {
  return (
    <div>
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-pink-hero px-4">
        <FlowerField />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-2 text-sm uppercase tracking-widest text-rose-light/70"
          >
            welcome to
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-6xl text-rose-light drop-shadow-md md:text-8xl"
          >
            sukiri
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-2 font-accent text-2xl text-rose-light md:text-3xl"
          >
            your lucky loop
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 inline-block"
          >
            <span className="animate-pulse-glow inline-block rounded-full border-2 border-rose-light px-6 py-2 text-sm font-bold uppercase tracking-wider text-rose-light">
              orders are OPEN ✦
            </span>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/shop"
              className="rounded-full bg-cream px-8 py-3 font-semibold text-ink transition hover:scale-105 hover:bg-blush-deep"
            >
              Browse the Shop
            </Link>
            <WhatsAppButton variant="outline" className="px-8 py-3">
              DM to Order
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>

      <Marquee />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center font-display text-3xl text-ink md:text-4xl"
        >
          best sellers ✿
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ScallopedCard>
                <div className="mb-4 flex min-h-[220px] items-center justify-center rounded-xl bg-navy-deep/40 p-3">
                  <ProductMedia item={item} />
                </div>
                <h3 className="font-semibold text-rose-light">{item.name}</h3>
                <p className="mt-1 text-sm text-rose-light/90">{item.price}</p>
                <p className="mt-2 text-xs text-rose-light/75">✿ {item.description}</p>
                <Link
                  to="/shop"
                  className="mt-4 inline-block text-sm text-rose-light/90 hover:text-rose-light"
                >
                  view in shop →
                </Link>
              </ScallopedCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-navy-deep px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-accent text-3xl text-rose-light md:text-4xl"
          >
            "every stitch is made with intention"
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-rose-light/70"
          >
            slow fashion crochet — limited drops, made to order, crafted with love
            for the gen z soul who wants something unique.
          </motion.p>
          <Link
            to="/about"
            className="mt-6 inline-block rounded-full border border-rose-light/30 px-6 py-2 text-sm text-rose-light transition hover:bg-rose-pale/20"
          >
            our story →
          </Link>
        </div>
      </section>
    </div>
  )
}
