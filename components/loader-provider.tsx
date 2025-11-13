"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import TerminalLoader from "./terminal-loader"

export default function LoaderProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith("/admin")
  
  const [isLoading, setIsLoading] = useState(!isAdminPage)
  const [showContent, setShowContent] = useState(isAdminPage)

  useEffect(() => {
    // Skip loading screen for admin pages
    if (isAdminPage) {
      setIsLoading(false)
      setShowContent(true)
      return
    }

    // Prevent scroll while loading
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isLoading, isAdminPage])

  const handleLoadComplete = () => {
    setIsLoading(false)
    // Delay showing content slightly for smooth transition
    setTimeout(() => {
      setShowContent(true)
    }, 100)
  }

  return (
    <>
      {isLoading && <TerminalLoader onComplete={handleLoadComplete} />}
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.5s ease-in",
        }}
      >
        {children}
      </div>
    </>
  )
}
