"use client"

import {
  DocumentCheckIcon,
  CalendarIcon,
  DocumentTextIcon,
  PlusIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
  const router = useRouter()

  const stats = [
    {
      name: "Pending Applications",
      value: "12",
      icon: DocumentCheckIcon,
      change: "+3 this week",
      changeType: "increase",
      href: "/admin/applications",
    },
    {
      name: "Partnership Inquiries",
      value: "5",
      icon: BriefcaseIcon,
      change: "+2 new",
      changeType: "increase",
      href: "/admin/partnerships",
    },
    {
      name: "Total Events",
      value: "24",
      icon: CalendarIcon,
      change: "8 upcoming",
      changeType: "neutral",
      href: "/admin/events",
    },
    {
      name: "Blog Posts",
      value: "18",
      icon: DocumentTextIcon,
      change: "12 published",
      changeType: "neutral",
      href: "/admin/blog",
    },
  ]

  const quickActions = [
    {
      name: "Create Event",
      description: "Add a new event to the calendar",
      icon: CalendarIcon,
      href: "/admin/events/new",
      color: "bg-blue-500",
    },
    {
      name: "Write Blog Post",
      description: "Publish a new article",
      icon: DocumentTextIcon,
      href: "/admin/blog/new",
      color: "bg-blue-500",
    },
    {
      name: "Add Leadership Member",
      description: "Add executive or senator",
      icon: UserGroupIcon,
      href: "/admin/leadership/new",
      color: "bg-blue-500",
    },
    {
      name: "Add Partner",
      description: "Add a new partner company",
      icon: BuildingOfficeIcon,
      href: "/admin/partners/new",
      color: "bg-blue-500",
    },
  ]

  const recentActivity = [
    { type: "application", message: "New application from John Doe", time: "5 minutes ago" },
    { type: "partnership", message: "Microsoft partnership inquiry", time: "1 hour ago" },
    { type: "event", message: "Hackathon 2025 created", time: "2 hours ago" },
    { type: "blog", message: "New blog post published", time: "5 hours ago" },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-sm p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Admin!</h1>
        <p className="text-blue-100">
          Here's what's happening with the BUCC website today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <button
            key={stat.name}
            onClick={() => router.push(stat.href)}
            className="relative bg-white overflow-hidden rounded-lg shadow hover:shadow-md transition-shadow p-6 text-left"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-600">{stat.change}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <button
              key={action.name}
              onClick={() => router.push(action.href)}
              className="relative bg-white rounded-lg shadow hover:shadow-md transition-shadow p-5 text-left group"
            >
              <div className={`h-10 w-10 rounded-lg ${action.color} flex items-center justify-center mb-3`}>
                <action.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {action.name}
              </h3>
              <p className="mt-1 text-xs text-gray-500">{action.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivity.map((activity, index) => (
            <div key={index} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <p className="text-sm text-gray-900">{activity.message}</p>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
