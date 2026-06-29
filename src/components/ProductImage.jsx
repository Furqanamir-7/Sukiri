export default function ProductImage({ src, alt, className = '' }) {
  if (!src) return null

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`mx-auto h-auto max-h-72 w-full object-contain ${className}`}
    />
  )
}
