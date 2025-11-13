"use client"

import { useState } from "react"
import Link from "next/link"
import ScrollFadeIn from "./scroll-fade-in"
import { HeartIcon, BookmarkIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconSolid, BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid"

export interface EventCard {
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

interface EventsSectionProps {
  events?: EventCard[]
}

export default function EventsSection({ events }: EventsSectionProps) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set())

  const demoEvents: EventCard[] = [
    {
      id: "1",
      title: "BUCC Annual Hackathon 2025",
      date: "DEC 15",
      month: "DEC",
      day: 15,
      location: "Babcock University",
      price: "FREE",
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
      description: "Build complete web applications from frontend to backend using React, Node.js, and databases.",
    },
  ]

  const eventList = events || demoEvents

  const toggleFavorite = (e: React.MouseEvent, eventId: string) => {
    e.preventDefault()
    e.stopPropagation()
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(eventId)) {
        newFavorites.delete(eventId)
      } else {
        newFavorites.add(eventId)
      }
      return newFavorites
    })
  }

  const toggleBookmark = (e: React.MouseEvent, eventId: string) => {
    e.preventDefault()
    e.stopPropagation()
    setBookmarks((prev) => {
      const newBookmarks = new Set(prev)
      if (newBookmarks.has(eventId)) {
        newBookmarks.delete(eventId)
      } else {
        newBookmarks.add(eventId)
      }
      return newBookmarks
    })
  }

  return (
    <section id="events" className="py-12 md:py-16 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight text-balance">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore our exciting lineup of events bringing together our community for learning, networking, and
              celebration.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {eventList.slice(0, 6).map((event, index) => (
            <ScrollFadeIn key={event.id} delay={0.05 * index}>
              <Link href={`/events/${event.id}`}>
                <div className="group cursor-pointer h-full flex flex-col bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex gap-2 z-10">
                      <button
                        onClick={(e) => toggleBookmark(e, event.id)}
                        className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                      >
                        {bookmarks.has(event.id) ? (
                          <BookmarkIconSolid className="w-5 h-5 text-blue-600" />
                        ) : (
                          <BookmarkIcon className="w-5 h-5 text-gray-700" />
                        )}
                      </button>
                      <button
                        onClick={(e) => toggleFavorite(e, event.id)}
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
                  </div>
                </div>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="/events"
            className="cursor-target inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors relative"
          >
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400 pointer-events-none" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400 pointer-events-none" />
            <span>View All Events</span>
          </a>
        </div>
      </div>
    </section>
  )
}
