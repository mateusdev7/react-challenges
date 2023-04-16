import image1 from "./assets/1.jpg"
import image2 from "./assets/2.jpg"
import image3 from "./assets/3.jpg"
import image4 from "./assets/4.jpg"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const images = [
  {
    id: 1,
    url: image1,
  },
  {
    id: 2,
    url: image2,
  },
  {
    id: 3,
    url: image3,
  },
  {
    id: 4,
    url: image4,
  },
]

function App() {
  const carousel = useRef<HTMLDivElement>(null)
  const thumbRefs = useRef<Array<HTMLDivElement | null>>([])
  const imageRefs = useRef<Array<HTMLDivElement | null>>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState(0)
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    handleClickThumb(activeImage)
  }, [activeImage])

  const handleClickThumb = (index: number) => {
    const imageRef = imageRefs.current[index]
    const scrollContainer = scrollContainerRef.current
    if (imageRef && scrollContainer) {
      const { left: thumbLeft, width: thumbWidth } =
        imageRef.getBoundingClientRect()
      const { left: containerLeft } = scrollContainer.getBoundingClientRect()
      const thumbCenter = thumbLeft + thumbWidth / 2
      const containerCenter = containerLeft + scrollContainer.offsetWidth / 2
      const offset = thumbCenter - containerCenter
      const position = scrollContainer.scrollLeft + offset
      setScrollPosition(position)
      setActiveImage(index)
      scrollContainer.scrollTo({ left: position, behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (!carousel) return
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen mx-auto my-0">
      <motion.div
        ref={carousel}
        className="w-full max-w-[400px] overflow-hidden carousel cursor-grab rounded-lg"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex gap-3"
          dragConstraints={{ right: 0, left: -width }}
          style={{ x: -scrollPosition, transition: "transform 0.5s ease-out" }}
          ref={scrollContainerRef}
        >
          {images.map((image, index) => (
            <AnimatePresence>
              <motion.div
                ref={(el: HTMLDivElement) => (imageRefs.current[index] = el)}
                key={image.id}
                className={`min-h-[200px] min-w-[400px]`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  className="w-full pointer-events-none h-4/5 rounded-xl"
                  src={image.url}
                  alt={image.url}
                />
              </motion.div>
            </AnimatePresence>
          ))}
        </motion.div>
      </motion.div>
      <motion.div className="w-full max-w-[400px] carousel cursor-grab flex items-center justify-center">
        <AiOutlineArrowLeft
          onClick={() => {
            if (activeImage > 0)
              setActiveImage((activeImage) => activeImage - 1)
          }}
          className="py-1 mr-3 "
          size={24}
          cursor="pointer"
        />
        <motion.div className="flex justify-center max-w-xs gap-3 text-center ">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className={`min-h-[50px] `}
              onClick={() => handleClickThumb(index)}
              whileHover={{ scale: 1.1 }}
              ref={(el: HTMLDivElement) => (thumbRefs.current[index] = el)}
            >
              <img
                className="w-full h-full rounded-lg"
                src={image.url}
                alt={image.url}
              />
            </motion.div>
          ))}
        </motion.div>
        <AiOutlineArrowRight
          onClick={() => {
            if (activeImage < thumbRefs.current.length - 1)
              setActiveImage((activeImage) => activeImage + 1)
          }}
          className="py-1 ml-3 "
          size={24}
          cursor="pointer"
        />
      </motion.div>
    </div>
  )
}

export default App
