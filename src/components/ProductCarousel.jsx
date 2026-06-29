import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
  }),
}

export default function ProductCarousel({ images, alt }) {
  const [[index, direction], setSlide] = useState([0, 0])

  const paginate = (newDirection) => {
    setSlide(([current]) => {
      const next = (current + newDirection + images.length) % images.length
      return [next, newDirection]
    })
  }

  const goTo = (target) => {
    setSlide(([current]) => [target, target > current ? 1 : -1])
  }

  const onDragEnd = (_, info) => {
    if (info.offset.x < -40 || info.velocity.x < -300) paginate(1)
    else if (info.offset.x > 40 || info.velocity.x > 300) paginate(-1)
  }

  return (
    <div className="relative w-full select-none">
      <div className="relative overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${alt} — photo ${index + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={onDragEnd}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="mx-auto h-auto max-h-72 w-full cursor-grab object-contain active:cursor-grabbing"
            draggable={false}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => paginate(-1)}
              className="absolute left-1 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-navy-deep/70 text-rose-light backdrop-blur-sm transition hover:bg-navy-deep"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              className="absolute right-1 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-navy-deep/70 text-rose-light backdrop-blur-sm transition hover:bg-navy-deep"
              aria-label="Next photo"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <>
          <div className="mt-2 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-4 bg-rose-light' : 'w-1.5 bg-rose-light/45 hover:bg-rose-light/65'
                }`}
              />
            ))}
          </div>
          <p className="mt-1 text-center text-[10px] tracking-wide text-rose-light/55">
            swipe to see more ✿ {index + 1}/{images.length}
          </p>
        </>
      )}
    </div>
  )
}
