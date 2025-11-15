"use client"
import { UserGroupIcon, BriefcaseIcon, CodeBracketIcon, UsersIcon, SparklesIcon } from "@heroicons/react/24/outline"
import TextType from "./text-type"
import ScrollFadeIn from "./scroll-fade-in"

export default function Hero() {
  const headings = ["Where Ideas\nBecome Impact", "Code. Community.\nInnovation.", "Build Tomorrow,\nToday."]

  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row pt-16 overflow-hidden"
      style={{ backgroundColor: "#0A1F44" }}
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="w-full lg:w-[45%] px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative z-10">
        <div className="mb-6 md:mb-8 text-xs md:text-sm font-light text-gray-300 uppercase tracking-wider">
          EST. 2024 • BABCOCK UNIVERSITY
        </div>

        <TextType
          text={headings}
          as="h1"
          typingSpeed={75}
          pauseDuration={1500}
          deletingSpeed={50}
          showCursor={true}
          cursorCharacter="|"
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight min-h-[140px] md:min-h-[180px] lg:min-h-[200px] transition-opacity duration-1000 ease-in-out mb-3 md:mb-4"
          style={{
            fontFamily: "Funnel Display",
            fontWeight: 700,
            whiteSpace: "pre-line",
          }}
        />

        <ScrollFadeIn delay={300}>
          <p className="mb-8 md:mb-12 text-base md:text-lg text-gray-300 max-w-md">
            Join 500+ students shaping Babcock's tech ecosystem through code, community, and innovation.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={400}>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-8 md:mb-12 w-full md:w-auto justify-center lg:justify-start">
            <a href="/partner" className="cursor-target flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors relative">
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white pointer-events-none" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white pointer-events-none" />
              <BriefcaseIcon className="w-5 h-5" />
              <span>Partner With Us</span>
            </a>
          </div>
        </ScrollFadeIn>

        <div className="flex gap-4 md:gap-8 flex-wrap text-xs md:text-sm uppercase tracking-wider justify-center lg:justify-start">
          <div className="flex items-center gap-2 text-gray-300">
            <CodeBracketIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span>Hackathons</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <UsersIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span>500+ Members</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <SparklesIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span>Workshops</span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[55%] px-6 md:px-8 py-8 flex items-center justify-center relative z-10">
        <img
          src="/placeholder.svg?height=500&width=600"
          alt="Community workspace"
          className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover"
        />
      </div>
    </div>
  )
}
