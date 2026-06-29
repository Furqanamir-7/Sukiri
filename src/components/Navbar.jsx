import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { useWhatsApp } from './WhatsAppPopup'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/shop', label: 'Shop' },
  { to: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { openWhatsApp } = useWhatsApp()

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/20 bg-navy-deep/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link to="/" onClick={() => setOpen(false)}>
            <Logo size="md" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-white ${
                    isActive ? 'text-white underline decoration-steel underline-offset-4' : 'text-cream/80'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => openWhatsApp()}
              className="rounded-full bg-cream px-4 py-2 text-sm font-semibold text-ink transition hover:scale-105 hover:bg-blush-deep"
            >
              Order Now
            </button>
          </div>

          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-cream transition ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-cream transition ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-cream transition ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-72 bg-navy-deep p-6 shadow-2xl md:hidden"
            >
              <div className="mb-8 flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="text-cream/70 hover:text-cream"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium ${
                      location.pathname === link.to
                        ? 'text-white'
                        : 'text-cream/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setOpen(false)
                    openWhatsApp()
                  }}
                  className="mt-4 rounded-full bg-cream px-5 py-3 text-center font-semibold text-ink"
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
