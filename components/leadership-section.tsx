"use client"

import Link from "next/link"
import ScrollFadeIn from "./scroll-fade-in"
import leadershipData from "@/data/leadership-2025.json"

interface Leader {
  id: string
  name: string
  position: string
  photo: string
  shortBio: string
}

export default function LeadershipSection() {
  // Get the top 6 executives to display
  const topLeaders: Leader[] = leadershipData.executives.slice(0, 6)

  return (
    <section id="leadership" className="relative py-20 md:py-24 overflow-hidden" style={{ backgroundColor: "#0A1F44" }}>
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-leadership" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-leadership)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "Funnel Display" }}
            >
              Meet the Minds
              <br />
              Driving BUCC Forward
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mt-6">
              Elected by the community. Driven by impact. Building something bigger than themselves.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {topLeaders.map((leader, index) => (
            <ScrollFadeIn key={leader.id} delay={0.1 * index}>
              <Link href="/leadership">
                <div className="group cursor-pointer h-full bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-600">
                  {/* Photo Container */}
                  <div className="aspect-square w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-blue-950/40 z-10 group-hover:opacity-0 transition-opacity duration-300" />
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 text-center">
                    <h3 
                      className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
                      style={{ fontFamily: "Funnel Display" }}
                    >
                      {leader.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-3">
                      {leader.position}
                    </p>
                    
                    {/* Hover Effect - View Profile */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-blue-600 font-semibold text-sm inline-flex items-center gap-1">
                        View Profile
                        <svg 
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>

        {/* CTA Button */}
        <ScrollFadeIn delay={0.6}>
          <div className="flex justify-center">
            <Link
              href="/leadership"
              className="cursor-target inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 relative group"
            >
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400 transition-colors pointer-events-none" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400 transition-colors pointer-events-none" />
              <span>Meet the Full Team</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
