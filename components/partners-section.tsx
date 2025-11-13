"use client"

import { useState } from "react"
import Link from "next/link"
import ScrollFadeIn from "./scroll-fade-in"

export default function PartnersSection() {
  const [isHovering, setIsHovering] = useState(false)

  // Partner logos - 15 partners
  const partners = [
    { name: "Microsoft", logo: "/placeholder.svg?height=80&width=180&text=Microsoft" },
    { name: "Google", logo: "/placeholder.svg?height=80&width=180&text=Google" },
    { name: "Flutterwave", logo: "/placeholder.svg?height=80&width=180&text=Flutterwave" },
    { name: "Andela", logo: "/placeholder.svg?height=80&width=180&text=Andela" },
    { name: "Meta", logo: "/placeholder.svg?height=80&width=180&text=Meta" },
    { name: "Paystack", logo: "/placeholder.svg?height=80&width=180&text=Paystack" },
    { name: "AWS", logo: "/placeholder.svg?height=80&width=180&text=AWS" },
    { name: "GitHub", logo: "/placeholder.svg?height=80&width=180&text=GitHub" },
    { name: "Kuda", logo: "/placeholder.svg?height=80&width=180&text=Kuda" },
    { name: "Interswitch", logo: "/placeholder.svg?height=80&width=180&text=Interswitch" },
    { name: "Ventures Platform", logo: "/placeholder.svg?height=80&width=180&text=Ventures+Platform" },
    { name: "Piggyvest", logo: "/placeholder.svg?height=80&width=180&text=Piggyvest" },
    { name: "Moniepoint", logo: "/placeholder.svg?height=80&width=180&text=Moniepoint" },
    { name: "Cowrywise", logo: "/placeholder.svg?height=80&width=180&text=Cowrywise" },
    { name: "TeamApt", logo: "/placeholder.svg?height=80&width=180&text=TeamApt" },
  ]

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Vertical Marquee */}
          <div className="order-2 lg:order-1">
            <div
              className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Gradient fade at top */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none" />

              {/* Gradient fade at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none" />

              {/* Marquee container */}
              <div className="absolute inset-0 flex flex-col">
                {/* First set of logos */}
                <div
                  className="flex flex-col gap-6 py-6"
                  style={{
                    animation: "scrollVertical 40s linear infinite",
                    animationPlayState: isHovering ? "paused" : "running",
                  }}
                >
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="h-20 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Duplicate set for seamless loop */}
                <div
                  className="flex flex-col gap-6 py-6"
                  style={{
                    animation: "scrollVertical 40s linear infinite",
                    animationPlayState: isHovering ? "paused" : "running",
                  }}
                >
                  {partners.map((partner, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className="flex-shrink-0 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="h-20 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <style jsx>{`
                @keyframes scrollVertical {
                  0% {
                    transform: translateY(0);
                  }
                  100% {
                    transform: translateY(-50%);
                  }
                }
              `}</style>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <ScrollFadeIn>
              <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-6">
                OUR PARTNERS
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.1}>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "Funnel Display, sans-serif" }}
              >
                Building the Future
                <br />
                <span className="text-blue-600">With Industry Leaders</span>
              </h2>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                From global tech giants to Nigeria's most innovative startups, our partners believe in BUCC's mission. 
                They sponsor our events, mentor our members, and recruit from our community—because they know the 
                talent being developed here is exceptional.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
                Together, we're not just preparing students for the tech industry.{" "}
                <span className="text-gray-900 font-semibold">We're shaping what that industry becomes.</span>
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.3}>
              <Link
                href="/partner"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors relative"
              >
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400 pointer-events-none" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400 pointer-events-none" />
                <span>Partner With Us</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
