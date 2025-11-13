"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeftIcon, PhotoIcon } from "@heroicons/react/24/outline"

export default function NewLeadershipPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    year: "2025",
    category: "",
    department: "",
    level: "",
    committee: "",
    photo: null as File | null,
    shortBio: "",
    fullBio: "",
    achievements: [""],
    currentProjects: "",
    expertise: "",
    email: "",
    linkedin: "",
    twitter: "",
    featured: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Leadership member added successfully!")
    router.push("/admin/leadership")
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, photo: e.target.files[0] })
    }
  }

  const addAchievement = () => {
    setFormData({ ...formData, achievements: [...formData.achievements, ""] })
  }

  const removeAchievement = (index: number) => {
    setFormData({
      ...formData,
      achievements: formData.achievements.filter((_, i) => i !== index),
    })
  }

  const updateAchievement = (index: number, value: string) => {
    const newAchievements = [...formData.achievements]
    newAchievements[index] = value
    setFormData({ ...formData, achievements: newAchievements })
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
          <h1 className="text-2xl font-bold text-gray-900">Add Leadership Member</h1>
          <p className="text-sm text-gray-600 mt-1">Add a new executive, senator, or committee member</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow">
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., John Doe"
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                Position/Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="position"
                required
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., President"
              />
            </div>
          </div>

          {/* Category and Year */}
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
                <option value="Executive">Executive</option>
                <option value="Senator">Senator</option>
                <option value="Committee">Committee</option>
              </select>
            </div>

            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                Year <span className="text-red-500">*</span>
              </label>
              <select
                id="year"
                required
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>

          {/* Senator-specific fields */}
          {formData.category === "Senator" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department <span className="text-red-500">*</span>
                </label>
                <select
                  id="department"
                  required
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select department</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                </select>
              </div>

              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                  Level <span className="text-red-500">*</span>
                </label>
                <select
                  id="level"
                  required
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select level</option>
                  <option value="100L">100L</option>
                  <option value="200L">200L</option>
                  <option value="300L">300L</option>
                  <option value="400L">400L</option>
                  <option value="500L">500L</option>
                </select>
              </div>
            </div>
          )}

          {/* Committee-specific field */}
          {formData.category === "Committee" && (
            <div>
              <label htmlFor="committee" className="block text-sm font-medium text-gray-700 mb-1">
                Committee Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="committee"
                required
                value={formData.committee}
                onChange={(e) => setFormData({ ...formData, committee: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Technical Committee"
              />
            </div>
          )}

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors">
              <div className="space-y-1 text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="photo"
                    className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
                  >
                    <span>Upload a photo</span>
                    <input
                      id="photo"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleImageChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                {formData.photo && (
                  <p className="text-sm text-green-600 mt-2">✓ {formData.photo.name}</p>
                )}
              </div>
            </div>
          </div>

          {/* Bios */}
          <div>
            <label htmlFor="shortBio" className="block text-sm font-medium text-gray-700 mb-1">
              Short Bio (1-2 sentences) <span className="text-red-500">*</span>
            </label>
            <textarea
              id="shortBio"
              required
              rows={2}
              value={formData.shortBio}
              onChange={(e) => setFormData({ ...formData, shortBio: e.target.value })}
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Brief introduction..."
            />
          </div>

          <div>
            <label htmlFor="fullBio" className="block text-sm font-medium text-gray-700 mb-1">
              Full Bio
            </label>
            <textarea
              id="fullBio"
              rows={4}
              value={formData.fullBio}
              onChange={(e) => setFormData({ ...formData, fullBio: e.target.value })}
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Detailed biography..."
            />
          </div>

          {/* Key Achievements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Key Achievements
            </label>
            {formData.achievements.map((achievement, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={achievement}
                  onChange={(e) => updateAchievement(index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Led successful hackathon with 200+ participants"
                />
                {formData.achievements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeAchievement(index)}
                    className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addAchievement}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              + Add Achievement
            </button>
          </div>

          {/* Other Fields */}
          <div>
            <label htmlFor="currentProjects" className="block text-sm font-medium text-gray-700 mb-1">
              Current Projects
            </label>
            <textarea
              id="currentProjects"
              rows={3}
              value={formData.currentProjects}
              onChange={(e) => setFormData({ ...formData, currentProjects: e.target.value })}
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Projects currently working on..."
            />
          </div>

          <div>
            <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-1">
              Areas of Expertise
            </label>
            <input
              type="text"
              id="expertise"
              value={formData.expertise}
              onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Web Development, AI/ML, Cloud Computing"
            />
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                LinkedIn (Optional)
              </label>
              <input
                type="url"
                id="linkedin"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://linkedin.com/in/..."
              />
            </div>

            <div>
              <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1">
                Twitter (Optional)
              </label>
              <input
                type="url"
                id="twitter"
                value={formData.twitter}
                onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://twitter.com/..."
              />
            </div>
          </div>

          {/* Featured */}
          <div className="flex items-center">
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
            {isSubmitting ? "Adding..." : "Add Member"}
          </button>
        </div>
      </form>
    </div>
  )
}
