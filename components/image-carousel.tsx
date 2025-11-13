"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const images = [
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      alt: "Hackathon event with developers collaborating",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
      alt: "Team celebration at tech event",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=60",
      alt: "Workshop session with participants",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=40",
      alt: "Community coding event",
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isAutoPlay, images.length])

  return (
    <div
      className="relative w-full max-w-4xl mx-auto group"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="relative w-full h-96 md:h-full aspect-video overflow-hidden rounded-2xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              animation: index === activeIndex ? "kenBurns 6s ease-out forwards" : "none",
            }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button data-cursor="block"
            key={index}
            onClick={() => {
              setActiveIndex(index)
              setIsAutoPlay(false)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex ? "bg-white w-8" : "bg-gray-500 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes kenBurns {
          from {
            transform: scale(1) translate(0, 0);
          }
          to {
            transform: scale(1.05) translate(-2%, 2%);
          }
        }
      `}</style>
    </div>
  )
}
