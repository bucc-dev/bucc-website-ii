"use client"

import { UserGroupIcon, BriefcaseIcon } from "@heroicons/react/24/outline"

export default function CTASection() {
  const handleBecomeMemeber = () => {
    console.log("Become a Member clicked")
  }

  const handlePartnerWithUs = () => {
    console.log("Partner With Us clicked")
  }

  return (
    <section className="relative w-full h-screen md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Faded Top */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">Ready to Build What's Next?</h2>
        <p className="text-lg md:text-xl text-gray-100 mb-10 text-pretty max-w-2xl mx-auto">
          Become a member or partner with us to shape the future of tech at Babcock.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          {/* Become a Member Button - Blue with corner accents */}
          <a
            href="/join"
            className="cursor-target flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors relative"
          >
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400 pointer-events-none" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400 pointer-events-none" />
            <UserGroupIcon className="w-5 h-5" />
            <span>Become a Member</span>
          </a>

          {/* Partner With Us Button - White border with corner accents */}
          <a
            href="/partner"
            className="cursor-target flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors relative"
          >
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white pointer-events-none" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white pointer-events-none" />
            <BriefcaseIcon className="w-5 h-5" />
            <span>Partner With Us</span>
          </a>
        </div>
      </div>
    </section>
  )
}
