"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  MagnifyingGlassIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  LinkIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline"

interface Partner {
  id: number
  name: string
  logo: string | null
  description: string
  website: string
  category: string
  yearAdded: string
  status: "Active" | "Past"
  benefits: string
}

export default function PartnersPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("All")
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [deleteId, setDeleteId] = useState<number | null>(null)

  const [partners, setPartners] = useState<Partner[]>([
    {
      id: 1,
      name: "TechCorp Nigeria",
      logo: null,
      description: "Leading technology company providing cloud solutions and enterprise software.",
      website: "https://techcorp.ng",
      category: "Technology",
      yearAdded: "2023",
      status: "Active",
      benefits: "Internship opportunities, mentorship, cloud credits",
    },
    {
      id: 2,
      name: "InnovateHub",
      logo: null,
      description: "Co-working space and startup incubator supporting tech entrepreneurs.",
      website: "https://innovatehub.com",
      category: "Co-working",
      yearAdded: "2024",
      status: "Active",
      benefits: "Free workspace access, networking events",
    },
    {
      id: 3,
      name: "DataSoft Solutions",
      logo: null,
      description: "Data analytics and business intelligence consultancy.",
      website: "https://datasoft.io",
      category: "Analytics",
      yearAdded: "2022",
      status: "Past",
      benefits: "Training workshops, project collaborations",
    },
  ])

  const filteredPartners = partners.filter((partner) => {
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "All" || partner.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const confirmDelete = (id: number) => {
    setDeleteId(id)
    setShowDeleteDialog(true)
  }

  const handleDelete = () => {
    if (deleteId) {
      setPartners(partners.filter((p) => p.id !== deleteId))
      setShowDeleteDialog(false)
      setDeleteId(null)
    }
  }

  const stats = {
    total: partners.length,
    active: partners.filter((p) => p.status === "Active").length,
    past: partners.filter((p) => p.status === "Past").length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Partners</h1>
          <p className="text-sm text-gray-600 mt-1">Manage BUCC partners and collaborations</p>
        </div>
        <button
          onClick={() => router.push("/admin/partners/new")}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <PlusIcon className="h-5 w-5" />
          Add Partner
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search partners..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Past">Past</option>
          </select>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPartners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
          >
            {/* Logo Area */}
            <div className="h-32 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <BuildingOfficeIcon className="h-16 w-16 text-gray-400" />
              )}
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">{partner.name}</h3>
                  <p className="text-sm text-gray-600">{partner.category}</p>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    partner.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {partner.status}
                </span>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2">{partner.description}</p>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <LinkIcon className="h-4 w-4" />
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors truncate"
                >
                  {partner.website.replace("https://", "")}
                </a>
              </div>

              <div className="text-sm text-gray-500">
                <span className="font-medium">Since:</span> {partner.yearAdded}
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => router.push(`/admin/partners/${partner.id}/edit`)}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  <PencilIcon className="h-4 w-4" />
                  Edit
                </button>
                <button
                  onClick={() => confirmDelete(partner.id)}
                  className="flex items-center gap-1 text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  <TrashIcon className="h-4 w-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPartners.length === 0 && (
        <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
          No partners found
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="text-sm font-medium text-blue-600 mb-1">Total Partners</div>
          <div className="text-2xl font-bold text-blue-900">{stats.total}</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-sm font-medium text-green-600 mb-1">Active Partners</div>
          <div className="text-2xl font-bold text-green-900">{stats.active}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-600 mb-1">Past Partners</div>
          <div className="text-2xl font-bold text-gray-900">{stats.past}</div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Delete Partner</h3>
            <p className="text-gray-600">Are you sure you want to delete this partner? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteDialog(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
