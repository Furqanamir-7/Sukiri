export const WA_NUMBER = '923153507300'
export const INSTAGRAM_URL = 'https://www.instagram.com/sukiri.co/'
export const WA_DEFAULT_MSG =
  "Hi! I found you on your website and I'd like to place an order ✿"

export const buildWALink = (itemName) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi! I'd like to order: ${itemName} from Sukiri ✿`
  )}`

export const buildWALinkWithMessage = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
