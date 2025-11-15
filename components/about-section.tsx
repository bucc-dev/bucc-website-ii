"use client"

import { CheckIcon, AcademicCapIcon, StarIcon, UserGroupIcon } from "@heroicons/react/24/solid"
import ScrollFadeIn from "./scroll-fade-in"

const features = [
  {
    icon: AcademicCapIcon,
    title: "Learn By Doing",
    description:
      "Forget watching endless tutorials. At BUCC, you're coding from day one. Every workshop ends with a working project. Every semester ends with something you built. Your GitHub should tell a story—we make sure it's a good one.",
  },
  {
    icon: UserGroupIcon,
    title: "Build Your Network",
    description:
      "500+ students who speak your language. Alumni at every major tech company in Nigeria. Industry mentors who remember what it's like to be where you are. This isn't networking—it's finding your people.",
  },
  {
    icon: StarIcon,
    title: "Create Real Impact",
    description:
      "The app you build in a BUCC workshop could serve thousands of students. The hackathon project could become a startup. The skills you gain could change your family's trajectory. We're not playing—we're building the future of African tech.",
  },
]

const benefits = [
  "Build real products that solve actual problems, not tutorial projects that sit on your laptop",
  "Learn from industry professionals who've shipped code at Google, Microsoft, and top Nigerian startups",
  "Join hackathons, workshops, and coding sessions that push you beyond what you thought possible",
  "Walk away with a portfolio that makes recruiters stop scrolling and start calling",
]

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-1">
            <ScrollFadeIn>
              <h2 className="text-4xl font-black mb-6 md:mb-8 leading-tight text-black" style={{ fontFamily: "Funnel Display, sans-serif" }}>
                500+ Students.
                <br />
                One Mission.
                <br />
                Infinite Possibilities.
              </h2>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.1}>
              <div className="flex flex-col gap-3 mb-8 md:mb-10">
                <a href="/about" className="cursor-target flex items-center justify-center gap-2 px-6 py-3 bg-black border-2 border-black text-white font-semibold hover:bg-gray-800 transition-colors relative w-full">
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-600 pointer-events-none" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-600 pointer-events-none" />
                  <span>Learn More</span>
                </a>
              </div>
            </ScrollFadeIn>

            {/* Benefits List */}
            <div className="space-y-3 md:space-y-4">
              {benefits.map((benefit, index) => (
                <ScrollFadeIn key={index} delay={0.2 + index * 0.1}>
                  <div className="flex gap-3 items-start">
                    <CheckIcon className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-black text-sm md:text-base leading-relaxed">{benefit}</span>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>

          {/* Center Column - Image Placeholder */}
          <div className="lg:col-span-1 relative">
            <ScrollFadeIn delay={0.15}>
              <img
                src="/placeholder.svg?height=600&width=400"
                alt="Course showcase"
                className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl"
              />
            </ScrollFadeIn>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <ScrollFadeIn key={index} delay={0.3 + index * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 cursor-target">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-black">{feature.title}</h3>
                      <p className="text-black text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </ScrollFadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
