import { shopItems } from './shopItems'
import { getProductImages } from '../components/ProductMedia'

export const portfolioItems = shopItems
  .filter((item) => item.category !== 'Custom' && getProductImages(item).length)
  .map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    price: item.price,
    image: getProductImages(item)[0],
    images: item.images,
    description: item.description,
  }))

export const portfolioCategories = ['All', 'Keychains', 'Plushies', 'Bouquets']
