"use client"

import { Mail, Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Part 1: Index */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Brand & Legal */}
            <div>
              <div className="flex gap-4 mb-8">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              {/* Copyright */}
              <p className="text-sm text-gray-700 mb-4">Copyright © 2025 BUCC</p>

              {/* Legal Links */}
              <div className="flex flex-col gap-2">
                <a data-cursor="block" href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                  Terms of Use
                </a>
                <a data-cursor="block" href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Right Column: Sitemap */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Column 1: Navigate */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Navigate</h4>
                <ul className="space-y-2">
                  <li>
                    <a data-cursor="block" href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a data-cursor="block" href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a data-cursor="block" href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                      Events
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Connect */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li>
                    <a data-cursor="block" href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a data-cursor="block" href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                      Team
                    </a>
                  </li>
                  <li>
                    <a data-cursor="block" href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Contact */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="mailto:bucc@babcock.edu.ng"
                      className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      bucc@babcock.edu.ng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white py-2 md:py-4 flex items-center justify-center overflow-hidden w-screen -mx-[calc((100vw-100%)/2)]">
        {/* Removed artificial height, stretched image to full width on desktop, reduced spacing */}
        <img
          src="https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/3e031af6-a310-400c-85da-9b04b2aa5ca3-bucc-half-ii.png"
          alt="BUCC Logo"
          className="w-full h-auto object-contain opacity-90"
        />
      </div>
    </footer>
  )
}
