"use client"

import { useState } from "react"
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

interface Partnership {
  id: string
  companyName: string
  contactPerson: string
  email: string
  phone: string
  partnershipType: string
  dateSubmitted: string
  status: "New" | "In Discussion" | "Closed"
  message: string
}

export default function PartnershipsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [selectedInquiry, setSelectedInquiry] = useState<Partnership | null>(null)

  const [inquiries] = useState<Partnership[]>([
    {
      id: "1",
      companyName: "Microsoft",
      contactPerson: "John Smith",
      email: "john.smith@microsoft.com",
      phone: "+1 234 567 8900",
      partnershipType: "Sponsorship",
      dateSubmitted: "2025-01-15T10:30:00",
      status: "New",
      message: "We're interested in sponsoring your hackathon event...",
    },
    {
      id: "2",
      companyName: "Google",
      contactPerson: "Jane Doe",
      email: "jane.doe@google.com",
      phone: "+1 234 567 8901",
      partnershipType: "Workshop",
      dateSubmitted: "2025-01-10T14:20:00",
      status: "In Discussion",
      message: "Would love to conduct a workshop on cloud technologies...",
    },
  ])

  const filtered = inquiries.filter((inq) => {
    const matchesSearch = inq.companyName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "All" || inq.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Partnership Inquiries</h1>
        <p className="text-sm text-gray-600 mt-1">Manage partnership and collaboration requests</p>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by company name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="sm:w-48">
            <div className="relative">
              <FunnelIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="All">All Status</option>
                <option value="New">New</option>
                <option value="In Discussion">In Discussion</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact Person</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filtered.map((inq) => (
              <tr key={inq.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{inq.companyName}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{inq.contactPerson}</div>
                  <div className="text-xs text-gray-500">{inq.email}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{inq.partnershipType}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {new Date(inq.dateSubmitted).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      inq.status === "New"
                        ? "bg-blue-100 text-blue-800"
                        : inq.status === "In Discussion"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {inq.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    onClick={() => setSelectedInquiry(inq)}
                    className="text-blue-600 hover:text-blue-900 font-medium text-sm"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedInquiry && (
        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Partnership Inquiry Details</h2>
              <button onClick={() => setSelectedInquiry(null)} className="text-gray-400 hover:text-gray-600">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Company</p>
                  <p className="text-sm font-medium">{selectedInquiry.companyName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Contact Person</p>
                  <p className="text-sm font-medium">{selectedInquiry.contactPerson}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium">{selectedInquiry.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm font-medium">{selectedInquiry.phone}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">Message</p>
                <p className="text-sm text-gray-700">{selectedInquiry.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
