function parseFilename(filename) {
  const base = filename.replace(/\.[^.]+$/, '')
  const priceMatch = base.match(/\(Rs\s*(\d+)(?:\s+each)?\)/i)
  const priceValue = priceMatch ? Number(priceMatch[1]) : 550
  const name = base
    .replace(/\(Rs\s*\d+(?:\s+each)?\)/gi, '')
    .replace(/\s*\(\d+\)\s*$/, '')
    .trim()

  let category = 'Accessories'
  const lower = name.toLowerCase()
  if (lower.includes('keychain') || lower.includes('shroomies')) category = 'Keychains'
  else if (lower.includes('bouquet')) category = 'Bouquets'
  else if (lower.includes('plush') || lower.includes('penguin')) category = 'Plushies'

  const formatPrice = (n) => `Rs. ${n.toLocaleString('en-PK')}`

  return {
    name,
    category,
    price: formatPrice(priceValue),
    priceValue,
    image: `/products/${filename}`,
    description: '✿ handmade with love — made to order just for you',
  }
}

const productFiles = [
  'blush-tulip-trio-bouquet-rs-2000-1.jpg',
  'chick-with-flower-keychain-rs-1500.jpg',
  'cotton-candy-tulip-bouquet-rs-3000.jpg',
  'kuromi-plush-rs-2500.png',
  'mauve-tulip-bouquet-rs-1500.jpg',
  'mini-rose-bouquet-keychain-rs-1500.jpg',
  'pika-the-penguin-plush-rs-1500.jpg',
  'poko-pika-penguin-duo-rs-3000.jpg',
  'poko-the-penguin-plush-rs-1500.jpg',
  'shroomies-pic-2.png',
  'shroomies-pic-3.png',
  'shroomies-rs-550-each.jpg',
]

export const shopItems = [
  ...productFiles.map((file, index) => ({
    id: index + 1,
    ...parseFilename(file),
  })),
  {
    id: productFiles.length + 1,
    name: 'Custom Order',
    category: 'Custom',
    price: 'Price on request',
    priceValue: null,
    image: null,
    description: "Have something in mind? Let's make it.",
  },
]

export const categories = ['All', 'Keychains', 'Plushies', 'Bouquets', 'Custom']
