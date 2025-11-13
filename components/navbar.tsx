"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only run this logic in the browser
    if (typeof window === 'undefined') return
    
    // If we're on the homepage and the link is a section anchor
    if (isHomePage && href.startsWith("#")) {
      e.preventDefault()
      const sectionId = href.substring(1)
      const element = document.getElementById(sectionId)
      if (element) {
        const navbarHeight = 100 // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
        setIsOpen(false)
      }
    } else if (!isHomePage && href.startsWith("#")) {
      // If we're not on homepage, navigate to homepage with the hash
      // The browser will handle the scroll automatically
      setIsOpen(false)
    }
  }

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Leaders", href: "/leadership" },
    { label: "Events", href: "/events" },
    { label: "Blog", href: "/blog" },
    { label: "Partnership", href: "/partner" },
    { label: "Gallery", href: "/gallery" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white px-6 md:px-8 py-4 flex items-center justify-between shadow-lg rounded-sm">
          {/* Logo */}
          <Link 
            href="/"
            className="text-2xl font-bold text-black cursor-target" 
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            BUCC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="cursor-target text-gray-700 hover:text-black transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/join" className="hidden md:flex cursor-target items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors relative">
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400 pointer-events-none" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400 pointer-events-none" />
            <span>Enroll Now</span>
            <div className="bg-white rounded-md p-1.5 flex items-center justify-center">
              <ArrowRightIcon className="w-4 h-4 text-blue-600" />
            </div>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            <div className="fixed inset-0 bg-black/50 z-40 md:hidden top-20" onClick={() => setIsOpen(false)} />
            <div className="fixed top-24 left-4 right-4 z-40 md:hidden bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="cursor-target text-gray-700 hover:text-black font-medium text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/join"
                onClick={() => setIsOpen(false)}
                className="cursor-target mt-4 flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors w-full relative"
              >
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400 pointer-events-none" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400 pointer-events-none" />
                <span>Enroll Now</span>
                <div className="bg-white rounded-md p-1.5 flex items-center justify-center">
                  <ArrowRightIcon className="w-4 h-4 text-blue-600" />
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
