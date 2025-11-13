"use client"

import { useState } from "react"
import ScrollFadeIn from "./scroll-fade-in"
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

interface GalleryImage {
  id: string
  image: string
  title: string
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handleImageClick = (img: GalleryImage, index: number) => {
    setSelectedImage(img)
    setSelectedIndex(index)
  }

  const handlePrevious = () => {
    const newIndex = (selectedIndex - 1 + galleryImages.length) % galleryImages.length
    setSelectedIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % galleryImages.length
    setSelectedIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const galleryImages: GalleryImage[] = [
    { id: "1", image: "/placeholder.svg?height=400&width=500", title: "Tech Conference 2024" },
    { id: "2", image: "/placeholder.svg?height=400&width=500", title: "Hackathon Event" },
    { id: "3", image: "/placeholder.svg?height=400&width=500", title: "Workshop Session" },
    { id: "4", image: "/placeholder.svg?height=400&width=500", title: "Networking Event" },
    { id: "5", image: "/placeholder.svg?height=400&width=500", title: "Team Building" },
    { id: "6", image: "/placeholder.svg?height=400&width=500", title: "Seminar Audience" },
    { id: "7", image: "/placeholder.svg?height=400&width=500", title: "Code Demo" },
    { id: "8", image: "/placeholder.svg?height=400&width=500", title: "Community Gathering" },
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight text-balance">Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Capture moments from our community events and celebrations.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Marquee Rows */}
        <div className="space-y-8 mb-12">
          {/* Row 1 - Left Direction */}
          <ScrollFadeIn delay={100}>
            <div className="overflow-hidden">
              <div className="flex gap-4 animate-marquee-left">
                {galleryImages.slice(0, 4).map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => handleImageClick(img, index)}
                    className="flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden group cursor-pointer relative"
                  >
                    <img
                      src={img.image || "/placeholder.svg"}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        View
                      </span>
                    </div>
                  </button>
                ))}
                {/* Duplicate for seamless loop */}
                {galleryImages.slice(0, 4).map((img, index) => (
                  <button
                    key={`dup-${img.id}`}
                    onClick={() => handleImageClick(img, index)}
                    className="flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden group cursor-pointer relative"
                  >
                    <img
                      src={img.image || "/placeholder.svg"}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        View
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </ScrollFadeIn>

          {/* Row 2 - Right Direction */}
          <ScrollFadeIn delay={150}>
            <div className="overflow-hidden">
              <div className="flex gap-4 animate-marquee-right">
                {galleryImages.slice(4, 8).map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => handleImageClick(img, index + 4)}
                    className="flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden group cursor-pointer relative"
                  >
                    <img
                      src={img.image || "/placeholder.svg"}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        View
                      </span>
                    </div>
                  </button>
                ))}
                {/* Duplicate for seamless loop */}
                {galleryImages.slice(4, 8).map((img, index) => (
                  <button
                    key={`dup-${img.id}`}
                    onClick={() => handleImageClick(img, index + 4)}
                    className="flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden group cursor-pointer relative"
                  >
                    <img
                      src={img.image || "/placeholder.svg"}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        View
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>

        {/* See All Images Button */}
        <ScrollFadeIn delay={200}>
          <div className="flex justify-center mb-16">
            <a
              href="https://pixieset.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-colors relative"
            >
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-600 pointer-events-none" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-600 pointer-events-none" />
              <span>See All Images</span>
            </a>
          </div>
        </ScrollFadeIn>

        {selectedImage && (
          <div 
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Top Right Corner */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                aria-label="Close"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>

              {/* Image Container */}
              <div className="relative w-full h-[70vh] flex items-center justify-center">
                <img
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="w-8 h-8 text-white" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRightIcon className="w-8 h-8 text-white" />
              </button>

              {/* Image Title */}
              <div className="mt-4 text-center">
                <p className="text-white text-lg font-semibold bg-black/40 px-6 py-3 rounded-lg inline-block">
                  {selectedImage.title}
                </p>
                <p className="text-white/60 text-sm mt-2">
                  {selectedIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
