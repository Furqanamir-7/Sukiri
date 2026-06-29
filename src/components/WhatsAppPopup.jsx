import { createContext, useContext, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { WA_DEFAULT_MSG, buildWALink, buildWALinkWithMessage } from '../config'

const WhatsAppContext = createContext(null)

export function WhatsAppProvider({ children }) {
  const [popup, setPopup] = useState(null)

  const openWhatsApp = useCallback((itemName = null) => {
    const message = itemName
      ? `Hi! I'd like to order: ${itemName} from Sukiri ✿`
      : WA_DEFAULT_MSG
    const link = itemName ? buildWALink(itemName) : buildWALinkWithMessage(WA_DEFAULT_MSG)
    setPopup({ itemName, message, link })
  }, [])

  const closePopup = useCallback(() => setPopup(null), [])

  const confirmOrder = useCallback(() => {
    if (popup?.link) {
      window.open(popup.link, '_blank', 'noopener,noreferrer')
    }
    setPopup(null)
  }, [popup])

  return (
    <WhatsAppContext.Provider value={{ openWhatsApp, closePopup }}>
      {children}
      <AnimatePresence>
        {popup && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm"
              onClick={closePopup}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative w-full max-w-md rounded-3xl bg-cream p-8 text-navy-deep shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button
                onClick={closePopup}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-navy/10 text-navy-deep transition hover:bg-navy/20"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg">
                  <svg viewBox="0 0 24 24" className="h-9 w-9 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </div>

              <h3 className="mb-2 text-center font-display text-2xl text-navy">
                order on whatsapp ✿
              </h3>
              <p className="mb-1 text-center text-sm text-navy/70">
                {popup.itemName
                  ? `you're ordering: ${popup.itemName}`
                  : 'ready to place your order?'}
              </p>
              <p className="mb-6 rounded-2xl bg-navy/5 p-4 text-center text-sm italic text-navy/80">
                "{popup.message}"
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={confirmOrder}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  continue to whatsapp
                </button>
                <button
                  onClick={closePopup}
                  className="w-full rounded-full border-2 border-navy/20 px-6 py-3 text-sm text-navy/70 transition hover:border-navy/40"
                >
                  maybe later
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-navy/50">
                +92 315 3507300
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </WhatsAppContext.Provider>
  )
}

export function useWhatsApp() {
  const ctx = useContext(WhatsAppContext)
  if (!ctx) throw new Error('useWhatsApp must be used within WhatsAppProvider')
  return ctx
}
