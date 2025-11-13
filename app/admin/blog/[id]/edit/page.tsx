"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { ArrowLeftIcon, PhotoIcon } from "@heroicons/react/24/outline"

export default function EditBlogPage() {
  const router = useRouter()
  const params = useParams()
  const blogId = params.id as string
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    author: "",
    authorAvatar: null as File | null,
    existingAuthorAvatar: "",
    featuredImage: null as File | null,
    existingFeaturedImage: "",
    excerpt: "",
    content: "",
    publishDate: "",
    status: "",
    featured: false,
    tags: [""],
  })

  // Simulate loading existing blog data
  useEffect(() => {
    const loadBlogData = async () => {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 500))
      
      // Dummy data - in real app, fetch from API
      const dummyBlogs: Record<string, any> = {
        "1": {
          title: "BUCC Hackathon 2024: A Recap",
          slug: "bucc-hackathon-2024-a-recap",
          category: "Events",
          author: "Sarah Johnson",
          existingAuthorAvatar: "/avatars/sarah.jpg",
          existingFeaturedImage: "/blog/hackathon-recap.jpg",
          excerpt: "An amazing 24-hour coding marathon that brought together the brightest minds...",
          content: "The annual BUCC Hackathon was a tremendous success! Over 100 participants from various departments came together to solve real-world problems through innovative technology solutions.\n\n## Highlights\n\n- 25 teams competed\n- 10 amazing projects\n- 3 winners received prizes\n\nThe energy and creativity on display were truly inspiring...",
          publishDate: "2024-01-15",
          status: "Published",
          featured: true,
          tags: ["Events", "Hackathon", "Community"],
        },
        "2": {
          title: "Understanding React Hooks: A Comprehensive Guide",
          slug: "understanding-react-hooks-comprehensive-guide",
          category: "Tutorials",
          author: "Michael Chen",
          existingAuthorAvatar: "/avatars/michael.jpg",
          existingFeaturedImage: "/blog/react-hooks.jpg",
          excerpt: "Learn everything you need to know about React Hooks and how to use them effectively...",
          content: "React Hooks revolutionized how we write React components. In this comprehensive guide, we'll explore all the essential hooks and their use cases.\n\n## useState\n\nThe most basic hook for managing state...\n\n## useEffect\n\nHandling side effects in functional components...",
          publishDate: "2024-01-10",
          status: "Published",
          featured: false,
          tags: ["React", "JavaScript", "Tutorial", "Web Development"],
        },
        "3": {
          title: "My Journey from Beginner to Full-Stack Developer",
          slug: "my-journey-from-beginner-to-full-stack-developer",
          category: "Member Stories",
          author: "David Okonkwo",
          existingAuthorAvatar: "/avatars/david.jpg",
          existingFeaturedImage: "/blog/journey.jpg",
          excerpt: "How BUCC helped me transform from a complete beginner to a confident full-stack developer...",
          content: "When I joined BUCC in my first year, I barely knew what HTML was. Fast forward to today, and I'm building full-stack applications...\n\n## The Beginning\n\nMy first workshop was overwhelming...\n\n## Key Learnings\n\n1. Consistency is key\n2. Community matters\n3. Projects teach more than tutorials",
          publishDate: "2024-01-08",
          status: "Published",
          featured: false,
          tags: ["Personal Story", "Inspiration", "Learning"],
        },
      }

      const blogData = dummyBlogs[blogId]
      if (blogData) {
        setFormData({
          ...formData,
          ...blogData,
        })
      }
      setIsLoading(false)
    }

    loadBlogData()
  }, [blogId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Blog post updated successfully!")
    router.push("/admin/blog")
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  }

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    })
  }

  const handleFeaturedImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, featuredImage: e.target.files[0] })
    }
  }

  const handleAuthorAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, authorAvatar: e.target.files[0] })
    }
  }

  const addTag = () => {
    setFormData({ ...formData, tags: [...formData.tags, ""] })
  }

  const removeTag = (index: number) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((_, i) => i !== index),
    })
  }

  const updateTag = (index: number, value: string) => {
    const newTags = [...formData.tags]
    newTags[index] = value
    setFormData({ ...formData, tags: newTags })
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog post...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Edit Blog Post</h1>
          <p className="text-sm text-gray-600 mt-1">Update blog post information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow">
        <div className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              required
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., How We Built Our First AI Application"
            />
          </div>

          {/* Slug */}
          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
              Slug (URL) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="slug"
              required
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              placeholder="how-we-built-our-first-ai-application"
            />
            <p className="text-xs text-gray-500 mt-1">
              Will be used in the URL: /blog/{formData.slug || "your-slug-here"}
            </p>
          </div>

          {/* Category and Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select category</option>
                <option value="Innovation">Innovation</option>
                <option value="Events">Events</option>
                <option value="Tutorials">Tutorials</option>
                <option value="Member Stories">Member Stories</option>
                <option value="Technology">Technology</option>
                <option value="News">News</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                id="status"
                required
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>
          </div>

          {/* Author Info */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-md font-semibold text-gray-900 mb-4">Author Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                  Author Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="author"
                  required
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author Avatar</label>
                {formData.existingAuthorAvatar && !formData.authorAvatar && (
                  <div className="mb-2 text-xs text-gray-600">
                    Current: {formData.existingAuthorAvatar}
                  </div>
                )}
                <label className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer flex items-center gap-2">
                  <PhotoIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {formData.authorAvatar ? formData.authorAvatar.name : "Choose new file..."}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleAuthorAvatarChange}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
            {formData.existingFeaturedImage && !formData.featuredImage && (
              <div className="mb-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">Current image: {formData.existingFeaturedImage}</p>
              </div>
            )}
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors">
              <div className="space-y-1 text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="featuredImage"
                    className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
                  >
                    <span>Upload a new image</span>
                    <input
                      id="featuredImage"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleFeaturedImageChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                {formData.featuredImage && (
                  <p className="text-sm text-green-600 mt-2">✓ New image: {formData.featuredImage.name}</p>
                )}
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
              Excerpt (Short Summary) <span className="text-red-500">*</span>
            </label>
            <textarea
              id="excerpt"
              required
              rows={3}
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Brief summary that appears in blog listings..."
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.excerpt.length}/200 characters
            </p>
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              required
              rows={16}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
              placeholder="Write your blog post content here... (Supports Markdown)"
            />
            <p className="text-xs text-gray-500 mt-1">Tip: You can use Markdown formatting</p>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
            {formData.tags.map((tag, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => updateTag(index, e.target.value)}
                  className="flex-1 px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., AI, Machine Learning, Tutorial"
                />
                {formData.tags.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addTag}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              + Add Tag
            </button>
          </div>

          {/* Publish Date and Featured */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700 mb-1">
                Publish Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="publishDate"
                required
                value={formData.publishDate}
                onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-end">
              <div className="flex items-center h-[42px]">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                  Feature on homepage
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-end gap-3 rounded-b-lg">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Updating..." : "Update Post"}
          </button>
        </div>
      </form>
    </div>
  )
}
