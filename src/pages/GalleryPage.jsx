import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCamera, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

// --- MOCK DATA ---
// Using different image heights from Unsplash to demonstrate the masonry effect.
const allImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
    category: 'team',
    caption: 'Strategic planning session',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    category: 'events',
    caption: 'Company-wide workshop',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    category: 'projects',
    caption: 'Presenting our latest project',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
    category: 'team',
    caption: 'Collaborative coding',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1587560699334-cc426240169f?w=800',
    category: 'events',
    caption: 'Celebrating a major milestone',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    category: 'projects',
    caption: 'User testing our new application',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800',
    category: 'team',
    caption: 'Brainstorming new ideas',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800',
    category: 'events',
    caption: 'Annual company offsite',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    category: 'projects',
    caption: 'Late night project sprint',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
    category: 'team',
    caption: 'Our talented development team',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1573496773905-f5b17e76b254?w=800',
    category: 'events',
    caption: 'Guest speaker at a tech conference',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1581093450021-4a7360aa9a2f?w=800',
    category: 'projects',
    caption: 'Innovating in the lab',
  },
]

const filters = ['all', 'team', 'events', 'projects']
const ITEMS_PER_PAGE = 8

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
}

// --- MAIN COMPONENT ---
const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredImages, setFilteredImages] = useState([])
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const images =
      activeFilter === 'all'
        ? allImages
        : allImages.filter(img => img.category === activeFilter)
    setFilteredImages(images)
    setVisibleCount(ITEMS_PER_PAGE) // Reset visible count on filter change
  }, [activeFilter])

  const handleNextImage = () => {
    const currentIndex = filteredImages.findIndex(
      img => img.id === selectedImage.id
    )
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  const handlePrevImage = () => {
    const currentIndex = filteredImages.findIndex(
      img => img.id === selectedImage.id
    )
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[prevIndex])
  }

  useEffect(() => {
    const handleKeyDown = e => {
      if (!selectedImage) return
      if (e.key === 'ArrowRight') handleNextImage()
      if (e.key === 'ArrowLeft') handlePrevImage()
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, filteredImages])

  const visibleImages = filteredImages.slice(0, visibleCount)

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <div className="relative bg-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a7f3d0] to-[#38bdf8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full lg:w-[60%] mx-auto px-6 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center bg-teal-50 text-teal-700 rounded-full p-2 mb-4"
          >
            <FiCamera className="w-6 h-6" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter"
          >
            Our Visual Journey
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg max-w-2xl mx-auto text-slate-600 leading-relaxed"
          >
            A glimpse into our journey, our team, and the moments that define
            us.
          </motion.p>
        </motion.div>
      </div>

      {/* Main Gallery Section */}
      <div className="py-24 sm:py-32">
        <div className="w-full lg:w-[60%] mx-auto px-6">
          {/* Filter Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex justify-center flex-wrap gap-4 mb-12"
          >
            {filters.map(filter => (
              <motion.button
                key={filter}
                variants={itemVariants}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors ${
                  activeFilter === filter
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          >
            <AnimatePresence>
              {visibleImages.map(image => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer break-inside-avoid"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          {visibleCount < filteredImages.length && (
            <div className="text-center mt-12">
              <motion.button
                onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                className="bg-white text-slate-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-slate-100 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More
              </motion.button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={e => {
                e.stopPropagation()
                handlePrevImage()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-50"
            >
              <FiChevronLeft className="w-6 h-6 text-white" />
            </button>
            <motion.div
              layoutId={selectedImage.id}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl"
              />
              <p className="text-white text-center mt-2 text-sm bg-black/30 px-2 py-1 rounded-md">
                {selectedImage.caption}
              </p>
            </motion.div>
            <button
              onClick={e => {
                e.stopPropagation()
                handleNextImage()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-50"
            >
              <FiChevronRight className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-50"
            >
              <FiX className="w-6 h-6 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GalleryPage
