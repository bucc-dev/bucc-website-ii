"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  UserGroupIcon,
  UsersIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline"

interface LeadershipMember {
  id: string
  name: string
  position: string
  year: string
  category: "Executive" | "Senator" | "Committee"
  department?: string
  level?: string
  committee?: string
  photo?: string
  bio: string
  email: string
  featured: boolean
}

export default function LeadershipPage() {
  const router = useRouter()
  const [activeYear, setActiveYear] = useState("2025")
  const [activeTab, setActiveTab] = useState<"Executive" | "Senator" | "Committee">("Executive")

  // Dummy data
  const [members, setMembers] = useState<LeadershipMember[]>([
    {
      id: "1",
      name: "John Doe",
      position: "President",
      year: "2025",
      category: "Executive",
      photo: "/placeholder.jpg",
      bio: "Leading BUCC to new heights of innovation and excellence.",
      email: "john.doe@bucc.com",
      featured: true,
    },
    {
      id: "2",
      name: "Jane Smith",
      position: "Vice President",
      year: "2025",
      category: "Executive",
      photo: "/placeholder.jpg",
      bio: "Coordinating operations and member engagement.",
      email: "jane.smith@bucc.com",
      featured: true,
    },
    {
      id: "3",
      name: "Mike Johnson",
      position: "Senator",
      year: "2025",
      category: "Senator",
      department: "Computer Science",
      level: "300L",
      photo: "/placeholder.jpg",
      bio: "Representing CS department in BUCC senate.",
      email: "mike.johnson@bucc.com",
      featured: false,
    },
    {
      id: "4",
      name: "Sarah Williams",
      position: "Tech Lead",
      year: "2025",
      category: "Committee",
      committee: "Technical Committee",
      photo: "/placeholder.jpg",
      bio: "Leading technical projects and workshops.",
      email: "sarah.williams@bucc.com",
      featured: false,
    },
  ])

  const years = ["2025", "2024", "2023", "Archive"]
  const tabs: Array<"Executive" | "Senator" | "Committee"> = ["Executive", "Senator", "Committee"]

  const filteredMembers = members.filter(
    (member) => member.year === activeYear && member.category === activeTab
  )

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this member?")) {
      setMembers(members.filter((m) => m.id !== id))
    }
  }

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case "Executive":
        return UserGroupIcon
      case "Senator":
        return UsersIcon
      case "Committee":
        return BuildingOfficeIcon
      default:
        return UserGroupIcon
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leadership Management</h1>
          <p className="text-sm text-gray-600 mt-1">Manage executives, senators, and committee members</p>
        </div>
        <button
          onClick={() => router.push("/admin/leadership/new")}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <PlusIcon className="h-5 w-5" />
          Add Member
        </button>
      </div>

      {/* Year Selector */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Year:</span>
            <div className="flex gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeYear === year
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex">
            {tabs.map((tab) => {
              const Icon = getTabIcon(tab)
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {tab}s ({members.filter((m) => m.category === tab && m.year === activeYear).length})
                </button>
              )
            })}
          </div>
        </div>

        {/* Members List */}
        <div className="p-6">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No {activeTab.toLowerCase()}s found for {activeYear}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
                      {member.photo ? (
                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <UserGroupIcon className="h-8 w-8" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">{member.name}</h3>
                      <p className="text-xs text-gray-600 mt-0.5">{member.position}</p>
                      {member.department && (
                        <p className="text-xs text-gray-500 mt-1">{member.department}</p>
                      )}
                      {member.level && (
                        <span className="inline-block mt-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                          {member.level}
                        </span>
                      )}
                      {member.committee && (
                        <p className="text-xs text-gray-500 mt-1">{member.committee}</p>
                      )}
                      {member.featured && (
                        <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-end gap-2">
                    <button
                      onClick={() => router.push(`/admin/leadership/${member.id}/edit`)}
                      className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                      title="Edit"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(member.id)}
                      className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                      title="Delete"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-sm text-gray-600">Executives</div>
          <div className="text-2xl font-bold text-blue-600 mt-1">
            {members.filter((m) => m.category === "Executive" && m.year === activeYear).length}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-sm text-gray-600">Senators</div>
          <div className="text-2xl font-bold text-green-600 mt-1">
            {members.filter((m) => m.category === "Senator" && m.year === activeYear).length}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-sm text-gray-600">Committee Members</div>
          <div className="text-2xl font-bold text-purple-600 mt-1">
            {members.filter((m) => m.category === "Committee" && m.year === activeYear).length}
          </div>
        </div>
      </div>
    </div>
  )
}
