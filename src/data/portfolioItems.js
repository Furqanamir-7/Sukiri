import { shopItems } from './shopItems'

export const portfolioItems = shopItems
  .filter((item) => item.category !== 'Custom' && item.image)
  .map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    price: item.price,
    image: item.image,
    description: item.description,
  }))

export const portfolioCategories = ['All', 'Keychains', 'Plushies', 'Bouquets']
