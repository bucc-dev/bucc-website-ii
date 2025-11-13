"use client"

import Navbar from "@/components/navbar"
import TargetCursor from "@/components/target-cursor"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  // Dummy blog data - in a real app, this would come from a database
  const blog = {
    id: params.id,
    title: "Building Scalable Web Applications with React",
    excerpt:
      "Learn best practices for architecting large-scale React applications that maintain performance and developer experience.",
    content: `
      React has become the de facto standard for building modern web applications, but with great power comes great responsibility. 
      As your application grows, maintaining performance and developer experience becomes increasingly challenging.

      In this comprehensive guide, we'll explore the best practices and patterns that successful teams use to scale their React applications 
      to handle millions of users without sacrificing code quality or maintainability.

      ## The Evolution of React Architecture

      The React ecosystem has evolved significantly over the past few years. From class components to hooks, from Redux to Context API, 
      the landscape of state management and component design has transformed dramatically.

      Today's applications demand more than just UI rendering. They need to handle real-time data, complex user interactions, 
      and seamless performance across devices.

      ## Key Principles for Scalable React

      ### 1. Component Isolation
      Building components that are truly isolated and reusable is fundamental. Each component should have a single responsibility 
      and clear interfaces.

      ### 2. State Management
      Choose the right state management solution for your use case. While Context API works for many applications, 
      larger applications might benefit from Redux, Zustand, or Jotai.

      ### 3. Performance Optimization
      Use React.memo, useCallback, and useMemo strategically. Profile your application to identify bottlenecks before optimizing.

      ### 4. Code Splitting
      Implement route-based code splitting to reduce initial bundle size. Use dynamic imports to load components on demand.

      ## Practical Examples

      Let me share some code examples that demonstrate these principles in action...
    `,
    image: "/placeholder.svg?key=pa1iq",
    author: {
      name: "Sarah Chen",
      role: "Senior Frontend Engineer",
      image: "/placeholder.svg?height=80&width=80",
      bio: "Sarah is a passionate frontend engineer with 8+ years of experience building scalable React applications.",
    },
    category: "Web Development",
    readTime: "8 min read",
    publishedAt: "November 5, 2024",
  }

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-semibold"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Articles
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider">
            {blog.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">{blog.title}</h1>
          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-gray-300">
            <div className="flex items-center gap-4">
              <img
                src={blog.author.image || "/placeholder.svg"}
                alt={blog.author.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{blog.author.name}</p>
                <p className="text-sm text-gray-600">{blog.author.role}</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>{blog.publishedAt}</p>
              <p>{blog.readTime}</p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden h-96">
          <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none text-gray-700 mb-12">
          <p className="text-xl leading-relaxed mb-6">{blog.excerpt}</p>
          <div className="whitespace-pre-wrap text-base leading-relaxed">{blog.content}</div>
        </article>

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3">About the Author</h3>
          <div className="flex gap-4">
            <img
              src={blog.author.image || "/placeholder.svg"}
              alt={blog.author.name}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <p className="font-semibold text-gray-900">{blog.author.name}</p>
              <p className="text-sm text-gray-600 mb-2">{blog.author.role}</p>
              <p className="text-gray-700">{blog.author.bio}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-colors"
          >
            Read More Articles
          </Link>
        </div>
      </div>
    </div>
  )
}
