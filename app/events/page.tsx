"use client"

import { useState, useMemo } from "react"
import Navbar from "@/components/navbar"
import TargetCursor from "@/components/target-cursor"
import ScrollFadeIn from "@/components/scroll-fade-in"
import { HeartIcon, BookmarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconSolid, BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid"
import Link from "next/link"

interface EventCard {
  id: string
  title: string
  date: string
  month: string
  day: number
  location: string
  price: string
  image: string
  description?: string
}

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set())

  const allEvents: EventCard[] = [
    {
      id: "1",
      title: "BUCC Annual Hackathon 2025",
      date: "DEC 15",
      month: "DEC",
      day: 15,
      location: "Babcock University",
      price: "FREE",
      image: "/placeholder.svg?height=300&width=400",
      description: "24-hour coding marathon where teams build innovative solutions. Prizes, mentorship, and networking await!",
    },
    {
      id: "2",
      title: "Web3 & Blockchain Workshop",
      date: "DEC 10",
      month: "DEC",
      day: 10,
      location: "Babcock University",
      price: "FREE",
      image: "/placeholder.svg?height=300&width=400",
      description: "Dive into blockchain technology, smart contracts, and decentralized applications with industry experts.",
    },
    {
      id: "3",
      title: "AI/ML Bootcamp Series",
      date: "DEC 5",
      month: "DEC",
      day: 5,
      location: "Babcock University",
      price: "FREE",
      image: "/placeholder.svg?height=300&width=400",
      description: "Master machine learning fundamentals, neural networks, and build real AI projects.",
    },
    {
      id: "4",
      title: "UI/UX Design Masterclass",
      date: "NOV 28",
      month: "NOV",
      day: 28,
      location: "Babcock University",
      price: "FREE",
      image: "/placeholder.svg?height=300&width=400",
      description: "Learn design thinking, prototyping, and create stunning user experiences with Figma.",
    },
    {
      id: "5",
      title: "Career Fair & Networking Night",
      date: "NOV 20",
      month: "NOV",
      day: 20,
      location: "Babcock University",
      price: "FREE",
      image: "/placeholder.svg?height=300&width=400",
      description: "Meet recruiters from top tech companies, practice interviews, and expand your professional network.",
    },
    {
      id: "6",
      title: "Full-Stack Development Workshop",
      date: "NOV 15",
      month: "NOV",
      day: 15,
      location: "Babcock University",
      price: "FREE",
      image: "/placeholder.svg?height=300&width=400",
      description: "Build complete web applications from frontend to backend using React, Node.js, and databases.",
    },
    {
      id: "7",
      title: "Cloud Computing Workshop",
      date: "NOV 10",
      month: "NOV",
      day: 10,
      location: "Babcock University",
      price: "FREE",
      image: "/placeholder.svg?height=300&width=400",
      description: "Deep dive into AWS, Azure, and Google Cloud with hands-on labs and real-world scenarios.",
    },
    {
      id: "8",
      title: "Data Science for Beginners",
      date: "NOV 5",
      month: "NOV",
      day: 5,
      location: "Babcock University",
      price: "FREE",
      image: "/placeholder.svg?height=300&width=400",
      description: "Learn Python, data analysis, and visualization techniques to start your data science career.",
    },
  ]

  const filteredEvents = useMemo(() => {
    return allEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description?.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Navbar />

      <div className="relative z-0 pt-20" style={{ backgroundColor: "#0A1F44" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-events-page" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-events-page)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 relative z-10">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight text-balance">All Events</h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Explore our complete lineup of tech events, workshops, and conferences.
              </p>
            </div>
          </ScrollFadeIn>

          {/* Search Bar */}
          <ScrollFadeIn delay={100}>
            <div className="mb-12">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events by name, location, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </ScrollFadeIn>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <ScrollFadeIn key={event.id} delay={0.05 * index}>
                  <Link href={`/events/${event.id}`}>
                    <div className="group cursor-pointer h-full flex flex-col bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-1 text-sm font-bold text-gray-900">
                          {event.price}
                        </div>
                        <div className="absolute top-4 right-4 flex gap-2 z-10">
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              setBookmarks((prev) => {
                                const newBookmarks = new Set(prev)
                                if (newBookmarks.has(event.id)) {
                                  newBookmarks.delete(event.id)
                                } else {
                                  newBookmarks.add(event.id)
                                }
                                return newBookmarks
                              })
                            }}
                            className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                          >
                            {bookmarks.has(event.id) ? (
                              <BookmarkIconSolid className="w-5 h-5 text-blue-600" />
                            ) : (
                              <BookmarkIcon className="w-5 h-5 text-gray-700" />
                            )}
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              setFavorites((prev) => {
                                const newFavorites = new Set(prev)
                                if (newFavorites.has(event.id)) {
                                  newFavorites.delete(event.id)
                                } else {
                                  newFavorites.add(event.id)
                                }
                                return newFavorites
                              })
                            }}
                            className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                          >
                            {favorites.has(event.id) ? (
                              <HeartIconSolid className="w-5 h-5 text-red-600" />
                            ) : (
                              <HeartIcon className="w-5 h-5 text-gray-700" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                          {event.month} {event.day}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{event.location}</p>
                        {event.description && (
                          <p className="text-sm text-gray-500 line-clamp-2 mt-2">{event.description}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                </ScrollFadeIn>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">No events found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
