"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { ArrowLeftIcon, PhotoIcon } from "@heroicons/react/24/outline"

export default function EditEventPage() {
  const router = useRouter()
  const params = useParams()
  const eventId = params.id as string
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    category: "",
    description: "",
    coverImage: null as File | null,
    existingCoverImage: "",
    registrationLink: "",
    galleryLink: "",
    status: "",
    featured: false,
  })

  // Simulate loading existing event data
  useEffect(() => {
    const loadEventData = async () => {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 500))
      
      // Dummy data - in real app, fetch from API
      const dummyEvents: Record<string, any> = {
        "1": {
          name: "BUCC Hackathon 2025",
          date: "2025-03-15",
          time: "09:00",
          location: "Tech Hub, Babcock University",
          category: "Hackathon",
          description: "Annual 24-hour hackathon bringing together the best tech minds to solve real-world problems.",
          existingCoverImage: "/events/hackathon.jpg",
          registrationLink: "https://forms.gle/hackathon2025",
          galleryLink: "https://pixieset.com/buccevents/hackathon2025",
          status: "Published",
          featured: true,
        },
        "2": {
          name: "Web3 Development Workshop",
          date: "2025-02-20",
          time: "14:00",
          location: "Computer Lab A",
          category: "Workshop",
          description: "Learn the fundamentals of blockchain development and build your first dApp.",
          existingCoverImage: "/events/web3.jpg",
          registrationLink: "https://forms.gle/web3workshop",
          galleryLink: "",
          status: "Published",
          featured: false,
        },
        "3": {
          name: "AI/ML Bootcamp",
          date: "2025-04-10",
          time: "10:00",
          location: "Virtual (Zoom)",
          category: "Bootcamp",
          description: "Intensive 3-day bootcamp covering machine learning fundamentals and practical applications.",
          existingCoverImage: "/events/aiml.jpg",
          registrationLink: "https://forms.gle/aimlbootcamp",
          galleryLink: "",
          status: "Draft",
          featured: false,
        },
      }

      const eventData = dummyEvents[eventId]
      if (eventData) {
        setFormData({
          ...formData,
          ...eventData,
        })
      }
      setIsLoading(false)
    }

    loadEventData()
  }, [eventId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Event updated successfully!")
    router.push("/admin/events")
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, coverImage: e.target.files[0] })
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading event...</p>
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
          <h1 className="text-2xl font-bold text-gray-900">Edit Event</h1>
          <p className="text-sm text-gray-600 mt-1">Update event information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow">
        <div className="p-6 space-y-6">
          {/* Event Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Event Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., BUCC Hackathon 2025"
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                id="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Location and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Tech Hub, Babcock University"
              />
            </div>

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
                <option value="Hackathon">Hackathon</option>
                <option value="Workshop">Workshop</option>
                <option value="Bootcamp">Bootcamp</option>
                <option value="Social">Social Event</option>
                <option value="Conference">Conference</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              required
              rows={6}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Event description..."
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
            {formData.existingCoverImage && !formData.coverImage && (
              <div className="mb-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">Current image: {formData.existingCoverImage}</p>
              </div>
            )}
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors">
              <div className="space-y-1 text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="coverImage"
                    className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
                  >
                    <span>Upload a new image</span>
                    <input
                      id="coverImage"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleImageChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                {formData.coverImage && (
                  <p className="text-sm text-green-600 mt-2">✓ New image: {formData.coverImage.name}</p>
                )}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="registrationLink" className="block text-sm font-medium text-gray-700 mb-1">
                Registration Link
              </label>
              <input
                type="url"
                id="registrationLink"
                value={formData.registrationLink}
                onChange={(e) => setFormData({ ...formData, registrationLink: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://forms.gle/..."
              />
            </div>

            <div>
              <label htmlFor="galleryLink" className="block text-sm font-medium text-gray-700 mb-1">
                Pixieset Gallery Link
              </label>
              <input
                type="url"
                id="galleryLink"
                value={formData.galleryLink}
                onChange={(e) => setFormData({ ...formData, galleryLink: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://pixieset.com/..."
              />
            </div>
          </div>

          {/* Status and Featured */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <option value="">Select status</option>
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Past">Past Event</option>
              </select>
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
            {isSubmitting ? "Updating..." : "Update Event"}
          </button>
        </div>
      </form>
    </div>
  )
}
