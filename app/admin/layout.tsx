"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import {
  HomeIcon,
  DocumentTextIcon,
  CalendarIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  DocumentCheckIcon,
  PhotoIcon,
  EnvelopeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  UsersIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" })
      router.push("/admin/login")
      router.refresh()
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  // Don't show sidebar on login page
  const isLoginPage = pathname === "/admin/login"

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: HomeIcon },
    {
      name: "Content",
      icon: DocumentTextIcon,
      children: [
        { name: "Events", href: "/admin/events", icon: CalendarIcon },
        { name: "Blog Posts", href: "/admin/blog", icon: DocumentTextIcon },
        { name: "Leadership", href: "/admin/leadership", icon: UsersIcon },
        { name: "Partners", href: "/admin/partners", icon: BuildingOfficeIcon },
      ],
    },
    { name: "Applications", href: "/admin/applications", icon: DocumentCheckIcon },
    { name: "Partnership Inquiries", href: "/admin/partnerships", icon: BriefcaseIcon },
    { name: "Media Library", href: "/admin/media", icon: PhotoIcon },
    { name: "Email", href: "/admin/email", icon: EnvelopeIcon },
    { name: "Analytics", href: "/admin/analytics", icon: ChartBarIcon },
    { name: "Settings", href: "/admin/settings", icon: Cog6ToothIcon },
  ]

  // If on login page, just render children without layout
  if (isLoginPage) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        navigation={navigation}
        pathname={pathname}
      />

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          <div className="h-6 w-px bg-gray-200 lg:hidden" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1 items-center">
              <h1 className="text-lg font-semibold text-gray-900">
                {navigation.find((item) => item.href === pathname)?.name ||
                  navigation
                    .flatMap((item) => item.children || [])
                    .find((child) => child.href === pathname)?.name ||
                  "Admin Panel"}
              </h1>
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" />

              {/* Profile dropdown */}
              <div className="flex items-center gap-x-3">
                <div className="hidden lg:flex lg:flex-col lg:items-end lg:leading-tight">
                  <span className="text-sm font-semibold text-gray-900">Admin User</span>
                  <span className="text-xs text-gray-500">princesochimaobim@gmail.com</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-6 px-4 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  )
}

function Sidebar({
  isOpen,
  onClose,
  navigation,
  pathname,
}: SidebarProps & {
  navigation: any[]
  pathname: string
}) {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Content"])
  const router = useRouter()

  const toggleExpanded = (name: string) => {
    setExpandedItems((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    )
  }

  const handleNavigation = (href: string) => {
    router.push(href)
    onClose()
  }

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <img 
            src="https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/814d6462-7748-4730-8e4c-7ecc267abb10-bucc-logo-again.jpg"
            alt="BUCC Logo"
            className="h-8 w-8 rounded-lg object-cover"
          />
          <span className="text-white font-bold text-lg">BUCC Admin</span>
        </div>
        <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-white">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col overflow-y-auto px-3 py-4">
        <ul role="list" className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              {!item.children ? (
                <button
                  onClick={() => handleNavigation(item.href)}
                  className={`group flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-semibold transition-colors w-full text-left ${
                    pathname === item.href
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {item.name}
                </button>
              ) : (
                <div>
                  <button
                    onClick={() => toggleExpanded(item.name)}
                    className="group flex items-center justify-between w-full gap-x-3 rounded-lg px-3 py-2 text-sm font-semibold text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-x-3">
                      <item.icon className="h-5 w-5 shrink-0" />
                      {item.name}
                    </div>
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform ${
                        expandedItems.includes(item.name) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedItems.includes(item.name) && (
                    <ul className="mt-1 space-y-1 pl-4">
                      {item.children.map((child: any) => (
                        <li key={child.name}>
                          <button
                            onClick={() => handleNavigation(child.href)}
                            className={`group flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors w-full text-left ${
                              pathname === child.href
                                ? "bg-gray-800 text-white"
                                : "text-gray-400 hover:text-white hover:bg-gray-800"
                            }`}
                          >
                            <child.icon className="h-4 w-4 shrink-0" />
                            {child.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
