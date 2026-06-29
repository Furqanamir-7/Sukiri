import ProductImage from './ProductImage'
import ProductCarousel from './ProductCarousel'

export function getProductImages(item) {
  if (item.images?.length) return item.images
  if (item.image) return [item.image]
  return []
}

export default function ProductMedia({ item, className = '' }) {
  const images = getProductImages(item)
  if (!images.length) return null

  if (images.length > 1) {
    return <ProductCarousel images={images} alt={item.name} />
  }

  return <ProductImage src={images[0]} alt={item.name} className={className} />
}
