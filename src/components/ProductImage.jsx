export default function ProductImage({ src, alt, className = '' }) {
  if (!src) return null

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`h-full w-full object-cover ${className}`}
    />
  )
}
