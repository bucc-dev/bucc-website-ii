"use client"

import Link from "next/link"
import ScrollFadeIn from "./scroll-fade-in"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

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
}

export default function BlogSection() {
  const blogs: BlogCard[] = [
    {
      id: "1",
      title: "Building Scalable Web Applications with React",
      excerpt:
        "Learn best practices for architecting large-scale React applications that maintain performance and developer experience.",
      image: "/placeholder.svg?height=400&width=600",
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
      image: "/placeholder.svg?height=400&width=600",
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
      image: "/placeholder.svg?height=400&width=600",
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
      image: "/placeholder.svg?height=400&width=600",
      author: {
        name: "Ahmed Hassan",
        role: "AI/ML Engineer",
        image: "/placeholder.svg?height=48&width=48",
      },
      category: "AI/ML",
      readTime: "10 min read",
    },
  ]

  const featuredBlog = blogs[0]
  const otherBlogs = blogs.slice(1, 4)

  return (
    <section id="blog" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight text-balance">
              Latest Insights & Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore expert knowledge, tutorials, and insights from our community of builders and innovators.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Featured Blog Card */}
        <ScrollFadeIn delay={100}>
          <Link href={`/blog/${featuredBlog.id}`}>
            <div className="grid md:grid-cols-2 gap-8 mb-16 group cursor-pointer">
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                <img
                  src={featuredBlog.image || "/placeholder.svg"}
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider">
                    {featuredBlog.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-3">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-8 line-clamp-3">{featuredBlog.excerpt}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredBlog.author.image || "/placeholder.svg"}
                      alt={featuredBlog.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{featuredBlog.author.name}</p>
                      <p className="text-sm text-gray-600">{featuredBlog.author.role}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">{featuredBlog.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </ScrollFadeIn>

        {/* Other Blog Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {otherBlogs.map((blog, index) => (
            <ScrollFadeIn key={blog.id} delay={100 + 50 * index}>
              <Link href={`/blog/${blog.id}`}>
                <div className="group cursor-pointer flex flex-col h-full">
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="inline-block mb-3 px-3 py-1 rounded-full bg-gray-200 text-gray-900 text-xs font-semibold uppercase tracking-wider w-fit">
                    {blog.category}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">{blog.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500">{blog.readTime}</span>
                    <ArrowUpRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>

        {/* View All Blogs Button */}
        <ScrollFadeIn delay={300}>
          <div className="flex justify-center">
            <a
              href="/blog"
              className="cursor-target inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-colors relative"
            >
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-600 pointer-events-none" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-600 pointer-events-none" />
              <span>View All Articles</span>
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
