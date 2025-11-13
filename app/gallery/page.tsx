"use client"

import Navbar from "@/components/navbar"
import TargetCursor from "@/components/target-cursor"
import ScrollFadeIn from "@/components/scroll-fade-in"
import Footer from "@/components/footer"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

export default function GalleryPage() {
  const galleryImages = [
    { id: 1, title: "Hackathon 2024", category: "Events" },
    { id: 2, title: "Workshop Series", category: "Learning" },
    { id: 3, title: "Team Projects", category: "Projects" },
    { id: 4, title: "Community Meetup", category: "Social" },
    { id: 5, title: "Tech Talk", category: "Events" },
    { id: 6, title: "Code Sprint", category: "Projects" },
    { id: 7, title: "Annual Conference", category: "Events" },
    { id: 8, title: "Design Workshop", category: "Learning" },
    { id: 9, title: "Game Night", category: "Social" },
    { id: 10, title: "Product Launch", category: "Projects" },
    { id: 11, title: "Alumni Meetup", category: "Social" },
    { id: 12, title: "Industry Visit", category: "Events" },
    { id: 13, title: "AI/ML Workshop", category: "Learning" },
    { id: 14, title: "Hackathon Winners", category: "Events" },
    { id: 15, title: "Team Building", category: "Social" },
  ]

  const categories = ["All", "Events", "Learning", "Projects", "Social"]

  return (
    <div className="bg-white overflow-x-hidden">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center pt-24 pb-16 md:py-32 px-4 md:px-8"
        style={{ backgroundColor: "#0A1F44" }}
      >
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-gallery-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-gallery-hero)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          <ScrollFadeIn>
            <div className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6">OUR GALLERY</div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "Funnel Display, sans-serif" }}
            >
              Moments That
              <br />
              <span className="text-blue-400">Define Us</span>
            </h1>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              From hackathons to hangouts, workshops to wins—these are the moments that make BUCC more than just a club.
              This is our story, captured.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <ScrollFadeIn>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  data-cursor="block"
                  className={`px-6 py-3 font-semibold text-sm tracking-wider transition-all ${
                    category === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollFadeIn>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {galleryImages.map((image, index) => (
              <ScrollFadeIn key={image.id} delay={0.05 * index}>
                <div className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative w-full h-80">
                    <img
                      src={`/placeholder.svg?height=500&width=400`}
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="inline-block w-fit px-3 py-1 bg-blue-500 text-white text-xs font-bold tracking-wider uppercase mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-white font-bold text-xl mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Click to view full size
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* View Full Gallery CTA */}
          <ScrollFadeIn delay={0.3}>
            <div className="text-center">
              <div className="inline-block bg-gray-50 p-12 rounded-2xl">
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  Want to See More?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                  Explore our complete photo collection with thousands of high-resolution images from all our events, workshops, and community moments.
                </p>
                <a
                  href="https://pixieset.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="block"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg transition-all hover:scale-105 relative overflow-hidden"
                >
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400" />
                  <span className="relative z-10">VIEW FULL GALLERY</span>
                  <ArrowUpRightIcon className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
