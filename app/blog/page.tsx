"use client"

import { useState, useMemo } from "react"
import Navbar from "@/components/navbar"
import TargetCursor from "@/components/target-cursor"
import ScrollFadeIn from "@/components/scroll-fade-in"
import { MagnifyingGlassIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

interface BlogCard {
  id: string
  title: string
  excerpt: string
  image: string
  author: {
    name: string
    role: string
    image: string
  }
  category: string
  readTime: string
  content?: string
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const allBlogs: BlogCard[] = [
    {
      id: "1",
      title: "Building Scalable Web Applications with React",
      excerpt:
        "Learn best practices for architecting large-scale React applications that maintain performance and developer experience.",
      image: "/placeholder.svg?key=pa1iq",
      author: {
        name: "Sarah Chen",
        role: "Senior Frontend Engineer",
        image: "/placeholder.svg?height=48&width=48",
      },
      category: "Web Development",
      readTime: "8 min read",
    },
    {
      id: "2",
      title: "The Future of Backend Development: Serverless Architecture",
      excerpt: "Explore how serverless computing is transforming the way we build and deploy backend services.",
      image: "/placeholder.svg?key=zzhia",
      author: {
        name: "Marcus Williams",
        role: "DevOps Specialist",
        image: "/placeholder.svg?height=48&width=48",
      },
      category: "Backend",
      readTime: "12 min read",
    },
    {
      id: "3",
      title: "UX Design Principles That Transform Products",
      excerpt: "Discover the fundamental principles that separate great UX from mediocre design.",
      image: "/placeholder.svg?key=63je6",
      author: {
        name: "Emma Rodriguez",
        role: "Product Designer",
        image: "/placeholder.svg?height=48&width=48",
      },
      category: "Design",
      readTime: "6 min read",
    },
    {
      id: "4",
      title: "AI Integration in Modern Web Applications",
      excerpt: "A comprehensive guide to integrating AI and machine learning into your web stack.",
      image: "/placeholder.svg?key=tt0qn",
      author: {
        name: "Ahmed Hassan",
        role: "AI/ML Engineer",
        image: "/placeholder.svg?height=48&width=48",
      },
      category: "AI/ML",
      readTime: "10 min read",
    },
    {
      id: "5",
      title: "Mastering TypeScript: From Basics to Advanced Patterns",
      excerpt: "Deep dive into TypeScript features and patterns that will make you a more productive developer.",
      image: "/placeholder.svg?key=abc123",
      author: {
        name: "David Park",
        role: "Full Stack Developer",
        image: "/placeholder.svg?height=48&width=48",
      },
      category: "Web Development",
      readTime: "15 min read",
    },
    {
      id: "6",
      title: "Database Optimization Strategies for High Performance",
      excerpt:
        "Learn how to index, partition, and query efficiently to ensure your database never becomes a bottleneck.",
      image: "/placeholder.svg?key=xyz789",
      author: {
        name: "Lisa Kumar",
        role: "Database Engineer",
        image: "/placeholder.svg?height=48&width=48",
      },
      category: "Backend",
      readTime: "11 min read",
    },
    {
      id: "7",
      title: "Accessibility First: Building Inclusive Digital Experiences",
      excerpt: "Understand why accessibility matters and how to implement it from the ground up in your projects.",
      image: "/placeholder.svg?key=def456",
      author: {
        name: "Jordan Blake",
        role: "Accessibility Specialist",
        image: "/placeholder.svg?height=48&width=48",
      },
      category: "Design",
      readTime: "9 min read",
    },
    {
      id: "8",
      title: "Getting Started with Machine Learning in Python",
      excerpt:
        "A beginner-friendly introduction to ML concepts and popular libraries like scikit-learn and TensorFlow.",
      image: "/placeholder.svg?key=ghi012",
      author: {
        name: "Rachel Green",
        role: "ML Engineer",
        image: "/placeholder.svg?height=48&width=48",
      },
      category: "AI/ML",
      readTime: "14 min read",
    },
  ]

  const categories = ["Web Development", "Backend", "Design", "AI/ML"]

  const filteredBlogs = useMemo(() => {
    return allBlogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.name.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = !selectedCategory || blog.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight text-balance">
              Insights & Articles
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore expert knowledge, tutorials, and insights from our community of builders.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Search Bar */}
        <ScrollFadeIn delay={100}>
          <div className="mb-12">
            <div className="relative mb-6">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles by title, author, or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === null ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All Articles
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedCategory === cat ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <ScrollFadeIn key={blog.id} delay={0.05 * index}>
                <Link href={`/blog/${blog.id}`}>
                  <div className="group cursor-pointer flex flex-col h-full bg-white hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-56 rounded-xl overflow-hidden mb-4">
                      <img
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="inline-block mb-3 px-3 py-1 rounded-full bg-gray-200 text-gray-900 text-xs font-semibold uppercase tracking-wider w-fit">
                      {blog.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 line-clamp-3 flex-grow">{blog.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-3">
                        <img
                          src={blog.author.image || "/placeholder.svg"}
                          alt={blog.author.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{blog.author.name}</p>
                          <p className="text-xs text-gray-600">{blog.readTime}</p>
                        </div>
                      </div>
                      <ArrowUpRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </Link>
              </ScrollFadeIn>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
