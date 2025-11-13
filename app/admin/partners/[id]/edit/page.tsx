"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { ArrowLeftIcon, PhotoIcon } from "@heroicons/react/24/outline"

export default function EditPartnerPage() {
  const router = useRouter()
  const params = useParams()
  const partnerId = params.id as string
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    logo: null as File | null,
    existingLogo: "",
    description: "",
    website: "",
    category: "",
    yearAdded: new Date().getFullYear().toString(),
    status: "Active" as "Active" | "Past",
    benefits: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
  })

  // Simulate loading existing partner data
  useEffect(() => {
    const loadPartnerData = async () => {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 500))
      
      // Dummy data - in real app, fetch from API
      const dummyPartners: Record<string, any> = {
        "1": {
          name: "TechCorp Nigeria",
          existingLogo: "/partners/techcorp.png",
          description: "Leading technology company providing cloud solutions and enterprise software.",
          website: "https://techcorp.ng",
          category: "Technology",
          yearAdded: "2023",
          status: "Active",
          benefits: "Internship opportunities, mentorship, cloud credits",
          contactPerson: "David Adeleke",
          contactEmail: "david@techcorp.ng",
          contactPhone: "+234 801 234 5678",
        },
        "2": {
          name: "InnovateHub",
          existingLogo: "/partners/innovatehub.png",
          description: "Co-working space and startup incubator supporting tech entrepreneurs.",
          website: "https://innovatehub.com",
          category: "Co-working",
          yearAdded: "2024",
          status: "Active",
          benefits: "Free workspace access, networking events",
          contactPerson: "Grace Okafor",
          contactEmail: "grace@innovatehub.com",
          contactPhone: "+234 802 345 6789",
        },
        "3": {
          name: "DataSoft Solutions",
          existingLogo: "/partners/datasoft.png",
          description: "Data analytics and business intelligence consultancy.",
          website: "https://datasoft.io",
          category: "Analytics",
          yearAdded: "2022",
          status: "Past",
          benefits: "Training workshops, project collaborations",
          contactPerson: "Ahmed Bello",
          contactEmail: "ahmed@datasoft.io",
          contactPhone: "+234 803 456 7890",
        },
      }

      const partnerData = dummyPartners[partnerId]
      if (partnerData) {
        setFormData({
          ...formData,
          ...partnerData,
        })
      }
      setIsLoading(false)
    }

    loadPartnerData()
  }, [partnerId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Partner updated successfully!")
    router.push("/admin/partners")
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, logo: e.target.files[0] })
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading partner...</p>
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
          <h1 className="text-2xl font-bold text-gray-900">Edit Partner</h1>
          <p className="text-sm text-gray-600 mt-1">Update partner information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow">
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., TechCorp Nigeria"
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
                <option value="Technology">Technology</option>
                <option value="Co-working">Co-working Space</option>
                <option value="Analytics">Data & Analytics</option>
                <option value="Education">Education</option>
                <option value="Finance">Finance</option>
                <option value="Consulting">Consulting</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Logo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Logo</label>
            {formData.existingLogo && !formData.logo && (
              <div className="mb-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">Current logo: {formData.existingLogo}</p>
              </div>
            )}
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors">
              <div className="space-y-1 text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="logo"
                    className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
                  >
                    <span>Upload new logo</span>
                    <input
                      id="logo"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleLogoChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, SVG up to 5MB</p>
                {formData.logo && (
                  <p className="text-sm text-green-600 mt-2">✓ New logo: {formData.logo.name}</p>
                )}
              </div>
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
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Brief description of the company..."
            />
          </div>

          {/* Website and Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Website <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="website"
                required
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com"
              />
            </div>

            <div>
              <label htmlFor="yearAdded" className="block text-sm font-medium text-gray-700 mb-1">
                Year Added <span className="text-red-500">*</span>
              </label>
              <select
                id="yearAdded"
                required
                value={formData.yearAdded}
                onChange={(e) => setFormData({ ...formData, yearAdded: e.target.value })}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              id="status"
              required
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as "Active" | "Past" })}
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Active">Active</option>
              <option value="Past">Past Partnership</option>
            </select>
          </div>

          {/* Partnership Benefits */}
          <div>
            <label htmlFor="benefits" className="block text-sm font-medium text-gray-700 mb-1">
              Partnership Benefits <span className="text-red-500">*</span>
            </label>
            <textarea
              id="benefits"
              required
              rows={3}
              value={formData.benefits}
              onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
              className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="e.g., Internship opportunities, mentorship programs, cloud credits..."
            />
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                  className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+234 XXX XXX XXXX"
                />
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
            {isSubmitting ? "Updating..." : "Update Partner"}
          </button>
        </div>
      </form>
    </div>
  )
}
