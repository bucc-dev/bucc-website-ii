"use client"

import { useState } from "react"
import {
  MagnifyingGlassIcon,
  PhotoIcon,
  VideoCameraIcon,
  DocumentIcon,
  TrashIcon,
  ArrowDownTrayIcon,
  XMarkIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline"

interface MediaFile {
  id: number
  name: string
  type: "image" | "video" | "document"
  size: string
  uploadDate: string
  url: string
  dimensions?: string
}

export default function MediaPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<string>("All")
  const [selectedFile, setSelectedFile] = useState<MediaFile | null>(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [deleteId, setDeleteId] = useState<number | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([
    {
      id: 1,
      name: "hackathon-2024-banner.jpg",
      type: "image",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      url: "/placeholder.jpg",
      dimensions: "1920x1080",
    },
    {
      id: 2,
      name: "workshop-video.mp4",
      type: "video",
      size: "45.8 MB",
      uploadDate: "2024-01-10",
      url: "/placeholder.mp4",
    },
    {
      id: 3,
      name: "event-poster.png",
      type: "image",
      size: "1.8 MB",
      uploadDate: "2024-01-08",
      url: "/placeholder.png",
      dimensions: "1080x1350",
    },
    {
      id: 4,
      name: "partnership-agreement.pdf",
      type: "document",
      size: "524 KB",
      uploadDate: "2024-01-05",
      url: "/placeholder.pdf",
    },
    {
      id: 5,
      name: "team-photo.jpg",
      type: "image",
      size: "3.1 MB",
      uploadDate: "2024-01-03",
      url: "/placeholder2.jpg",
      dimensions: "2400x1600",
    },
  ])

  const filteredFiles = mediaFiles.filter((file) => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "All" || file.type === typeFilter.toLowerCase()
    return matchesSearch && matchesType
  })

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setIsUploading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    // Simulate file upload
    const newFiles = Array.from(files).map((file, index) => ({
      id: mediaFiles.length + index + 1,
      name: file.name,
      type: file.type.startsWith("image/") ? "image" as const : 
            file.type.startsWith("video/") ? "video" as const : "document" as const,
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      uploadDate: new Date().toISOString().split("T")[0],
      url: URL.createObjectURL(file),
    }))

    setMediaFiles([...newFiles, ...mediaFiles])
    setIsUploading(false)
  }

  const confirmDelete = (id: number) => {
    setDeleteId(id)
    setShowDeleteDialog(true)
  }

  const handleDelete = () => {
    if (deleteId) {
      setMediaFiles(mediaFiles.filter((f) => f.id !== deleteId))
      setShowDeleteDialog(false)
      setDeleteId(null)
      if (selectedFile?.id === deleteId) {
        setSelectedFile(null)
      }
    }
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <PhotoIcon className="h-5 w-5" />
      case "video":
        return <VideoCameraIcon className="h-5 w-5" />
      case "document":
        return <DocumentIcon className="h-5 w-5" />
      default:
        return <DocumentIcon className="h-5 w-5" />
    }
  }

  const stats = {
    total: mediaFiles.length,
    images: mediaFiles.filter((f) => f.type === "image").length,
    videos: mediaFiles.filter((f) => f.type === "video").length,
    documents: mediaFiles.filter((f) => f.type === "document").length,
    totalSize: mediaFiles.reduce((acc, file) => acc + parseFloat(file.size), 0).toFixed(1),
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
          <p className="text-sm text-gray-600 mt-1">Manage images, videos, and documents</p>
        </div>
        <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer">
          <CloudArrowUpIcon className="h-5 w-5" />
          {isUploading ? "Uploading..." : "Upload Files"}
          <input
            type="file"
            multiple
            accept="image/*,video/*,.pdf,.doc,.docx"
            className="sr-only"
            onChange={handleFileUpload}
            disabled={isUploading}
          />
        </label>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="All">All Types</option>
            <option value="Image">Images</option>
            <option value="Video">Videos</option>
            <option value="Document">Documents</option>
          </select>
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredFiles.map((file) => (
          <div
            key={file.id}
            onClick={() => setSelectedFile(file)}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-all cursor-pointer overflow-hidden group"
          >
            {/* Preview Area */}
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
              {file.type === "image" ? (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <PhotoIcon className="h-12 w-12 text-gray-400" />
                </div>
              ) : file.type === "video" ? (
                <VideoCameraIcon className="h-12 w-12 text-gray-400" />
              ) : (
                <DocumentIcon className="h-12 w-12 text-gray-400" />
              )}
              
              {/* Quick Actions */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    confirmDelete(file.id)
                  }}
                  className="p-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* File Info */}
            <div className="p-3">
              <div className="flex items-start gap-2">
                <div className="text-gray-600 mt-0.5">{getFileIcon(file.type)}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                  <p className="text-xs text-gray-500">{file.size}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFiles.length === 0 && (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <CloudArrowUpIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 mb-2">No files found</p>
          <p className="text-sm text-gray-400">Upload files to get started</p>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-sm font-medium text-gray-600 mb-1">Total Files</div>
          <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="text-sm font-medium text-blue-600 mb-1">Images</div>
          <div className="text-2xl font-bold text-blue-900">{stats.images}</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="text-sm font-medium text-purple-600 mb-1">Videos</div>
          <div className="text-2xl font-bold text-purple-900">{stats.videos}</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-sm font-medium text-green-600 mb-1">Documents</div>
          <div className="text-2xl font-bold text-green-900">{stats.documents}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-600 mb-1">Total Size</div>
          <div className="text-2xl font-bold text-gray-900">{stats.totalSize} MB</div>
        </div>
      </div>

      {/* File Detail Modal */}
      {selectedFile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedFile(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900">File Details</h3>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <XMarkIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {/* Preview */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                {selectedFile.type === "image" ? (
                  <PhotoIcon className="h-24 w-24 text-gray-400" />
                ) : selectedFile.type === "video" ? (
                  <VideoCameraIcon className="h-24 w-24 text-gray-400" />
                ) : (
                  <DocumentIcon className="h-24 w-24 text-gray-400" />
                )}
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Filename:</span>
                  <p className="font-medium text-gray-900 break-all">{selectedFile.name}</p>
                </div>
                <div>
                  <span className="text-gray-600">Type:</span>
                  <p className="font-medium text-gray-900 capitalize">{selectedFile.type}</p>
                </div>
                <div>
                  <span className="text-gray-600">Size:</span>
                  <p className="font-medium text-gray-900">{selectedFile.size}</p>
                </div>
                <div>
                  <span className="text-gray-600">Uploaded:</span>
                  <p className="font-medium text-gray-900">{selectedFile.uploadDate}</p>
                </div>
                {selectedFile.dimensions && (
                  <div>
                    <span className="text-gray-600">Dimensions:</span>
                    <p className="font-medium text-gray-900">{selectedFile.dimensions}</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    // Simulate download
                    alert(`Downloading ${selectedFile.name}`)
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  Download
                </button>
                <button
                  onClick={() => {
                    setSelectedFile(null)
                    confirmDelete(selectedFile.id)
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  <TrashIcon className="h-5 w-5" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Delete File</h3>
            <p className="text-gray-600">
              Are you sure you want to delete this file? This action cannot be undone.
            </p>
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
