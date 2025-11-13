"use client"

import { useState } from "react"
import Image from "next/image"
import ScrollFadeIn from "./scroll-fade-in"

export default function PartnerMarquee() {
  const [isHovering, setIsHovering] = useState(false)

  const partners = [
    { name: "ProductHunt", logo: "/placeholder.svg?height=60&width=160" },
    { name: "HackerNews", logo: "/placeholder.svg?height=60&width=160" },
    { name: "TechCrunch", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Forbes", logo: "/placeholder.svg?height=60&width=160" },
    { name: "TheVerge", logo: "/placeholder.svg?height=60&width=160" },
    { name: "Wired", logo: "/placeholder.svg?height=60&width=160" },
  ]

  return (
    <ScrollFadeIn>
      <div className="w-full bg-[#0A0A0A] py-16 overflow-hidden border-t border-gray-800">
        {/* Label */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="text-sm font-light text-gray-500 uppercase tracking-widest">Our Partners</p>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className="flex gap-16"
            style={{
              animation: "scroll 30s linear infinite",
              animationPlayState: isHovering ? "paused" : "running",
            }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                data-cursor="block" className=" flex-shrink-0 flex items-center justify-center h-20 px-8 hover:opacity-80 transition-opacity"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={60}
                  className="max-h-[60px] w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Duplicate for seamless loop */}
          <div
            className="flex gap-16 absolute top-0 left-full"
            style={{
              animation: "scroll 30s linear infinite",
              animationPlayState: isHovering ? "paused" : "running",
            }}
          >
            {partners.map((partner, index) => (
              <div
                key={`duplicate-${index}`}
                data-cursor="block" className=" flex-shrink-0 flex items-center justify-center h-20 px-8 hover:opacity-80 transition-opacity"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={60}
                  className="max-h-[60px] w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>
    </ScrollFadeIn>
  )
}
